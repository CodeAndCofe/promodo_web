'use client';

import { useRef } from "react";

export default function Log_In_Dev({ Switch_button, callBack }) {
  const username = useRef(null);
  const password = useRef(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 flex justify-center items-center p-6">
      
      <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl w-full max-w-md p-10">
        
        {/* Motivational Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white tracking-tight">Ready to Study?</h1>
          <p className="text-slate-400 mt-3 text-lg">
            Log in and start your focused session
          </p>
        </div>

        {/* Username */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-slate-300 mb-2">Username</label>
          <input 
            ref={username}
            type="text"
            className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-400 transition-all"
            placeholder="Enter your username"
          />
        </div>

        {/* Password */}
        <div className="mb-8">
          <label className="block text-sm font-medium text-slate-300 mb-2">Password</label>
          <input 
            ref={password}
            type="password"
            className="w-full px-5 py-4 bg-white/10 border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:border-violet-400 transition-all"
            placeholder="Enter your password"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-4">
          <button 
            onClick={() => callBack(username.current?.value, password.current?.value)}
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-violet-500/30"
          >
            Start Studying
          </button>

          <button 
            onClick={Switch_button}
            className="w-full text-slate-400 font-medium py-4 rounded-2xl border border-white/20 hover:bg-white/5 transition-all"
          >
            New here? Create Account
          </button>
        </div>

        {/* Study Motivation Footer */}
        <p className="text-center text-xs text-slate-500 mt-10">
          Stay focused • One session at a time
        </p>
      </div>
    </div>
  );
}