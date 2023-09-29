import React from 'react';
import Header from '../../Header';
import Demo from '../../Demo';
import bg from '../../assets/banner5.jpg'
import Footer from '../../Footer';
import Banner from './Banner';
import Features from './Features';

const HomeLayout = () => {
    return (
        <div >
            <Header></Header>
         <Banner></Banner>
            <Demo></Demo>
            <Features></Features>
            <Footer></Footer>
        
        </div>
    );
};

export default HomeLayout;