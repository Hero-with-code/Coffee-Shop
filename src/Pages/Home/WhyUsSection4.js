import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import emoji from '../../Assets/emoji.png'
import table from '../../Assets/table.png'
import doctor from '../../Assets/doctor.svg'

function WhyUsSection4() {
  return (
    <>
    <section className="whyus_section4" id="sec4">
        <Container>
            <Row>
                <Col>
                <h2>WHY <span>US</span></h2>
                </Col>
            </Row>
            <Row>
            <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-us">
                <img src={emoji} className="img-fluid secvice-img c3" alt="3" />
                <h1>Delicious Food</h1>
                <p>With a lavish spread of finger licking food, We serve to satisfy your palate and take on a culinary treat.</p>
            </div>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-us">
                <img src={table} className="img-fluid secvice-img c3" alt="3" />
                <h1>Pleasant Ambience</h1>
                <p>We seek to serve all our gueste with the perfect dining experience, We provide perfect ambience to cherish special moments.</p>
            </div>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-us">
                <img src={doctor} className="img-fluid secvice-img c3" alt="3" />
                <h5 className='dr-header'>Hospitality</h5>
                <p>Our staff members are happy to help, We go the extra mile to make you happy.</p>
            </div>
            </Col>
            </Row>
        </Container>
    </section>
   
    </>
  )
}

export default WhyUsSection4