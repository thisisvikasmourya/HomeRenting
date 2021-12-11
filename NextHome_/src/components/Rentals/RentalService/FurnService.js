import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { Grid } from '@material-ui/core';
import ServiceAsset from './ServiceAsset';

import { Link } from 'react-router-dom'

export default function FurnService() {

    const data = [
    {
      image: "https://www.vblue.in/images/furniture-repair-service-book.jpg",
    //   caption: "San Francisco"
    },
    {
      image: "https://hometriangle.com/imagecache/media/6775/htr-image-6775.jpg?size=900x600-3",
    //   caption: "Scotland"
    },
    {
      image: "https://thumbs.dreamstime.com/b/furniture-repair-assembly-concept-94768552.jpg",
    //   caption: "Darjeeling"
    },
    {
      image: "https://previews.123rf.com/images/milkos/milkos2006/milkos200601288/148483599-happy-furniture-assembler-in-blue-coverall-fixing-shelf-with-screwdriver-providing-assembling-and-tr.jpg",
    //   caption: "San Francisco"
    },
    {
      image: "https://cdn.vox-cdn.com/thumbor/RX8fKW_ueHjqW_x5VR7woiqZ0KU=/1400x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/18956394/e12831db_d15a_40bd_902c_1116a83fe4e7.jpg",
    //   caption: "Scotland"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNCv90K0ZHUiN9-l66mpK827E43Qwe1lelQ&usqp=CAU",
    //   caption: "Darjeeling"
    },
    // {
    //   image: "https://www.usnews.com/dims4/USNEWS/01cc624/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fe4%2Fd5%2F43a0ac914af7abefa6704b41eb54%2F160307-cleaningservices-stock.jpg",
    //   caption: "San Francisco"
    // },
    // {
    //   image: "http://dcpost.org/wp-content/uploads/2021/06/Clean-World-Services-How-are-Professional-Home-Cleaning-Services-Beneficial.jpg",
    //   caption: "Scotland"
    // },
    // {
    //   image: "https://2greenchicks.com/wp-content/uploads/2017/11/shutterstock_657213997.jpg",
    //   caption: "Darjeeling"
    // }
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
       <Link to={`/paintService`} className='miniLink'>Paint Service</Link>
       <Link to={`/ElectricalService`} className='miniLink' >Electrical Service</Link>
        </div>
           <center><h1>Furniture Service </h1> 
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
