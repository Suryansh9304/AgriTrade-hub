import React from "react";
import logo from "../../assets/logo.png"; // Adjust the path if needed
import "./Home.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
    return (
        <React.Fragment>
          <div className="position">
            <nav className="navbar navbar-expand-lg navbar-dark sticky-top custom-navbar" >
    <div className="container">
        <a className="navbar-brand fw-bold d-flex align-items-center" href="#">
            <img src={logo} alt="AgriTrade Logo" height="60" className="me-2" /> AgriTrade Hub
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item"><a className="nav-link text-white" href="#home">Home</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#about_us">About Us</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#services">Services</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#storage">Storage Facilities</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="#contact">Contact</a></li>
                <li className="nav-item"><a className="nav-link text-white" href="/login">Login / Sign Up</a></li>
            </ul>
        </div>
    </div>
</nav>
</div>


<div className="row">
  <div className="col-md-12">
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={require("../../assets/images/one.jpg")} className="d-block w-100" alt="..." style={{height :"900px"}} />
          <img src={require("../../assets/images/wave.png")} style={{ marginTop: "-150px" }} alt="wave" />

        </div>
        <div className="carousel-caption">
          <div
            className="box text-start p-5"
            style={{marginTop: "-600px",marginLeft: "-160px",width: "60%",height: "330px", backgroundColor: '#ffffffea', color: '#fef7f7ff', borderRadius: "25px",}}
          >
            <h1 className="display-5 fw-bold gradient-text">
        Secure. Smart. Scalable Agricultural Storage.
    </h1>
            <p style={{color: '#472309ff',fontSize:'18px',}}>
             Optimize your farm produce storage with real-time inventory tracking, temperature control, and booking tools.
            </p>
            <div className="box" style={{ textAlign: "center", marginBottom: "30px" }}>
              
              <div className="d-flex justify-content-center gap-3 mt-3">
        <button className="btn custom-green-btn">Register Storage</button>
        <button className="btn custom-outline-green-btn">Explore Storage Options</button>
    </div>
        <br />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>

{/* marquee start */}

<marquee
  direction="right"
  behavior="alternate"
  onMouseOver={() => document.querySelector('marquee').stop()}
  onMouseOut={() => document.querySelector('marquee').start()}
  width="100%"
  style={{
     background:"linear-gradient(to right, rgb(16, 186, 149), rgb(140, 190, 54))",
    color: 'white',
    padding: '10px',
    fontWeight: 'bold',
  }}
>🌾 Now live: New cold storage hub in Barabanki!    🚜 Book transport directly from your farmer dashboard.    📈 Today's onion price: ₹2,000/quintal (Lucknow).

🧑‍🌾 List your crops and connect with 500+ trusted merchants.

💰 Zero commission on your first 3 product listings!

📦 Track your shipments in real-time — Try the dashboard!

🎁 Refer a farmer friend and earn ₹200 credit.

🕒 Reminder: Storage subscription renews by Aug 25.
</marquee>

{/* marquee end */}




{/* about us starts */}
 <div className="about-us py-5 px-4" id="about_us" style={{ backgroundColor: "#f9f9f9" }}>
      <br/>
      <br/>
      <div className="container">
        <div className="row">
            <div className="col-sm-8">
        <h2 className="mb-4 text-success" style={{fontSize:'34px'}}>About Us</h2>
        <p className="lead" style={{fontSize:'22px'}}>
          <strong>AgriStore Hub</strong> is your trusted partner in managing and securing farm produce
          with smart, scalable storage solutions across India.
        </p>
        <p style={{fontSize:'18px'}}>
          We help farmers, traders, and agri-businesses protect their crops, reduce post-harvest
          losses, and streamline inventory through our innovative tech-enabled platform. Whether
          you're storing grains, fruits, or organic produce — our solutions offer real-time
          monitoring, booking tools, and data insights.
        </p>
</div>

<div className="col-sm-4">
     <img src={require("../../assets/images/farmer.jpg")} className="block w-100" alt="..." />
</div>
</div>

        <h4 className="mt-5 text-success" style={{fontSize:'34px'}}>Our Mission</h4>
        <p style={{fontSize:'18px'}}>
          To empower the agricultural community with reliable storage infrastructure and
          digital tools, ensuring better crop protection and supply chain efficiency.
        </p>
<br/>

        <h4 className="mt-4 text-success" style={{fontSize:'34px'}}>Who We Help</h4>
        <ul style={{fontSize:'18px'}}>
          <li> Farmers storing grains, pulses, and produce</li>
          <li> Traders booking space in warehouses</li>
          <li> Agri-based businesses needing cold or dry storage</li>
        </ul>
<br/>

        <h4 className="mt-4 text-success" style={{fontSize:'34px'}}>Why Choose AgriStore Hub?</h4>
        <ul style={{fontSize:'18px'}}>
          <li> 24/7 Support</li>
          <li> Government Compliant Storage Units</li>
          <li> Real-Time Alerts & Notifications</li>
          <li> Multilingual Interface for regional ease</li>
        </ul>

<br/>

        <h4 className="mt-4 text-success">What Users Say</h4>
        <blockquote className="blockquote">
          <p>
            “AgriStore Hub helped me manage my grains and reduced post-harvest losses.”
          </p>
          <footer className="blockquote-footer">Rajesh, Farmer from Punjab</footer>
        </blockquote>

        <blockquote className="blockquote">
          <p>
            “Easy to track and monitor fruits stored in our cold units.”
          </p>
          <footer className="blockquote-footer">Suman Agro Pvt. Ltd.</footer>
        </blockquote>
      </div>
    </div>

    
  
{/* about us ends */}



{/* services start */}
<div id="services" className="container py-5 ps-5">
<br/>
      <br/>
  <h2 className="custom-green-text">Our Services</h2>
  <ul style={{fontSize:'18px'}}>
    <li><strong>Digital Inventory Management:</strong> Track crops with quantity, quality, and location details.</li>
    <li><strong>Climate Monitoring:</strong> Monitor temperature and humidity in real time.</li>
    <li><strong>Slot Booking System:</strong> Pre-book storage space easily.</li>
    <li><strong>GPS-Based Locator:</strong> Find nearby facilities.</li>
    <li><strong>Analytics Dashboard:</strong> Get usage and space insights.</li>
  </ul>
</div>

{/* cards image start */}

<div className="row">
   <div className="card" style={{ width: "17rem", height:"23rem" , marginLeft: 120 , }}>

     <img src={require("../../assets/images/image.png")} className="d-block w-100 pt-2" alt="..." style={{height :"180px", width:"180px", borderRadius:"10px"}} />
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:"center"}}>Fair Price. Fresh Produce.</h5>
      <p style={{textAlign:"center"}}>From the field to your hands — direct, transparent, and rewarding.</p>
         </div>
  </div>
  <div className="card" style={{ width: "17rem",height:"23rem" , marginLeft: 70 }}>
     <img src={require("../../assets/images/two.jpg")} className="d-block w-100 pt-2 " alt="..." style={{height :"180px", width:"180px", borderRadius:"10px"}} />
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:"center"}}>Book Your Storage Slot Anytime</h5>
      <p style={{textAlign:"center"}}>Schedule your storage appointments in just a few taps — no waiting, no hassle.</p>
      
    </div>
  </div>
  <div className="card" style={{ width: "17rem",height:"23rem" , marginLeft: 70 }}>
       <img src={require("../../assets/images/three1.jpg")} className="d-block w-100 pt-2" alt="..." style={{height :"180px", width:"100px", borderRadius:"10px"}} />
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:"center"}}>Quality Inspection You Can Trust</h5>
      <p style={{textAlign:"center"}}>Every batch is carefully sampled and tested to ensure top-grade produce for farmers and buyers alike.</p>
          </div>
  </div>
  <div className="card" style={{ width: "17rem",height:"23rem" , marginLeft: 70 }}>
       <img src={require("../../assets/images/app-on-mobile.jpg")} className="d-block w-100 pt-2" alt="..." style={{height :"180px", width:"100px", borderRadius:"10px"}} />
    <div className="card-body">
      <h5 className="card-title" style={{textAlign:"center"}}>Easy Access Anywhere</h5>
      <p style={{textAlign:"center"}}>Farmers can manage sales, storage bookings, and track prices right from their phone — anytime, anywhere.</p>
          </div>
  </div>
  </div>
<br/>
<br/>
<br/>
<br/>

{/* card images end */}

{/* services end */}

{/* pricing start */}
<div className="container-pricing" style={{backgroundColor:" #f0e7e7ff"}}>
<div className="container">
<div className="row" style={{paddingTop:"60px", paddingBottom:"40px"}}> 
<div className="col-md-8 left">
<h1>Pricing</h1>
<p style={{fontSize:"18px"}}> 
"With AgriTrade Hub, you only pay a small service fee once your deal is successfully closed—no hidden charges, no surprises. Both buyers and sellers share the cost, ensuring fairness for everyone. Our transparent pricing, based on your trade’s value and volume, comes with real-time updates so you’re informed every step of the way."
</p>
</div>
<div className="col-md-4">
<img src={require("../../assets/icons/grain_bag.png")} alt="Grain bag " height="220px" width="300px"/>
</div>
</div>
</div>
</div>
{/* pricing end */}

{/* storage start */}
<div id="storage" className="container py-5 ps-5">
    <br/>
      <br/>
      <h2 className="custom-green-text">Available Storage Types</h2>
    <ul style={{fontSize:'18px'}}>
        <li>Cold Storage</li>
        <li>Dry Warehouses</li>
        <li>Silo Storage</li>
        <li>Organic Produce Storage</li>
        <li>Refrigerated Units</li>
    </ul>
    <button className="btn custom-green-btn mt-3">View All Facilities</button>
</div>

{/* storage end */}

<div  className="bg-light py-5">
    <div className="container">
        <h2 className="custom-green-text" >Why Choose Us?</h2>
        <ul style={{fontSize:'18px'}}>
            <li>24/7 Support</li>
            <li>Government Compliant Storage</li>
            <li>Real-Timcustomer Alerts & Notifications</li>
            <li>Multilingual Interface</li>
        </ul>
    </div>
</div>




{/* footer start */}

<div className="row">
  <img src={require("../../assets/images/wave2.png")}  alt="wave" />
</div>

<div id="contact" className="custom-footer text-white text-center py-5" style={{ marginTop: "-100px" }}>
    <div className="row" style={{marginTop: "50px",marginLeft:"250px", textAlign: "left"}}>
       <div className="col-sm-6">
           <h2>Contact Us</h2>
           <p><b>Phone : </b> 91 8768961765</p>
           <p><b>Email : </b>service@gmail.com</p>
           <a href ="" target="blank_">
           <img src={require("../../assets/icons/facebook.png")}  alt="facebook"/></a>
           <a href ="" target="blank_">
           <img src={require("../../assets/icons/insta.png")}  alt="instagram"/></a>
           <a href ="" target="blank_">
           <img src={require("../../assets/icons/in.png")}  alt="linkedin"/></a>
           <a href ="" target="blank_">
           <img src={require("../../assets/icons/twitter.png")}  alt="twitter"/></a>
           <a href ="" target="blank_">
           <img src={require("../../assets/icons/youtube.png")}  alt="youtube"/></a>
       </div>
       <div className="col-sm-6 px-5">
            <h2>Get the App</h2>
            <p>© Copyright {new Date().getFullYear()} Designed & Developed By |
 Softpro India Computer Technologies (P) Ltd.<br /></p>
            <p>Download the AgriTrade Hub app for Android and iOS.</p>
            <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-light" style={{marginLeft:"-330px"}}>Google Play</button>
                <button className="btn btn-light">App Store</button>
            </div>
        <br/>
        </div>
    
    </div>
</div>
<div className="row">

</div>

{/* footer end */}

          </React.Fragment>
    );
}

export default Home;
