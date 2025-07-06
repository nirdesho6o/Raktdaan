import React, { useEffect,useState } from "react";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/footer";
const Contact=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [mobile,setMobile]=useState("");
    const [message,setMessage]=useState("");

    const submit=()=>{
        const payload={
            "name":name,
            "email":email,
            "mobile":mobile,
            "message":message
        }
        if(name==""|| email==""||mobile==""||message==""){
            alert("Please fill all fields");
        }
        else{
            axios.post(`${process.env.REACT_APP_BASE_URL}contact`,payload).then((ele)=>{
                setName("");
                setEmail("");
                setMobile("");
                alert("Contact Query Successfully Send")
            })
        }
    }
    return(
        <>
        <Header />
        <div className="container contact-container">
            <div className="text-center" style={{fontWeight:"bold"}}>
                <h2 > Connect with Us!</h2>
            </div>
            <div className="row">
                <div className="col-sm-6">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.897116874684!2d79.52826367541623!3d17.983522983008918!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a334fbb37aee6c3%3A0xf1b2c37fcb8fefce!2sNIT%20Warangal!5e0!3m2!1sen!2snp!4v1751359727194!5m2!1sen!2snp" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    <p className="mt-4"><b>Address : </b>NIT Warangal, Telangana, India</p>
                    <p><b>Email : </b>nb23ecb0f36@student.nitw.ac.in</p>
                </div>
                <div className="col-sm-6">
                    <div className="form-group">
                        <label for='name'>Name:</label>
                        <input value={name} type='text' onChange={(e)=>setName(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label for='name'>Email:</label>
                        <input value={email} type='text' onChange={(e)=>setEmail(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group mt-4">
                        <label for='name'>Mobile Number:</label>
                        <input value={mobile} type='text' onChange={(e)=>setMobile(e.target.value)} className="form-control" />
                    </div>
                    <div className="form-group mt-4 mb-4">
                        <label for='name'>Message:</label>
                        <textarea value={message} className="form-control" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
                    </div>
                    <div className="form-group mt-4">
                        <button className="btn btn-danger" onClick={submit}>Submit</button>
                    </div>

                </div>
            </div>
        </div>
        <Footer />
        </>
    );

}
export default Contact;