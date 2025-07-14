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
                    <h4>Empowering Lives Through Blood Donation</h4>
                    <p>Our platform is dedicated to bridging the gap between blood donors and those in urgent need. Whether it's finding the nearest blood bank, checking blood compatibility, or registering as a donor — we simplify the process, making every drop count.
We believe that timely access to blood can save lives, and through technology, we aim to build a connected, transparent, and efficient blood donation ecosystem.</p>
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
                    <h4>Our Blood Donation Process</h4>
                    <p> At our center, we ensure a safe, comfortable, and efficient donation experience for every donor. From registration to post-donation care, every step is guided by trained professionals and modern equipment.
We value every donor's time and contribution — because each unit collected brings hope and healing to those in need. Your act of kindness could be someone's second chance at life.</p>
                </div>
                
            </div>

            <div className="row">
                <div className="col-sm-6 text-center pt-4">
                    <h4>Advanced Lab Analysis</h4>
                    <p>Our platform is backed by state-of-the-art laboratory diagnostics that ensure each blood sample is thoroughly tested for safety, compatibility, and quality.
Accurate and efficient lab results help us match donors with recipients faster and ensure the highest standards of medical safety.
We believe in combining technology and healthcare expertise to deliver effective and reliable diagnoses — because every detail matters when it comes to saving lives.

 </p>
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
                    <h4>Every Drop Counts</h4>
                    <p>One drop can make a world of difference.
Blood is not just a fluid — it's a lifeline. With every donation, you contribute to a chain of hope, healing, and humanity.
Whether you’re a donor or someone in need, our mission is to ensure that no life is lost due to the unavailability of blood.</p>
                </div>
        
            </div>

            <div className="row mb-4" >
                <div className="col-sm-6 text-center pt-4">
                    
                </div>
                <div className="col-sm-12 pt-4">
                    <h4>Terms and Conditions</h4>
                    <p>By accessing and using this website, you agree to the following terms and conditions:

Information Accuracy:
While we strive to provide accurate and up-to-date information, we do not guarantee the completeness or reliability of any content on this site.
<br/>
<h6>Medical Disclaimer:</h6>This platform does not provide medical advice. Always consult a licensed healthcare provider for medical concerns.
<br/>
<h6>User Responsibility:</h6>
Users are responsible for ensuring the accuracy of any personal or medical information they provide.
<br/>
<h6>Data Privacy:</h6>
We are committed to protecting your data. Any information shared with us will be handled in accordance with our privacy policy.
<br/>
<h6>Usage Restrictions:</h6>
You may not use this site for unlawful activities or attempt to compromise its security or functionality.
<br/>
<h4>By continuing to use this site, you acknowledge and accept these terms.</h4></p>
                </div>
        
            </div>

        </div>
        <Footer />
        </>
    );

}
export default About;