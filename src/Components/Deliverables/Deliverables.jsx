import React from 'react';
import { Parallax } from 'react-parallax';
import bg2 from '../../images/bg5.jpg'
import bg3 from '../../images/bg3.jpg'

const Deliverables = () => {
    return(
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={bg2}
        bgImageAlt=""
        strength={550}
        >
          <div className="deliverables-container"  >
            <p className="deliverables-title">Deliverables to Students</p>
            <div className="line"/>
            <div className="deliverables-info">
                <p>- Quadcopter Design Manual</p>
                <p>- Quadcopter System Integration & Calibration Manual</p>
                <p>- Quadcopter Flight Simulator Software</p>
                <p>- Certificate with a Unique ID to all participants</p>
            </div>
          </div>
        </Parallax>
    )

}


export default Deliverables;