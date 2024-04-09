import React, { useState } from "react";
import howtous from './API/howtouse';
const Aboutus = () =>{
const [aboutData]= useState(howtous);
return(
<>
<section className="common-section our-services">
<div className="container mb-5">
<div className="row">
<div className="col-12 col-lg-5 text-center our-service-leftside-img">
<img src="./image/hero3.jpg" alt="logo" />
</div>
{/* 1section right side data */}
<div className="col-12 col-lg-7 our-servies-list">
<h3 className="mini-title">
-- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
</h3>
<h1 className="main-heading">How to use the App?</h1>
{aboutData.map((curElemt)=>{
const {id, title, info}= curElemt
return<>
<div className="row our-servies-info" key={id}>
<div className="col-1 our-servies-number">{id}</div>
<div className="col-10 our-servies-data">
<h2>{title}</h2>
<p className="main-hero-para">{info}
</p>
</div>
</div>
</>
})}
<br />
<button className="btn-style btn-style-border">learn more</button>
</div>
</div>
</div>
</section>
{/*2nd part of about us section*/}
<section className="common-section our-services our-services-rightside">
<div className="container mb-5">
<div className="row">
<div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
<h3 className="mini-title">
---SUPPORT IN MY LANGUAGES
</h3>
<h1 className="main-heading">World class support is <br/> available 24/7</h1>
{aboutData.map((curElemt)=>{
const {id, title, info}= curElemt
return<>
<div className="row our-servies-info" key={id}>
<div className="col-1 our-servies-number">{id}</div>
<div className="col-10 our-servies-data">
<h2>{title}</h2>
<p className="main-hero-para">{info}
</p>
</div>
</div>
</>
})}
<br />
<button className="btn-style btn-style-border">learn more</button>
</div>
{/*images section */}
<div className="col-12 col-lg-5 our-service-rightside-img">
<img src="./image/callcenter.webp" alt="logo" />
</div>
</div>
</div>
</section>
</>
)
}

export default Aboutus;