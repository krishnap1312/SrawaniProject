import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navcolor.css"

const AddSubject = () => {
    const [StyleClass, setStyleClass] = useState({display: "none"})
    const [Details, setDetails] = useState({
        course : "",
        teacher : "",
        subject : "",
        semester : ""
    })

    const onchangehandle = (event) =>{
        const {name,value} = event.target
        setDetails((preval)=>{
            return{
                ...preval,
                [name] : value
            }
        })
    }

    const onClickSubmitHandle = (event) =>{
        event.preventDefault();
        alert(`Course Name : ${Details.course}\nTeacher : ${Details.teacher}\nSemester : ${Details.semester}\nSubject : ${Details.subject} `)
        setStyleClass({display: ""})
    }
    return (
        <div>
            <nav className="nav-color">
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
            <div className="m-5 text-center">
                <div className="d-block justify-content-evenly m-5 text-center">
                    <div className="d-flex justify-content-center m-3">
                        <select className="w-25" onChange={onchangehandle} name="course"  >
                            <option value="Course">Select Course</option>
                            <option value="BSC CS">BSC CS</option>
                            <option value="BCA">BCA</option>
                            <option value="BTECH CS">BTECH CS</option>
                            <option value="MSC CS">MSC CS</option>
                            <option value="MCA">MCA</option>
                            <option value="MTECH CS">MTECH CS</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center m-3">
                        
                        <select className="w-25" onChange={onchangehandle} name="semester" >
                            <option value="Semester">Select Semester</option>
                            <option value="1st">1st</option>
                            <option value="2nd">2nd</option>
                            <option value="3rd">3rd</option>
                            <option value="4th">4th</option>
                            <option value="5th">5th</option>
                            <option value="6th">6th</option>
                            <option value="7th">7th</option>
                            <option value="8th">8th</option>
                            <option value="9th">9th</option>
                            <option value="10th">10th</option>
                        </select>
                    </div>
                    <div className="d-flex justify-content-center m-3">
                        <input className="w-25" type="text" name="subject"  onChange={onchangehandle} placeholder="Subject's Name"/>
                    </div>

                    <div className="d-flex justify-content-center m-3">
                        <input className="w-25" type="text" name="teacher"  onChange={onchangehandle} placeholder="Teacher's Name" />
                        
                    </div>
                </div>
                <button className="btn btn-success fs-4" onClick={onClickSubmitHandle}>Submit</button>
            </div>

            <div className="container-fluid bg-light w-50 text-center" style={StyleClass}>
                    <h3>Teacher Name : {Details.teacher}</h3>
                    <h3>Course : {Details.course}</h3>
                    <h3>semester : {Details.semester}</h3>
                    <h3>subject : {Details.subject}</h3>
                    
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

export default AddSubject
