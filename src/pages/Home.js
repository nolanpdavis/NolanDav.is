import React, { Component } from 'react'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import { Navbar } from '../modules'
import { Portfolio, Resume, Contact } from '.'
import Typed from 'typed.js'

export default class Home extends Component {
    componentDidMount(){
        const typed = new Typed(this.el, {
            strings: ["I'm a web developer", "I'm a React developer", "I'm a GIS developer", "I'm a JavaScript developer."],
            typeSpeed: 40,
            backSpeed: 80,
            backDelay: 1200,
            contentType: 'html'
          });
    }

  render() {

      return (
        <div>
          <Navbar/>
          <div className="homeBox">
              <CloudinaryContext  cloudName="djswgrool" fetchFormat="auto" >
                  <div className="faceImg">
                      <Image publicId="NDLakeAnnePortrait2017_cczybb" responsive>
                          <Transformation
                            width="1000"
                            height="1000"
                            radius="1000"
                            crop="fill"
                            gravity="face"
                            />
                      </Image>
                  </div>
              </CloudinaryContext>
              <div className="aboutBox">
                  <h1 className="aboutText">Hi, I'm Nolan Davis.</h1>
                  <div className="typed">
                      <span className="typedText" id="typed" ref={(el) => { this.el = el; }}></span>
                  </div>
                  <p className="bio">After working as a GIS technician for a large corporation, I realized I wanted to take my career in a new direction. I am now pursuing a software design and development position because it allows me to combine two things I love into one career; problem solving and learning new things. As a self-taught developer, I have been focusing on building applications using React, Node, Express and MongoDB.I am a quick learner and look forward to being part of a team where I can build applications while learning new skills and technologies.</p>
              </div>
          </div>
          <Portfolio/>
          <Resume/>
          <Contact/>
        </div>
      )
  }
}
