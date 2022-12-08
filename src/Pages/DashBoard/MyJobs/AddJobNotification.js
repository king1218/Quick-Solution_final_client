import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import AddJobModal from './AddJobModal';

const AddJobNotification = () => {
    const [user] = useAuthState(auth)
    return (
        <div>
            <div className='h-screen flex justify-center items-center ' >
    <div class="card  bg-base-100 shadow-xl ">

  <div class="card-body">
    <h1 className='text-2xl text-center f1'>{`${user.displayName} didn't posted any job!`}</h1>
    <h2 class=" text-center f1">Please add a job</h2>
   
    <div class="card-actions justify-center">
    <label htmlFor="Add-job"  className='btn btn-primary bg-indigo-700 text-white w-full my-10'>Add Job
        </label>
    </div>
  </div> 
  <AddJobModal></AddJobModal>
</div>
        </div>
           
        </div>
    );
};

export default AddJobNotification;