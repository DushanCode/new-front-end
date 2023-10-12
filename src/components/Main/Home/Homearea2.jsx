import React from 'react';
import img1 from '../../Images/ar2.PNG';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Homearea2() {
  return (
    <div className='container mt-5 mb-5'>
        <Row>
        <center><img  src={img1} className='im2 mt-5 mb-5'/></center>
        </Row>
        <Row>
            <Col>
                <div className="col1 box-1 mx-2 my-2 dh-1">01
                <h4>Sign Up</h4>
                <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                </div>
            </Col>

            <Col>
                <div className="col1 box-1 mx-2 my-2 dh-1">02
                <h4>Create Profile</h4>
                <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                </div>
            </Col>

            <Col>
                <div className="col1 box-1 mx-2 my-2 dh-1">03
                <h4>Enjoy the app</h4>
                <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem, optio.</p>
                </div>
            </Col>
        </Row>
    </div>
  )
}
