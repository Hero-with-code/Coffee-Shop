import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import coffee from "../../Assets/coffee.jpg";

function Section1() {
  return (
    <section className="home_section1" id="sec1">
      <Container>
        <Row>
            {/* <Col lg={7} className="Col-md-6 Col-sm-6 Col-es-6"> */}
            <Col lg={7}>
                <div className="hero_text">
                    <h1>Fuel Your Passion</h1>
                    <h2>Discover the Magic in Every Cup</h2>
                    <p className="pt-2 pb-4">
                        Welcome to our coffee paradise, where every bean tells a story and every cup sparks</p>
                    <Link to="/" className="btn order_now btn_hero">Order Online</Link>
                    <Link to="/" className="btn book_table btn_hero">Book A Table</Link>
                </div>
            </Col>
            <Col lg={5} className="mb-5 mb-lg-0">
            <div className="position-relative">
                <img src={coffee} className="img-fluid coffee_images" alt="Hero" />
            </div>
            </Col>
        </Row>
      </Container>  
    </section>
  )
}

export default Section1