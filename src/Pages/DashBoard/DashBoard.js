import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashbord = () => {
    return (
        <div className='max-w-7xl mx-auto mt-5'>
        <div className="drawer drawer-mobile">
        <input id="Dashboard-drawer" type="checkbox" class="drawer-toggle" />

        <div className="drawer-content flex flex-col  rounded-r-2xl ">

          <div className="btn-group my-4 w-11/12 mx-auto lg:hidden">
              {/* <!-- Sidebar content here --> */}
            <Link className='btn btn-primary' to='/dashboard'>Profile</Link>
            <Link className='btn' to='/dashboard/appliedJobs'>Applies</Link>
            <Link className='btn' to='/dashboard/postedJobs'>Posts</Link>
            <Link className='btn' to='/dashboard/allUsers'>All Users</Link>
            <Link className='btn' to='/dashboard/allJobs'>All Jobs</Link>
          </div>

              <Outlet></Outlet>
      
        </div> 

      <div className="drawer-side ">
            <label htmlFor="Dashboard-drawer" className="drawer-overlay "></label> 
            <ul className="f1 menu p-4 overflow-y-auto h-96 w-40 rounded-l-2xl bg-indigo-700 text-white">
              {/* <!-- Sidebar content here --> */}
              <li><Link to='/dashboard'>Profile</Link></li>
              <li><Link to='/dashboard/appliedJobs'>Applies</Link></li>
              <li><Link to='/dashboard/postedJobs'>Posts</Link></li>
              <li><Link to='/dashboard/allUsers'>All Users</Link></li>
              <li><Link to='/dashboard/allJobs'>All Jobs</Link></li>
            </ul>
      </div>
    </div>
  </div>
    );
};

export default Dashbord;