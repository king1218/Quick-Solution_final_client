import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import {signOut } from 'firebase/auth';

import './Nav.css'
import auth from '../../../firebase.init';

const Nav= () => {

  const [user] = useAuthState(auth);
  const [manuOpan, setmanuOpen] =useState(true);
    
    const logout=()=>{
     signOut(auth)
     
    };
    const menuItems = <>
        <li><Link className='hover:bg-indigo-700 hover:text-white hover:-translate-y-1  hover:scale-110 transition duration-200' to="/">Home</Link></li>
        <li><Link className='hover:bg-indigo-700 hover:text-white hover:-translate-y-1  hover:scale-110 transition duration-200' to="/findjob">Job's</Link></li>
        <li><Link className='hover:bg-indigo-700 hover:text-white hover:-translate-y-1  hover:scale-110 transition duration-200' to="/category">Category</Link></li>
        <li><Link className='hover:bg-indigo-700 hover:text-white hover:-translate-y-1  hover:scale-110 transition duration-200' to="/contact">Contact</Link></li>
        <li><Link className='hover:bg-indigo-700 hover:text-white hover:-translate-y-1  hover:scale-110 transition duration-200' to="/about">About</Link></li>
        {
            !user && <li><Link className='hover:bg-indigo-700 hover:text-white hover:-translate-y-1  hover:scale-110 transition duration-200' to="/login">Login</Link></li>
        }
      
       
    </>
    return (
        <div className="navbar bg-base-100">
            {/* Phone view manu */}
            <div className="dropdown">
                <label onClick={()=>setmanuOpen(!manuOpan)} tabIndex="0" className='btn btn-ghost lg:hidden'>
                  <svg  xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                 </label>
              <ul onClick={()=>setmanuOpen(!manuOpan)}  tabIndex="0"  className={!manuOpan ? 'hidden' :"menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-semibold"}>
             {menuItems}
            </ul>
           </div>
            {/* logo */}
       <div className='w-full flex-1'>
<Link to='/'><img src="https://i.ibb.co/jHVdYBd/20220617-224257-0000-01.png" className='lg:h-10 lg:w-12 h-5 w-6 mr-3' alt="" /></Link> 
<Link to='/' className="cursor-pointer text-xl  md:text-2xl lg:text-3xl f">Quick <span className="text-indigo-700 blur-3">Solution</span> </Link> 
</div>
            
            <div className="navbar-center lg:navbar-start">
                
           {/* Pc view */}
          <div className="navbar-center hidden lg:flex mx-auto">
        <ul className="menu menu-horizontal p-0">
          {menuItems}
          </ul>
              </div>

           </div>

 {/* user */}

    {
        user &&    <div className="flex-none">
          
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
            <div onClick={()=>setmanuOpen(!manuOpan)} className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img alt='user' src={user?.photoURL} referrerPolicy="no-referrer" />
            </div>
          </label>
          <ul onClick={()=>setmanuOpen(!manuOpan)} tabIndex="0" className={!manuOpan?'hidden': 'menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'}>
            <li>
              <Link to='/dashboard' className="justify-between text-indigo-700 font-bold">
               {user?.displayName}
               </Link>
            </li>
            
          
            <li><Link to='/dashboard'  >Dashboard</Link></li>
            <li><Link to='/dashboard/appliedJobs'>Applies</Link></li>
            <li><Link to='/dashboard/postedJobs'>Posts</Link></li>
             <li><button className='' onClick={logout}>Logout</button></li> 
          </ul>
        </div>
       
      </div>
      
    }

      </div>
    );
};

export default Nav;
