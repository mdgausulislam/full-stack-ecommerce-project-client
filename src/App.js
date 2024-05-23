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

const MyContext = createContext();

function App() {

  const [countryList, setCountryList] = useState([])
  const [selectedCountry, setSelectedCountry] = useState('')
  const [isOpenProductModal, setisOpenProductModal] = useState(false)

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
    isOpenProductModal
  }
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route exact={true} path='/' element={<Home />} />
          <Route exact={true} path='/cat/:id' element={<Listing />} />
        </Routes>
        <Footer />

        {
          isOpenProductModal === true && <ProductModal/>
        }

      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;

export { MyContext }
