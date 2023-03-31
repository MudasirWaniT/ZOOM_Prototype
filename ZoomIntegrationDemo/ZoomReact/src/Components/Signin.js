import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";


const SignIn = () => {
    const[emailId,setEmailId]=  useState();
    const[password,setPassword]=  useState();
    const[loggedIn,setLoggedIn]=  useState();
    const [comingData, setComingData] = useState([]);
    let navigate = useNavigate();
   

    const handleSignIn = async () => {
        debugger;
        const response = await axios.post('https://localhost:44375/Create',{
            EmailId: "emailId",
            Password: "password"
        
     } )

        .then(response => {
            debugger;
            setComingData(response.data);
            setLoggedIn(response.data.isLoggedIn);
            if (response.data.isLoggedIn) {
                navigate('/create');
            }
           
        })
       
    }


    return(
        <div className= "zoom_demo">
             <section className="auth-section d-flex flex-wrap login-page min-vh-100 ">
                 <div className="d-flex align-items-center flex-wrap flex w-100">
                     <div className="container">
                         <div className="row">
                         <div className="col-lg-6 col-12 mx-auto right-section">
                            <div className="card auth-card login-card">
                                <h4>Welcome to Zoom</h4>

                                <div className="row">
                                <div className="col-sm-12">
                                            <div className="form-group">
                                            <label>EmailId <span className="required-fields text-danger"> * </span></label>
                                            <input name="emailid" className="form-control" placeholder="Enter EmailId"
                                                        type="text" maxLength={50} value= {emailId} onChange={(e) => { setEmailId(e.target.value)
                                                              
                                                              
                                                              }}>
                                                             
                                                        </input>
                                              
                                                </div>


                                                <div className="form-group">
                                                <label>Password <span className="required-fields text-danger"> * </span> </label>
                                                <input name="password" className="form-control" placeholder="Enter Password"
                                                        type="password" maxLength={50} value= {password}  onChange={(e) => 
                                                            { setPassword(e.target.value)
                                                           
                                                          
                                                        }} >
                                            
                                                        </input>
                                               
                                                </div>

                                                </div>

                                                <div className="d-flex w-100 align-items-center justify-content-between">
                                                <button className="btn btn-primary"  onClick={
                                                    () => {
                                                        handleSignIn()
                                                        
                                                       
                                                        
                                                       
                                                    }}>Sign In</button>
                                            </div>




                                    </div>
                               
                          </div>
                          </div>
                            </div>
                        </div>
                 </div>
    

                </section>
                </div>
                        
        
    )





}
export default SignIn;