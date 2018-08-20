import  React  from 'react';

const WorkshopDetails = ()=>{
    return(
        <div className="workshop-detail-container">
          <p className="workshop-detail-title">Build a Quadcopter</p>
          <div className="workshop-detail-sections">
            <div>
              <p className="workshop-detail-datetime"><span>Date:</span> 12 Sep 2018</p>
              <p className="workshop-detail-datetime"><span>Time:</span> 09:00 am</p>
              <p className="workshop-detail-datetime"><span>Last Date for Registration: </span>05 Sep 2018</p>
            </div>
            <div className="workshop-detail-info">
              <p>- Open to all branches of Engineering</p>
              <p>- Hands-On Experience in developing the Quadcopter UAV</p>
              <p>- Understanding Quadcopter dynamics and Control</p>
              <p>- Design, Analysis, Performance Calculation</p>
              <p>- Avionics System Selection and Integeration</p>
              <p>- Quadcopter Flying and Testing</p>
            </div>
          </div>
        </div>
    )
}

export default WorkshopDetails