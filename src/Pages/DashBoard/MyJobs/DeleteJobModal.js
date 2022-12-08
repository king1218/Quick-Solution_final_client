import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const DeleteJobModal = ({Job,refetch}) => {
    const [user] = useAuthState(auth);
  
    
        const email = user.email;
        const handleDelete = () => {
            fetch(`http://localhost:5000/myjobs/${email}`, {
                method: 'DELETE',
               
            })
                .then(res => res.json())
                .then(data => {
                    
                    if (data.deletedCount) {
                        toast.success(`Your job is deleted`)
                        refetch();
                    }
                })
    }

    return (
        <div>
<input type="checkbox" id="Delete-Job-Modal" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle ">
  <div className="modal-box bg-indigo-50">
    <h3 className="font-bold text-center f1  text-lg">Are you confirm to delete this job?</h3>
    <div className='flex  items-center bg-indigo-100 rounded-xl p-2 mt-3'>
    <div className="mask mask-squircle w-16 h-16 mr-1">
      <img src={Job?.LogoUrl} alt="Avatar Tailwind CSS Component" />
  
    </div>
    <p className=" f text-5xl mr-5">{Job?.AuthorName}</p>
    <div className='f1 ml-3'>
  
    <p className="text-sm opacity-50 mt-0">{Job?.Post}</p>
    <p className="text-sm opacity-50 mt-0">{Job?.location}</p>
    <p className="text-sm opacity-50 mt-0">{Job?.Published_On}</p>
    </div>
    </div>
    <div className="modal-action justify-center ">
      <button onClick={() => handleDelete()} for="Delete-Job-Modal" className="btn btn-primary bg-indigo-700 btn-sm f1">Yes</button>
      <label htmlFor="Delete-Job-Modal" className="btn btn-primary bg-indigo-700 btn-sm f1">No</label>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default DeleteJobModal;