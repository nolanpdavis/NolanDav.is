import React, { Component } from 'react'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import { Navbar } from '../modules'

export default class Portfolio extends Component {

    render() {

        return (
          <div>
              <h1 id="portfolio" className="pageHeader">Portfolio</h1>
              <div className="portfolioBody">
                  <div className="portfolioText">
                      <div className="portfolioInner">
                          <h2>Wetter.Weather</h2>
                          <p>Wetter.Weather was my first project made using a variety of new tools including React, Redux, Express and Webpack. This project uses React lifecycle methods and Redux components to fetch data from OpenWeatherMaps weather forecast API. The background image changes based on current weather conditions of the selected location. The radar component fetches imagery tiles from real-time NASA satellite imagery. The marker is interactive and can be clicked to zoom in closer into the map. The app uses the native Leaflet geolocation method to automatically update the loaction and weather data</p>
                      </div>
                  </div>
                  <div className="portfolioImg">
                      <CloudinaryContext  cloudName="djswgrool" fetchFormat="auto" >
                          <div className="ipadBody">
                              <div className="cameraCircle"></div>
                              <a href="https://nolanpdavis.github.io/WetterWeather/">
                                  <Image publicId="Screen_Shot_2017-10-25_at_12.00.12_PM_k6fasf" className="screenshotImg" responsive>
                                  </Image>
                              </a>
                              <div className="clickCircle"></div>
                          </div>
                      </CloudinaryContext>
                  </div>
              </div>
              <div className="portfolioBody">
                  <div className="portfolioImg">
                      <CloudinaryContext  cloudName="djswgrool" fetchFormat="auto" >
                          <div className="ipadBody">
                              <div className="cameraCircle"></div>
                              <a href="http://aparavidemo.surge.sh/">
                                  <Image publicId="Screen_Shot_2017-10-25_at_12.03.20_PM_vfgik9" className="screenshotImg" responsive>
                                  </Image>
                              </a>
                              <div className="clickCircle"></div>
                          </div>
                      </CloudinaryContext>
                  </div>
                  <div className="portfolioText">
                      <div className="portfolioInner">
                          <h2>Aparavi Demo</h2>
                          <p>The Aparavi Demo site was a design proposal for a startup in Santa Monica. The site was built using React and Webpack. For this site, I wanted to use a very soft light color palette to make a very technical site with lots of information appear more user friendly and approachable. Custom background graphics and colorful gradients and textures add personality and visual interest to a fairly minimal site layout.</p>
                      </div>
                  </div>
              </div>
              <div className="portfolioBody">
                  <div className="portfolioText">
                      <div className="portfolioInner">
                          <h2>Socialight</h2>
                          <p>Socialight is my most in-depth web development project built to date. I built it to solve a specific problem that I had; not being a heavy user of social media, I wanted a way to share photos from my travels. Viewers can see the photo album next to a map with the corresponding location metadata from the image. Users can sign up and upload their own images. Image location data currently only works automatically with pictures taken with an iPhone. It uses MongoDB for the database, Node and Express to serve the website and React for the visual and interactive components. React Router (v4) is used to provide routes for the website. Google Maps is used to display image locations. Images served responsively using the Cloudinary Api. The app uses React Waypoint to progressively load images as needed as users scroll further down the photo album.</p>
                      </div>
                  </div>
                  <div className="portfolioImg">
                      <CloudinaryContext  cloudName="djswgrool" fetchFormat="auto" >
                          <div className="ipadBody">
                              <div className="cameraCircle"></div>
                              <a href="http://socialight.online/">
                                  <Image publicId="Screen_Shot_2017-10-25_at_12.02.54_PM_fsxgi3" className="screenshotImg" responsive>
                                  </Image>
                              </a>
                              <div className="clickCircle"></div>
                          </div>
                      </CloudinaryContext>
                  </div>
              </div>
          </div>
        )
    }
}
