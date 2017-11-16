import React, { Component } from 'react'
import { Navbar } from '../modules'

export default class Contact extends Component {
  constructor(){
      super()
      this.state = {
      }
  }
  
  componentWillMount(){
      var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; 
      		if(!gi.call(d,id)) { js=ce.call(d,"script"); 
    			js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q)
  }}


  render() {

      return (
          <div>
              <div id="contact"></div>
              <div className="typeform-widget" data-url="https://nolanpdavis.typeform.com/to/UcyIhK" style={{width: "100%", height: "100vh"}}></div> 
              <div style={{fontFamily: "Sans-Serif", fontSize: "12px", color: "#999", opacity: "0.5", paddingTop: "5px"}}> powered by <a href="https://www.typeform.com//?utm_campaign=UcyIhK&amp;utm_source=typeform.com-11184706-Basic&amp;utm_medium=typeform&amp;utm_content=typeform-embedded-poweredbytypeform&amp;utm_term=EN" style={{color: "#999"}} target="_blank">Typeform</a></div>
          </div>
		  
      )
  }
}
