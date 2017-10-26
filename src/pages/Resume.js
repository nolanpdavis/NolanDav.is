import React, { Component } from 'react'
import { Navbar } from '../modules'
const emoji = require('../../styles/twemoji-awesome.css')
const github = require('../../styles/img/GitHub-Mark-64px.png')
const linkedin = require('../../styles/img/In-2C-66px-R.png')

export default class Resume extends Component {
  constructor(){
      super()
      this.state = {
      }
  }


  render() {

      return (
        <div>
            <h1 id="resume" className="pageHeader">Resume</h1>
            <div className="resumeBody">
                <div>
                    <h2 className="sectionHeader">Contact:</h2>
                    <div className="greyBox">
                        <div className="iconItems">
                            <i className="twa twa-lg twa-mailbox-with-mail"></i>
                            <img className="linkedin" src={linkedin} />
                            <img className="github" src={github} />
                        </div>
                        <div className="labelItems">
                            <p>Email:</p>
                            <p>LinkedIn:</p>
                            <p>Github:</p>
                        </div>
                        <div className="linkItems">
                            <a href="mailto:nolanpdavis@gmail.com">nolanpdavis@gmail.com</a>
                            <a href="www.linkedin.com/in/nolandavis404/">www.linkedin.com/in/nolandavis404/</a>
                            <a href="github.com/nolanpdavis">github.com/nolanpdavis</a>
                        </div>
                    </div>
                    <h2 className="sectionHeader">Education:</h2>
                    <div className="greyBox">
                        <div className="iconItemsEdu">
                            <i className="twa twa-lg twa-peach"></i>
                            <i className="twa twa-lg twa-earth-americas"></i>
                        </div>
                        <div className="labelItemsEdu">
                            <p>Georgia State University</p>
                            <p>B.A. in Geosciences, GIS</p>
                        </div>
                        <div className="statsItemsEdu">
                            <p>2014 – 2016</p>
                            <p>GPA: 3.9</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="sectionHeader">Experience:</h2>
                    <div className="greyBoxWork">
                        <div className="titleItems">
                            <i className="titleItemsA twa twa-lg twa-laptop-computer"></i>
                            <p className="titleItemsB">AECOM, GIS Specialist I</p>
                            <p className="titleItemsC">2016 - 2017</p>
                        </div>
                        <div className="workItems">
                            <i className="twa twa-lg twa-sparkles"></i>
                            <p className="pResume">Creation of county flood maps and databases using ArcMap, ArcCatalog & ArcSDE software.
            Compiling relevant map data layers for county databases according to FEMA and state specifications. Verifying data for completion and accuracy before project deadlines.</p>
                            <i className="twa twa-lg twa-sparkles"></i>
                        </div>
                        <div className="workItems">
                            <i className="twa twa-lg twa-sparkles"></i>
                            <p className="pResume">Using Python and JavaScript to create scripts and tools for automating and speeding up workflows. Examples include creating a script for rounding float integers to desired length, a script for renaming and converting documents to desired specifications and a JavaScript template for automatically formatting map text.</p>
                            <i className="twa twa-lg twa-sparkles"></i>
                        </div>
                        <div className="workItems">
                            <i className="twa twa-lg twa-sparkles"></i>
                            <p className="pResume">Attending county flooding and emergency management meetings and gathering local input on company projects. Conversing with FEMA and EPA officials regarding project areas of interests. Coordinating with different offices and departments to meet deadlines and specifications.</p>
                            <i className="twa twa-lg twa-sparkles"></i>
                        </div>
                    </div>
                    <h2 className="sectionHeader"></h2>
                </div>
            </div>
            </div>
      )
  }
}
