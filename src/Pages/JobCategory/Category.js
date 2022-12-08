
import React from 'react';
import { useNavigate } from 'react-router-dom';



const Category = ({category}) => {
 
  const navigate = useNavigate();
   const JobsBycategory=()=>{
    navigate(`/category/${category.name}`);
   }


    return (
       
        
 <div onClick={()=>JobsBycategory(category.name)} className='cursor-pointer hover:-translate-y-1  hover:scale-110 transition duration-200'>
  <div className='flex justify-center items-center'>
    <img className=' w-16 h-16 md:w-24 lg:h-24' src={category.logoUrl} alt="" />
  </div>
  <h1 className=' text-center hover:text-indigo-700 font-semibold my-4'>{category.name}</h1>
 </div>
        
     
    );
};

export default Category;