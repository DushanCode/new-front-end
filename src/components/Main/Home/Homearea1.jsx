import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img1 from '../../Images/im1.png';
import img2 from '../../Images/im2.png';
import img3 from '../../Images/im3.png';

export default function Homearea1() {
  return (
    <div className='ha1 mt-5 mb-5 container'>
        <Row className='ha1row'>
            <div><center><h1 className='h1'>Save your time to <br/> using SoftLand</h1></center></div>
        </Row>

        <Row className='mt-5'>

            <Col>                  
                <center>
                <Card.Img variant="" src={img1} className='imgc1' style={{width: 120}}/>
                <Card.Body>
                    <Card.Title className='mt-4'>Explore Your Team</Card.Title>
                    <Card.Text className='mt-4' style={{color:'rgb(141, 141, 140)'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.
                    </Card.Text>
                </Card.Body>
                </center>                    
            </Col>

            <Col>          
                <center>
                <Card.Img variant="top" src={img2} className='imgc1' style={{width: 120}}/>
                <Card.Body>
                    <Card.Title className='mt-4'>Digital Whiteboard</Card.Title>
                    <Card.Text className='mt-4' style={{color:'rgb(141, 141, 140)'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.
                    </Card.Text>
                </Card.Body>
                </center>        
            </Col>

            <Col>          
                <center>
                <Card.Img variant="top" src={img3} className='imgc1' style={{width: 120}}/>
                <Card.Body>
                    <Card.Title className='mt-4'>Design To Development</Card.Title>
                    <Card.Text className='mt-4' style={{color:'rgb(141, 141, 140)'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.
                    </Card.Text>
                </Card.Body>
                </center>        
            </Col>

        </Row>
    </div>
  )
}