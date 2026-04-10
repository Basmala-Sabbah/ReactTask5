import React from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Create() {

  const { register, handleSubmit, formState: { errors }, control } = useForm();
  const navigate = useNavigate();

  const registerUser = async (data) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BURL}/users`,
        data
      );

      if (response.status === 201) {
        navigate('/users');
      }
    } catch (err) {
      console.error(err);
      alert("فشل الإضافة");
    }
  };

  return (
    <div className="create-container">

      <div className="create-card">

        <h2> Create New User</h2>
        <p>Add a new user to your system</p>

        <form onSubmit={handleSubmit(registerUser)}>

          <div className="form-group">
            <input
              {...register('userName', { required: "Name is required" })}
              type="text"
              placeholder="Username"
            />
            {errors.userName && <span>{errors.userName.message}</span>}
          </div>

          <div className="form-group">
            <input
              {...register('email', { required: "Email is required" })}
              type="email"
              placeholder="Email"
            />
            {errors.email && <span>{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <input
              {...register('password', { required: "Password is required" })}
              type="password"
              placeholder="Password"
            />
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button type="submit">ADD</button>

        </form>

      </div>

      <DevTool control={control} />
    </div>
  );
}