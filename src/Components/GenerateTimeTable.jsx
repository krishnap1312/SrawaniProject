import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./navcolor.css"
const GenerateTimeTable = () => {

    const [GenerateTT, SetGenerateTT] = useState({
        courseName : "" ,
        courseCode : "" ,
        semester : "" ,
        subject1 : "" ,
        subject2 : "" ,
        subject3 : "" ,
        subject4 : "" ,
    })
    const [ModalGenerateTT, ModalSetGenerateTT] = useState({
        ModalcourseName : "" ,
        ModalcourseCode : "" ,
        Modalsemester : "" ,
        Modalsubject1 : "" ,
        Modalsubject2 : "" ,
        Modalsubject3 : "" ,
        Modalsubject4 : "" ,
    })

    const OnChangeFormHandle = (event) =>{
        const {name,value} = event.target;
        SetGenerateTT((preval) =>{
            return{
                ...preval,
                [name] : value
            }
        })
        
    }

    const OnSubmitHandle = (event) =>{
        event.preventDefault();
        ModalSetGenerateTT({
            ModalcourseName : GenerateTT.courseName,
            ModalcourseCode : GenerateTT.courseCode,
            Modalsemester : GenerateTT.semester,
            Modalsubject1 : GenerateTT.subject1,
            Modalsubject2 : GenerateTT.subject2,
            Modalsubject3 : GenerateTT.subject3,
            Modalsubject4 : GenerateTT.subject4,
        })
    }

    return (
        <div className="container-lg-fluid">
            <nav className="bg-light">
                <ul className="d-flex justify-content-center list-unstyled text-decoration-none">
                    <img src="./KALINGA LOGO.png" width={300} height={130} alt="" />
                    <div className="d-flex m-2 p-2">
                        <li><img src="" alt="" /></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none justify-content-center fs-4" to="/AddTeacher">Add Teacher</Link></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none justify-content-center fs-4" to="/AddCourse">Add Course</Link></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none justify-content-center fs-4" to="/AddSubject">Add Subject</Link></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none justify-content-center fs-4" to="/GenerateTimetable">Generate Timetable</Link></li>
                        <li className="m-3 p-2 "><Link className="text-decoration-none fs-4" to ="/">Logout</Link></li>
                    </div>
                </ul>
            </nav>
            <div className="containre d-flex justify-content-center ">
                    <img src="Ongeneratetimetableleftside.jpg" className="m-4" width={400} alt="img" />
                <form action=""  className="" >
                    <input className="m-1 fs-4 text-center rounded-4" onChange={OnChangeFormHandle} type="text" placeholder="Course Name" name="courseName" /><br />
                    <input className="m-1 fs-4 text-center rounded-4" onChange={OnChangeFormHandle} type="text" placeholder="Course Code" name="courseCode" /><br />
                    <input className="m-1 fs-4 text-center rounded-4" onChange={OnChangeFormHandle} type="text" placeholder="Semester" name="semester" max="10" min="1" /><br />
                    <input className="m-1 fs-4 text-center rounded-4" onChange={OnChangeFormHandle} type="text" placeholder="Subject 1" name="subject1" /><br />
                    <input className="m-1 fs-4 text-center rounded-4" onChange={OnChangeFormHandle} type="text" placeholder="Subject 2" name="subject2" /><br />
                    <input className="m-1 fs-4 text-center rounded-4" onChange={OnChangeFormHandle} type="text" placeholder="Subject 3" name="subject3" /><br />
                    <input className="m-1 fs-4 text-center rounded-4" onChange={OnChangeFormHandle} type="text" placeholder="Subject 4" name="subject4" /><br />
                    <Link  className="m-1 fs-4 text-center rounded-4" onChange={OnChangeFormHandle} to ="/ExportTimeTable">Time Table</Link><br />
                    <button onClick={OnSubmitHandle} className="btn btn-success w-50 fs-5 fw-bolder float-end me-2">Submit</button>
                </form>
                <img src="Ongeneratetimetablerightside.jpg" className="m-4" width={400} alt="img" />

            </div>
            <ol>
                <li>{ModalGenerateTT.ModalcourseCode}</li>
            </ol>
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
export default GenerateTimeTable