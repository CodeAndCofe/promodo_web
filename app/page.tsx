"use client";
import { redirect } from "next/navigation";
import { use, useEffect, useRef, useState } from "react";
import "./app.css";
import  Log_in_section from "./Switch"
export default  function Home() {

  async function  log_in(username : string, password : string)
  {
    const res = await fetch ("/api/login",
      {
        headers:{
          "content-Type" : "application/json"
        },
        method: "POST",
        body: JSON.stringify({
          username: username, password : password
        })
      }
    );

    const response = await res.json();
    if (response.success)
        redirect(`/main`);
  }


  async function  create_acount(username : string, password : string, tag : string)
  {
    console.log(username);
      const res = await fetch("/api/signup", {
         headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body : JSON.stringify({username : username, password: password, tag: tag})
      });

      const data = await res.json();
      if (data.success)
        redirect(`/main`);
      console.log(data);
  }

  return (
    <>
      <Log_in_section SIGNUP={create_acount} LOGIN={log_in}/>
    </>
  );
}
