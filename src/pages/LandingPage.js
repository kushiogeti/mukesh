import React from "react";
// component imports
import Link from "../components/Links";

import image1 from '../assets/LandingPage/image1.png'
import image3 from '../assets/LandingPage/ig2.png';
import image2 from '../assets/LandingPage/ig1.png';

// styles
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="New-Products-LP">
        <div className="MacbookAirM2-LP">
          <div>
            <h1>Gestalt is Pinterest’s design system</h1>
            <div className="row-nospace center">
              <h2>We’re here to help you build experiences that inspire people to create the life they love</h2>
            </div>
            <div className="row-around">
              <Link
                text={"View More"}
                link={""}
                size={20}
                ></Link>
            </div>
          </div>
          <img src={image1} width='40'/>
        </div>
        <h1>Get Started</h1>
        <div className="WatchS7-LP">
          <img src={image2} />
          <h2>
            Desginer Onboarding                 Developer Onboarding               How to work with us
          </h2>
          <div className="WatchS7-LP-Links">
        
          </div>
        </div>
        <div className="SCForCollege-LP">
          <h1 style={{ fontSize: 60 }}>
            Build
          </h1>
          <div className="center" style={{ marginLeft: "46%" }}>
          </div>
          <img src={image3} style={{ marginTop: 20 }} />
          <h2>Components                 FOundations       RoadMap</h2>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;