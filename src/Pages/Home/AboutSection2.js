import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import coffee2 from '../../Assets/coffee2.png'

function AboutSection2() {
  return (
    <>
    <section className="about_section2" id="sec2">
    <Container>
        <Row>
            <Col lg={6}>
                <div>
                    <h1>About <span>Us</span></h1>
                    <p className="pt-2 pb-4">
                    Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks.

                    The seeds of the Coffea plant's fruits are separated to produce unroasted green coffee beans. The beans are roasted and then ground into fine particles typically steeped in hot water before being filtered out, producing a cup of coffee. It is usually served hot, although chilled or iced coffee is common. Coffee can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee). Sugar, sugar substitutes, milk, and cream are often added to mask the bitter taste or enhance the flavor.</p>
                </div>
            </Col>
            <Col lg={6} className="mb-5 mb-lg-0">
            <div className="position-relative">
                <img src={coffee2} className="img-fluid coffee2_images" alt="About" />
            </div>
            </Col>
        </Row>
      </Container>
    </section>
       
    </>
  )
}

export default AboutSection2