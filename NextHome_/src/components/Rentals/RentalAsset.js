import React from 'react'

const RentalAsset = () => {
    return (

    <div className="rental-assets">
      <h3 className="title">Assets</h3>
      <div className="row">
        <div className="col-md-6 d-flex flex-column">
          <span>
            <i className="fa fa-asterisk" /> Cooling
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <i className="fa fa-thermometer" /> Heating
          </span>
          &nbsp;&nbsp;&nbsp;
           <span>
            <i className="fa fa-cube" /> Washing machine
          </span>
          &nbsp;&nbsp;&nbsp;
         
          
        </div>
        <div className="col-md-6 d-flex flex-column mb-2">
          <span>
            <i className="fa fa-desktop" /> Working area
          </span>
          &nbsp;&nbsp;&nbsp;
        
          <span>
            <i className="fa fa-location-arrow" /> Iron
          </span>
  &nbsp;&nbsp;&nbsp;
          <span>
            <i className="fa fa-cube" /> Dishwasher
          </span>
        </div>
      </div>
    </div>
  );
};


export default RentalAsset
