import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
import ServiceAsset from './ServiceAsset';

export default function PaintService() {

const data = [
    {
      image: "https://paintmywalls.in/wp-content/uploads/2020/12/Expert-PAinters.jpg",
      // caption: "San Francisco"
    },
    {
      image: "https://content.jdmagicbox.com/comp/def_content/painting-contractors-for-residential/shutterstock-562143490-painting-contractors-for-residential-13-e1om4.jpg?clr="
      ,
      // caption: "Scotland"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsztS5bMAYs_cV2XmpFrUOCBaWWhjlT_DV3w&usqp=CAU",
      // caption: "Darjeeling"
    },
    {
      image: "https://www.wow1day.com/sites/default/files/beanslide/W1D_HeroImage_Commercial.jpg",
      // caption: "San Francisco"
    },
    {
      image: "https://worldestimating.com/wp-content/uploads/2019/12/interior-finshes.jpg",
      // caption: "Scotland"
    },
    {
      image: "https://budgetpainters.ca/wp-content/uploads/2021/03/Interior-Painting-Contractors.jpg",
      // caption: "Darjeeling"
    },
    {
      image: "https://5.imimg.com/data5/XL/GR/MY-4613803/painting-services-500x500.jpg",
      // caption: "San Francisco"
    },
    
  ];

  const captionStyle = {
    fontSize: '2em',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
    fontWeight: 'bold',
  }

    return (

        <div>
         <div className='mininavbar'>
       <Link to={`/Home`}  className='miniLink'>Home</Link>
       <Link to={`/cleanService`} className='miniLink'>Clean Service</Link>
       <Link to={`/furnService`} className='miniLink' >Furniture Service</Link>
       <Link to={`/ElectricalService`} className='miniLink'>Electrical Service</Link>
</div>



          <center>  <h1>Paint Service</h1> </center>

          <Grid item >
      <div style={{ textAlign: "center" }}>
        <div style={{
          padding: "0 20px"
        }}>
          <Carousel
            data={data}
            time={4000}
            width="auto"
            height="400px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={true}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={true}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={true}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              maxWidth: "850px",
              maxHeight: "500px",
              margin: "40px auto",
            }}
          />
        </div>
        <center>
        <p >
        NextHome deep cleaning service for every area of your facility.
         Our expertise is making every surface spick and span and refreshen it while making it look
          brand new while utilising our in-house manufactured range of products. Our professional hygiene
           experts are well trained and equipped and hence choose to use only the products and tools that 
           are most compatible with the object asked to clean. They tend to customised needs and ensure
            total consumer satisfaction.


        </p>
        </center>
    <h4>
    Contact Us : +912387568072</h4>
      </div>
      <div>
      <ServiceAsset/>
      </div>
      </Grid>


        </div>
    )
}
