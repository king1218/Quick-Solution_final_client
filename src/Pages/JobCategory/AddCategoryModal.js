import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import {signOut } from 'firebase/auth';

const AddCategoryModal = ({refetch}) => {
    const [user] = useAuthState(auth);
    const navigate=useNavigate();
    const { register,reset,formState: { errors }, handleSubmit } = useForm();
    const onSubmit =async data => {
    
        const image = data.logo[0];
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
           
            const Category= {
                    
                  logoUrl:imgData.data.url,
                  name:data.categoryName

         }
         
                // add Category:
  
                fetch(`http://localhost:5000/category/add`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('accessToken')}` 
                        
                    },
                    body: JSON.stringify(Category)
                })
                .then(res =>{
                    if(res.status(403)||res.status(403)){
                        signOut(auth)
                        // localStorage.getItem('accessToken')
                        
                    }
                    

                    return  res.json()
                })
                .then(result =>{
                   if(result.acknowledged===true){
                    toast.success(`${user.displayName} you have added a Category!`);
                    navigate('/category');
                    refetch();
                    reset();
                    
                   
  
                   }
               
                })
            }
        })
    }
    return (
        <div>
            <input type="checkbox" id="AddCategory-Modal" class="modal-toggle" />
           <div className='modal modal-bottom sm:modal-middle'>
          
           <div className='modal-box relative'>
           <h1 className='text-indigo-700 my-4 f text-3xl text-center'>Add Job Category</h1>
           <label for="AddCategory-Modal" class="btn btn-primary bg-indigo-700 btn-sm btn-circle absolute right-2 top-2">✕</label>
           <form  onSubmit={handleSubmit(onSubmit)} >
            <div >
            <label className="label text-indigo-700 f1" >Logo</label>
              <input
               type="file"
               
          {...register("logo", {
                   required: {
                  value: true,
                  message: 'Logo is Required'
              }
          })}
          className="file-input file-input-bordered file-input-primary  w-full "
        />
        <label className="label">
        {errors.logo?.type === 'required' && <span className="label-text-alt text-red-500">{errors.logo?.message}</span>}
           </label>
             </div>

            <div >
      
              <input
               type="text"
               placeholder='Name'
               
          {...register("categoryName", {
                   required: {
                  value: true,
                  message: 'Name is Required'
              }
          })}
          className="file-input file-input-bordered file-input-primary  w-full "
        />
        <label className="label">
        {errors.categoryName?.type === 'required' && <span className="label-text-alt text-red-500">{errors.categoryName?.message}</span>}
           </label>
             </div>
             <div class="modal-action items-center">
             <input for='AddCategory-Modal'   className='btn btn-primary  bg-indigo-700 w-full  text-white' type="submit" value="Add Category" />
             </div>
             </form>
      
           </div>
           </div>
        </div>
    );
};

export default AddCategoryModal;