import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
       
            <div className='flex items-center h-full p-16 bg-white text-indigo-700 '>
	<div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
		<div className='max-w-md text-center'>
			<h2 className='mb-8 font-extrabold text-9xl dark:text-gray-600'>
				<span className='sr-only'>Error</span>404
			</h2>
			<p className='text-2xl font-semibold md:text-3xl'>Sorry, we couldn't find this page.</p>
			<p className='mt-4 mb-8 dark:text-gray-400'>But dont worry, you can find plenty of other things on our homepage.</p>
			<Link  to='/' className='cursor-pointer px-8 py-3 font-semibold rounded bg-indigo-700 text-white inline-flex items-center duration-200 hover:-translate-y-1  hover:scale-110 transition-all'>Back to homepage</Link>
          
		</div>
	</div>
</div>
       
    );
};

export default NotFound;