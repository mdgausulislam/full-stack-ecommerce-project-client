import React from 'react';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';
import HomeCategory from '../../Components/HomeCategory/HomeCategory';
import NewsLetter from '../../Components/NewsLetter/NewsLetter';
import HomeProducts from '../../Components/HomeProducts/HomeProducts';

const Home = () => {

    return (
        <div>
            <HomeBanner />
            <HomeCategory />
            <HomeProducts />
            <NewsLetter />
        </div>
    );
};

export default Home;