import React from "react";
import "./navcolor.css"
import { Link } from "react-router-dom";
import { useState } from "react";
const AddTeacher = () => {

    const [StyleClass, setStyleClass] = useState({display: "none"})

    const [TeacherDetails, SetTeacherDetails ] = useState({
        teacherName : "",
        Designation : "",
        Specialization : "",
    })
    const [Newteacher ,SetNewTeacher] =useState({
        NewteacherName : "",
        NewDesignation : "",
        NewSpecialization : "",
    })

    const OnChangeHandle = (event) =>{
        const {name, value} = event.target;
        SetTeacherDetails((preval)=>{
            return{
                ...preval,
                [name] : value
            }
        })
    }

    

    const HandleSubmit = (event) =>{
        event.preventDefault();
        SetNewTeacher({
            NewteacherName : TeacherDetails.teacherName,
            NewDesignation : TeacherDetails.Designation,
            NewSpecialization : TeacherDetails.Specialization,
        })
        setStyleClass({display: ""})
        alert(
            `
            Teacher Name : ${TeacherDetails.teacherName}\n
            Designation of Teacher : ${TeacherDetails.Designation}\n
            Specialization of Teacher : ${TeacherDetails.Specialization}`)

    }

    return (
        <div className="container-fluid">
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
            <div >
            <div className="d-flex">
                <form className="form-control container-xxl w-75 border-danger justify-content-center text-center" >
                <h1 className="text-center text-bg-warning p-3">Add Teacher</h1>

                    <input className="m-1 fs-3 w-25" type="text" name="teacherName" onChange={OnChangeHandle} value={TeacherDetails.teacherName} placeholder="Enter Name" /><br />
                    <select className="m-1 fs-3 w-25" name="Designation" onChange={OnChangeHandle} value={TeacherDetails.Designation} id="">
                        <option value="Designation">Select Designation</option>
                        <option value="Assistant Professor">Assistant Professor</option>
                        <option value="Professor">Professor</option>
                    </select><br />

                    <input className="m-1 fs-3 w-25" type="text" name="Specialization" onChange={OnChangeHandle} value={TeacherDetails.Specialization} placeholder="Specialization" /><br />
                    <button className="btn btn-primary" onClick={HandleSubmit} >Submit </button>
                </form>
                <img src="/Onaddteacherrightside.jpg" alt="" className="ms-5" width={300} height={400}/>
                </div>

                <div className="container-fluid bg-light w-50 text-center" style={StyleClass}>
                    <h3>Teacher Name : {Newteacher.NewteacherName}</h3>
                    <h3>Teacher Designation : {Newteacher.NewDesignation}</h3>
                    <h3>Teacher Specialization : {Newteacher.NewSpecialization}</h3>
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
export default AddTeacher