import React from 'react';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {Link, useNavigate} from "react-router-dom";
import Meeting from './Meeting';

const Create = () => {
    const [comingData, setComingData] = useState();
    const [startUrl, setStartUrl] = useState();
    const [joinUrl, setJoinUrl] = useState();
    const [message, setMessage] = useState();
    const [meetingId, setMeetingId] = useState();
    const [passcode, setPasscode] = useState();
    let navigate = useNavigate();

    const createMeetingLink = async () => {
        debugger;
        
        const response = await axios.get('https://localhost:44375/Create')

            .then(response => {
                debugger;
                
                setComingData(response.data);
                setStartUrl(response.data.startUrl);
                setJoinUrl(response.data.joinUrl);
                setMessage(response.data.message);
                setMeetingId(response.data.meetingId);
                setPasscode(response.data.password);
                window.localStorage.setItem("joinUrl",response.data.joinUrl )
                window.localStorage.setItem("meetingId",response.data.meetingId)
                window.localStorage.setItem("passcode",response.data.password)

            })


    }

    const handleJoin =  () => {
        if(message){
            navigate('/meeting' ,{"joinData" :comingData});

        }


        
    }

    return (
        <div className='col-lg-4 col-12 mx-auto'>
           
            <div className="zoom_demo w-100 my-4">

<div className='head d-flex flex-wrap'>
    <h3>Create a Meeting</h3>
    <button className="btn btn-primary ms-auto" onClick={() => createMeetingLink()}>Create</button>
</div>


<div className="meeting-box">

   { message? <label className='message-alert'>{message}</label> : ""}

    <ul>
        <li><label className="m-0" for="show">Join Link : </label><span>{joinUrl}</span></li>
        <li><label className="m-0" for="show">Meeting Id : </label><span>{meetingId}</span></li>
        <li><label className="m-0" for="show">PassCode : </label><span>{passcode}</span></li>
        {/* <Link to={joinUrl} target="_blank">
        <button className="btn btn-primary">Start Now</button>
        </Link> */}
        <Link to={"/meeting"}
         state={{ joinData: comingData }}>
        <button className="btn btn-primary ms-2">Start Now</button>
        </Link>
        
    </ul>
</div>

</div>
        </div>
    )









}

export default Create;
