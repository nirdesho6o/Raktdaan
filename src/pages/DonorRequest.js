import React, { useEffect,useState } from "react";
import axios from "axios";

import Header from "../components/Header";
import bimage from "../components/Assets/imag6.png"
import Footer from "../components/footer";
const DonorRequest=()=>{
    return(<>
    <Header/>
    <div style={{background:'rgb(244,244,244)',paddingTop:'20px',paddingBottom:'20px'}}>
        <div className="container">
            <div className="text-center">
                <h2>Become a Donor</h2>
            </div>
            <div class='card' style={{padding:'20px',margin:'10px'}}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src={bimage} style={{width:'100%'}}/>

                    </div>
                    <div className="col-sm-6">
                        <div className="form-group mt-4">
                            <label for='name'>Name:</label>
                            <input type='text' placeholder='Enter your name' className="form-control"/>
                        </div>

                        <div className="form-group mt-4">
                            <label for='name'>Email:</label>
                            <input type='email' placeholder='Enter your Email' className="form-control"/>
                        </div>

                        <div className="form-group mt-4">
                            <label for='name'>Mobile Number:</label>
                            <input type='text' placeholder='Enter your Mobile Number' className="form-control"/>
                        </div>

                        <div className="form-group mt-4">
                            <label for='name'>Blood Group</label>
                            <input type='text' placeholder='Enter your Blood Group' className="form-control"/>
                        </div>

                        <div className="form-group mt-4">
                            <label for='name'>Remarks:</label>
                            <textarea className="form-control"></textarea>
                        </div>

                        <div className="form-group mt-4">
                            <button className="btn btn-danger">Submit Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
        </>
    )
}
export default DonorRequest;