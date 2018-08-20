import React, { Component } from 'react'
import org1 from '../../images/org1.jpg'
import org2 from '../../images/org2.jpg'


class Organizers extends Component {

    

    render(){
        return(
            <div className="organizers-container">
                <div className="organizers-title-container">
                    <p className="organizers-title">Organised by</p>
                    <p className="organizers-dept">Department of Aerospace along with Industry Partner</p>
                    <p className="organizers-dept">Student Coordinators:</p>
                </div>
                <div className="organizers-images-container">
                <OrganizerImage
                name="Mr. A. Mohammed Afridh"
                phone="+91 7550196159"
                img={org2}
                />
                <OrganizerImage
                name="Mr. A. Nagoor Meeran"
                phone="+91 7708960449"
                img={org1}
                />
                    
                </div>
            </div>
        )
    }

}

class OrganizerImage extends Component{

    state = {
        overlay:''
    }

    render(){
       return(
        <div className="organizers-images-section"
            onMouseEnter={()=>this.setState({overlay:'organizers-overlay'})}
            onMouseLeave={()=>this.setState({overlay:''})}>
            <img className="organizer-image" src={this.props.img} alt=""/>
            <div className={this.state.overlay}>
                <p className="organizers-name">{this.props.name}</p>
                <p className="organizers-number">{this.props.phone}</p>
                <p className="organizers-number">Student Coordinator</p>
            </div>
        </div>
       )
    }
}


export default Organizers