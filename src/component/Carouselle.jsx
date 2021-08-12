import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'



class Carouselle extends Component {

  render() {
    return (


      <Carousel style={{ width: "30%", marginTop: "40px", margin: "auto", boxShadow: "-1px 2px 5px 1px rgba(0, 0, 0, 0.7)" }}>
        <Carousel.Item>
          <img
            className="d-block"
            src="image/moovice.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Button variant="dark" size="lg" onClick={() => window.open("https://github.com/sarasab/moovice")}>Moovice Project</Button>
          </Carousel.Caption>
        </Carousel.Item>


        <Carousel.Item>
          <img
            className="d-block w-200"
            src="image/healthy.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
          <Button variant="dark" size="lg" onClick={()=>window.open("https://github.com/sarasab/healthy")}>HEALTHY Project</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-20"
            src="image/countries.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <Button variant="dark" size="lg" onClick={()=>window.open("https://github.com/sarasab/countries")}>Countries Project</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-20"
            src="image/portfolio.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
          <Button variant="dark" size="lg" onClick={()=>window.open("https://github.com/sarasab/portfolioSara")}>Portfolio Project</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>



    );
  }
}

export default Carouselle;