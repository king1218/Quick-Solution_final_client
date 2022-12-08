import React from 'react';
import { toast } from 'react-toastify';

const UserRaw = ({user,index,refetch }) => {
//   const {email,role}=user;
  
//   const makeAdmin=()=>{
//     fetch(`http://localhost:5000/user/admin/${email}`, {
//             method: 'PUT',
//             headers: {
//                 authorization: `Bearer ${localStorage.getItem('accessToken')}`
//             }

//         })
//         .then(res => {
                    
//           if (res.status === 401 || res.status === 403) {
//               toast.error(`${email} is not an admin!`);
//           }
//           else{
//             toast.success(`Succesfully made as admin ${email}`);

//           }
//           return res.json()
//       })
        
          
          
//         .then(data =>{
//           refetch();
          
          
//         })
// }

    return (
        
             <tr>
                <th>{index+1}</th>
                <td>{user.email}</td>
                <td><button className='btn btn-xs btn-primary bg-indigo-700'>Make Admin</button></td>
                <td><button className='btn btn-xs  btn-primary bg-indigo-700'>Remove user</button></td>
              </tr>
        
    );
};

export default UserRaw;