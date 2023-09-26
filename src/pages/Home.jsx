import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form, Link } from "react-router-dom";
import { addUser, deleteUser } from "../features/userSlice";
import { FaTrashCan, FaPencil } from "react-icons/fa6";

function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const users = useSelector((state) => state.users);


  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: users.length ? users[users.length - 1].id + 1 : 1, name, email }));
    setEmail('')
    setName('')
  };

  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }
  return (
    <div className="mx-auto max-w-6xl px-8 ">
      <h2 className="mx-auto text-center text-4xl mt-8 font-medium">User List</h2>
      <Form className="gap-5  justify-center lg:flex-1 mt-8 sm:flex sm:items-center" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            type="text"
            placeholder="Name"
            className="input input-bordered w-full max-w-xl "
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email:</label>
          <input
            name="email"
            type="email"
            placeholder="Email"
            className="input input-bordered w-full max-w-xl "
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <button className="btn btn-accent mt-5">Add user+</button>
      </Form>
      <div className="overflow-x-auto mt-7">
        
         {users.length > 0 ? <table className="table">
          {/* head */}
          <thead>
            <tr className="text-base-content">
              <th className="text-base">ID</th>
              <th className="text-base">Name</th>
              <th className="text-base">Email</th>
              <th className="text-base">Action</th>
            </tr>
          </thead>
          <tbody>
            
            {/* row 1 */}
            { users.map((user, index) => {
              return (
                <tr className="hover" key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td className="flex gap-8 items-center justify-start">
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
