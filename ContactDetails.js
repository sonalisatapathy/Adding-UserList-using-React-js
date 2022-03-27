const ContactDetails = (props)=>{
    return (
        <ul className='listItems'>
                {/* <li>{props.contact.key}</li> */}
                <li>Name:-{props.contact.name}</li>
                <li className='deleteKey'>
                  <a href='#'>Delete</a>
                </li>
                <li>Age:-{props.contact.age}</li>
                <li>emailId:-{props.contact.emailId}</li>
            </ul>
    )

}
export default ContactDetails;