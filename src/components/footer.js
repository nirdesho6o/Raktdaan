import React from "react";
import { Link } from "react-router-dom";
const Footer=()=> {
    return(<div className="row" style={{background:'grey'}}>
        <div className="col-sm-4">
            <div className="text-center">
        
                <h2>Useful Links</h2>
            </div>
            <div className="text-center">
            <ul className="useful-link">
                <li><Link to={'/'}>Link 1</Link></li>
                <li><Link to={'/'}>Link 2</Link></li>
                <li><Link to={'/'}>Link 3</Link></li>

            </ul>
            </div>
        </div>
        <div className='col-sm-4'>
            <div>
                <p style={{color:'black',fontWeight:'bold',marginTop:'20px'}}>Address: </p>
                <p>I will fill this as well later on after i finalize.</p>
                <p>Email: nb23ecb0f36@student.nitw.ac.in</p>
                <p> Mobile Number: +91 7678653043</p>
            </div>

        </div>
        <div className="col-sm-4">
            <p style={{marginTop:'20px'}}>Hello this also i will fill later on okay brotha</p>
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