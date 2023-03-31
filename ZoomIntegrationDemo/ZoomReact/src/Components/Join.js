import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import Meeting from './Meeting';

const Join = () => {
    const [joinUrl, setJoinUrl] = useState();
    const [meetingId, setMeetingId] = useState();
    const [passcode, setPasscode] = useState();

    useEffect ( () => {

    setJoinUrl(window.localStorage?.getItem("joinUrl"))
    setMeetingId(window.localStorage?.getItem("meetingId"))
    setPasscode(window.localStorage?.getItem("passcode"))

    },[])


    return (
        <div className='col-lg-4 col-12 mx-auto'>
           
            <div className="zoom_demo w-100 my-4">

<div className='head d-flex flex-wrap'>
   
</div>


<div className="meeting-box">

  

    <ul>
        <li><label className="m-0" for="show">Join Link : </label><span>{joinUrl?joinUrl:"Nothing"}</span></li>
        <li><label className="m-0" for="show">Meeting Id : </label><span>{meetingId? meetingId : ""}</span></li>
        <li><label className="m-0" for="show">PassCode : </label><span>{passcode? passcode : ""}</span></li>

        <Link to={"/joinMeeting"}
         state={{ MeetingId: meetingId }}>
        <button className="btn btn-primary ms-2">Join Now</button>
        </Link>
       
        
    </ul>
    </div>

    </div>
    </div>
        
    )




}

export default Join;