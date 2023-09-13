import React from 'react'
import {MoreHorizontal} from "react-feather"
 

function DashBoard(props) {
  return(
    <>
   
<div className="card" style={{ width: "18rem" }}>
  <div className="card-body">
  
    <h5 className="card-title">{props.ticket.id}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{props.ticket.title}</h6>
    <p className="card-text">
    <MoreHorizontal/>{props.ticket.tag}
    </p>
    <div className="card-link">
       {props.ticket.userId}
    </div>
    {/* <a href="#" className="card-link">
      Another link
    </a> */}
  </div>
</div>

    </>
  )
  }
export default DashBoard
