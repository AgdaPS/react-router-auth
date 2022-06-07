import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';
import marsbackground from './../../assets/images/mars.jpg'
import './ErrorPage.css';

export default function Login({ setToken }) {
  
  const backgroundStyle = { 
    backgroundImage: `url(${marsbackground})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}
  return(
    <>
      <div className="login-wrapper" style={backgroundStyle}>
        <h1>Not Found</h1>
      </div>
    </>
  )
}
