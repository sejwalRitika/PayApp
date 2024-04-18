import React, { useState } from "react";
const Contact = () =>{
const [userData, setuserData] = useState({
firstName: "",
lastName: "",
Phone:"",
email:"",
address:"",
message:"",
});
let name, value;
const postUserData = (event) =>{
name = event.target.name;
value = event.target.value;

setuserData({...userData, [name]:value})
};
const submitData = async(event) =>{
event.preventDefault();
const {firstName,lastName,Phone,email,address,message} = userData;
if(firstName && lastName && Phone && email && address && message){
const res = fetch(
'https://reactfirebasewebsite-c8d3f-default-rtdb.firebaseio.com/userDataRecords.json',
{
method: "POST",
headers: {
"Content-Type" :"application/json",
},
body: JSON.stringify({
firstName,
lastName,
Phone,
email,
address,
message,
})
}
);
if(res){
setuserData({
firstName: "",
lastName: "",
Phone:"",
email:"",
address:"",
message:"",
});
alert("Data Stored");
}else{
alert("plz fill the data");
}
}else{
 alert("plz fill the data");
}
};
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
<input type="text" 
name="firstName"
placeholder="Frist Name"
className="form-control"
value={userData.firstName}
onChange={postUserData}
/>
</div>
<div className="col-12 col-lg-6 contact-input-felid">
<input type="text" 
name="lastName"
placeholder="Last Name"
className="form-control"
value={userData.lastName}
onChange={postUserData}
/>
</div>
</div>
<div className="row">
<div className="col-12 col-lg-6 contact-input-felid">
<input type="text" 
name="Phone"
placeholder="Phone Name"
className="form-control"
value={userData.Phone}
onChange={postUserData}
/>
</div>
<div className="col-12 col-lg-6 contact-input-felid">
<input type="text" 
name="email"
placeholder="Email ID"
className="form-control"
value={userData.email}
onChange={postUserData}
/>
</div>
</div>
<div className="row">
<div className="col-12 contact-input-felid">
<input type="text"
name="address"  
placeholder="Add Address" 
className="form-control"
value={userData.address}
onChange={postUserData}
/>
</div>
<div>
</div>
</div>
<div className="row">
<div className="col-12">
<input type="text"  
name="message"
placeholder="Enter Your Message" 
className="form-control"
value={userData.message}
onChange={postUserData}
/>
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
<button type="submit" className="btn btn-style w-100" onClick={submitData}>
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