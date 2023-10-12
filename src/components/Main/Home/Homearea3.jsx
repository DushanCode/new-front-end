import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img1 from '../../Images/ar3.PNG';
import img2 from '../../Images/ar4.PNG';
import Button from 'react-bootstrap/Button';

export default function Homearea3() {
  return (
      <div className='container mt-5'>
      <Row className='mt-5 mb-5'>
          <Col xs={6} className='mt-5 pt-5 ha3-col1'>
          <h1>Seamlessly <br/> Communicate</h1>
          <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
          <Button href='' variant="success">Download</Button>
          </Col>
          <Col xs={6} className='mt-5 pt-5'><img  src={img1} className='im'/></Col>
      </Row>

      <Row>
          <Col xs={6} className=''><img  src={img2} className='im'/></Col>
          <Col className='mt-5 pt-5 ha3-col2'>
          <h1>Gather Feedback</h1>
          <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur at reprehenderit optio, laudantium eius quod, eum maxime molestiae porro omnis. Dolores aspernatur delectus impedit incidunt dolore mollitia esse natus beatae.</p>
          <Button href='' variant="success">Download</Button>
          </Col>
      </Row>
      </div>
  )
}
