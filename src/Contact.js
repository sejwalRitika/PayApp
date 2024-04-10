import React from "react";
const Contact = () =>{
return(
<>
<section className="contactus-section">
<div className="container">
<div className="row">
<div className="col-12 col-lg-10 mx-auto">
<div className="row">
<div className="conatct-leftside col-12 col-lg-5">
<h1 className="main-heading fw-bold">
Connect With 0ur <br/> Sales Team
</h1>
<p className="main-hero-para">Lorem, ipsum dolor sit amet consectetur voluptates non aut expedita
 </p>
<figure>
<img src="./image/mainHero.png" alt="logo" className="img-fluid"/>
</figure>
</div>
{/* right side conatat form */}
<div className="conatct-rightside col-12 col-lg-7">
<form method="POST">
<div className="row">
<div className="col-12 col-lg-6 contact-input-felid">
<input type="text" placeholder="Frist Name"
className="form-control"
/>
</div>
<div className="col-12 col-lg-6 contact-input-felid">
<input type="text" placeholder="Last Name"
className="form-control"
/>
</div>
</div>
<div className="row">
<div className="col-12 col-lg-6 contact-input-felid">
<input type="text" placeholder="Phone Name"
className="form-control"
/>
</div>
<div className="col-12 col-lg-6 contact-input-felid">
<input type="text" placeholder="Email ID"
className="form-control"
/>
</div>
</div>
<div className="row">
<div className="col-12 contact-input-felid">
<input type="text"  placeholder="Add Address" className="form-control"/>
</div>
<div>
</div>
</div>
<div className="row">
<div className="col-12">
<input type="text"  placeholder="Enter Your Message" className="form-control"/>
</div>
<div>
</div>
</div>
<div class="form-check form-chekbox-style">
  <input class="form-check-input" type="checkbox" 
value="" id="flexCheckChecked"
/>
  <label class="form-check-label" 
className="main-hero-para">
Lorem ipsum dolor sit amet,Excepturi architecto voluptatibus quas
  </label>
</div>
<button type="submit" className="btn btn-style w-100">
Submit 
</button>
</form>
</div>
</div>
</div>
</div>
</div>
</section>
</>
)
}
export default Contact;