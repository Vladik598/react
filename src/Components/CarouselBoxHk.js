import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
import OneImg from '../Assets/images.jpg'
import TwoImg from '../Assets/images1.jpg'
import ThreeImg from '../Assets/images2.jpg'

export default class CarouselBoxHk extends Component {
  render() {
    return (
      <Carousel>
          <Carousel.Item>
                <img 
                className='d-block w-100'
                src={OneImg}
                alt='Car'/>
              <Carousel.Caption>
                  <h3>Car ROMA</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
                <img 
                className='d-block w-100'
                src={TwoImg}
                alt='Wow car'/>
              <Carousel.Caption>
                  <h3>Volkswagen @DAS AUTO@</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
                <img 
                className='d-block w-100'
                src={ThreeImg}
                alt='Cars'/>
              <Carousel.Caption>
                  <h3>Apple Car</h3>
                  <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
    )
  }
}
