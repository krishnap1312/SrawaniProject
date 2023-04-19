import React, { useState } from "react";
import { ThemeProvider } from "react-bootstrap";
import { Link } from "react-router-dom";
import './navcolor.css'

const ExportTimeTable = () => {

    const [oMonday,setoMonday] = useState({
        onePeriod : "Blank Period"})
    const [tMonday,settMonday] = useState({
        twoPeriod : "Blank Period"})
    const [thMonday,setthMonday] = useState({
        threePeriod : "Blank Period"})
    const [fMonday,setfMonday] = useState({
        fourPeriod : "Blank Period",})
    const [fiMonday,setfiMonday] = useState({
        fivePeriod : "Blank Period"})
    const [sMonday,setsMonday] = useState({
        sixPeriod : "Blank Period"})
    const [seMonday,setseMonday] = useState({
        sevenPeriod : "Blank Period",})
    const [eMonday,seteMonday] = useState({
        eightPeriod : "Blank Period",
    })

    const [oTuesday,setoTuesday] = useState({
        onePeriod : "Blank Period"})
    const [tTuesday,settTuesday] = useState({
        twoPeriod : "Blank Period"})
    const [thTuesday,setthTuesday] = useState({
        threePeriod : "Blank Period"})
    const [fTuesday,setfTuesday] = useState({
        fourPeriod : "Blank Period",})
    const [fiTuesday,setfiTuesday] = useState({
        fivePeriod : "Blank Period"})
    const [sTuesday,setsTuesday] = useState({
        sixPeriod : "Blank Period"})
    const [seTuesday,setseTuesday] = useState({
        sevenPeriod : "Blank Period",})
    const [eTuesday,seteTuesday] = useState({
        eightPeriod : "Blank Period",
    })

    const [oWednesday,setoWednesday] = useState({
        onePeriod : "Blank Period"})
    const [tWednesday,settWednesday] = useState({
        twoPeriod : "Blank Period"})
    const [thWednesday,setthWednesday] = useState({
        threePeriod : "Blank Period"})
    const [fWednesday,setfWednesday] = useState({
        fourPeriod : "Blank Period",})
    const [fiWednesday,setfiWednesday] = useState({
        fivePeriod : "Blank Period"})
    const [sWednesday,setsWednesday] = useState({
        sixPeriod : "Blank Period"})
    const [seWednesday,setseWednesday] = useState({
        sevenPeriod : "Blank Period",})
    const [eWednesday,seteWednesday] = useState({
        eightPeriod : "Blank Period",
    })

    const [oThursday,setoThursday] = useState({
        onePeriod : "Blank Period"})
    const [tThursday,settThursday] = useState({
        twoPeriod : "Blank Period"})
    const [thThursday,setthThursday] = useState({
        threePeriod : "Blank Period"})
    const [fThursday,setfThursday] = useState({
        fourPeriod : "Blank Period",})
    const [fiThursday,setfiThursday] = useState({
        fivePeriod : "Blank Period"})
    const [sThursday,setsThursday] = useState({
        sixPeriod : "Blank Period"})
    const [seThursday,setseThursday] = useState({
        sevenPeriod : "Blank Period",})
    const [eThursday,seteThursday] = useState({
        eightPeriod : "Blank Period",
    })

    const [oFriday,setoFriday] = useState({
        onePeriod : "Blank Period"})
    const [tFriday,settFriday] = useState({
        twoPeriod : "Blank Period"})
    const [thFriday,setthFriday] = useState({
        threePeriod : "Blank Period"})
    const [fFriday,setfFriday] = useState({
        fourPeriod : "Blank Period",})
    const [fiFriday,setfiFriday] = useState({
        fivePeriod : "Blank Period"})
    const [sFriday,setsFriday] = useState({
        sixPeriod : "Blank Period"})
    const [seFriday,setseFriday] = useState({
        sevenPeriod : "Blank Period",})
    const [eFriday,seteFriday] = useState({
        eightPeriod : "Blank Period",
    })

    const [oSaturday,setoSaturday] = useState({
        onePeriod : "Blank Period"})
    const [tSaturday,settSaturday] = useState({
        twoPeriod : "Blank Period"})
    const [thSaturday,setthSaturday] = useState({
        threePeriod : "Blank Period"})
    const [fSaturday,setfSaturday] = useState({
        fourPeriod : "Blank Period",})
    const [fiSaturday,setfiSaturday] = useState({
        fivePeriod : "Blank Period"})
    const [sSaturday,setsSaturday] = useState({
        sixPeriod : "Blank Period"})
    const [seSaturday,setseSaturday] = useState({
        sevenPeriod : "Blank Period",})
    const [eSaturday,seteSaturday] = useState({
        eightPeriod : "Blank Period",
    })
    

    const OnChangeOMonday = () =>{
        const value = prompt("Enter Period")
        setoMonday({onePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTMonday = () =>{
        const value = prompt("Enter Period")
        settMonday({twoPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTHMonday = () =>{
        const value = prompt("Enter Period")
        setthMonday({threePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFMonday = () =>{
        const value = prompt("Enter Period")
        setfMonday({fourPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFIMonday = () =>{
        const value = prompt("Enter Period")
        setfiMonday({fivePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSMonday = () =>{
        const value = prompt("Enter Period")
        setsMonday({sixPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSeMonday = () =>{
        const value = prompt("Enter Period")
        setseMonday({sevenPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeEMonday = () =>{
        const value = prompt("Enter Period")
        seteMonday({eightPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    
    const OnChangeOTuesday = () =>{
        const value = prompt("Enter Period")
        setoTuesday({onePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTTuesday = () =>{
        const value = prompt("Enter Period")
        settTuesday({twoPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTHTuesday = () =>{
        const value = prompt("Enter Period")
        setthTuesday({threePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFTuesday = () =>{
        const value = prompt("Enter Period")
        setfTuesday({fourPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFITuesday = () =>{
        const value = prompt("Enter Period")
        setfiTuesday({fivePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSTuesday = () =>{
        const value = prompt("Enter Period")
        setsTuesday({sixPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSeTuesday = () =>{
        const value = prompt("Enter Period")
        setseTuesday({sevenPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeETuesday = () =>{
        const value = prompt("Enter Period")
        seteTuesday({eightPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }

    const OnChangeOWednesday = () =>{
        const value = prompt("Enter Period")
        setoWednesday({onePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTWednesday = () =>{
        const value = prompt("Enter Period")
        settWednesday({twoPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTHWednesday = () =>{
        const value = prompt("Enter Period")
        setthWednesday({threePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFWednesday = () =>{
        const value = prompt("Enter Period")
        setfWednesday({fourPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFIWednesday = () =>{
        const value = prompt("Enter Period")
        setfiWednesday({fivePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSWednesday = () =>{
        const value = prompt("Enter Period")
        setsWednesday({sixPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSeWednesday = () =>{
        const value = prompt("Enter Period")
        setseWednesday({sevenPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeEWednesday = () =>{
        const value = prompt("Enter Period")
        seteWednesday({eightPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }

    const OnChangeOThursday = () =>{
        const value = prompt("Enter Period")
        setoThursday({onePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTThursday = () =>{
        const value = prompt("Enter Period")
        settThursday({twoPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTHThursday = () =>{
        const value = prompt("Enter Period")
        setthThursday({threePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFThursday = () =>{
        const value = prompt("Enter Period")
        setfThursday({fourPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFIThursday = () =>{
        const value = prompt("Enter Period")
        setfiThursday({fivePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSThursday = () =>{
        const value = prompt("Enter Period")
        setsThursday({sixPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSeThursday = () =>{
        const value = prompt("Enter Period")
        setseThursday({sevenPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeEThursday = () =>{
        const value = prompt("Enter Period")
        seteThursday({eightPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }

    const OnChangeOFriday = () =>{
        const value = prompt("Enter Period")
        setoFriday({onePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTFriday = () =>{
        const value = prompt("Enter Period")
        settFriday({twoPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTHFriday = () =>{
        const value = prompt("Enter Period")
        setthFriday({threePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFFriday = () =>{
        const value = prompt("Enter Period")
        setfFriday({fourPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFIFriday = () =>{
        const value = prompt("Enter Period")
        setfiFriday({fivePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSFriday = () =>{
        const value = prompt("Enter Period")
        setsFriday({sixPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSeFriday = () =>{
        const value = prompt("Enter Period")
        setseFriday({sevenPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeEFriday = () =>{
        const value = prompt("Enter Period")
        seteFriday({eightPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }

    const OnChangeOSaturday = () =>{
        const value = prompt("Enter Period")
        setoSaturday({onePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTSaturday = () =>{
        const value = prompt("Enter Period")
        settSaturday({twoPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeTHSaturday = () =>{
        const value = prompt("Enter Period")
        setthSaturday({threePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFSaturday = () =>{
        const value = prompt("Enter Period")
        setfSaturday({fourPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeFISaturday = () =>{
        const value = prompt("Enter Period")
        setfiSaturday({fivePeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSSaturday = () =>{
        const value = prompt("Enter Period")
        setsSaturday({sixPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeSeSaturday = () =>{
        const value = prompt("Enter Period")
        setseSaturday({sevenPeriod : value})
        alert("Subject and Teacher Added Successfully")
    }
    const OnChangeESaturday = () =>{
        const value = prompt("Enter Period")
        seteSaturday({eightPeriod : value})
        alert("Subject and Teacher Added Successfully")
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



                <h1 className="text-center">TIME TABLE</h1>
            <table border="5" cellspacing="0" align="center" className="table-bordered">
                <tr className="border-2">
                    <td align="center" height="50" width="100">
                        <b>Day/Period</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>9:00-9:55</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>9:55-10:45</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>10:45-11:35</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>11:35-12:25</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>12:25-1:15</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>1:15-2:05</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>2:05-2:55</b>
                    </td>
                    <td align="center" height="50" width="100">
                        <b>2:55-3:45</b>
                    </td>
                </tr>
                
                <tr className="border-2">
                    <td align="center" className="border text-black border-dark p-3 " height="50"><b className="text-danger">Monday</b></td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeOMonday}>{oMonday.onePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTMonday}>{tMonday.twoPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTHMonday}>{thMonday.threePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFMonday} height="50">{fMonday.fourPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFIMonday} height="50">{fiMonday.fivePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSMonday}>{sMonday.sixPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSeMonday}>{seMonday.sevenPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeEMonday}>{eMonday.eightPeriod}</td>
                </tr>
                <tr className="border-2">
                    <td align="center" className="border text-black border-dark p-3 " height="50"><b className="text-danger">Tuesday</b></td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeOTuesday}>{oTuesday.onePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTTuesday}>{tTuesday.twoPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTHTuesday}>{thTuesday.threePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFTuesday} height="50">{fTuesday.fourPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFITuesday} height="50">{fiTuesday.fivePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSTuesday}>{sTuesday.sixPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSeTuesday}>{seTuesday.sevenPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeETuesday}>{eTuesday.eightPeriod}</td>
                </tr>
                <tr className="border-2">
                    <td align="center" className="border text-black border-dark p-3 " height="50"><b className="text-danger">Wednesday</b></td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeOWednesday}>{oWednesday.onePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTWednesday}>{tWednesday.twoPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTHWednesday}>{thWednesday.threePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFWednesday} height="50">{fWednesday.fourPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFIWednesday} height="50">{fiWednesday.fivePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSWednesday}>{sWednesday.sixPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSeWednesday}>{seWednesday.sevenPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeEWednesday}>{eWednesday.eightPeriod}</td>
                </tr>
                <tr className="border-2">
                    <td align="center" className="border text-black border-dark p-3 " height="50"><b className="text-danger">Thursday</b></td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeOThursday}>{oThursday.onePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTThursday}>{tThursday.twoPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTHThursday}>{thThursday.threePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFThursday} height="50">{fThursday.fourPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFIThursday} height="50">{fiThursday.fivePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSThursday}>{sThursday.sixPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSeThursday}>{seThursday.sevenPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeEThursday}>{eThursday.eightPeriod}</td>
                </tr>
                <tr className="border-2">
                    <td align="center" className="border text-black border-dark p-3 " height="50"><b className="text-danger">Friday</b></td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeOFriday}>{oFriday.onePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTFriday}>{tFriday.twoPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTHFriday}>{thFriday.threePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFFriday} height="50">{fFriday.fourPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFIFriday} height="50">{fiFriday.fivePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSFriday}>{sFriday.sixPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSeFriday}>{seFriday.sevenPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeEFriday}>{eFriday.eightPeriod}</td>
                </tr>
                <tr className="border-2">
                    <td align="center" className="border text-black border-dark p-3 " height="50"><b className="text-danger">Saturday</b></td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeOSaturday}>{oSaturday.onePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTSaturday}>{tSaturday.twoPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeTHSaturday}>{thSaturday.threePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFSaturday} height="50">{fSaturday.fourPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " onClick={OnChangeFISaturday} height="50">{fiSaturday.fivePeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSSaturday}>{sSaturday.sixPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeSeSaturday}>{seSaturday.sevenPeriod}</td>
                    <td align="center" className="border text-black border-dark p-3 " height="50" onClick={OnChangeESaturday}>{eSaturday.eightPeriod}</td>
                </tr>
            </table>



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

export default ExportTimeTable