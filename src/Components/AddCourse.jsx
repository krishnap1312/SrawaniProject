import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navcolor.css"

const AddCourse = () => {
    const [StyleClass, setStyleClass] = useState({display: "none"})
    const [Details, setDetails] = useState({
        course : "",
        teacher : "",
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
        alert(`Course Name : ${Details.course}\n Course Teacher : ${Details.teacher}`)
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

            <div className=" justify-content-center text-center ">
            <img src="/OnaddCourseleftside.jpg" width={400} alt="" />
                <div>
                <select className="fs-3 fw-bolder m-3" name="course" onChange={onchangehandle}>
                    <option value="Course">Select Course</option>
                    <option value="BSC CS">BSC CS</option>
                    <option value="BCA">BCA</option>
                    <option value="BTECH CS">BTECH CS</option>
                    <option value="MSC CS">MSC CS</option>
                    <option value="MCA">MCA</option>
                    <option value="MTECH CS">MTECH CS</option>
                </select><br />
                </div>
                <div>
                
                <select className="fs-3 fw-bolder m-3" name="teacher" onChange={onchangehandle}>
                    <option value="Semester">Select Teacher Name</option>
                    <option value="Dr Asha Ambhikar">Dr Asha Ambhikar</option>
                    <option value="Akanksha Mishra">Akanksha Mishra</option>
                    <option value="Shilpi Chaubey">Shilpi Chaubey</option>
                    <option value="Pawan Kumar Jaiswal">Pawan Kumar Jaiswal</option>
                    <option value="Proshanta Sarkar">Proshanta Sarkar</option>
                    <option value="Om Prakash Dewangan">Om Prakash Dewangan</option>
                    <option value="Kamlesh Sahu">Kamlesh Sahu</option>
                    <option value="Taruna Chopra">Taruna Chopra</option>
                    <option value="Kirti Nahak">Kirti Nahak</option>
                </select>
                </div>
            <button className="btn btn-success fs-4" onClick={onClickSubmitHandle}>Submit</button>
            </div>

            <div className="container-fluid bg-light w-50 text-center" style={StyleClass}>
                    <h3>Teacher Name : {Details.teacher}</h3>
                    <h3>Course : {Details.course}</h3>
                    
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
export default AddCourse