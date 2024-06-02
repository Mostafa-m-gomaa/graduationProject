import React from 'react'
import shape from '../../../assets/elements/Asset 14.png'
import person from '../../../assets/elements/Asset 13.png'
import { Link } from 'react-router-dom'
import './who.css'
const Who = () => {
  return (
   <div className="who" id='who'>
    <div className="container">
    <div className="left">
       <h1>تعرف علينا?</h1>
       <div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod 
</div>
<Link to="/about">المزيد !</Link>
    </div>
    <div className="right">
        <img src={shape} alt="" className="shape-one" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500" />
        <img src={person} alt="" className="person" data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="700" />
    </div>
    </div>
    </div>
  )
}

export default Who