import React from 'react'
import { Link } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="container-fluid">
            <div className="justify-content-evenly">
                <nav className="d-flex fs-3 justify-content-evenly list-unstyled m-4 bg-info">
                    <img src="./KALINGA LOGO.png" width={300} height={130} alt="" />
                    <li className="m-4 p-2"><Link className="text-decoration-none justify-content-center fs-4" to="/aboutUs">About Us</Link></li>
                    <li className="m-4 p-2"><Link className="text-decoration-none justify-content-center fs-4" to="/">Login</Link></li>
                </nav>
            </div>

            <div className='text-center m-5'>
                <h1 className='text-danger text-decoration-underline'><span className='bi bi-buildings'></span> Kalinga University</h1>
            </div>

            <div className='container-lg fs-5 rounded border-2'>
                <p>Our Time Table Generator web application is a powerful and intuitive tool designed to make creating schedules and timetables a breeze. With our user-friendly interface and customizable features, you can quickly and easily generate schedules for schools, universities, businesses, or any other organization.

Our application is designed to be flexible and adaptable to meet the needs of a variety of different users. Whether you're creating a schedule for a small team or a large organization, our software can handle it all. We offer a range of different scheduling options, including daily, weekly, and monthly schedules, as well as custom schedules that can be tailored to your specific needs.

One of the key features of our Time Table Generator is its ability to automatically generate schedules based on your input. Simply input the necessary data, such as the number of classes or shifts, and the software will create a schedule that meets your requirements. You can then review and make any necessary adjustments before finalizing the schedule.

Our application also offers a range of customization options, allowing you to tailor your schedule to meet the specific needs of your organization. You can choose from a variety of different colors and themes to create a personalized look for your schedule, and you can also add custom fields and labels to ensure that all of the necessary information is included.

In addition to its user-friendly interface and powerful scheduling capabilities, our Time Table Generator also offers robust reporting and analytics features. You can quickly and easily generate reports on things like attendance, scheduling conflicts, and staffing needs, helping you to make informed decisions and optimize your scheduling process.

Overall, our Time Table Generator web application is an essential tool for anyone who needs to create schedules and timetables quickly and efficiently. With its powerful features and user-friendly interface, you can save time and streamline your scheduling process, making it easier than ever to manage your organization's time and resources.</p>
            </div>

            <div className='d-flex justify-content-between m-5'>

                <div className='text-center m-5'>
                    <h1>Project Created by:-</h1>
                    <h3>Bh Srawani</h3>
                    {/* <h3>Write other number here and press ctrl+/ </h3> */}
                    {/* <h3>Write other number here and press ctrl+/ </h3> */}
                </div>

                <div className='text-center m-5'>
                    <h1>Course:-</h1>
                    <h3>BSC CS</h3>
                </div>

            </div>
        </div>
    )
}

export default AboutUs