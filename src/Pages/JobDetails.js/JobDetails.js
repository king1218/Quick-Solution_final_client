


import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

import Loading from '../Loading/Loading';
import useUserDetails from '../../hooks/useUserDetails'



const JobDetails = () => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    const [User,UserLoading]=useUserDetails(user);
    const {jobid} = useParams();
    console.log(User)


const {data: jobDetail,isLoading,isFetching} = useQuery(['jobs',jobid], () => fetch(`http://localhost:5000/jobs/${jobid}`)
    .then(res=>res.json())
)

if(isLoading||isFetching||UserLoading){
    return <Loading></Loading>
}



    const {Post,LogoUrl,AuthorName,Category,Type,Salary,location,Description,Responsibilities,Reqiuronment,Vacancy,Educational_Requirements,Compensation_Other_Benefits,Phone,email,Published_On,Application_Deadline} = jobDetail;




const applyJob=()=>{
   

         
        
    if(User?.Profile==="Incomplete"){
       navigate('/dashboard')
    }
       else{

         if(User?.email){
          fetch(`http://localhost:5000/findjob/${jobid}?email=${user?.email}`,{
             method:'PUT',
             headers:{
                 'content-type':'application/json'
             },
             body:JSON.stringify()
          })
          .then(res=>res.json())
          .then(data=>{
             
          
            if(data.acknowledged === true){
                toast.success(`Hey!! ${user.displayName} You are applied ${AuthorName} ${Type} successfully!!`);
            }
  
            
          })}
        }
    
  
      }




    
     
    return (
        <div  className="card card-compact cursor-pointer w-11/12  mx-auto shadow  p-4 ring ring-primary ring-offset-base-100 ring-offset-2 my-10 lg:my-16"> 
        <div className="flex items-center justify-start ">
             <img className="sm:w-24 sm:h-24 w-16 h-16  " src={LogoUrl} alt=""/>
            
             <div className="ml-3"><span className="text-xl text-indigo-700 card-title f1">{AuthorName}<div className="badge badge-primary">NEW</div></span><p className="f1">{Type}</p>
            
              </div>
           
     </div>
       <div className="">
       <div className="mt-4">
     
       <p className="text-orange-500  f1">Job Category: {Category}</p>
       <div className='mt-5'>
       <h1 className='text-xl font-bold f1 text-indigo-700'>Job Post:</h1>
       <p className="text-sm f1">{Post}</p>
       </div>
       <div className='mt-5'>
       <h1 className='text-xl font-bold f1 text-indigo-700'>Job Requirements:</h1>
       <p className="text-sm f1">{Reqiuronment}</p>
       </div>
       <div className='mt-5'>
       <h1 className='text-xl font-bold f1 text-indigo-700'>Job Description:</h1>
       <p className="text-sm f1">{Description}</p>
       </div>
       <div className='mt-5'>
       <h1 className='text-xl font-bold f1 text-indigo-700'>Job Responsibilities:</h1>
       <p className="text-sm f1">{Responsibilities}</p>
       </div>
       <div className='mt-5'>
       <h1 className=' font-bold f1 text-indigo-700'>Educational Requirements:</h1>
       <p className="text-sm f1">{Educational_Requirements}</p>
       </div>
       <div className='mt-5'>
       <h1 className=' font-bold f1 text-indigo-700'>Salary:</h1>
       <p className="text-sm f1">{Salary}</p>
       </div>
       <div className='mt-5'>
       <h1 className=' font-bold f1 text-indigo-700'>Location:</h1>
       <p className="text-sm f1">{location}</p>
       </div>
       <div className='mt-5'>
       <h1 className=' font-bold f1 text-indigo-700'>Vacancy:</h1>
       <p className="text-sm f1">{Vacancy}</p>
       </div>
       <div className='mt-5'>
       <h1 className=' font-bold f1 text-indigo-700'>Compensation Other Benefits:</h1>
       <p className="text-sm f1">{Compensation_Other_Benefits}</p>
       </div>
       

       <h1 className='text-xl font-bold f1 text-indigo-700 mt-5 text-center'>Contacts : </h1>
       <div className='mt-5'>
       <h1 className='  f1 text-orange-600'>Phone: {Phone}</h1>
       <h1 className='  f1 text-orange-600'>Email: {email}</h1>
      
       </div>
      <div className='mt-3'>
      <p className="text-sm f1">Published On: {Published_On}</p>
       <p className="text-sm f1">Application Deadline: {Application_Deadline}</p>
      </div>

      
 </div>

 <Link to='/findjob' className='btn btn-link btn-primary f1 ml-0'>Go Back</Link>
<div className="card-actions justify-between items-center mt-3 ">

<button onClick={applyJob} className="btn btn-primary w-44 mx-auto f1 " >Apply Now</button>

</div>


</div>
</div>
    );
};

export default JobDetails;