import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-carousel-minimal';
import { Grid } from '@material-ui/core';
import ServiceAsset from './ServiceAsset';


export default function PacketService() {

const data = [
    {
      image: "https://5.imimg.com/data5/WR/FO/MY-7304362/electrical-servicing-and-maintenance-500x500.jpg",
      caption: "San Francisco"
    },
    {
      image: "https://borterheating.com/wp-content/uploads/electrical-services.jpg",
      caption: "Scotland"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLG40jyqGqz3VEg2vf2U66-e_QjYP1ohx8Pw&usqp=CAU",
      caption: "Darjeeling"
    },
    {
      image: "https://content3.jdmagicbox.com/comp/bangalore/c9/080pxx80.xx80.150506121658.f1c9/catalogue/khushboo-electrical-service-marathahalli-bangalore-electricians-0nqguokfgi.jpg?clr=333333",
      caption: "San Francisco"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD0b06T8jwSj_DtDDPX0Is26m2RXGx90WXaQ&usqp=CAU",
      caption: "Scotland"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVj91wQnqcZnsISv3oaM4VOAy0J4yHNQesQ&usqp=CAU",
      caption: "Darjeeling"
    },
    {
      image: "https://assets.new.siemens.com/siemens/assets/api/uuid:d05111d97086678161e997b895a208e9319b2ee8/width:1125/quality:high/52b-thermography-camera-electric-0027.jpg",
      caption: "San Francisco"
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
        <Link to={`/Home`} className='miniLink'>Home</Link>
       <Link to={`/cleanService`} className='miniLink'>Clean Service</Link>
       <Link to={`/furnService`} className='miniLink'>Furniture Service</Link>
       <Link to={`/paintService`} className='miniLink'>Paint Service</Link>
</div>
          <center>
          <h1>Electrical Service</h1>  
</center>
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
