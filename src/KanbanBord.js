import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { fetchSuccessTickets } from './Redux/kanbanAction'
// import TicketCart from './TicketCart'
import DashBoard from './DashBoard'
import "./kanban.css"
import TicketCart from './TicketCart'
import { NavLink } from 'react-router-dom'
function KanbanBord(props) {
    var Tickets=useSelector((state=>state.Tickets))

    var loading_tickets=useSelector((state=>state.loading_tickets))
    var Tickets_error=useSelector((state=>state.Tickets_error))
    var dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchSuccessTickets())
    },[])
    if (loading_tickets){
        <h1>loading......</h1>
    }
    else if(Tickets_error){
  <h1>Some error has been occured {Tickets_error}</h1>
    }
  else{
  return (
     
    <>
     <div className="dropdown">
  <button
    className="btn btn-secondary dropdown-toggle"
    type="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
     Display
  </button>
  <ul className="dropdown-menu">
    <li>
      <NavLink className="dropdown-item" to="/">
        Status
      </NavLink>
    </li>
    <li>
    <NavLink className="dropdown-item" to="/Priority" >
         Priority
      </NavLink>
    </li>
    
  </ul>
</div>

     <div className="container-fluid pt-5 pb-3">
     <div className="row">
  <div className="column" style={{ backgroundColor: "#aaa" }}>
    <h2>Todo</h2>
    {/* <p>Some text..</p> */}
    {Tickets.filter(e=>e.status=='Todo').map((e)=>(
        
    <DashBoard key={e.id} ticket={e}/>))}
  </div>
  <div className="column" style={{ backgroundColor: "#bbb" }}>
    <h2>Backlog</h2>
    {/* <p>Some text..</p> */}
    {Tickets.filter(e=>e.status=='Backlog').map((e)=>(
        
        <DashBoard key={e.id} ticket={e}/>))}
  </div>
  <div className="column" style={{ backgroundColor: "#ccc" }}>
    <h2>In Progress</h2>
    {/* <p>Some text..</p> */}
    {Tickets.filter(e=>e.status=='In progress').map((e)=>(
        
        <DashBoard key={e.id} ticket={e}/>))}
  </div>
</div>

      <div className="row px-xl-5">
         
        
    
        
      </div>
    </div>
    </>
  )
}
}




export default KanbanBord
