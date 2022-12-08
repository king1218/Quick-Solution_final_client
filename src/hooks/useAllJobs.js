import { useEffect, useState } from "react"

const useAllJobs =()=>{
    const [Jobs, setJobs] = useState();
    const [JobsLoading,setJobsLoading] = useState(true)
    useEffect(()=>{
        
            fetch(`http://localhost:5000/jobs`,{

            method:'GET',
            headers:{
                'content-type':'appliction/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            })
            .then(res=>res.json())
            .then(Jobs=>{
                setJobs(Jobs);
                setJobsLoading(false);
            })
       
  
    },[])
    return [Jobs,JobsLoading]
}
export default useAllJobs;