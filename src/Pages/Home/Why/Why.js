import React from 'react';
import why from '../../../image/Why.png';

const Why = () => {
    return (
        <div className='lg:my-32 my-24'>
            <div className="hero  my-10 lg:my-32 ">
  <div className="hero-content w-full flex-col lg:flex-row-reverse justify-between items-center py-4">
    <div className="  w-full max-w-md  ">
           <div className='' >
           <div className='ml-5'>
           <div><p className='text-indigo-700 f1 py-3'>Got Talent?</p></div>
            <div><h2 className="f mb-5  lg:text-5xl text-3xl   tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Why Students 
           <br className="hidden md:block" />
          {' '}
            <span className="inline-block text-indigo-700">
            Loves Us
            </span>
          </h2></div>
           </div>
          <div ><div className="flex justify-center items-center f1 my-2"><img src="https://assets.website-files.com/61f063412698c3c0331848b0/61f862b55e16a8d836796253_Star.svg" loading="lazy" alt="" className="mr-3"/><div className="icon-list_text">Unique jobs at <strong>startups</strong> and <strong>tech companies</strong> you can't find anywhere else</div></div>
          <div className="flex justify-center items-center f1 my-2"><img src="https://assets.website-files.com/61f063412698c3c0331848b0/620182ab7168b334bf1300a6_Click.svg" loading="lazy" alt=""className="mr-3"/><div>Say goodbye to cover letters - your profile is all you need. <strong>One click to apply</strong> and you're done.</div></div>
          <div className="flex justify-center items-center f1 my-2"><img src="https://assets.website-files.com/61f063412698c3c0331848b0/61f862b4fe6ae663affa55fe_List.svg" loading="lazy" alt="" className="mr-3"/><div>Everything you need to know to job search - including seeing <strong>salary</strong> and <strong>stock options</strong> upfront when looking</div></div>
          <div className="flex justify-center items-center f1 my-2"><img src="https://assets.website-files.com/61f063412698c3c0331848b0/62018322d06e2f664227ad9f_Connect.svg" loading="lazy" alt="" className="mr-3"/><div>Connect directly with <strong>founders </strong>at top startups - no third party recruiters allowed</div></div>
          <div className="ml-8">
          
            <button className='btn btn-link'>Learn More</button>
            <button className='btn  btn-primary bg-indigo-700 '>SignUp</button>
          
          </div>
          </div>

        </div>
      
   
    </div>
    <div >
      <div className="lg:flex-1">
        <img className=" md:max-w-sm xl:max-w-lg  rounded-lg shadow-2xl shadow-indigo-100" src={why} alt="" />
        
      </div>
    </div>
  </div>
</div>



        </div>
    );
};

export default Why;