import React from 'react';
import { Link } from 'react-router-dom';


const ContactUs = () => {
    return (
        <section className='bg-indigo-50 my-44 '>
            <div className='py-10'>
            <div className='text-center mmt-20  '  >
                <h5 className='text-primary text-xl  f1'>Contact Us</h5>
                <h1 className='text-4xl f '>Stay connected with us</h1>
            </div>
            <div className='mx-auto max-w-sm mt-10 px-5'>
            <form className='' action="">
            <input type="email" placeholder="Email" className="input w-full max-w-sm block "/>
            <input type="text" placeholder="Subject" className="input w-full max-w-sm block my-4"/>
            <textarea className="textarea block max-w-sm w-full my-4"  placeholder="Your message"></textarea>
            <Link to='/appointment' className='btn btn-primary bg-indigo-700  text-white text-center w-full'>Submit</Link>
            </form>
            </div>
            </div>
            
        </section>
    );
};

export default ContactUs;