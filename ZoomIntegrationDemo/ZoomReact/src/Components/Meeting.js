//import { ZoomMtg } from "@zoomus/websdk";

import React, {useEffect, useRef,Fragment} from "react";
import { useLocation } from "react-router-dom";
import Create from "./Create";



const Meeting = ({payload}) => {
    const zoomDiv = useRef(null)
    const location = useLocation();
    const newdata = location?location.state.joinData: "";
debugger;
     // Important Keys for Zoom Integration
    const _sdkKey = "Your_SDK_Key_Here";
    const _sdkSecret = "Your_SDK_Secret_Key_Here";
    const _redirectUrl = "https://localhost:3000/meeting";
    const _username = "Your_Name_Here";
    const _userEmail = "Your_Emailid_Here";


    useEffect (async () => {
        const {ZoomMtg} = await import ("@zoomus/websdk");
        ZoomMtg.setZoomJSLib('https://source.zoom.us/1.9.9/lib' , '/av');
        ZoomMtg.preLoadWasm();
        ZoomMtg.prepareWebSDK();
        ZoomMtg.i18n.load('en-US')
        ZoomMtg.i18n.reload('en-US')    

        ZoomMtg.generateSDKSignature({
            meetingNumber : newdata.meetingId,           
            sdkKey: _sdkKey,
            sdkSecret: _sdkSecret,
            role: 1,
            success : function(signature)
            {              
                ZoomMtg.init({
                   
                    leaveUrl: _redirectUrl,
                    isSupportAV : true,
                    success : function(data)
                    {
                        ZoomMtg.join({
                            meetingNumber : newdata.meetingId,
                            signature:signature.result,
                            sdkKey: _sdkKey, 
                            userName: _username,
                            userEmail: _userEmail,
                            passWord : newdata.password,
                            tk : '',
                            success : function(data){
                                console.log('----- Joined-------');
                            },
                            error: function(error)
                 {
                    console.log(error);
                }
                        })
                    },
                    error: function(error)
                 {
                    console.log(error);
                }
                })
            },
            error: function(error)
            {
                console.log(error);
            }
        })

    },[]);
   
return <div ref = {zoomDiv}></div>;

};

export default Meeting;