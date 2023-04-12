import React from 'react';
import Footer from '../../Components/Footer/Footer';
import SignUp from '../../Components/SingUp/SignUp';
import Partners from '../../Components/Partners/Partners';
import Blog from '../../Components/Blog/Blog';
import Avatar from '../../Components/Avatar/Avatar';
import Header from '../../Components/Header/Header';
import Map from '../../Components/Map/Map';
import HeaderCard from '../../Components/HeaderCard/HeaderCard';
import Banner from '../../Components/Banner/Banner';

const Dashboard = () => {
    return (
        <div>
            <Banner></Banner>
            <HeaderCard></HeaderCard>
            <Avatar></Avatar>
            <Header></Header>
            <Map></Map>
            <Blog></Blog>
            <Partners></Partners>
            <SignUp></SignUp>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;