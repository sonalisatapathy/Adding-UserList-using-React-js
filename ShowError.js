import React from "react";
import './Error.css'
const ShowError = (props)=>{
   return(
       <div className="errContainer">
       <header className="headerContainer">
           <h3>{props.title}</h3>
       </header>
       <div className="msgDisplay">
           <p>{props.message}</p>
       </div>
       <footer>
           <button onClick={props.errHandler}>okay</button>
       </footer>
       </div>
   )
}
export default ShowError;