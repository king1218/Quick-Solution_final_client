import React from 'react';


const Banner = () => {
    return (
        <div className="hero  my-10 lg:my-24 ">
      <div className="hero-content flex-col lg:flex-row-reverse py-4">
        <img src="https://i.ibb.co/y0sp0hp/h.png" alt='banner' className="lg:flex-1 md:max-w-sm xl:max-w-lg  rounded-lg shadow-2xl shadow-indigo-100" />
        <div className='lg:flex-1'>
          <div  className='p-2'>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-400">
            Brand new
          </p>
          <h2 className="mb-5  text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
          Get The Right Job
           <br className="hidden md:block" />
          {' '}
            <span className="inline-block text-indigo-700">
            You Deserve
            </span>
          </h2>
          <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae. explicabo.
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="btn btn-active btn-primary mr-2"
            >
              Get started
            </a>
            <a
              href="/"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800  duration-200 hover:text-indigo-700 hover:-translate-y-1  hover:scale-110 transition-all"
            >
              Learn more >
            </a>
          </div>
          </div>
        
        </div>
      </div>
    </div>
    );
};

export default Banner;