import { useState } from "react";
import "./index.css";

const Validate = () => {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


  const [errorUserName, setErrorUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");


  const [userColor, setUserColor] = useState("");
  const [emailColor, setEmailColor] = useState("");
  const [passwordColor, setPasswordColor] = useState("");
  const [confirmPasswordColor, setConfirmPasswordColor] = useState("");

  function validate(e) {
    e.preventDefault()

    if(username.length > 8) {
      setErrorUsername("")
      setUserColor("green")
    } else {
      setErrorUsername("Username must be 8 letters long")
      setUserColor("red")
    }
 

  if (email.includes("@gmail.com")) {
    setErrorEmail("")
    setEmailColor("green")
  } else {
    setEmailColor("red")
    setErrorEmail("Email should contain @gmail.com")
  }

  if (password.length > 8) {
    setErrorPassword ("")
    setPasswordColor("green")
  } else {
    setErrorPassword ("Password too short")
    setPasswordColor("red")
  }

  if (password != "" && password == confirmPassword) {
    setErrorConfirmPassword ("")
    setConfirmPasswordColor("green")
  } else {
    setErrorConfirmPassword("Password do not match")
    setConfirmPasswordColor("red")
  }
}

  return (
    <>
       <div className="card lg:bg-lime-800 ">
       <div className="flex flex-row justify-center align-center text-center py-40 md:py-72 lg:py-20 ">
       <div className="card-image">
       <img src="/src/fam.jpg" alt="" className="hidden lg:flex lg:w-[400px] lg:h-[500px]"/>
      </div>


    <form action="" className="bg-white lg:py-[60px] overflow-hidden">
      <h1 className="text-gray-400 text-2xl lg:pt-0 ">Login</h1>
    <input type="text" 
    name="Name" 
    placeholder="Username"
    style={{borderColor:userColor}}
    value={username} 
    onChange={(e) => setUsername(e.target.value)}
    className="w-full lg:w-[400px] py-3 lg:py-2 border-b-2 outline-none px-3"/>

    <p className="error text-red-600 bg-white lg:py-1">{errorUserName}</p>


    <input type="email" 
    name="Email" 
    placeholder="Email"
    style={{borderColor:emailColor}}
    value={email} 
    onChange={(e) => setEmail(e.target.value)}
    className="w-[400px] border-b-2 outline-none px-3 py-3 lg:py-2"/>

    <p className="error text-red-600 bg-white py-1">{errorEmail}</p>


    <input type="password" 
    name="password" 
    placeholder="Password"
    style={{borderColor:passwordColor}}
    value={password} 
    onChange={(e) => setPassword(e.target.value)}
    className="w-[400px] border-b-2 outline-none px-3 py-3 lg:py-2"/>

    <p className="error text-red-600 bg-white py-1">{errorPassword}</p>


    <input type="password" 
    name="confirm Password" 
    placeholder="Confirm Password"
    style={{borderColor:confirmPasswordColor}}
    value={confirmPassword} 
    onChange={(e) => setConfirmPassword(e.target.value)}
    className="w-[400px] border-b-2 outline-none px-3 py-3 lg:py-2"/>

    <p className="error text-red-600 bg-white py-1">{errorConfirmPassword}</p>

    <button className="w-[400px] border px-3 py-3 bg-green-600 text-white font-bold text-xl" onClick={validate}>Submit</button>

  </form>
       </div>
  </div>

    </>
  );
}

export default Validate;






