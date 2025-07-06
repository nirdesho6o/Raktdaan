import React, { useEffect, useState } from "react";
/*import pic1 from './Assets/donation.png'
import pic2 from './Assets/bloodtype.png'
import pic3 from './Assets/bloodbank.png'
import pic4 from './Assets/donationicon.png' */
import axios from "axios";
const Services= ()=> {
    const [serviceList,setServiceList]=useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}services`).then((resp)=>{
            setServiceList(resp.data.data);
        })
    },[])
    return (<div className="service-container">
    <div className="text-center">
        <h2> Our Services </h2>
    </div>
    <div className="row">
        {serviceList && serviceList.map((ele)=>{ 
            return(
                <div className="col-sm-3 text-center" key={ele.id}>
                <div className="card" style={{ width: '18rem', marginLeft: '10px' }}>
                {console.log(ele.image)}
                <img src={ele.image} className="card-img-top" alt={ele.name} />

                <div className="card-body">
                    <h5 className="card-title">{ele.name}</h5>
                    
                </div>
                </div>
                </div>)
        })}

    </div>
    </div>
        
    );
}
export default Services;