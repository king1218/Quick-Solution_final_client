import { useEffect, useState } from "react"

const useJobsByKeyword =(keyword)=>{
   
    const [jobs, setjobs] = useState();
    const [jobsLoading,setjobsLoading] = useState(true)
    useEffect(()=>{
        
            fetch(`http://localhost:5000/findjob?keyword=${keyword}`,{

            method:'GET',
            headers:{
                'content-type':'appliction/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
            })
            .then(res=>res.json())
            .then(Jobs=>{
                setjobs(Jobs);
                setjobsLoading(false);
            })
       
  
    },[keyword])
    return [jobs,jobsLoading]
}
export default useJobsByKeyword;