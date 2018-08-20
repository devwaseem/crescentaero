import  React,{Component} from 'react';
import {formUrl} from '../../AppVals'

class RegistrationDetails extends Component{

    render() {
        return(
            <div className="registration-container">
                <p>Registration details</p>
                <p>Workshop Fee: Rs. 1500/- per student</p>
                <p>(Students will be formed a group of 6 members during the workshop)</p>
                <p>All the components will be provided during the workshop to the participants but would be taken back at the end of the workshop</p>
                <p>Workshop Fee with complete quadcopter kit: Rs. 16000/- per team</p>
                <p>(This option is for the students who want to purchase the complete kit. The team will get one complete kit.)</p>
                <p>Complete Quadcopter kit contains:</p>
                <p>Frame, Motors, ESC, 11.1v Battery, 6ch TX/RX with display, Propller, Flight Controller Board, Battery Charger and Tools.</p>
                <p>Online Registration:(via Bank transfer)</p>
                <p><span>Bank Name:</span> INDIAN OVERSEAS BANK</p>
                <p><span>Account No:</span> 165701000019628</p>
                <p><span>Account Name:</span>Dept of Aerospace Engineering</p>
                <p><span>IFSC:</span>IOBA0001657</p>
                <p>Individual and group registrations</p>
                <div className="registration-button-container">
                    <div className="register-button registration-button"
                    onClick={()=>window.open(formUrl)}
                    >Register</div>
                    <div className="register-button registration-button"
                    onClick={()=>window.open('https://docs.google.com/document/d/1f7vcJfJ1NS_IjftqE2lC88hC8AE3JVXHOF01kEm-MOk/edit?usp=sharing')}
                    >Instructions</div>
                </div>
            </div>
        )
    }

}

export default RegistrationDetails



