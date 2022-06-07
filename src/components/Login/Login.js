import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import marsbackground from './../../assets/images/mars.jpg'
import './Login.css';

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then((data) => data.json())
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  let history = useHistory();
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
    history.push("/ticket")
  }

  const backgroundStyle = {
    backgroundImage: `url(${marsbackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <>
      <style type="text/css">
        {`
            .btn-flat {
              background-color: #DB7C07;
              color: white;
            }
            textarea:hover, 
        `}
      </style>
      <div className="login-wrapper" style={backgroundStyle}>
        <h1>Please Log In</h1>
        <form onSubmit={handleSubmit}>
          <div>

            <Form.Group className="mb-3" controlId="formGroupUserName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="John" onChange={e => setUserName(e.target.value)} />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            </Form.Group>
          </div>
          <div className="d-grid gap-2 mt-3" >
            <Button variant="flat" type="submit">Submit</Button>
          </div>
        </form>
      </div>
    </>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
};

{/* <label>
<p>Username</p>
<input type="text" onChange={e => setUserName(e.target.value)} />
</label> */}
{/* <label>
  <p>Password</p>
  <input type="password" onChange={e => setPassword(e.target.value)} />
</label> */}