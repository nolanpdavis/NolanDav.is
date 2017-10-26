import React, { Component } from 'react'
import {Router, Route, Redirect, NavLink, withRouter } from 'react-router-dom'

export default class Navbar extends Component {

    scrollToPortfolio(){
        document.getElementById('portfolio').scrollIntoView()
    }

    scrollToResume(){
        document.getElementById('resume').scrollIntoView() 
    }

  render() {

      return (
          <div className="headerBox">
              <h1 className="headerText">NolanDav.is</h1>
              <div className="navbarBox">
                <a onClick={this.scrollToPortfolio.bind(this)}>Portfolio</a>
                <a onClick={this.scrollToResume.bind(this)}>Resume</a>
              </div>
          </div>
      )
  }
}
