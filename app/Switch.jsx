"use client"

import { useState } from "react";


export default function Log_in_section()
{
    // all tags for creating account
    const   tags = ["coding", "writing", "college studying", "research"];
    // end
    const [isLogIn, setisLogIn] = useState(false);

        function Switch_button()
        {
            setisLogIn(!isLogIn);
        }
        function  log_in_dev()
        {
            return (
            <div className="w-full h-screen bg-[#fcb9b2] flex justify-center items-center">
                <div className="bg-[#fed0bb] min-w-150 min-h-100 max-w-500 p-5 flex flex-col justify-between">
                {/* users */}
                    <div className="flex flex-col gap-5 rounded-sm">
                        <h2 className="text-lg font-bold text-black">user name</h2>
                        <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" type="text" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-lg font-bold text-black">passowrd</h2>
                        <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" type="text" />
                    </div>
                {/* end of users input */}
                <div className="flex flex-col gap-5">
                        <button className="btn border-red-200 btn-active bg-[#6a040f] text-lg hover:bg-[#a53860]">log in</button>
                        <button className="btn btn-outline btn-secondary hover:bg-[#a53860] hover:bg-[#a53860] text-lg" onClick={Switch_button}>Create Acount</button>
                </div>
                </div>
            </div>
            )
        }
 
        function  sign_in_dev()
            {
                return (
                <div className="w-full h-screen bg-[#fcb9b2] flex justify-center items-center">
                    <div className="bg-[#fed0bb] min-w-150 min-h-100 max-w-500 p-5 flex flex-col justify-between">
                    {/* users */}
                        <div className="flex flex-col gap-5 rounded-sm">
                            <h2 className="text-lg font-bold text-black">user s</h2>
                            <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" type="text" />
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="flex flex-col gap-4 w-full">
                                <h2 className="text-lg font-bold text-black">passowrd</h2>
                                <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" type="text" />
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <h2 className="text-lg font-bold text-black">confirme password</h2>
                                <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" type="text" />
                            </div>
                        </div>
                    {/* end of users input */}
                    {/* tags */}

                   <div className="w-full">
                        {tags.map((tag, index) => (
                            <div key={index}>{tag}</div>
                        ))}
                    </div>



                    {/* buttons */}
                    <div className="flex flex-col gap-5">
                            <button className="btn border-red-200 btn-active bg-[#6a040f] text-lg hover:bg-[#a53860]">log in</button>
                            <button className="btn btn-outline btn-secondary hover:bg-[#a53860] hover:bg-[#a53860] text-lg" onClick={Switch_button}>Log into existing acount</button>
                    </div>
                    </div>
                </div>
                )
            }
        return (
        <>
            {isLogIn ? log_in_dev() :  sign_in_dev()}
        </>
        );
}