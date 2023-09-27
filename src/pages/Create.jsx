import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../features/userSlice";
import { Form, useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa6";
import Profile from "../assets/profile.png";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [city, setCity] = useState("");
  const [image, setImage] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const users = useSelector((state) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users.length ? users[users.length - 1].id + 1 : 1,
        name,
        email,
        job,
        city,
        age,
        phone,
        img: image,
      })
    );
    setEmail("");
    setName("");
    setAge("");
    setCity("");
    setImage("");
    setJob("");
    setPhone("");
    navigate("/");
  };

  return (
    <div className="flex flex-col mx-auto py-10 justify-center">
      <Form
        className="flex flex-col mx-auto py-5 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="bg-base-300 py-2 px-5 text-start text-2xl">
          Create User
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
                value={name}
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
                value={age}
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
                value={city}
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
                value={email}
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
                value={phone}
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
                value={job}
                required
              />
            </div>
            <div className="form-control">
              <label htmlFor="img"> Image:</label>
              <input
                type="url"
                className="input input-bordered input-secondary w-full max-w-full"
                onChange={(e) => setImage(e.target.value)}
                value={image}
                required
              />
            </div>
          </div>
        </div>

        <div className="flex items-end justify-end pt-5">
          <button className="btn btn-neutral w-32 text-xl">Create</button>
        </div>
      </Form>
    </div>
  );
}

export default Create;
