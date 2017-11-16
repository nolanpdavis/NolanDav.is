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
        <div id="portfolio">
            <div className="project">
                <h1 className="projectName">Socialight</h1>
                <CloudinaryContext  cloudName="djswgrool" fetchFormat="auto" >
                    <div>
                        <a href="http://socialight.online">
                            <Image publicId="Screen_Shot_2017-11-15_at_8.41.59_PM_dv7wic" className="screenshotImg" responsive>
                            </Image>
                        </a>
                    </div>
                </CloudinaryContext>
                <p className="projectInfo">Socialight is a geographically aware photo album sharing platform. Images uploaded by users are automatically geotagged based on iPhone metadata. Viewers can then follow on a map where images in the album were taken. Socialight solves a personal problem of wanting to share photos from my travels with the corresponding image location.</p>
                <div className="projectTech">
                    <p>React</p>
                    <p>Express.js</p>
                    <p>MongoDB</p>
                    <p>Node.js</p>
                    <p>Redux</p>
                    <p>Leaflet</p>
                    <p>Cloudinary API</p>
                    <p>React Router</p>
                    <p>Webpack</p>
                </div>
            </div>
            <div className="project">
                <h1 className="projectName">Wetter.Weather</h1>
                <CloudinaryContext  cloudName="djswgrool" fetchFormat="auto" >
                    <div>
                        <a href="https://nolanpdavis.github.io/WetterWeather/">
                            <Image publicId="Screen_Shot_2017-11-15_at_8.42.46_PM_afv0gt" className="screenshotImg" responsive>
                            </Image>
                        </a>
                    </div>
                </CloudinaryContext>
                <p className="projectInfo">Wetter.Weather is a real time weather radar tracking application. Weather data is pulled from the OpenWeatherMap API. Satellite imagery is from NASA. The application can find weather information by city name, zip code or automatically using geolocation.</p>
                <div className="projectTech">
                    <p>React</p>
                    <p>Redux</p>
                    <p>Leaflet</p>
                    <p>OpenWeatherMap API</p>
                    <p>NASA GIBS Data</p>
                    <p>Webpack</p>
                </div>
            </div>
            <div className="project">
                <h1 className="projectName">Aparavi</h1>
                <CloudinaryContext  cloudName="djswgrool" fetchFormat="auto" >
                    <div>
                        <a href="https://aparavidemo.surge.sh">
                            <Image publicId="Screen_Shot_2017-11-15_at_8.42.12_PM_cixe9c" className="screenshotImg" responsive>
                            </Image>
                        </a>
                    </div>
                </CloudinaryContext>
                <p className="projectInfo">Aparavi was a UI/UX redesign for a local startup. For this site, I wanted to use a very soft light color palette to make a very technical site with lots of information appear more user friendly and approachable. Custom background graphics and colorful gradients and textures add personality and visual interest to a fairly minimal site layout.</p>
                <div className="projectTech">
                    <p>React</p>
                    <p>React Router</p>
                    <p>Webpack</p>
                </div>
            </div>
        </div>
      )
  }
}
