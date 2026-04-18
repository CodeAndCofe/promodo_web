"use client"

import { useState } from "react";
import { useRef } from "react";
import Log_in_dev from "./tools/Log_In_dev"
import Sign_in_dev from "./tools/Sign_In"
export default function Log_in_section()
{
    // all tags for creating account

    const   tags = ["coding", "writing", "college studying", "research", "work", "exam"];
    // end
    // switch log in user and creating account state
    const [isLogIn, setisLogIn] = useState(false);
   
    const [tag, setTag] = useState("study");


        function Switch_button()
        {
            setisLogIn(!isLogIn);
        }

        function signIn(username, password, cpassword)
        {
            console.log("sign in")
            console.log(username);
        }

        function LogIn(password, username)
        {
            console.log("log in");
            console.log(username);
        }
       
     return (
        <>
            {isLogIn
            ? <Log_in_dev  Switch_button={Switch_button} callBack={LogIn}/>
            : <Sign_in_dev  tags={tags} Switch_button={Switch_button} callBack={signIn} />
            }
        </>
    );

}