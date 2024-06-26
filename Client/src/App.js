import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Header from './Components/Header/Header';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios';
import Footer from './Components/Footer/Footer';
import Listing from './Pages/Listing/Listing';
import ProductModal from './Components/ProductModal/ProductModal';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Cart from './Pages/Cart/Cart';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [isOpenProductModal, setisOpenProductModal] = useState(false)
  const [isHeaderFooterShow, setisHeaderFooterShow] = useState(true)
  const [isLoging, setisLoging] = useState(false)

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries/")
  }, [])

  const getCountry = async (url) => {
    const response = await axios.get(url)
      .then((res) => {
        setCountryList(res.data.data);
      })
  }

  const values = {
    countryList,
    selectedCountry,
    setSelectedCountry,
    setisOpenProductModal,
    isOpenProductModal,
    isHeaderFooterShow,
    setisHeaderFooterShow,
    setisLoging,
    isLoging
  }
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        {
          isHeaderFooterShow === true && <Header />
        }
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route exact={true} path='/cat/:id' element={<Listing />} />
          <Route exact={true} path='/product/:id' element={<ProductDetails />} />
          <Route exact={true} path='cart' element={<Cart />} />
          <Route exact={true} path='signIn' element={<SignIn />} />
          <Route exact={true} path='SignUp' element={<SignUp />} />
        </Routes>
        {
          isHeaderFooterShow === true && <Footer />
        }

        {
          isOpenProductModal === true && <ProductModal />
        }

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext }
