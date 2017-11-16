import React, { Component } from 'react'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';

export default class Resume extends Component {
  constructor(){
      super()
      this.state = {
      }
  }


  render() {

      return (
        <div className="resume" id="resume">
            <CloudinaryContext  cloudName="djswgrool" fetchFormat="auto" >
                    <a href="http://res.cloudinary.com/djswgrool/image/upload/v1510810549/NolanDavisResume2017_v7dfuo.jpg">
                        <Image publicId="NolanDavisResume2017_v7dfuo" className="resumeImg" responsive>
                        </Image>
                    </a>
            </CloudinaryContext>
        </div>
      )
  }
}
