"use client";

import { useRef } from "react";

export default function Log_In_Dev({Switch_button, callBack})
{
        const   password = useRef(null);
        const   username = useRef(null);
     return (
            <div className="w-full h-screen bg-[#fcb9b2] flex justify-center items-center">
                <div className="bg-[#fed0bb] min-w-150 min-h-100 max-w-500 p-5 flex flex-col justify-between">
                {/* users */}
                    <div className="flex flex-col gap-5 rounded-sm">
                        <h2 className="text-lg font-bold text-black">user name</h2>
                        <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" ref={username} type="text" />
                    </div>
                    <div className="flex flex-col gap-5">
                        <h2 className="text-lg font-bold text-black">passowrd</h2>
                        <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" ref={password} type="text" />
                    </div>
                {/* end of users input */}
                <div className="flex flex-col gap-5">
                        <button className="btn border-red-200 btn-active bg-[#6a040f] text-lg hover:bg-[#a53860]" onClick={()=> callBack(username.current?.value, password.current?.value)}>log in</button>
                        <button className="btn btn-outline btn-secondary hover:bg-[#a53860] hover:bg-[#a53860] text-lg" onClick={Switch_button}>Create Acount</button>
                </div>
                </div>
            </div>
        )
}