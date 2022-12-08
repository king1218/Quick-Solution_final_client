import React from 'react';

const Statistics = () => {
    return (
       <div className='border-t-2 border-indigo-700 border-b-2 lg:my-44 lg:ny-24 lg:py-5 lg:py-10'>
        <div><h1 className='lg:text-4xl text-xl f  text-center '>Site <span className='lg:text-4xl text-xl f text-indigo-700 text-center '>Statistics</span></h1></div>
        <div className='flex justify-center items-center py-16 lg:px-0 '>
            
        <div className="stats stats-vertical lg:stats-horizontal shadow-xl shadow-indigo-100">
  
  <div className="stat  place-items-center">
    <div className="stat-title">Visits</div>
    <div className="stat-value">31k</div>
    <div className="stat-desc">From January 1st to February 1st</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Users</div>
    <div className="stat-value text-primary">1200</div>
    <div className="stat-desc text-primary">↗︎ 40 (2%)</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title">Jobs</div>
    <div className="stat-value">1,200</div>
    <div className="stat-desc">↘︎ 90 (14%)</div>
  </div>
  
</div>
        </div>
       </div>
    );
};

export default Statistics;