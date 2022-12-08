import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../firebase.init';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../Loading/Loading';
import UpdateProfileModal from './UpdateProfileModal';
import emailPic from '../../../image/email.png'
import phonePic from '../../../image/phone.png'
import locationPic from '../../../image/Location.png'
import univercityPic from '../../../image/univercity.png'
import aboutPic from '../../../image/about.png'
import ProfileUpdateNotification from './ProfileUpdateNotification';
import useUserDetails from '../../../hooks/useUserDetails';


const Profile = () => {
    const [user,loading,error] = useAuthState(auth);
    const [User,UserLoading]=useUserDetails(user);
    const emailSendLink= `mailto:${User?.email} = Feedback&body = Message`;  
    const PhoneCallLink= `tel:(880):${User?.Phone}`;  
  if(UserLoading||loading){
    return <Loading></Loading>
  }
  if(User.email!==user.email){
     return <ErrorPage error={`${user?.email} is not this ${user?.email}`}></ErrorPage>
  }
  if(User.Profile !=='Updated'){
    return  <ProfileUpdateNotification></ProfileUpdateNotification>
   
  }
  if(error){
    return <ErrorPage error={error}></ErrorPage>
  }
    return (
       <div >
       
       <div className='w-11/12 card card-compact ring ring-primary ring-offset-base-100 ring-offset-4  my-10 p-5  mx-auto  rounded-xl'>
       <div className='card-body  '>
            <div className="avatar">
        <div className="w-44 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
          <img src={user?.photoURL} alt="User" />
        </div>
      </div>
          <div className=' my-5 '>
       <div className='bg-indigo-100 p-5 mt-4 rounded-xl'>
          <h1 className='text-indigo-700 text-2xl f1'>{user?.displayName}</h1> 
           <div className='flex justify-start items-center mt-5 '>
            <img className='w-10 h-10 mr-2' src={emailPic} alt="email" />
            <a href={emailSendLink} title="Send Email" className="text-sm f1"> {User?.email}</a>
           </div>
           <div className='flex justify-start items-center mt-5 '>
            <img className='w-10 h-10 mr-2' src={phonePic} alt="email" />
            <a className="text-sm f1" href={PhoneCallLink}> {User?.Phone}</a>
           </div>
           <div className='flex justify-start items-center mt-5 '>
            <img className='w-10 h-10 mr-2' src={locationPic} alt="email" />
            <p className="text-sm f1"> {User?.location}</p>
           </div>
       </div>

         {/* //Education */}
      <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
      <div className='bg-indigo-100 p-5 mt-4 rounded-xl'>
        
        <div className='flex justify-center items-center '>
           <img className='w-6 h-6 mr-2' src={univercityPic} alt="email" />
           <h1 className='f text-xl text-indigo-700 text-center'>Education</h1>
         </div>
          <div>
          <div className='mt-3'>
        <h1 className=' f1  text-indigo-700'>University</h1>
        <p className=" f1 my-2">{User?.University}</p>
        </div>
          <div className='mt-3'>
        <h1 className=' f1  text-indigo-700'>Student Id</h1>
        <p className=" f1  my-2">{User?.Student_ID}</p>
        </div>
          <div className='mt-3'>
        <h1 className=' f1  text-indigo-700'>Department Or Subject</h1>
        <p className=" f1 my-2">{User?.Department}</p>
        </div>
          <div className='mt-3'>
        <h1 className=' f1  text-indigo-700'>Year Or Semester</h1>
        <p className=" f1 my-2">{User?.Year_OR_Semester}</p>
        </div>
          </div>
        </div>
 
        <div className='bg-indigo-100 p-5 mt-4 rounded-xl'>
        <div className='flex justify-center items-center '>
           <img className='w-6 h-6 mr-2' src={aboutPic} alt="email" />
           <h1 className='f text-xl text-indigo-700 text-center'>About</h1>
         </div>
         <div className='mt-3'>
        <h1 className=' f1  text-indigo-700'>About You</h1>
        <p className=" f1 my-2">{User?.Description}</p>
        </div>
         <div className='mt-3'>
        <h1 className=' f1  text-indigo-700'>Experience</h1>
        <p className=" f1 my-2">{User?.Experience}</p>
        </div>
        </div>
      </div>
          

           </div>
           <label htmlFor="Update-Profile" className="btn btn-primary bg-indigo-700 w-44 mx-auto ">Update Profile</label>
           
           </div>
           <UpdateProfileModal></UpdateProfileModal>
       </div>
       </div>
    );
};

export default Profile;