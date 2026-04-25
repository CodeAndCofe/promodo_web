"use client"
import "../../app.css"
import { redirect } from "next/navigation";
import { useRef, useState } from "react";
export default  function signup()
{
    // show error if user inpits are incorrect for secounds : 
    const [error, setError] = useState<boolean>(false);
    const [error_text, setError_text] = useState<string>("");
    // end of variables
    const username = useRef<HTMLInputElement>(null);
    const password = useRef<HTMLInputElement>(null);
    const confirme_password = useRef<HTMLInputElement>(null);
    const tag = useRef<HTMLSelectElement>(null);

    async function sending_data(user : string | null, u_pass : string | null, u_confirme : string | null, u_tag : string | null)
    {
        const response = await fetch("/api/signup", {
            method : "post",
            headers :{
                "Contnet-Type" : "application/json"
            },
            body: JSON.stringify({
                username : user,
                password : u_pass,
                pass_conf: u_confirme,
                tag : u_tag
            })   
        })
        const data = await response.json();

        if (data.ok)
        {
            redirect("/main");
        }
    }

    return (
    <div className="h-screen w-full bg-gradient-to-br from-gray-100 to-gray-300 flex justify-center items-center p-4">
      <div className="p-8 rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Create Account</h2>
            <fieldset className="fieldset">
                <legend className="fieldset-legend text-gray-700">username</legend>
                <input
                ref={username} 
                type="text" 
                className="input input-bordered w-full" 
                placeholder="Minimum 6 digits"
                />
            </fieldset>
            <div className="flex flex-col gap-4 mt-4">
                <div className="flex gap-2">
                    <fieldset className="fieldset">
                            <legend className="fieldset-legend text-gray-700">password</legend>
                            <input
                            ref={password} 
                            type="password" 
                            className="input input-bordered w-full" 
                            placeholder="Enter your username"
                            />
                    </fieldset>
                    <fieldset className="fieldset">
                            <legend className="fieldset-legend text-gray-700">confirme</legend>
                            <input
                            ref={confirme_password}
                            type="password" 
                            className="input input-bordered w-full" 
                            placeholder="Enter your username"
                            />
                    </fieldset>
                </div>
            <select ref={tag} defaultValue="study" className="select select-accent w-full outline-none">
                <option disabled={true}>what bring you here</option>
                <option>study</option>
                <option>coding</option>
                <option>working</option>
            </select>
            </div>
          <button className="btn btn-accent w-full mt-4" onClick={()=>{
            sending_data(
                username.current?.value || null,
                password.current?.value || null,
                confirme_password.current?.value || null,
                tag.current?.value || null
            )}}>
            Sign In
          </button>
        </div>
      </div>
  );
}