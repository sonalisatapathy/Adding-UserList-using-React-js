import React,{useState} from 'react';
import './Contact.css';
import ShowError from './ShowError';
const Contact= (props) => {
    const [userName, setUserName]=useState('');
    const [userAge, setUserAge]=useState('');
    const [userEmail, setUserEmail]=useState('');
    const [err,setErr]=useState();
    const submitForm = (event)=>{
        event.preventDefault();
        if (userName.length < 3 || !(isNaN(userName))|| userName.trim().length === 0 || userAge.trim().length === 0) {
            setErr({
                title:'Error happened',
                message: ["User name can't be only number/less than 3 characters",(<br></br>)," Or Can't enter same value again"]
            })
            return;
        }
        props.onAddUsersItems(userName,userAge,userEmail)
        setUserName('');
        setUserAge('');
        setUserEmail('');
    }
    const userNameHandeler= (event)=>{
        setUserName(event.target.value)
    }
    const userAgeHandeler= (event)=>{
        setUserAge(event.target.value)
    }
    const userEmailHandeler= (event)=>{
        setUserEmail(event.target.value)
        // console.log(event);
    }
    const errHandler = () =>{
        setErr(null)
    }
    return(
        <>
        {err &&<ShowError title={err.title} message={err.message} errHandler={errHandler}/>}
        <div className='contact_container'>
            <h2>Add contact</h2>
            <form onSubmit={submitForm}>
                <div>
                    <div className='labelContainer'>
                    <label>Name:-</label>
                    </div>
                    <input type='text' placeholder='Sonali Satapathy' onChange={userNameHandeler}/>
                </div>
                <div >
                    <div className='labelContainer'>
                    <label>Age:-</label>
                    </div>
                    <input type='number' onChange={userAgeHandeler} min='23' max='33'/>
                </div>
                <div>
                    <div className='labelContainer'>
                    <label>Email:-</label>
                    </div>
                    <input type='email' placeholder='sonali@gmail.com' onChange={userEmailHandeler}/>
                </div>
                <button type='submit' onClick={errHandler}>Click me</button>
            </form>
        </div>
        </>
    )
}
export default Contact;