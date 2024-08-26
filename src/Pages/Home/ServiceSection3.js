import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import c1 from '../../Assets/c1.png'
import c2 from '../../Assets/c2.webp'
import c3 from '../../Assets/c3.png'
import c4 from '../../Assets/c4.jpg'
import c5 from '../../Assets/c5.png'
import c6 from '../../Assets/c6.jpg'

function ServiceSection3() {
  return (
    <>
    <section className="service_section3" id="sec3">
        <Container>
          <Row>
          <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-service">
                <img src={c1} className="img-fluid secvice-img c1" alt="1" />
                <h1>Hot Beverages</h1>
                <p>Wide range of steaming hot coffees to make you fresh and lighr.</p>
            </div>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-service">
                <img src={c2} className="img-fluid secvice-img c2" alt="2" />
                <h1>Cold Beverages</h1>
                <p>Creamy and frothy cold coffee to make you feel cool from inside.</p>
            </div>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-service">
                <img src={c3} className="img-fluid secvice-img c3" alt="3" />
                <h1>Refreshment</h1>
                <p>Fruit and ice refreshing drink to make you feel good.</p>
            </div>
            </Col>
          </Row>
          <Row>
          <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-service">
                <img src={c4} className="img-fluid secvice-img c4" alt="4" />
                <h1>Special Combos</h1>
                <p>Now it's really easy to chose your favourite eating and drinking combinations.</p>
            </div>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-service">
                <img src={c5} className="img-fluid secvice-img c5" alt="5" />
                <h1>Burger & Coffee</h1>
                <p>Yummy! Quick bites to satisfy your small size hunger.</p>
            </div>
            </Col>
            <Col lg={4} className="mb-5 mb-lg-0">
            <div className="position-relative hero-service">
                <img src={c6} className="img-fluid secvice-img c6" alt="6" />
                <h1>Cake (Sesserts)</h1>
                <p>This for sure would satiate your palate and take you on a culinary treat.</p>
            </div>
            </Col>
          </Row>  
        </Container>
    </section>
    </>
  )
}

export default ServiceSection3