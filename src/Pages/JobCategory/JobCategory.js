
import { useQuery } from 'react-query';
import auth from '../../firebase.init';
import ErrorPage from '../ErrorPage/ErrorPage';
import Loading from '../Loading/Loading';
import AddCategoryModal from './AddCategoryModal';
import Category from './Category';
import {signOut } from 'firebase/auth';
import { useNavigate, useParams} from 'react-router-dom';
import useJobsByKeyword from '../../hooks/useJobsByKeyword';
import Jobs from '../Jobs/Jobs';




const JobCategory = () => {
  const navigate =useNavigate();
  const {categoryName} = useParams({})

  const [jobs,jobsLoading] = useJobsByKeyword(categoryName);
  

  

  const {data:Categories,isLoading,refetch,error}=useQuery('users',()=>fetch('http://localhost:5000/categories',
  {
      method: 'GET',
      headers: {

        'content-type': 'application/json',
      authorization: `Bearer ${localStorage.getItem('accessToken')}` 
      }
  })
      .then(res=>

        
       {
        if(res.status===403|| res.status===401)
        {
          signOut(auth);
          navigate('/');
          }
        return res.json()
       }
        ));


  if(isLoading||jobsLoading){
      return <Loading></Loading>
  }
  if(error||Categories.length ===0){
    return <ErrorPage error={error}></ErrorPage>
  }
  
    return (
        <div>
                 <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <h2 className="text-center max-w-lg mb-6 font-sans text-3xl f leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block ">
  
            <span className="relative text-indigo-700 "> Job</span>
          </span>{' '}
       Category
        </h2>
        <p className="text-base text-gray-700 md:text-lg f1">
       There is some featured category. You can pickup your job from here.
        </p>
      </div>
      <div class="grid grid-cols-2 gap-5 row-gap-6 mb-10 sm:grid-cols-3 lg:grid-cols-6">
      {

         Categories?.map(category=>
         <Category
         key={category._id}
         category={category}
         ></Category>)
      }
      </div>
   
      {/* <div className="text-center">
        <a
          href="/"
          className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-indigo-700 hover:bg-indigo-500 focus:shadow-outline focus:outline-none  hover:-translate-y-1  hover:scale-110"
        >
          Learn more
          <span className="ml-1 -mr-2">
            <svg
              className="w-8 h-8 text-white"
              stroke="currentColor"
              viewBox="0 0 52 52"
            >
              <polygon
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                points="29 13 14 29 25 29 23 39 38 23 27 23"
              />
            </svg>
          </span>
        </a>
      </div> */}
      <div  className="text-center my-4">
        <label
        for="AddCategory-Modal"
          
          className="btn btn-primary bg-indigo-700 hover:-translate-y-1  hover:scale-110 transition duration-200"
        >
          Add Category
          
        </label>
        
      </div>
    
   
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-12'>
      { 
        
          
            jobs?.map(job=><Jobs
              key={job._id}
              job={job}
                ></Jobs>)
       
          }
      </div>
    </div>
    <AddCategoryModal refetch={refetch}></AddCategoryModal>
        </div>
    );
};

export default JobCategory;