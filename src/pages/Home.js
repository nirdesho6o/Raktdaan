import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Services from "../components/Services"
import Donor from "../components/Donor";
import ChatBot from "../components/ChatBot";
import Footer from "../components/footer";
const Home=()=>{
    return(
        <>
        <Header />
        <Banner />
        <Services />
        <Donor />
        <Footer />
        <ChatBot />

    
    
        </>
    );

}

export default Home;