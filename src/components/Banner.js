import React from "react";
import p2 from './Assets/p2.jpg'
import banner from './Assets/banner.png'
const Banner=()=>{
    return(<>
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
        <div class="carousel-item active">
            <img style={{height:'70vh'}} src={banner} class="d-block w-100" alt="Image"/>
           
        </div>
        <div class="carousel-item">
            <img style={{height:'70vh'}} src="https://static.vecteezy.com/system/resources/thumbnails/008/190/897/small_2x/human-blood-donate-on-white-background-free-vector.jpg" class="d-block w-100" alt="..."/>
            
        </div>
        <div class="carousel-item">
            <img src={p2} style={{ height: '70vh' }} className="d-block w-100" alt="..." />

        </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
        </div>
    </>)
}
export default Banner;