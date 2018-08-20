import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import XNavbar from './Components/navBar/XNavBar'
import './Styles.css';
import bg3 from './images/bg3.jpg'
import WorkshopDetails from './Components/WorkshopDetails/WorkshopDetails';
import MainTitle from './Components/MainTitle/MainTitle';
import Deliverables from './Components/Deliverables/Deliverables';
import Organizers from './Components/Organizers/Organizers';
import RegistrationDetails from './Components/RegistrationDetails/RegistrationDetails';
import Venue from './Components/VenueSection/Venue';

class App extends Component {
  render() {
    return (
      <div className="App">
        <XNavbar/>
        <MainTitle/>
        {WorkshopDetails()}
        {Deliverables()}
        <Organizers/>
        <RegistrationDetails/>
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bg3}
            bgImageAlt=""
            strength={400}
            >
              <div className="space-parallax" />
            </Parallax>
            <Venue/>
      </div>
    );
  }
}

export default App;
