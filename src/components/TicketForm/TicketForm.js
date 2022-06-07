import React, { useState } from 'react';
import { useHistory ,Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import marsbackground from './../../assets/images/mars.jpg';
import "./TicketForm.css";

function TicketForm() {
    const [show, setShow] = useState();
    const history = useHistory();

    const backgroundStyle = { 
        backgroundImage: `url(${marsbackground})`,
        backgroundRepeat: 'no-repeat', 
        display: "flex", 
        alignItems: "start", 
        justifyContent: "center", 
        height: "100vH" 
    }
    const alignColCenter = { 
        display: "flex", 
        alignItems: "center", 
        justifyContent: "center" 
    }

    function logout(){
        window.localStorage.clear()
        window.location.href = '/'
    }

    function handleClose(e){
        setShow(false)
    }
    function handleShow(e){
        e.preventDefault()
        setShow(true)
    }
    function handleContinue(e){
        history.push('/')
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
    
        <div className="p-3 background" style={backgroundStyle}>
            <Row>
            <Col sm={8} >
                <div className='hero'>
                <h1>Buy your ticket to Mars</h1>
                <p>Vulputate ut pharetra sit amet aliquam. Vel eros donec ac odio tempor orci dapibus. Egestas sed tempus urna et. Egestas dui id ornare arcu odio. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices.</p>
                </div>
            </Col>
            <Col sm={4} style={alignColCenter}>
                <div className='form'>
                <Form>
                    <Row className="align-items-center">
                    <Form.Group className="mb-3" controlId="formGroupFrom">
                        <Form.Label>From</Form.Label>
    
                        <Form.Select aria-label="Select From">
                        <option>Earth</option>
                        <option value="1">Mars</option>
                        <option value="2">Jupter</option>
                        <option value="3">Venus</option>
                        </Form.Select>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formGroupTo">
                        <Form.Label>To</Form.Label>
    
                        <Form.Select aria-label="Select To">
                        <option>Mars</option>
                        <option value="1">Earth</option>
                        <option value="2">Jupiter</option>
                        <option value="3">Venus</option>
                        </Form.Select>
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formGroupDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="Date" placeholder="Choose a date" />
                    </Form.Group>
    
                    <Form.Group className="mb-3" controlId="formGroupNumberPassanger">
                        <Form.Label>Number of Passanger</Form.Label>
                        <Form.Control type="number" placeholder="People" />
                    </Form.Group>
                    <div className="d-grid gap-2">
                        <Button variant="flat" type="submit"  onClick={(e)=>handleShow(e)}>
                            Submit
                        </Button>
                    </div>
                    <div className="d-grid gap-2" style={{position:'absolute', top:'16px', right:'16px', maxWidth:'100px'}}>
                        <Button variant="flat" type="submit" size="sm" onClick={(e)=>logout(e)}>
                            Logout
                        </Button>
                       
                        <Modal show={show} onHide={()=>handleClose()}>
                            <Modal.Header closeButton>
                            <Modal.Title>Here we go 🚀</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>Woohoo, you're going to Mars!</Modal.Body>
                            <Modal.Footer>
                            {/* <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button> */}
                            <Link href='/'>
                            {/* <Button variant="flat" onClick={(e)=>handleContinue(e)}>
                                Save Changes
                            </Button> */}
                            </Link>
                            </Modal.Footer>
                        </Modal>
                    </div>
                    </Row>
                </Form >
                </div>
            </Col>
            </Row>
        </div>
        </>
    );
}

export default TicketForm;