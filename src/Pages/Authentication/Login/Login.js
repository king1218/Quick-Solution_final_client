import React from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';

import { Link, useLocation, useNavigate } from 'react-router-dom';
import ErrorPage from '../../ErrorPage/ErrorPage';
import useToken from '../../../hooks/useToken';



const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
 
  let from = location.state?.from?.pathname || "/";
  const { register, formState: { errors }, handleSubmit } = useForm();
  
  //signIn:

  
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  // token:
  const [token] = useToken(user);

  if(loading){
    return <Loading></Loading>
  }
  if(token){
    navigate(from, { replace: true });
    
  }
  if(error){
    return <ErrorPage error = {error}></ErrorPage>
  }
  

  //Form handle:
  const onSubmit = (data) =>{
   
    signInWithEmailAndPassword(data.email,data.password);


  }
  


    
    return (
        <div className='flex justify-center items-center h-screen'>
          <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-2xl">Login</h2>
    
    <form  onSubmit={handleSubmit(onSubmit)}>
    <div>
    <input type="email" 
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
    <input type="password" 
    placeholder="Password" 
    {...register("password", {
      required: {
          value: true,
          message: 'Password is Required'
      },
      minLength: {
          value: 6,
          message: 'Must be 6 characters or longer'
      }
  })}
    className="input my-2 input-bordered w-full max-w-xs" 
   />
    
    <label className="label">
    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
   {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
    </label>
    </div>
    {
      error && <ErrorPage error={error}></ErrorPage>
    }
    <button  className='text-sm text-indigo-700 mb-2'>Forget Password?</button>
    <input className='btn btn-primary bg-indigo-700 w-full max-w-xs text-white' type="submit" value="Login" />
    <p className='text-sm text-center my-2' href="#">New To Dcotors Portal?<Link to="/signUp" className='text-indigo-700'> Create New Account</Link></p>
    </form>
    
    <SocialLogin></SocialLogin>
  </div>
</div>
        </div>
    );
};

export default Login;