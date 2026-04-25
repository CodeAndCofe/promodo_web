"use client"
import { redirect } from "next/navigation";
import { useRef } from "react";
import "../../app.css"

export default function Login()
{
	const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
	async function log_in(user : string, pass : string)
    {
		const response = await fetch("/api/login", {
            method : "post",
            headers :{
            	"Contnet-Type" : "application/json"
            },
            body: JSON.stringify({
                username : user,
                password : pass,
            })   
        })
        const data = await response.json();
        console.log(data.message);
        if (data.ok)
        {
            redirect("/main");
        }
      }

      return (
        <div className="h-screen w-full bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center p-4">
          <div className="p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm w-full max-w-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Welcome Back</h2>
            
            <div className="flex flex-col gap-4">
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-700">Username</legend>
                <input 
				  ref={username}
                  type="text" 
                  className="input input-bordered w-full" 
                  placeholder="Enter your username"
                />
              </fieldset>
              
              <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-700">Password</legend>
                <input
				  ref={password}
                  type="password" 
                  className="input input-bordered w-full" 
                  placeholder="Minimum 6 digits"
                />
              </fieldset>
              
              <button className="btn btn-accent w-full mt-4" onClick={()=>{log_in(username.current?.value || "", password.current?.value || "")}}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      );
}