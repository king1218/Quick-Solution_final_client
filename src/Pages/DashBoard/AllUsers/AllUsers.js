import React from 'react';
import {  useQuery } from 'react-query';
import Loading from '../../Loading/Loading';
import UserRaw from './UserRow';


const AllUsers = () => {
    const {data:users,isLoading,refetch}=useQuery('users',()=>fetch('http://localhost:5000/users',
    {
        method: 'GET'
        // headers: {
        //     authorization: `Bearer ${localStorage.getItem('accessToken')}`
        // }
    })
        .then(res=>res.json()));

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div className='mx-w-6xl mx-auto'>
            <div class="">
  <table class="table w-full">
    <thead>
      <tr>
        <th></th>
        <th>Users</th>
        <th>Job</th>
        <th>Favorite Color</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user,index)=>
            
               <UserRaw
               key={user._id}
               user={user}
               index={index}
               refetch={refetch}
               >
                
               </UserRaw>

            )
        }
      
     
    
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUsers;