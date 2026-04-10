import axios from 'axios';
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'

export default function Details() {

  const { id } = useParams();
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const gitDetails = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_BURL}/users/${id}`)
    setValue('userName', data.userName)
    setValue('email', data.email)
  }

  useEffect(() => {
    gitDetails();
  }, [])

  const userUpdate = async (value)=> {
    const response = await axios.put(`${import.meta.env.VITE_BURL}/users/${id}`,  { userName: value.userName}
    )
    if(response.status === 200) {
      navigate('/users')
    }
  }

  return (
    <>
      <form action="" className='my-5' onSubmit={handleSubmit(userUpdate)}>
        <div>
          <div className="form-floating mb-3">
            <input type="text" className="form-control" id="userName" placeholder="" {...register("userName")} />
            <label htmlFor="userName">User Name</label>
          </div>
          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="email" placeholder="Password" {...register("email")} disabled />
            <label htmlFor="email">User Email</label>
          </div>
          
          <button type='submit' className='btn btn-outline-success'>update</button>
        </div>
      </form>
    </>
  )
}