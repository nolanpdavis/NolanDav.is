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
                    <a href="/documents/NolanDavisResume2017.pdf" download>
                        <Image publicId="NolanDavisResume2017_v7dfuo" className="resumeImg" responsive>
                        </Image>
                    </a>
            </CloudinaryContext>
        </div>
      )
  }
}
