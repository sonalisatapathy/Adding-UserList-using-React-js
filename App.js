import React,{useState} from 'react';
import ContactList from './components/ContactList';
import './App.css';
import Header from './components/Header';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [userList, setUserList] = useState([]);
  const addUserItemsHandeler =(uName,uAge,uEmail) =>{
    setUserList((prevUsersList)=>{
      console.log(prevUsersList);
      return [...prevUsersList, {name:uName, age:uAge, email:uEmail}]
    })
  }

  return (
    <>
    <Header/>
    <Contact onAddUsersItems={addUserItemsHandeler}/>
    <ContactList contactLists={userList}/>
    <Footer/>
    </>
    
  )
  
}

export default App;
