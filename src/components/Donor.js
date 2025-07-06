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
                        <p>This is just a sample text, I will add the actual text at the end of the project according to my understanding. This is just to check if the text is alligned properly according to the code or not </p>
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