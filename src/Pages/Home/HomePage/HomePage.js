import React, { useState } from 'react';


import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import JobCategory from '../../JobCategory/JobCategory';

import Reviews from '../Reviews/Reviews';
import Statistics from '../Statistics/Statistics';
import Why from '../Why/Why';

import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import {signOut } from 'firebase/auth';


const HomePage = () => {
    
    const navigate = useNavigate();
    
    const authorization =localStorage.getItem('accessToken');
    if(!authorization){
      signOut(auth);
      navigate('/');
    }
    

    return (
        <div>
          
            
            <Banner></Banner>
            <Statistics></Statistics>
            <Why></Why>
            <Reviews></Reviews>
            <ContactUs></ContactUs>
           <JobCategory></JobCategory>
            
        </div>
    );
};

export default HomePage;