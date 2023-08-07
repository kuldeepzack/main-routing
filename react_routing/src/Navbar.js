// import React from "react";
// import { Link, useLocation } from "react-router-dom";
// import "./Navbar.css";
// export default function Navbar() {
//   const location = useLocation();
//   const isLoggedIn = location.pathname !== "/";

//   if (!isLoggedIn) {
//     return null;
//   }

//   return (
   
//     <nav className="nav">
//       <div class="topnav" id="myTopnav">
//         <CustomLink to="/api">Api</CustomLink>
//         <CustomLink to="/form">form</CustomLink>
//         <CustomLink to="/">Home</CustomLink>
//         <CustomLink to="/Login">Login</CustomLink>
//         <CustomLink to="/Showhide">Showhide</CustomLink>
//         <CustomLink to = "/Apitable">Apitable</CustomLink>
//         <CustomLink to = "/Sortdata">Sortdata</CustomLink>
//         <CustomLink to = "/Pagination">Pagination</CustomLink>


//       </div>
//     </nav>
   
//   );
// }

// function CustomLink({ to, children, ...props }) {
//   return (
//     <li>
//       <Link to={to} {...props}>
//         {children}
//       </Link>
//     </li>
//   );
// }

import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = location.pathname !== "/";

  const handleLogout = () => {
  
    navigate("/");
  };

  if (!isLoggedIn) {
    return null;
  }

  return (
    <nav className="nav">
      <div className="topnav  btn btn-secondary" id="myTopnav">
        <CustomLink to="/api">Api</CustomLink>
        <CustomLink to="/form">form</CustomLink>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/Login">Login</CustomLink>
        <CustomLink to="/Showhide">Showhide</CustomLink>
        <CustomLink to="/Apitable">Apitable</CustomLink>
        <CustomLink to="/Sortdata">Sortdata</CustomLink>
        <CustomLink to="/Pagination">Pagination</CustomLink>
        <CustomLink to="/Design">Design</CustomLink>
        <CustomLink to="/Fileupload">Fileupload</CustomLink>
        <CustomLink to="/Read">Learn CRUD</CustomLink>

        {isLoggedIn && <button className=" btn btn-danger btn-log" onClick={handleLogout}>Logout</button>}
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
