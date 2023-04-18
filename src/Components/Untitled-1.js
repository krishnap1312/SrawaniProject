import React from "react";
import "./navcolor.css"
import { useState } from "react";
import { Link } from "react-router-dom";

const AddTeacher = () => {
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    const closeModal = () => {
        setShowModal(false);
    }

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
                        <li className="m-3 p-2 "><Link className="text-decoration-none fs-4" to ="/">Logout</Link></li>
                    </div>
                </ul>
            </nav>
            <div >
            <div className="d-flex">
                <form className="form-control container-xxl w-75 border-danger justify-content-center text-center" onSubmit={handleSubmit}>
                <h1 className="text-center text-bg-warning p-3">Add Teacher</h1>

                    <input className="m-1 fs-3 w-25" type="text" name="teacher's name" placeholder="Enter Name" /><br />
                    <select className="m-1 fs-3 w-25" name="" id="">
                        <option value="Designation">Select Designation</option>
                        <option value="Assistant Professor">Assistant Professor</option>
                        <option value="Professor">Professor</option>
                    </select><br />

                    <input className="m-1 fs-3 w-25" type="text" name="subject" placeholder="Specialization" /><br />
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
                <img src="/Onaddteacherrightside.jpg" alt="" className="me-4" width={300} height={400}/>
                </div>
            </div>

            {showModal && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Teacher Added Successfully!</h2>
                        <button onClick={closeModal}>Close</button>
                    </div>
                </div>
            )}


            <address className="d-flex justify-content-between me-5 ms-5 mt-3">
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