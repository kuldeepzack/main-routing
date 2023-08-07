import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"

const countries = ["USA", "Canada", "UK", "Australia", "India"];

function LoginPage() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [college, setCollege] = useState("");

  const handleLogin = () => {
    navigate("/Showhide");
    console.log("Logged in");
  };

  const handleSubmit = (e) => {
    navigate("/api");
    e.preventDefault();
    console.log("Form submitted");
    setSubmitted(true);
  };

  return (
    <div className="main_container">
    <div className="pages">
      <div className=" row ">
        <div className="col-md-6"><div className="log-pages">
          
          {submitted ? (
            <div className="log-container">

              <p>User ID: {userId}</p>
              <p>Password: {password}</p>
            </div>
          ) : (
            <div className="log-container">
              <h2>Login Page</h2>
              <form onSubmit={handleSubmit}>
                <label>User ID:</label>
                <input
                  type="text"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                />
                <label>Password:</label>
                <input
                  type="text"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

              </form>
                <button className=" mkk" onClick={handleLogin}>Login</button>
            </div>
          )}
        </div> </div>
        <div className="col-md-6">
          {submitted && (
            <div className="sub-pages">
              <p>User Details Form</p>
              <p>Name: {name}</p>
              <p>Last Name: {lastName}</p>
              <p>College: {college}</p>
              <p>Email: {email}</p>
              <p>Country: {country}</p>
            </div>
          )}

          {!submitted && (
            <div className="sub-pages">
              <form onSubmit={handleSubmit}>
                <h2>User Details Form</h2>
                <label>Name:</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />

                <label>Last Name:</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />

                <label>College:</label>
                <input
                  type="text"
                  value={college}
                  onChange={(e) => setCollege(e.target.value)}
                />

                <label>Email:</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <label>Country:</label>
                <select value={country} onChange={(e) => setCountry(e.target.value)}>
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country} value={country}>
                      {country}
                    </option>
                  ))}
                </select>

                
              </form>
              <button  onClick={handleSubmit} className="mkk" type="submit">Submit</button>
            </div>
          )} </div>
      </div>



    </div>
    </div>
  );
}

export default LoginPage;