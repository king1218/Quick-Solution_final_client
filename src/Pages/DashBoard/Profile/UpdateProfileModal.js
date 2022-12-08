import React, { useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import ErrorPage from '../../ErrorPage/ErrorPage';
import Loading from '../../Loading/Loading';

const UpdateProfileModal = () => {
    const [user] = useAuthState(auth);
    const [agree,setAgree]=useState(false);
    const [updateProfile, updating, Updateerror] = useUpdateProfile(auth);

    const navigate=useNavigate();
  

    const { register, formState: { errors }, handleSubmit } = useForm();
    // const imageHostKey = 'aab39dee982c824e13f1d28ec25a3a8e';
    if(updating){
      return <Loading></Loading>
    }
    if(Updateerror){
      return <ErrorPage error={`${Updateerror.error}`}></ErrorPage>
    }
    const onSubmit =async data => {
    
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);
      const url = `https://api.imgbb.com/1/upload?key=32343051a3119e0ed66ebe7cf48f7440`
      fetch(url, {
          method: 'POST',
          body: formData
      })
      .then(res => res.json())
      .then(imgData => {
          if(imgData.success){
         
               updateProfile({displayName:data.name,
                photoURL:imgData.data.url});
                const User= {
                  
                photoUrl:imgData.data.url,
                Name:data.name,
                Salary:data.salary,
                location:data.location,
                Description:data.description,
                Experience:data.experience,
                Phone:data.phone,
                email:data.email,
                Year_OR_Semester:data.year_semester,
                Department:data.department,
                University:data.university,
                Student_ID:data.studentId,
                Profile:'Updated'
             
                }

              // Update User

              fetch(`http://localhost:5000/user/${user?.email}`, {
                  method: 'PUT',
                  headers: {
                      'content-type': 'application/json', 
                      authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                      
                  },
                  body: JSON.stringify(User)
              })
              .then(res => res.json())
              .then(result =>{
                console.log(result.result)
                 if(result.result.acknowledged===true){
                  toast.success(`${user.displayName} you have updated your profile!`)
                  navigate('/dashboard')
                  

                 }
             
              })
          }
      })
  }
    return (
        <div>
        <input type="checkbox" id="Update-Profile" className="modal-toggle" />
       <div className="modal">
       <div className="modal-box relative  max-w-5xl ">
      <div  className='lg:w-8/12 mx-auto my-2'>
      <label htmlFor="Update-Profile" className="btn btn-primary btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-xl f1 text-indigo-700 my-3 text-center">Update Profile</h3>
        <form  onSubmit={handleSubmit(onSubmit)}>
            
        <div >
            <label className="label text-indigo-700 f1" >Profile Photo</label>
              <input
               type="file"
               
          {...register("image", {
                   required: {
                  value: true,
                  message: 'image is Required'
              }
          })}
          className="file-input file-input-bordered file-input-primary  w-full "
        />
        <label className="label">
        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image?.message}</span>}
           </label>
             </div>


              <div>
              <input
               type="text"
               placeholder="Name/organization"
              defaultValue={user.displayName}
               {...register("name", {
                   required: {
                  value: true,
                  message: 'Name is Required'
              }
          })}
          className="input  input-bordered w-full "
        />
        <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
           </label>
             </div>





             
             <div>
           <input type="email" 
           defaultValue={user?.email}
           placeholder="Email" 
           {...register("email", {
             required: {
                 value: true,
                 message: 'Email is Required'
             },
             pattern: {
                 value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                 message: 'Provide a valid Email'
             }
             })}
             className="input my-2 input-bordered w-full " 
            />
             
             <label className="label">
             {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">
               {errors.email.message}</span>}
             {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">
               {errors.email.message}</span>}
             </label>
             </div>




             <div>
           <input type="number" 
           
           placeholder="Phone" 
           {...register("phone", {
             required: {
                 value: true,
                 message: 'Phone is Required'
             }
            
             })}
             className="input my-2 input-bordered w-full " 
            />
             
             <label className="label">
             {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">
               {errors.phone.message}</span>}
           
             </label>
             </div>
            
           






             <div>
              <input
               type="text"
               placeholder="Location"
             
               {...register("location", {
                   required: {
                  value: true,
                  message: 'Location is Required'
              }
          })}
          className="input  input-bordered w-full "
        />
        <label className="label">
        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
           </label>
             </div> 


             
             <div>
              <textarea
               type="textarea"
               placeholder="About You"
             
               {...register("description", {
                   required: {
                  value: true,
                  message: 'Description is Required'
              }
          })}
          className="textarea textarea-bordered w-full"
        />
        <label className="label">
        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500 w-full">{errors.description?.message}</span>}
           </label>
             </div> 



             <div>
              <textarea
               type="textarea"
               placeholder="Experience"
             
               {...register("experience", {
                   required: {
                  value: true,
                  message: 'Experience is Required'
              }
          })}
          className="textarea textarea-bordered w-full"
        />
        <label className="label">
        {errors.experience?.type === 'required' && <span className="label-text-alt text-red-500 w-full">{errors.experience?.message}</span>}
           </label>
             </div> 




             
        
<h1 className='text-xl text-indigo-700 f1 text-center'> Education</h1>
             
             <div>
         
         <select
         className="select select-primary w-full " 
         
         {...register("education", {
             required: {
                 value: true,
                 message: 'Educational Requirements is Required'
             },
           
             })}
         >
         <option disabled selected>Last Education Status</option>
         <option value="HSC">HSC</option>
         <option value="Diploma">Diploma</option>
         <option value="Batchelor">Batchelor</option>
        
         </select>
          
          <label className="label">
          {errors.education?.type === 'required' && <span className="label-text-alt text-red-500">
            {errors.education.message}</span>}
        
          </label>
          </div>

          <div>
              <input
               type="text"
               placeholder="University"
             
               {...register("university", {
                   required: {
                  value: true,
                  message: 'University is Required'
              }
          })}
          className="textarea textarea-bordered w-full"
        />
        <label className="label">
        {errors.university?.type === 'required' && <span className="label-text-alt text-red-500 w-full">{errors.university?.message}</span>}
           </label>
             </div>


          <div>
              <input
               type="text"
               placeholder="Student id"
             
               {...register("studentId", {
                   required: {
                  value: true,
                  message: 'Student id is Required'
              }
          })}
          className="textarea textarea-bordered w-full"
        />
        <label className="label ">
        {errors.studentId?.type === 'required' && <span className="label-text-alt text-red-500 w-full">{errors.studentId?.message}</span>}
           </label>
             </div>

             <div>
              <input
               type="text"
               placeholder="Department/Subject"
             
               {...register("department", {
                   required: {
                  value: true,
                  message: 'Department or Subject id is Required'
              }
          })}
          className="textarea textarea-bordered w-full"
        />
        <label className="label ">
        {errors.department?.type === 'required' && <span className="label-text-alt text-red-500 w-full">{errors.department?.message}</span>}
           </label>
             </div>

          <div>
              <input
               type="text"
               placeholder="Year/Semester"
             
               {...register("year_semester", {
                   required: {
                  value: true,
                  message: 'Student id is Required'
              }
          })}
          className="textarea textarea-bordered w-full"
        />
        <label className="label ">
        {errors.year_semester?.type === 'required' && <span className="label-text-alt text-red-500 w-full">{errors.year_semester?.message}</span>}
           </label>
             </div>
   

{/* 
             <div >
            <label className="label text-indigo-700 f1" >Photo of Student ID Card</label>
              <input
               type="file"
               
          {...register("id_image", {
                   required: {
                  value: true,
                  message: 'Id Image is Required'
              }
          })}
          className="file-input file-input-bordered file-input-primary  w-full"
        />
        <label className="label">
        {errors.id_image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.id_image?.message}</span>}
           </label>
             </div> */}


        



           <div className='flex items-center justify-center my-2'>
            
           <input onClick={()=>setAgree(!agree)} className="checkbox checkbox-primary rounded-sm h-4 w-4  mr-2 cursor-pointer" type="checkbox"  value=""/>
           <label className="form-check-label inline-block text-indigo-700 f " >Agree with terms & conditions</label>
           </div>
        
          <input  disabled={!agree}  className='btn btn-primary  bg-indigo-700 w-full  text-white' type="submit" value="Update" />
          
          </form>
      </div>
       </div>
       </div>
        </div>
    );
};

export default UpdateProfileModal;