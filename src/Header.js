import React from "react";
const Header = () =>{
return(
<>
<header>
<section className="container main-hero-container">
<div className="row">
<div className="col-12 col-lg-6 hedar-left-side d-flex justify-content-center flex-column align-item-start order-lg-first order-last">
<h1 className="display-2">Online Payment Made <br/> Easy For You
</h1>
<p className="main-hero-para">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium accusamus sed magni impedit similique quas velit ab magnam quaerat. Aut pariatur enim quasi mollitia corporis. Velit natus excepturi deserunt qui.</p>
<h3>Get early access for you</h3>
<div className="input-group mt-3"> 
<input type="text" className="rounded-pill w-75 w-lg-75 me-3 p-2 form-control-text"
placeholder="Enter Your Email"
/>
<div className="input-group-button">
Get it Now
</div>
</div>
</div>
{/*main header */}
<div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-item-center main-herosection-images order-md-first order-sm-first">
<img src="./image/hero1.jpg" alt="heroimg" 
className="img-fluid"
/>
<img src="./image/hero4.jpg" alt="heroimg" 
className="img-fluid main-hero-img2"
/>
</div>
</div>
</section>
</header>
</>
)
}

export default Header;