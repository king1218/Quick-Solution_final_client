import React from 'react';
import UpdateProfileModal from './UpdateProfileModal';
import img from "../.../../../../image/Profile.png"
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const ProfileUpdateNotification = () => {
    const [user]=useAuthState(auth);
    return (
    <div>
        
        <div className='h-screen flex justify-center items-center ' >
    <div class="card  bg-base-100 shadow-xl ">
  <figure><img  className='' src={img} alt="profile" /></figure>
  <div class="card-body">
    <h1 className='text-2xl text-center f1'>{`${user.displayName} Your Profile is not completed!`}</h1>
    <h2 class=" text-center f1">Please Update Your Profile</h2>
   
    <div class="card-actions justify-center">
    <label htmlFor="Update-Profile" className="btn btn-primary bg-indigo-700 w-44 mx-auto ">Update Profile</label>
    </div>
  </div> 
  <UpdateProfileModal></UpdateProfileModal>
</div>
        </div>
    </div>
        
    );
};

export default ProfileUpdateNotification;