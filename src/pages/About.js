import React from "react";
import Header from "../components/Header";
import Footer from "../components/footer";
import pic1 from "../components/Assets/imag1.webp"
import pic2 from "../components/Assets/imag2.webp"
import pic3 from "../components/Assets/imag3.webp"
import pic4 from "../components/Assets/imag4.webp"
const About=()=>{
    return(
        <>
        <Header />
        <div className="text-center mt-4 mb-4" >
            <h3> About </h3>
        </div>
        <div className="container mt-4">
            <div className="row">
                <div className="col-sm-6 text-center pt-4">
                    <h4>Section Title 1</h4>
                    <p> Hello this is also incomplete. I will fill this later on as well same as the other things that i have left</p>
                </div>
                <div className="col-sm-6 text-center pt-4">
                    <img src={pic1} className="about-image"/>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 text-center pt-4">
                    <img src={pic2} className="about-image"/>
                </div>
                <div className="col-sm-6 text-center pt-4">
                    <h4>Section Title 2</h4>
                    <p> Hello this is also incomplete. I will fill this later on as well same as the other things that i have left</p>
                </div>
                
            </div>

            <div className="row">
                <div className="col-sm-6 text-center pt-4">
                    <h4>Section Title 3</h4>
                    <p> Hello this is also incomplete. I will fill this later on as well same as the other things that i have left</p>
                </div>
                <div className="col-sm-6 text-center pt-4">
                    <img src={pic3} className="about-image"/>
                </div>
            </div>

            <div className="row">
                <div className="col-sm-6 text-center pt-4">
                    <img src={pic4} className="about-image"/>
                </div>
                <div className="col-sm-6 text-center pt-4">
                    <h4>Section Title 4</h4>
                    <p> Hello this is also incomplete. I will fill this later on as well same as the other things that i have left</p>
                </div>
        
            </div>

            <div className="row mb-4" >
                <div className="col-sm-6 text-center pt-4">
                    
                </div>
                <div className="col-sm-12 pt-4">
                    <h4>Terms and Conditions</h4>
                    <p> Hello this is also incomplete. I will fill this later on as well same as the other things that i have left</p>
                </div>
        
            </div>

        </div>
        <Footer />
        </>
    );

}
export default About;