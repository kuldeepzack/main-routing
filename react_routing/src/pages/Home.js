

// import { ColorRing } from "react-loader-spinner";
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import ShowPassword from "../assets/images/show-password.png";
// import HidePassword from "../assets/images/HidePassword.jpg";
// import "./Home.css";
// import { useStores } from "../store";
// import SuccessModal from "../components/Sucessmodel";

// function Home() {
//   const { Frontlogin } = useStores();
//   const navigate = useNavigate();
//   const [username, setUserName] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [password, setPassword] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState(false)

//   const [successModal, setSuccessModal] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };
//   const handleSubmit = async (event) => {
//     setLoading(true);
//     event.preventDefault();
//     let paylaod = {
//       contact: username,
//       password: password,
//     };
//     setTimeout(async () => {
//       await Frontlogin.login(paylaod, (response) => {
//         console.log(response);
//         setLoading(false);

//         if (response.statusText === "OK") {
//           // navigate("/Form");
//           setSuccessModal(true);
//           setStatus(true);
//         } else {
//           alert(response.message);
//           setSuccessModal(false);
//         }
//       });
//     }, 1000);
//   };
//   return (
//     <div className="main_container">
//       <div className="row">
//         <div className="col-md-6 main-left"></div>
//         <div className="col-md-6 main-right" >
//         <div className="main">
//           <form onSubmit={handleSubmit} className="formm">
//             <div className="new-expense__control">

//               <h1>Welcome to the Gro+ Portal</h1>
//               <div className="user">
//                 <h3>User-Name</h3>
//                 <input
//                   type="text"
//                   className="login-field"
//                   placeholder="user-name"
//                   value={username}
//                   onChange={(e) => setUserName(e.target.value)}
//                   required
//                 />
//               </div>

//               <div className="password-input-container">
//                 <h3>Password</h3>
//                 <input
//                   type={passwordVisible ? "text" : "password"}
//                   className="login-field"
//                   placeholder="password"
//                   required
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <span
//                   className="password-toggle"
//                   onClick={togglePasswordVisibility}
//                   visible={true}
//                 >
//                   <img
//                     src={passwordVisible ? ShowPassword : HidePassword}
//                     alt={passwordVisible ? " Hide password" : "Show password"}
//                     className="password-icon"
//                   />
//                 </span>
//               </div>
//               {loading && status ?
//                 <ColorRing />
//                 :
//                 <div className="mt20">
//                   <button
//                     type="submit"
//                     className="btn btn-primary btn-login"
//                     onClick={() => {
//                       setSuccessModal(false);
//                       setStatus(true)
//                     }}
//                   >
//                     Login
//                     {/* {  loading ? <ColorRing /> : "Login"} */}
//                   </button>
//                 </div>
//               }
//             </div>
//           </form>



//         </div>
//         </div>

//         </div>


//         {successModal && (
//           <div className="modal">
//             <SuccessModal
//               show={successModal}
//               hide={() => { 
//                 setSuccessModal(false);
//                 navigate("/Form")
//               }}
//               status={"Sucess"}
//               message={"User is successfully logged in"}
//             />
//           </div>
//         )}
//       </div>
//       );
// }
//       export default Home;



// import {Container , Alert} from 'react-bootstrap'  
import { ColorRing } from "react-loader-spinner";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ShowPassword from "../assets/images/show-password.png";
import HidePassword from "../assets/images/HidePassword.jpg";
import "./Home.css";
import { useStores } from "../store";
import SuccessModal from "../components/Sucessmodel";
import Abbb from "../assets/images/abbb.avif"
import init from "../assets/images/int.jpg";

function Home() {
  const { Frontlogin } = useStores();
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false)

  const [successModal, setSuccessModal] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    let paylaod = {
      contact: username,
      password: password,
    };
    setTimeout(async () => {
      await Frontlogin.login(paylaod, (response) => {
        console.log(response);
        setLoading(false);

        if (response.statusText === "OK") {
          // navigate("/Form");
          setSuccessModal(true);
          setStatus(true);
        } else {
          alert(response.message);
          setSuccessModal(false);
        }
      });
    }, 1000);
  };
  return (
    <div className="main_container">

      <div className="row log-box">
        <div className="col-md-6 main-left"></div>
        <div className="col-md-6 main-right" >
          <div className="main">
            <form onSubmit={handleSubmit} className="formm">
              <div className="new-expense__control">

                <h1>Welcome to the Login Portal</h1>
                <div className="user">
                  <h3>User-Name</h3>
                  <input
                    type="text"
                    className="login-field"
                    placeholder="user-name"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    required
                  />
                </div>

                <div className="password-input-container">
                  <h3>Password</h3>
                  <input
                    type={passwordVisible ? "text" : "password"}
                    className="login-field"
                    placeholder="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <span
                    className="password-toggle"
                    onClick={togglePasswordVisibility}
                    visible={true}
                  >
                    <img
                      src={passwordVisible ? ShowPassword : HidePassword}
                      alt={passwordVisible ? " Hide password" : "Show password"}
                      className="password-icon"
                    />
                  </span>
                </div>
                {loading && status ?
                  <ColorRing />
                  :
                  <div className="mt20">
                    <button
                      type="submit"
                      className="btn btn-primary btn-login"
                      onClick={() => {
                        setSuccessModal(false);
                        setStatus(true)
                      }}
                    >
                      Login
                      {/* {  loading ? <ColorRing /> : "Login"} */}
                    </button>
                  </div>
                }
              </div>
            </form>



          </div>
        </div>

      </div>


      {successModal && (
        <div className="modal">
          <SuccessModal
            show={successModal}
            hide={() => {
              setSuccessModal(false);
              navigate("/Form")
            }}
            status={"Sucess"}
            message={"User is successfully logged in"}
          />
        </div>
      )}
      <div style={{ height: 462, width: 728, overflow: "hidden" }}>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators" >
            <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img style={{ height: 462, width: 728, overflow: "hidden" }} src={init} class="d-block w-100" alt="..." />

              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              {/* <img src={require('../assets/images/abbb.jpg')} style={{height:462 , width:728,overflow:"hidden"}} class="d-block w-10 0" alt="..."/> */}

              <img style={{ height: 462, width: 728, overflow: "hidden" }} src={init} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Some representative placeholder content for the second slide.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={require("../assets/images/abbb.avif")} style={{ height: 462, width: 728, overflow: "hidden" }} class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Some representative placeholder content for the third slide.</p>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;

