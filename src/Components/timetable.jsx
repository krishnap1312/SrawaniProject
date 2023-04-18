import React from "react";
import { Link } from "react-router-dom";
const TimeTable = () => {

    return (
        <div className="container-fluid">
            <nav className="bg-light">
                <ul className="d-flex justify-content-center list-unstyled text-decoration-none">
                    <img src="./KALINGA LOGO.png" width={300} height={130} alt="" />
                    <div className="d-flex m-2 p-2">
                        <li><img src="" alt="" /></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none justify-content-center fs-4" to="/AddTeacher">Add Teacher</Link></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none justify-content-center fs-4" to="/AddCourse">Add Course</Link></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none justify-content-center fs-4" to="/AddSubject">Add Subject</Link></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none justify-content-center fs-4" to="/GenerateTimetable">Generate Timetable</Link></li>
                        <li className="m-3 p-2"><Link className="text-decoration-none justify-content-center fs-4" to="/aboutUs">About Us</Link></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none fs-4" to ="/">Logout</Link></li>
                    </div>
                </ul>
            </nav>
            <div className="justify-content-center text-center">
                <h1 >SCHEDULER</h1>
                <p className="fs-3 text-danger fw-bolder text-decoration-underline">Please select from the below options</p>
                <div>
                    <li className="fs-3 list-unstyled  "><Link className="text-decoration-none" to="/AddTeacher">Add Teacher</Link></li>
                    <li className="fs-3 list-unstyled  "><Link className="text-decoration-none" to="/AddCourse">Add Course</Link></li>
                    <li className="fs-3 list-unstyled  "><Link className="text-decoration-none" to="/AddSubject">Add Subject</Link></li>
                    <li className="fs-3 list-unstyled  "><Link className="text-decoration-none" to="/GenerateTimetable">Generate Timetable</Link></li>
                </div>
            </div>
            <address className="d-flex justify-content-between m-5 pt-5">
                <div>
                    <h4>Project Done By BSC CS 4th Sem Students:</h4>
                    <h5>Bh Srawani</h5>
                    <h5>Arpita Maravi</h5>
                    <h5>Samiksha Shrivastava</h5>
                </div>
                <div>
                    <h4>Guided By:</h4>
                    <h4>Mrs. Akanksha Mishra, AP, Kalinga University</h4>
                </div>
            </address>
        </div>
    )
}

export default TimeTable