import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import Loading from '../../Loading/Loading';


import DeleteJobModal from './DeleteJobModal';

const PostedJobs = () => {
  const navigate = useNavigate();
    const [user] = useAuthState(auth);
   const email = user.email;
    const {data: Jobs,isLoading,isFetching,refetch} = useQuery(['jobs',email], () => fetch(`http://localhost:5000/myjobs/${email}`)
    .then(res=>res.json())
)
if(isLoading||isFetching){
    return <Loading></Loading>
} 
if(Jobs.length===0){
  navigate('/dashboard/addJobNotification');
  
}



    return (
        <div class="overflow-x-auto w-full">
  <table class="table w-11/12 mx-auto">
    {/* <!-- head --> */}
    <thead>
      <tr class='bg-indigo-50'>
      
        <th>Name</th>
        <th>Job</th>
        <th>Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>


   {
    Jobs?.map(Job=>
        <tr key={Job._id}>

        <td>
          <div class="flex items-center space-x-3">
            <div class="avatar">
              <div class="mask mask-squircle w-12 h-12">
                <img src={Job?.LogoUrl} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div class="font-bold">{Job?.AuthorName}</div>
              <div class="text-sm opacity-50">{Job?.Post}</div>
            </div>
          </div>
        </td>
        <td>
          {Job?.Type}
          <br/>
          <span class="badge badge-ghost badge-sm">{Job?.Category}</span>
        </td>
        <td>{Job?.Published_On}</td>
        <th>
          
          <label htmlFor="Delete-Job-Modal" class="btn btn-primary btn-xs">Delete</label>
          <DeleteJobModal key={Job._id} Job={Job} refetch={refetch}></DeleteJobModal>
          
        </th>
       
      </tr>
       
      )
      
   }
 </tbody>
   
    
  </table>

</div>
    );
};

export default PostedJobs;