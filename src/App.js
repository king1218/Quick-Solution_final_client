
import { Route, Routes } from 'react-router-dom';

import './App.css';
import About from './Pages/About/About';

import AddJobModal from './Pages/DashBoard/MyJobs/AddJobModal';
import Login from './Pages/Authentication/Login/Login';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import SignUp from './Pages/Authentication/SignUp/SignUp';
import FindJob from './Pages/FindJob/FindJob';
import Footer from './Pages/Footer/Footer';
import HomePage from './Pages/Home/HomePage/HomePage';

import Nav from './Pages/Home/Nav/Nav';
import JobDetails from './Pages/JobDetails.js/JobDetails';

import NotFound from './Pages/NotFound/NotFound';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from './Pages/DashBoard/Profile/Profile';
import DashBoard from './Pages/DashBoard/DashBoard';

import AppliedJobs from './Pages/DashBoard/MyJobs/AppliedJobs';
import PostedJobs from './Pages/DashBoard/MyJobs/PostedJobs';
import AllUsers from './Pages/DashBoard/AllUsers/AllUsers';
import AllJobs from './Pages/DashBoard/AllJobs/AllJobs';
import AddJobNotification from './Pages/DashBoard/MyJobs/AddJobNotification';
import JobCategory from './Pages/JobCategory/JobCategory';




function App() {
  return (
    <div className="max-w-7xl mx-auto dark:bg-indigo-50">
   <Nav></Nav>
 
    <Routes>
    <Route path='/' element={<HomePage/>}></Route>
        <Route path='/home' element={<HomePage/>}></Route>
        <Route path='/about' element={<About/>}> </Route>


        <Route path='/category' element={<RequireAuth><JobCategory/></RequireAuth>}> </Route>
        <Route path='/findjob' element={<FindJob/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signUp' element={<SignUp/>}></Route>
        <Route path='/findjob/:jobid' element={<RequireAuth><JobDetails/></RequireAuth>}></Route>
        <Route path='/category/:categoryName' element={<RequireAuth><JobCategory/></RequireAuth>}></Route>
        <Route path='/addJob' element={<RequireAuth><AddJobModal/></RequireAuth>}></Route>
     
     
        <Route path='/dashboard' element={<RequireAuth><DashBoard/></RequireAuth>} >
        <Route index element={<Profile/>}></Route>
        <Route path='/dashboard/addJobNotification' element={<RequireAuth><AddJobNotification/></RequireAuth>}></Route>
        <Route path='/dashboard/appliedJobs' element={<AppliedJobs/>}></Route>
        <Route path='/dashboard/postedJobs' element={<PostedJobs/>}></Route>
        <Route path='/dashboard/allUsers' element={<AllUsers/>}></Route>
        <Route path='/dashboard/allJobs' element={<AllJobs/>}></Route>
        </Route>

    <Route path='*' element={<NotFound/>}> </Route>

    </Routes>
    <ToastContainer/>
    <Footer></Footer>
    </div>
  );
}

export default App;
