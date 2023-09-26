
import { Form, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { updateUser } from "../features/userSlice";

function Update() {
    const {id} = useParams()
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id== id)
    const {name, email} = existingUser[0]

    const [uname, setName] = useState(name);
    const [uemail, setEmail] = useState(email);
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleUpdate= (e) => {
        e.preventDefault()
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }
  return (
    <div className="flex  w-full h-screen items-center justify-center">
      <div className="w-1/2 border bg-primary-content text-white p-3 rounded-2xl">
        <h3 className="text-center font-medium text-2xl">Update user</h3>
        <Form className="flex flex-col gap-5 mx-auto" onSubmit={handleUpdate}>
          <div className="form-control">
            <label htmlFor="name" className="text-xl mb-2">Name:</label>
            <input
              name="name"
              type="text"
              placeholder="Name"
              className=" input input-bordered w-full max-w-full "
              value={uname}
              onChange={e => setName(e.target.value)}
              
            />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="text-xl mb-2">Email:</label>
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-full "
             value={uemail}
             onChange={e =>setEmail(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Update user</button>
        </Form>
      </div>
    </div>
  );
}

export default Update;
