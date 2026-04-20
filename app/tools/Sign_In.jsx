"useclient"
// later handle tags
import { useRef } from "react";

export default  function  Sign_in_dev({Switch_button, tags, callBack, switch_tag, tag_target})
{
            const   password = useRef(null);
            const   username = useRef(null);
            const   cpassword = useRef(null);
            return (
                <div className="w-full h-screen bg-[#fcb9b2] flex justify-center items-center">
                    <div className="bg-[#fed0bb] min-w-150 min-h-100 max-w-500 p-5 flex flex-col justify-between">
                    {/* users */}
                        <div className="flex flex-col gap-5 rounded-sm">
                            <h2 className="text-lg font-bold text-black">user name</h2>
                            <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" ref={username} type="text"  />
                        </div>
                        <div className="flex justify-between gap-5">
                            <div className="flex flex-col gap-4 w-full">
                                <h2 className="text-lg font-bold text-black">passowrd</h2>
                                <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" ref={password} type="text" />
                            </div>
                            <div className="flex flex-col gap-4 w-full">
                                <h2 className="text-lg font-bold text-black">confirme password</h2>
                                <input className="bg-white border-none p-2 rounded-md outline-offset-1 focus:outline-2 outline-red-500" ref={cpassword} type="text" />
                            </div>
                        </div>
                    {/* end of users input */}
                    {/* tags */}
                    <h2 className="p-2 mt-5 font-bold text-lg">chose your reason:</h2>
                    <div className="w-full grid grid-cols-4 gap-4 py-5 ">
                        {tags.map((tag, index) => (
                            <input type="button" 
                                    className={`cursor-pointer px-4 py-2 rounded-full transition-all duration-200 border
                                    ${tag_target === tag
                                    ? "bg-red-500 text-white border-red-500 scale-100 font-bold"
                                    : "bg-white text-gray-700 border-gray-300 hover:bg-red-100 hover:text-red-500"}`}
                                    onClick={()=> switch_tag(tag)}  key={index} value={tag} />
                        ))}
                    </div>

                    {/* buttons */}
                    <div className="flex flex-col gap-5">
                            <button className="btn border-red-200 btn-active bg-[#6a040f] text-lg hover:bg-[#a53860]" onClick={()=> {callBack(username.current?.value, password.current?.value, cpassword.current?.value)}}>Create</button>
                            <button className="btn btn-outline btn-secondary hover:bg-[#a53860] hover:bg-[#a53860] text-lg" onClick={Switch_button}>Log into existing acount</button>
                    </div>
                    </div>
                </div>
        )
}