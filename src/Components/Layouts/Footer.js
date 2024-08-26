import React, {useState, useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Footer() {
        // Sscroll State

  const [isVisible, setIsVisible] = useState(false);
  const scrollTop = () =>{
      window.scrollTo({
        top:0,
        behavior: "smooth",
      });
  };
  const listenToScroll = () =>{
    let heightToHidden = 250;
    const windowScroll = document.body.scrollTop || document.documentElement.scrollTop;

    windowScroll > heightToHidden ? setIsVisible(true) : setIsVisible(false);
  }

  useEffect(()=>{
      window.addEventListener("scroll", listenToScroll);
  });


  return (      
        <>
        <section className='footer'>
          <Container>     
        <Row className="copy_right">
          <Col>
              <div>
                  <ul className="list-unstyled text-center mb-0">
                      <li>
                        <Link to="/">
                        <span className='abc'>© 2024</span>
                        <span>www.Mdreyaz.com</span>
                        <span className='abc'>Developed By Reyaz - Ansari</span>
                        </Link>
                      </li>
                  </ul>
              </div>
          </Col>
        </Row>
      </Container>
        </section>
        <section>
          {/* Scroll To Top */}
        {isVisible && (<div className="scroll_top" onClick={scrollTop}>
          <i class="bi bi-arrow-up"></i>
        </div>)}
        </section>
  
        </>
  )
}

export default Footer;