"use client";
import "./app.css";
import  Log_in_section from "./Switch"
export default  function Home() {

  function  log_in()
  {
    // when user log int and the log in are sucess the user go to home page and can start
    // promodo timer in peace
    // else the user should retry write the username and password
  }

  async function  create_acount(username : string, password : string, tag : string)
  {
      const res = await fetch("/api/signup", {
         headers: {
            "Content-Type": "application/json",
          },
          method: "POST",
          body : JSON.stringify({username : username, password: password, tag: tag})
      });

      const data = await res.json();
      console.log(data);
  }

  async function show_users_table() {
      const res = await fetch("/api/signup", {
         headers: {
            "Content-Type": "application/json",
          },
          method: "GET",
        });

      const data = await res.json();
      console.log(data);
  }

  return (
    <>
      <button className="bg-gray-500 text-xl text-white p-50" onClick={show_users_table}>click</button>
      <Log_in_section SIGNUP={create_acount} LOGIN={log_in}/>
    </>
  );
}
