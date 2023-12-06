import React, { useEffect, useState } from 'react';
import '../style/login.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchLogin } from '../store/login';
import { redirect, useNavigate } from 'react-router-dom';

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector((state) => state.login.user_id)
  useEffect(() => {
    if (user == null) {
      redirect('/login')
    } else {
      navigate('/')
    }
  }, [user])
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const creadentials = {
    username: username,
    password: password
  }
  function login() {
    dispatch(fetchLogin(creadentials))

  }
  return (
    <div className="login-container">
      <form id="loginform" className="login-form">
        <div className="form-group">
          <label>Email address</label>
          <input
            className="form-control"
            id="EmailInput"
            name="EmailInput"
            aria-describedby="emailHelp"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <small id="emailHelp" className="text-danger form-text"></small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label">Check me out</label>
        </div>
        <button onClick={() => login()} type="button" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
