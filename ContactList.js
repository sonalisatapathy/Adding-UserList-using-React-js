import React from 'react'
import './ContactList.css'
import ContactDetails from './ContactDetails'
const ContactList = (props)=>{
    const contactItems = props.contactLists.map((contact)=>{
        return(
            
           <ContactDetails contact= {contact}/> 
        )
    })
     return(
         <div className='mainContaintOfCL' style={{display:'none'}}>
             <h2>Contact Lists</h2>
             <div className='contactLists'>{contactItems}</div>
         </div>

     )
}
export default ContactList;