import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Meeting from './Components/Meeting';
import Create from './Components/Create';
import SignIn from './Components/Signin';
import Join from './Components/Join';
import JoinMeeting from './Components/JoinMeeting';



let payload = {
   // meetingNumber : '98843338498',
    role : 0,
    //sdkKey : 'QWcM6NjHT5G3UIxoGxGhJA',
    sdkSecret : 'jacXyGR2TmdkYNiic5NK5EqG0PhrEh8P',
   // password : 'JHF5vG',
    userName : 'Testing',
    userEmail : '',
    leaveUrl : 'https://localhost:3000'


};

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
    path : '/',
    element : <SignIn/>
    },

    {
        path : '/meeting',
        element : <Meeting payload ={payload}/>
    },

    {
        path : '/create',
        element : <Create/>
    },

    {
        path : '/join',
        element : <Join/>
    },

    {
        path : '/joinMeeting',
        element : <JoinMeeting/>
    },

    // {
    //     path : '/signin',
    //     element : <SignIn/>
    // }


]);
root.render(

   <RouterProvider router={router}></RouterProvider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
