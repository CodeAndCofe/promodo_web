'use client';

import { useRef } from "react";

export default function Sign_in_dev({ 
  Switch_button, 
  tags, 
  callBack, 
  switch_tag, 
  tag_target 
}) {
  const username = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex justify-center items-center p-6">
      
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-md p-10">
        
        {/* Motivational Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">Create Account</h1>
          <p className="text-slate-400 mt-3 text-lg">
            Start your study journey today
          </p>
        </div>

        {/* Username */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
          <input 
            ref={username}
            type="text"
            className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-400 transition-all"
            placeholder="Choose a username"
          />
        </div>

        {/* Passwords */}
        <div className="grid grid-cols-2 gap-5 mb-8">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
            <input 
              ref={password}
              type="password"
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-400 transition-all"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">Confirm</label>
            <input 
              ref={cpassword}
              type="password"
              className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-400 transition-all"
              placeholder="Confirm"
            />
          </div>
        </div>

        {/* Tags / Reason */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-300 mb-3">Why are you studying today?</label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {tags.map((tag, index) => (
              <button
                key={index}
                onClick={() => switch_tag(tag)}
                className={`py-3 text-sm font-medium rounded-2xl border transition-all
                  ${tag_target === tag 
                    ? "bg-violet-600 text-white border-violet-600 shadow-md" 
                    : "bg-white/10 border-white/20 text-slate-300 hover:bg-white/20 hover:border-violet-400"}`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => callBack(username.current?.value, password.current?.value, cpassword.current?.value)}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-violet-500/30"
          >
            Create Account & Start Studying
          </button>

          <button 
            onClick={Switch_button}
            className="w-full text-slate-400 font-medium py-4 rounded-2xl border border-white/20 hover:bg-white/5 transition-all"
          >
            Already have an account? Log in
          </button>
        </div>

        {/* Motivational Footer */}
        <p className="text-center text-xs text-slate-500 mt-10">
          Focus • Consistency • Growth
        </p>
      </div>
    </div>
  );
}