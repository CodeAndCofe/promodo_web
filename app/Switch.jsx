"use client"

import { useState } from "react";
import Log_in_dev from "./tools/Log_In_dev"
import Sign_in_dev from "./tools/Sign_In"
export default function Log_in_section({SIGNUP, LOGIN})
{
        const   tags = ["coding", "writing", "research", "work", "exam", "study"];
        // switch log in user and creating account state
        const [isLogIn, setisLogIn] = useState(false);
   
        const [tag, setTag] = useState("study");


        function    switch_tag(val)
        {
            setTag(val);
        }

        function Switch_button()
        {
            setisLogIn(!isLogIn);
        }

        function signIn(username, password, cpassword)
        {
            if (password != cpassword)
                    return (console.log("passwords arent equals"));
            console.log(tag);
            SIGNUP(username, password, tag);
        }

        function LogIn(password, username)
        {
            console.log("log in");
            console.log(username);
            LOGIN();
        }
       
     return (
        <>
            {isLogIn? <Log_in_dev  Switch_button={Switch_button} callBack={LogIn}/>
            : <Sign_in_dev switch_tag={switch_tag}  tags={tags} tag_target={tag} Switch_button={Switch_button} callBack={signIn} />
            }
        </>
    );

}