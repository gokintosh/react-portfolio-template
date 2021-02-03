import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"

const About = () => {


  return (
    <div className="secion" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
            <a
                href={data.aboutParaOne}
                target="_blank"
                rel="noopener noreferrer"
              >download cv
                </a>
              
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <img src="https://i.ibb.co/WBmBbbr/gokul.jpg" style={{"height" : "100%", "width" : "50%","borderRadius":"20px"}}  alt="gokul" border="0"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
