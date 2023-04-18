import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import TimeTable from './timetable';

function LoginfComponent() {
  const [userDetails] = useState([
    { UserName: 'Srawani09', Password: 's1' },
    { UserName: 'Srawani08', Password: 'srawani754' },
    { UserName: 'SamsIva', Password: 'sams54' },
    { UserName: 'Logan', Password: 'logan2' },
    { UserName: 'smit', Password: 'logansmit8' },
  ]);

  const [newUserDetails, setNewUserDetails] = useState({
    UserName: '',
    Password: '',
  });

  const [loginSuccessful, setLoginSuccessful] = useState(false);

  const onClickLoginHandle = () => {
    userDetails.forEach((item) => {
      if (
        item.UserName === newUserDetails.UserName &&
        item.Password === newUserDetails.Password
      ) {
        setLoginSuccessful(true);
      }
    });
  };

  const onChangeLoginHandle = (event) => {
    const { name, value } = event.target;
    setNewUserDetails((prevVal) => {
      return {
        ...prevVal,
        [name]: value,
      };
    });
  };

  

  return (
    <div>
      
      {loginSuccessful ? (
        <TimeTable />
      ) : (
        <div><div>
        <nav className="d-flex fs-3 justify-content-between list-unstyled m-4 bg-info">
        <img src="./KALINGA LOGO.png" width={300} height={130} alt="" />
          <li className="m-4 p-2"><Link className="text-decoration-none justify-content-center fs-4" to="/aboutUs">About Us</Link></li>
        </nav>
      </div>
        <div className="container text-center d-flex justify-content-evenly">
          <form action="" className="">
            <input
              className="m-4 fs-2 fw-bolder p-2 text-center"
              onChange={onChangeLoginHandle}
              type="text"
              name="UserName"
              id="1"
              placeholder="UserName"
            />
            <br />
            <input
              className="m-4 fs-2 fw-bolder p-2 text-center"
              onChange={onChangeLoginHandle}
              type="password"
              name="Password"
              id="2"
              placeholder="password"
            />
            <br />

            
            <button onClick={onClickLoginHandle} className="btn btn-primary w-50 fs-4">Login</button>
          </form>

          <div>
            <img src="Onhomepagerightside.png" width={400} alt="" />
          </div>
        </div>
        </div>
      )}
    </div>
  );
}

export default LoginfComponent;
