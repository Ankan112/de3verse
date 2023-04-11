import React from 'react';
import Footer from '../../Components/Footer/Footer';
import SignUp from '../../Components/SingUp/SignUp';
import Partners from '../../Components/Partners/Partners';
import Blog from '../../Components/Blog/Blog';
import Avatar from '../../Components/Avatar/Avatar';
import Header from '../../Components/Header/Header';

const Dashboard = () => {
    return (
        <div>
            <Avatar></Avatar>
            <Header></Header>
            <Blog></Blog>
            <Partners></Partners>
            <SignUp></SignUp>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;