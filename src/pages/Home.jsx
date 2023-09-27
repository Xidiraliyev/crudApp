import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  Link } from "react-router-dom";
import {  deleteUser } from "../features/userSlice";
import { FaTrashCan, FaPencil } from "react-icons/fa6";

function Home() {
  
  const users = useSelector((state) => state.users);
  console.log(users);


  const dispatch = useDispatch();


  

  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }
  return (
    <div className="mx-auto max-w-6xl  ">
      <h2 className="mx-auto text-center text-4xl mt-8 font-medium">User List</h2>
      
      <div className="overflow-x-auto mt-7">
        
         {users.length > 0 ? <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base-content">
              <th className="text-base">ID</th>
              <th className="text-base">Picture</th>
              <th className="text-base">Name</th>
              <th className="text-base">Age</th>
              <th className="text-base">City</th>
              <th className="text-base">Phone</th>
              <th className="text-base">Job</th>
              <th className="text-base">Email</th>
              <th className="text-base">Action</th>
            </tr>
          </thead>
          <tbody >
            
            {/* row 1 */}
            { users.map((user, index) => {
              return (
                <tr className="hover" key={index}>
                  <td>{user.id}</td>
                  <td>
                    <img src={user.img} alt="" className="rounded" width={50} height={50}/>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.age}</td>
                  <td>{user.city}</td>
                  <td>{user.phone}</td>
                  <td>{user.job}</td>
                  <td>{user.email}</td>
                  <td className="flex gap-8 items-center justify-start pt-5">
                    <Link to={`/edit/${user.id}`} className="">
                      <FaPencil className="h-6 w-6"/>
                    </Link>
                    <button onClick={() => handleDelete(user.id)} className="">
                      <FaTrashCan className="h-6 w-6"/>
                    </button>
                  </td>
                </tr>
              );
            })  }
          </tbody>
        </table> : <h2 className="text-center text-xl py-10">
          Please add new user</h2>}
      </div>
    </div>
  );
}

export default Home;
