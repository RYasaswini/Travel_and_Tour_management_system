import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData =[
{
  imgUrl: weatherImg,
  title: "Calculate Weather",
  desc:"Everybody talks about the weather, but nobody does anything about it",
},
{
  imgUrl: guideImg,
  title: "Best Tour Guide",
  desc:"Enjoy the tour with best Tour Guide and leave all the worries with us!",
},
{
  imgUrl: customizationImg,
  title: "Customization",
  desc:"Everybody talks about the weather, but nobody does anything about it",
},
]
const ServiceList = () => {
    return <>
   {
      servicesData.map((item,index) => (
        <Col lg="3" md='6' sm='12' className='mb-4' key={index} >
         <ServiceCard item={item} />
        </Col>
      ))
    }
  </>
    
}

export default ServiceList
