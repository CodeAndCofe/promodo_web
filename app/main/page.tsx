"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Forbidden from "../Gcomponent/Forbidden";
import "../app.css";

export default function DashboardPage() {

  const [user, setUser] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    setUser(storedUser);

    if (storedUser) {
      setPassword(localStorage.getItem(storedUser));
    }
  }, []);


  if (!user || !password) {
    return <Forbidden />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#cde0ff] via-[#e0f0ff] to-[#f8e1f0] flex items-center justify-center p-6">
      Dashboard for user 
    </div>
  );
}