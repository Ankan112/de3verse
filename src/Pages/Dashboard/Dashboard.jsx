import React from 'react';
import Footer from '../../Components/Footer/Footer';
import SignUp from '../../Components/SingUp/SignUp';
import Partners from '../../Components/Partners/Partners';

const Dashboard = () => {
    return (
        <div>
            <Partners></Partners>
            <SignUp></SignUp>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;