import React,{Component} from 'react';
import GMap from '../Map/GMap';

export default class Venue extends Component{


    render(){
        return(
            <div className="venue-container">
                <GMap/>
                <div className="venue-info-container">
                <div className="venue-text-section">
                    <p className="venue-text-title">Venue:</p>
                    <p className="venue-text-location">B.S.A Crescent Institute of science and technology</p>
                </div>
                <div className="venue-vertical-line"/>
                <div className="venue-contact-container">
                    <p className="venue-contact-title">Contact:</p>
                <div className="venue-contact-section">
                    <div className="venue-contact">
                        <p>Mr. A. Nagoor Meeran</p>
                        <p>+91 7708960449</p>
                    </div>
                    <div className="venue-contact">
                        <p>Mr. A. Mohammed Afridh</p>
                        <p>+91 7550196159</p>
                    </div>
                </div>
                    <p>bsa.aerodept@gmail.com</p>
                </div>
                </div>
                <div className="venue-horizontal-line"/>
                <a href="http://xaple.xyz" className="venue-company">©2018 Xaple -This website was made by Xaple, A innovative product development company</a>
            </div>
        )
    }

}