import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <div>
      <div className='footer-1'>
        <div className='container'>
            <Row className='footer-row1'>
                <Col xs={7}><h1 className='h1 mt-5 pt-5'>Starts Publishing Your <br/>Apps</h1></Col>
                <Col xs={5} className='footer-col2 mb-5 pb-5'>
                <Button variant="dark" className='py-3 px-5'>Apple Store</Button>{' '}
                <Button variant="dark" className='py-3 px-5'>Google play</Button>
                </Col>
            </Row>
        </div>
        </div>
        <div className='container mt-5'>
            <Row>
                <Col xs={5} className='footer-row2'>
                    <h5>About SoftLand</h5>
                    <p className='p1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ea delectus pariatur, numquam aperiam dolore nam optio dolorem facilis itaque voluptatum recusandae deleniti minus animi.</p>
                </Col>
                <Col xs={2}>
                    <h5>Navigation</h5>
                    <p><a href=''>Pricing</a></p>
                    <p><a href=''>Features</a></p>
                    <p><a href='' >Blog</a></p>
                    <p><a href=''>Contact</a></p>
                </Col>
                <Col xs={2}>
                    <h5>Services</h5>
                    <p><a href=''>Team</a></p>
                    <p><a href=''>Collaboration</a></p>
                    <p><a href='' >Todos</a></p>
                    <p><a href=''>Events</a></p>
                </Col>
                <Col xs={2}>
                    <h5>Downloads</h5>
                    <p><a href=''>Get from the App Store</a></p>
                    <p><a href=''>Get from the Play Store</a></p>
                </Col>
            </Row>
        </div>
        <div className="footer-copyright text-center py-3 p1 mt-5">© Copyright SoftLand. All Rights Reserved
                <br/>Designed by<a href="https://mdbootstrap.com/"> BootstrapMade</a>
        </div>
    </div>
      
  );
};

export default Footer;
