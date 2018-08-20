import  React ,{Component} from 'react';
import { Parallax } from 'react-parallax';
import {formUrl} from '../../AppVals'
import bg1 from '../../images/bg1.jpg'

class MainTitle extends Component {
    

    render(){
        return(
            <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={bg1}
            bgImageAlt=""
            strength={150}
            >
              <div className="main-title-section" >
                <p className="title-oneDay">One Day Workshop on</p>
                <p className="title-workshopname">Design and Development of Quadcopter UAV</p>
                <div className="register-button" 
                onClick={()=>window.open(formUrl)}
                >Register</div>
              </div>
            </Parallax>
        )
    }
}

export default MainTitle