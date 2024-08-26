import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ContactSection6() {
  return (
    <>
        <section className="contact_section6" id="sec6">
        <Container>
            <Row>
                <Col lg={8}>
                <div className='div1'>
                <label className='input_name'>Full Name </label>
                    <input type='text' name='name' />
                    <label className='input_email'>Your Email </label>
                    <input type='email' name='email' />
                    <label className='input_email'>Your Number </label>
                    <input type='number' name='number' />
                    <label className='input_email'>Enter Your Message </label>
                    <textarea type='text' name='sms' />  
                </div>
                    <Link to="/" className='btn submit btn_hero'>Submit</Link>
                </Col>
                <Col lg={4}>
                    <div className='div2'>
                    <h2 ><i class="bi bi-geo-alt-fill"></i> Our Location</h2>
                        <p>Delhi India</p>

                        <h2><i class="bi bi-envelope-fill"></i> General Enqueries</h2>
                        <p>Riyajansari99999@gamil.com</p>

                        <h2><i class="bi bi-telephone-inbound-fill"></i> Call Us</h2>
                        <p>+91 911-704-8402 </p>

                        <h2><i class="bi bi-clock-fill"></i> Our Timing</h2>
                        <p>Mon - Sun : 10:00 AM - 08:00 PM</p>

                        <h2><i class="bi bi-person-circle"></i> Follow Us</h2>
                        <ul className="mt-2">
                      <li>
                        <Link to="https://www.facebook.com/">
                        <i class="bi bi-facebook"></i>
                        </Link>
                      </li>
                      <li>
                      <Link to="https://x.com/?lang=en-in">
                        <i class="bi bi-twitter-x"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.instagram.com/accounts/login/">
                        <i class="bi bi-instagram"></i>
                        </Link>
                      </li>
                      <li>
                        <Link to="https://www.linkedin.com/login">
                        <i class="bi bi-linkedin"></i>
                        </Link>
                      </li>
                    </ul>
                        
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default ContactSection6