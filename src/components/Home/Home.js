import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import marsbackground from './../../assets/images/mars.jpg';
import "./Home.css";

function Home({logged}) {
    console.log(logged)
    const backgroundStyle = { 
        backgroundImage: `url(${marsbackground})`,
        backgroundRepeat: 'no-repeat', 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center", 
        height: "100vH",
        backgroundColor: '#261E19',
        backgroundSize: 'cover',
    }
    const alignColCenter = { 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" 
    }

    return (
        <>
        <style type="text/css">
            {`
            .btn-flat {
            background-color: #DB7C07;
            color: white;
            }
        `}
        </style>
    
        <div className="p-3" style={backgroundStyle}>
            <Row>
            <Col sm={8} >
                <div className='hero'>
                    <h1>Start your jorney to the space</h1>
                    <p>Vulputate ut pharetra sit amet aliquam. Vel eros donec ac odio tempor orci dapibus. Egestas sed tempus urna et. Egestas dui id ornare arcu odio. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.</p>
                    <div className="d-grid gap-2 mt-3" >
                        <a href={logged ? '/ticket' : '/login'}>
                            <Button variant="flat" type="submit">Get Started</Button>
                        </a>
                    </div>
                </div>
            </Col>
            <Col sm={4}>
            </Col>
            </Row>
        </div>
        </>
    );
}

Home.propTypes = {
    logged: PropTypes.func.isRequired
  };

export default Home;