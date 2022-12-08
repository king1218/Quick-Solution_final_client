
import React from 'react';
import {  useNavigate } from 'react-router-dom';


const Jobs = ({job}) => {
  const {_id,LogoUrl,AuthorName,Type,Description,Category}=job;
  const navigate = useNavigate();
  const handleJobDetails=_id=>{
      navigate(`/findjob/${_id}`);
  }

    return (
        <div>
            

            <div onClick={()=>handleJobDetails(_id)}  className="card card-compact cursor-pointer w-11/12  mx-auto shadow  p-4 bg-indigo-100"> 
                   <div className="flex items-center justify-start">
                        <img className="w-12 h-12" src={LogoUrl} alt=""/>
                        <div className="ml-3"><span className="text-xl text-indigo-700 card-title f1">{AuthorName}<div className="badge badge-primary">NEW</div></span><p className="f1">{Type}</p>
            </div>
                </div>
                  <div className="">
                  <div className="mt-4">
                  <p className="text-orange-500 my-2  f1">{Category}</p>
                  <p className="text-sm f1">{Description.slice(0,200)}</p>
                 
            </div>

    
    <div className="card-actions justify-between items-center mt-3 ">
    <button  onClick={()=>handleJobDetails(_id)} className='btn btn-link  p-0 f1'>More</button>
      <button onClick={()=>handleJobDetails(_id)}  className="btn btn-primary btn-sm f1 " >Apply Now</button>

    </div>
  </div>
</div>

  </div>
    );
};

export default Jobs;