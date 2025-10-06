import React from "react";
import pic5 from './Assets/pic5.jpeg'
import { Link } from "react-router-dom";
const Donor=()=>{
    return (<>
        <div className="row" style={{marginTop:'20px',marginBottom:'20px'}}>
            <div className='col-sm-6'>
                <div className="text-center">
                    <h2 style={{color:'blue',marginBottom:'20px'}}> Become a Donor</h2>
                </div>
                <div style={{display:'flex',justifyContent:'center'}}>
                    <div style={{width:'80%'}}>
                        <p>Your one donation can save up to three lives. Join our mission to build a healthier, stronger community by giving the gift of life.
Whether you're a first-time donor or a regular contributor, your support makes a real difference.

 </p>
                    </div>
                </div>
                <div className="text-center">
                    <Link to={'/donor-request'} className="btn btn-danger" style={{marginTop:'50px'}}>Join Us</Link> 
                </div>   
            </div>
            <div className='col-sm-6'>
                <img src='https://media.istockphoto.com/id/1446660489/vector/blood-donation-concept.jpg?s=612x612&w=0&k=20&c=RB8n7AdRJVMiAtdsnvnhTip_eEmOcWcFu2qeO-KYljk=' style={{width:'100%'}} />
            </div>

        </div>
    
    
    
    </>

    )


}

export default Donor;