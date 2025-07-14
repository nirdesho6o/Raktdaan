import React from "react";
import { Link } from "react-router-dom";
const Footer=()=> {
    return(<div className="row" style={{background:'grey'}}>
        <div className="col-sm-4">
            <div className="text-center">
        
                <h2>Connect With Us</h2>
            </div>
            <div className="text-center">
            <ul className="useful-link">
                <li><Link to={'https://www.linkedin.com/in/nirdesh-bhandari-5b9644136/'}>LinkedIn</Link></li>
                <li><Link to={'https://github.com/nirdesho6o/Raktdaan'}>GitHub</Link></li>
                <li><Link to={'https://www.nitw.ac.in/'}>NITW</Link></li>

            </ul>
            </div>
        </div>
        <div className='col-sm-4'>
            <div>
                <p style={{color:'black',fontWeight:'bold',marginTop:'20px'}}>Address: </p>
                <p>NIT Warangal, Telangana, India</p>
                <p>Email: nb23ecb0f36@student.nitw.ac.in</p>
                <p> Mobile Number: +91 7678653043</p>
            </div>

        </div>
        <div className="col-sm-4">
            <p style={{marginTop:'20px'}}> <h6>Feel free to Connect</h6></p>
            <div className="form-group">
                <input type="email" className="form-control" placeholder="Enter your Email " />
            </div>
            <div className="form-group" style={{marginTop:'20px'}}>
                <button className="btn btn-danger">Subscribe</button>
            </div>

        </div>


        
    
    
    </div>)
}
export default Footer;