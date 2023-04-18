import React, { useState } from 'react'
import { Link, Navigate } from "react-router-dom";

function LoginfComponent() {

    const [userDetails] = useState([
        {UserName : "Srawani09", Password: "srawani7774"},
        {UserName : "Srawani08", Password: "srawani754"},
        {UserName : "SamsIva", Password: "sams54"},
        {UserName : "Logan", Password: "logan2"},
        {UserName : "smit", Password: "logansmit8"}]
    )

    const [NewUserDetails,setNewUserDetails] = useState({
        UserName :"",
        Password : "",
    })
    
    
    const onChangeLoginHandle =(event)=>{
        const {name,value} = event.target
        setNewUserDetails((preval)=>{
            return{
                ...preval,
                [name] : value
            }
        })
        
    }

    const OnclickLoginHandle =() =>{
       
    }

  return (
    <div>
        <div>
            <nav className='d-flex fs-3 justify-content-center list-unstyled m-4 bg-info'>
                <li className='m-4 p-2'>Register</li>
                <li className='m-4 p-2'>About Us</li>
            </nav>
        </div>
        <div className='container text-center d-flex justify-content-evenly'>
            <form action="" className=''>
                <input className='m-4 fs-2 fw-bolder p-2 text-center' onChange={onChangeLoginHandle} type="text" name="UserName" id="1" placeholder='UserName'/><br />
                <input className='m-4 fs-2 fw-bolder p-2 text-center' onChange={onChangeLoginHandle} type="password" name="Password" id="2" placeholder='password'/><br />
                
                <button onClick={OnclickLoginHandle}>sub</button>
                
            </form>
            

            <div>
                <img src="Onhomepagerightside.png" width={400} alt="" />
            </div>
        </div>
    </div>
  )
}

export default LoginfComponent