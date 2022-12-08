


import './FindJob.css'

import AddJobModal from '../DashBoard/MyJobs/AddJobModal';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Jobs from '../Jobs/Jobs'
import { useQuery } from 'react-query';
import Loading from "../Loading/Loading"










const FindJob = () => {

const [keyword ,setkeyword] =useState({});

const { register, formState: { errors }, handleSubmit,reset } = useForm();

 

const {data: jobs,refetch,isLoading} = useQuery(['jobs',keyword], () => fetch(`http://localhost:5000/findjob?keyword=${keyword}`)
     .then(res=>res.json())
    
)

if(isLoading){
    return <Loading></Loading>
}



const onSubmit = async (data)=>{

 const keyword = data.keyword;

 setkeyword(keyword);
 reset();

 }

    return (
        <div>
            

         <div>
         <div className='text-center f py-10'> 
                <h1 className='text-6xl text-indigo-700 font-normal'>FIDB JOB &</h1>{''}
                <h1 className='text-4xl '>Make Money</h1>
            </div>
        <div className='text-center  font-semibold text-indigo-700'>
            <p className='mx-auto w-56 f1'>Search job based on your skils.If you are a student, you can find a part time job here.</p>
        </div>
            <div>
           <div className='form'>
           <div className="flex justify-center items-center py-10 ">
           <div className="form-control">
  <div className="input-group">
<form  onSubmit={handleSubmit(onSubmit)}>

    
   <div className='flex justify-center items-center'>
   <input onChange={handleSubmit(onSubmit)} placeholder="Search…" required className="input input-bordered text-indigo-700" {...register("keyword")}/>
  
       
      
            
    
   </div>
   {   jobs?.length===0 &&
         
         <div className='mx-auto  my-3'> <h1 className='text-xl text-center text-red-500 f1'>Wrong Keyword!!</h1>
           <p className='text-sm text-center text-indigo-700 f1'>Please Search with other keyword like Company name, Job type, location etc.</p></div>
  
     }
   <input type='submit' value='Search'  className="btn btn-primary mt-3 w-full  bg-indigo-700 "/>
</form>
  </div>
</div>
      </div>
           </div>
            </div>
         </div>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12'>
      {
          jobs?.map(job=><Jobs
          key={job._id}
          job={job}
            ></Jobs>)
       
          }
      </div>
     
           <label htmlFor="Add-job"  className='btn btn-primary bg-indigo-700 text-white w-full my-10'>Add Job
           </label>
           <AddJobModal refetch={refetch} ></AddJobModal>
        </div>
    );
};

export default FindJob;