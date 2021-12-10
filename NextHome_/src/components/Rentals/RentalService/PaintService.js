import React from 'react'
import { Carousel } from 'react-carousel-minimal';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom'
export default function PaintService() {

const data = [
    {
      image: "https://media.istockphoto.com/photos/bacteriai-will-hunt-you-down-and-i-will-exterminate-you-picture-id1291195956?b=1&k=20&m=1291195956&s=170667a&w=0&h=A9vBTKzU0xJXxyBKeKVhHh-ESSwt1NOZArZ_lazjjh4=",
      caption: "San Francisco"
    },
    {
      image: "https://media.istockphoto.com/photos/businessman-cleans-conference-table-during-covid19-pandemic-picture-id1255371700?b=1&k=20&m=1255371700&s=170667a&w=0&h=qTrjuDj-tvbeVjsGf9MV6wMAsa5xu1FjJL5b1U93TDw=",
      caption: "Scotland"
    },
    {
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpSzjhySPzdSJoYegVKcHf_8A_acbc4_exRYwDnlL9FqM74gTp9xu5MQmxIct8LxaY1I&usqp=CAU",
      caption: "Darjeeling"
    },
    {
      image: "https://media.istockphoto.com/photos/maid-working-at-a-hotel-wearing-a-protective-face-mask-while-and-picture-id1298333940?b=1&k=20&m=1298333940&s=170667a&w=0&h=ANJ6qIR5TG3VG8vPzWL99ofjqyDmdZNclCBSSqndyCw=",
      caption: "San Francisco"
    },
    {
      image: "https://media.istockphoto.com/photos/man-wearing-gloves-and-a-mask-wipes-the-buttons-and-handrail-of-the-picture-id1316203954?b=1&k=20&m=1316203954&s=170667a&w=0&h=C1yXefBejDNTGacsIMEJ1YJRF-mJPe5mYqoZ-PJ4bgE=",
      caption: "Scotland"
    },
    {
      image: "https://media.istockphoto.com/photos/steam-cleaning-carpets-picture-id168614932?b=1&k=20&m=168614932&s=170667a&w=0&h=MOFm4a9cB1Sa0qkLrwHPJrsGstkMmS7DMYhw7ddYI6o=",
      caption: "Darjeeling"
    },
    {
      image: "https://www.usnews.com/dims4/USNEWS/01cc624/2147483647/thumbnail/640x420/quality/85/?url=http%3A%2F%2Fmedia.beam.usnews.com%2Fe4%2Fd5%2F43a0ac914af7abefa6704b41eb54%2F160307-cleaningservices-stock.jpg",
      caption: "San Francisco"
    },
    {
      image: "http://dcpost.org/wp-content/uploads/2021/06/Clean-World-Services-How-are-Professional-Home-Cleaning-Services-Beneficial.jpg",
      caption: "Scotland"
    },
    {
      image: "https://2greenchicks.com/wp-content/uploads/2017/11/shutterstock_657213997.jpg",
      caption: "Darjeeling"
    }
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
      </Grid>


        </div>
    )
}
