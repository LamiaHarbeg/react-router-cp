import React, { useState } from 'react'
import './Rating'
import { FaStar } from "react-icons/fa"

function Filter(props) {

    const [hover, setHover] = useState(0)
    const [rate, setRate] = useState(0)
    
        return (
        <div className="Rating" style={{
			marginTop: "30px",
			display: "flex",
			flexDirection: "column",
			fontSize:"30px"
		  }}>
            <div className="Filter">
            {[...Array(5)].map((star,i)=>{
                return <label  key={i}>
                        <input style={{display:"none"}} type="radio" value={i+1}  onClick={()=> setRate(i+1)} onChange={()=>props.rateFilter(i+1)} />
						<FaStar style={{cursor: "pointer",transition: "color 200ms"}} className="star" color={i+1 <= (hover || rate) ? "yellow" : "grey"} onMouseEnter={()=>setHover(i+1)} onMouseLeave={()=>setHover(0)}/>
                        </label>
            } )}
            </div>            
        </div>
    )
}

export default Filter;