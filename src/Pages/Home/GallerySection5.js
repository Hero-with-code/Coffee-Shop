import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import c1 from "../../Assets/c1.png"
import c3 from "../../Assets/c3.png"

function GallerySection5() {
  return (
    <>
    <section className="gallery_section5" id="sec5">
        <Container>
            <Row>
                <h1>GALLERY</h1>
                <Col lg={3} className="mb-5 mb-lg-0">
                     <div className="position-relative hero-service">
                        <img src={c1} className="img-fluid gallery-img g1" alt="1" />
                    </div>
                </Col>
                <Col lg={3} className="mb-5 mb-lg-0">
                     <div className="position-relative hero-service">
                        <img src={c3} className="img-fluid gallery-img g2" alt="2" />
                    </div>
                </Col>
                <Col lg={3} className="mb-5 mb-lg-0">
                     <div className="position-relative hero-service">
                        <img src={c1} className="img-fluid gallery-img g3" alt="3" />
                    </div>
                </Col>
                <Col lg={3} className="mb-5 mb-lg-0">
                     <div className="position-relative hero-service">
                        <img src={c3} className="img-fluid gallery-img g4" alt="4" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col lg={3} className="mb-5 mb-lg-0">
                     <div className="position-relative hero-service">
                        <img src={c1} className="img-fluid gallery-img g5" alt="5" />
                    </div>
                </Col>
                <Col lg={3} className="mb-5 mb-lg-0">
                     <div className="position-relative hero-service">
                        <img src={c3} className="img-fluid gallery-img g6" alt="6" />
                    </div>
                </Col>
                <Col lg={3} className="mb-5 mb-lg-0">
                     <div className="position-relative hero-service">
                        <img src={c1} className="img-fluid gallery-img g7" alt="7" />
                    </div>
                </Col>
                <Col lg={3} className="mb-5 mb-lg-0">
                     <div className="position-relative hero-service">
                        <img src={c3} className="img-fluid gallery-img g8" alt="8" />
                    </div>
                </Col>
            </Row>
        </Container>
        
    </section>
    </>
  )
}

export default GallerySection5