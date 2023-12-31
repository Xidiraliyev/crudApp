import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../features/userSlice";
import { Form, useNavigate, useParams } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import Profile from "../assets/profile.png";

function Update() {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((f) => f.id == id);
  const { name, email, job, city, img, age, phone } = existingUser[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const [ujob, setJob] = useState(job);
  const [ucity, setCity] = useState(city);
  const [uimage, setImage] = useState(img);
  const [uage, setAge] = useState(age);
  const [uphone, setPhone] = useState(phone);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
        job: ujob,
        city: ucity,
        age: uage,
        phone: uphone,
        img: uimage
      })
    );
    navigate("/");
  };
  return (
    <div className="flex flex-col mx-auto py-10 justify-center bg-primary-content text-current">
      <Form
        className="flex flex-col mx-auto py-5 justify-center"
        onSubmit={handleUpdate}
      >
        <div className="bg-base-300 py-2 px-5 text-start text-2xl flex justify-between items-center">
          Update User
          <span >
            <img src={uimage} alt="" className="h-12 w-12 rounded-3xl" />
          </span>
        </div>
        <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 mt-4 border-b-4 pb-3 border-base-200">
          <div>
            <div className="form-control">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                className="input input-bordered input-secondary w-full max-w-xl"
                onChange={(e) => setName(e.target.value)}
                value={uname}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="age">Age:</label>
              <input
                type="number"
                name="age"
                className="input input-bordered input-secondary w-full max-w-xs"
                onChange={(e) => setAge(e.target.value)}
                value={uage}
                required
              />
            </div>

            <div className="form-control">
              <label htmlFor="city">City:</label>
              <input
                type="text"
                name="city"
                className="input input-bordered input-secondary w-full max-w-xs"
                onChange={(e) => setCity(e.target.value)}
                value={ucity}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="email">E-mail:</label>
              <input
                type="email"
                name="email"
                className="input input-bordered input-secondary w-full max-w-xs"
                onChange={(e) => setEmail(e.target.value)}
                value={uemail}
                required
              />
            </div>
          </div>
          <div className=" ">
            <div className="form-control">
              <label htmlFor="phone">Phone:</label>
              <input
                type="text"
                name="phone"
                className="input input-bordered input-secondary w-full max-w-xs"
                onChange={(e) => setPhone(e.target.value)}
                value={uphone}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="job">Job:</label>
              <input
                type="text"
                name="job"
                className="input input-bordered input-secondary w-full max-w-xs"
                onChange={(e) => setJob(e.target.value)}
                value={ujob}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="img"> Image:</label>
              <input
                type="url"
                className="input input-bordered input-secondary w-full max-w-full"
                onChange={(e) => setImage(e.target.value)}
                value={uimage}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end pt-5">
          <button className="btn btn-neutral w-32 text-xl">Update</button>
        </div>
      </Form>
    </div>
  );
}

export default Update;
