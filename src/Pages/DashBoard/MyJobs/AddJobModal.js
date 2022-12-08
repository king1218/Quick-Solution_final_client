
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';


const AddJobModal = ({refetch}) => {
  const navigate=useNavigate();
  const date = new Date().toISOString().slice(0, 10)

  const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [agree,setAgree]=useState(false);
   
    const onSubmit = (data) =>{
      

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
                console.log(imgData.data.url);
                const Job= {
                  
                  LogoUrl:imgData.data.url,
                  AuthorName:data.name,
                  Category:data.category,
                  Post:data.post,
                  Type:data.type,
                  Salary:data.salary,
                  location:data.location,
                  Description:data.description,
                  Responsibilities:data.responsibilities,
                  Reqiuronment:data.reqiuronment,
                  Vacancy:data.vacancy,
                  Educational_Requirements:data.education,
                  Compensation_Other_Benefits:data.benefit,
                  Phone:data.phone,
                  email:data.email,
                  Published_On:date,
                  Application_Deadline: data.deadline
                  }
                  

                  //Add JOb:

                  fetch('http://localhost:5000/jobs', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json', 
                        
                    },
                    body: JSON.stringify(Job)
                })
                .then(res => res.json())
                .then(result =>{
                    navigate('/findjob');
                    refetch();
                   
                })
        
   }})
  

          

     }


    return (
        <div>
            
          <input type="checkbox" id="Add-job" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
          <label htmlFor="Add-job" className="btn btn-primary bg-indigo-700 btn-sm btn-circle absolute right-2 top-2">✕</label>
    <div className='w-8/12 mx-auto my-2'>
    <h1 className='text-indigo-700 my-4 f text-3xl text-center'>Post a Job</h1>
              <form  onSubmit={handleSubmit(onSubmit)}>
              <div>
              <input
               type="text"
               placeholder="Name/organization"
              defaultValue={user?.displayName}
               {...register("name", {
                   required: {
                  value: true,
                  message: 'Name is Required'
              }
          })}
          className="input  input-bordered w-full max-w-xs"
        />
        <label className="label">
        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
           </label>
             </div>



              <div>
              <input
               type="file"
          
               
               {...register("image", {
                   required: {
                  value: true,
                  message: 'image is Required'
              }
          })}
          className="file-input file-input-bordered file-input-primary  w-full max-w-xs"
        />
        <label className="label">
        {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
           </label>
             </div>
             
             <div>
              <input
               type="text"
               placeholder="Job Post"
          
               {...register("post", {
                   required: {
                  value: true,
                  message: 'Job Post is Required'
              }
          })}
          className="input  input-bordered w-full max-w-xs"
        />
        <label className="label">
        {errors.post?.type === 'required' && <span className="label-text-alt text-red-500">{errors.post?.message}</span>}
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
             className="input my-2 input-bordered w-full max-w-xs" 
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
             className="input my-2 input-bordered w-full max-w-xs" 
            />
             
             <label className="label">
             {errors.phone?.type === 'required' && <span className="label-text-alt text-red-500">
               {errors.phone.message}</span>}
           
             </label>
             </div>
            
             <div>
         
            <select
            className="select select-primary w-full max-w-xs" 
            
            {...register("category", {
                required: {
                    value: true,
                    message: 'Category is Required'
                },
              
                })}
            >
            <option disabled selected>Select Job Category</option>
            <option value="Tutions">Tutions</option>
            <option value="Photography">Photography</option>
            <option value="Delivery">Delivery</option>
            <option value="Projects">Projects</option>
            <option value="Software Fix">Software Fix</option>
            <option value="It Assistant">It Assistant</option>
            <option value="Other">Other</option>
         </select>
             
             <label className="label">
             {errors.catagroy?.type === 'required' && <span className="label-text-alt text-red-500">
               {errors.catagroy.message}</span>}
           
             </label>
             </div>


             <div>
         
            <select
            className="select select-primary w-full max-w-xs" 
            
            {...register("type", {
                required: {
                    value: true,
                    message: 'Type is Required'
                },
              
                })}
            >
            <option disabled selected >Select Job Type</option>
            <option value="full-time">full-time</option>
            <option value="part-time">part-time</option>
           
            </select>
             
             <label className="label">
             {errors.type?.type === 'required' && <span className="label-text-alt text-red-500">
               {errors.type.message}</span>}
           
             </label>
             </div>


             <div>
              <input
               type="text"
               placeholder="Salary"
             
               {...register("salary", {
                   required: {
                  value: true,
                  message: 'Salary is Required'
              }
          })}
          className="input  input-bordered w-full max-w-xs"
        />
        <label className="label">
        {errors.salary?.type === 'required' && <span className="label-text-alt text-red-500">{errors.salary.message}</span>}
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
          className="input  input-bordered w-full max-w-xs"
        />
        <label className="label">
        {errors.location?.type === 'required' && <span className="label-text-alt text-red-500">{errors.location.message}</span>}
           </label>
             </div> 


             
             <div>
              <textarea
               type="textarea"
               placeholder="Job Description"
             
               {...register("description", {
                   required: {
                  value: true,
                  message: 'Description is Required'
              }
          })}
          className="textarea textarea-bordered"
        />
        <label className="label">
        {errors.description?.type === 'required' && <span className="label-text-alt text-red-500">{errors.description.message}</span>}
           </label>
             </div> 



             <div>
              <textarea
               type="textarea"
               placeholder="Job Responsibilities"
             
               {...register("responsibilities", {
                   required: {
                  value: true,
                  message: 'Responsibilities is Required'
              }
          })}
          className="textarea textarea-bordered"
        />
        <label className="label">
        {errors.responsibilities?.type === 'required' && <span className="label-text-alt text-red-500">{errors.responsibilities.message}</span>}
           </label>
             </div> 


             
             <div>
              <textarea
               type="textarea"
               placeholder="Job Reqiuronment"
             
               {...register("reqiuronment", {
                   required: {
                  value: true,
                  message: 'Reqiuronment is Required'
              }
          })}
          className="textarea textarea-bordered"
        />
        <label className="label">
        {errors.reqiuronment?.type === 'required' && <span className="label-text-alt text-red-500">{errors.reqiuronment?.message}</span>}
           </label>
             </div> 





              <div>
              <input
               type="text"
               placeholder="Vacancy"
             
               {...register("vacancy", {
                   required: {
                  value: true,
                  message: 'Vacancy is Required'
              }
          })}
          className="input  input-bordered w-full max-w-xs"
        />
        <label className="label">
        {errors.vacancy?.type === 'required' && <span className="label-text-alt text-red-500">{errors.vacancy.message}</span>}
           </label>
             </div> 


             
        

             
             <div>
         
         <select
         className="select select-primary w-full max-w-xs" 
         
         {...register("education", {
             required: {
                 value: true,
                 message: 'Educational Requirements is Required'
             },
           
             })}
         >
         <option disabled selected>Select Educational Requirements</option>
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
               placeholder="Compensation & Other Benefit"
             
               {...register("benefit")}
          className="input  input-bordered w-full max-w-xs mb-5"
        />
       
             </div> 



          <div>
              <input
               type="date"
               placeholder="Compensation & Other Benefit"
             
               {...register("deadline")}
          className="input  input-bordered w-full max-w-xs mb-5"
        />
       
             </div> 



           <div className='flex items-center justify-center my-2'>
            
           <input onClick={()=>setAgree(!agree)} className="checkbox checkbox-primary rounded-sm h-4 w-4  mr-2 cursor-pointer" type="checkbox"  value=""/>
           <label className="form-check-label inline-block text-indigo-700 f " >Agree with terms & conditions</label>
           </div>
        
          <input  disabled={!agree} className='btn btn-primary bg-indigo-700 w-full max-w-xs text-white' type="submit" value="Add Job" />
          
          </form>
</div>
  </div>
</div>
        </div>
    );
};

export default AddJobModal;