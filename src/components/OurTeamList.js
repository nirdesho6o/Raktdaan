import React, { useEffect,useState } from "react";
import man from "./Assets/man.png"
import woman from './Assets/woman.png'
import axios from "axios";
const OurTeamList=()=>{
    const [team,setTeams]=useState([]);
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BASE_URL}get-team`).then((ele)=>{
            setTeams(ele.data.data);
        })
    },[])
   
    return(<div className="row" >
                {team && team.map((item)=>{
                    return(
                        <div className="col-sm-3" style={{marginTop:'20px'}} key={item.id}>
                        <div className="card" style={{ width: '18rem', margin:'20px' }}>
                        <img src={item.image} className="card-img-top" alt="Card image" />
                        <div className="card-body">
                        <h5 className="card-title text-center">{item.name}</h5>
                            
                    
                        </div>
                        </div>
                        </div>
                    )
                    }
                )   
                }
                {team.length==0 && <h5 className="text-center mt-4 mb-4">Teams not Found</h5>}   
        
    </div>)
}
export default OurTeamList;