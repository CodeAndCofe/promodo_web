"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import "../app.css";

export default function DashboardPage() {

  useEffect( () =>
    {
      req();
    }, [])

  const req = async ()=>
  {
      const res = await fetch ("/api/test", {
        method : "get",
      })    
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cde0ff] via-[#e0f0ff] to-[#f8e1f0] flex items-center justify-center p-6">
      Dashboard for user 
    </div>
  );
}