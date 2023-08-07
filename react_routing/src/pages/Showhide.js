// import React from 'react'
// import "./Showhide.css"

// function Showhide() {
//     const [status, setStatus] = React.useState(true);
//   return (
//     <div className="show">
//     {status ? <h1>Hello KD!!!@@</h1> : null}

//     <button onClick={() => setStatus(true)}>Show</button>
//     <button onClick={() => setStatus(false)}>Hide</button>

//     {/* <button onClick={() => setStatus(!status)}>Toggle</button> */}
//   </div>
//   )
// }

// export default Showhide;

import React, { useState, useEffect } from "react";
import "./Showhide.css";
import SuccessModal from "../components/Sucessmodel";

function Showhide() {
    const [count, setCount] = useState(0);
    const [successModel, setSuccessModel] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            if (count < 5) {
                setCount((count) => count + 1);
            } else {
                setSuccessModel(true);
            }


        }, 1000);
    });

    return (
        <div   className="main_container1">
            <div className="show1">{count}</div>
            {successModel && (
                <SuccessModal
                    show={successModel}
                    hide={() => {
                        setSuccessModel(false);
                        setCount(0);
                    }}
                    status={"Sucess"}
                    message={"User is successfully logged in"}
                />
            )}
        </div>
    );
}

export default Showhide;

// import React, {useState} from "react";
// import Styles from './otpInput.css';
// import { useNavigate } from "react-router-dom";
// // import NewExpense from "../components/NewExpense/app";

// const Showhide = () => {

//     const [inputValues, setInputValues] = useState({
//         input1: '',
//         input2: '',
//         input3: '',
//         input4: '',
//         input5: '',
//         input6: '',

//     });

//     // const [submitted, setSubmitted] = useState(false);

//     const handleInputChange = (inputId, value) => {
//         setInputValues((prevInputValues) => ({
//             ...prevInputValues,
//             [inputId]: value,
//         }));
//     };

//    const navigate  = useNavigate( );

//     const handleSubmit = () => {
//         navigate("/Api");
//         // setSubmitted(true);
//     };

//         return (
//         <>

//             <div id='OTPInputGroup' className={Styles.digitGroup} >
//             <button  onClick={handleSubmit} className="mkk" type="submit">Submit</button>
//                 <OTPInput
//                     id="input1"
//                     value={inputValues.input1}
//                     onValueChange={handleInputChange}
//                     previousId={null}
//                     handleSubmit={handleSubmit}
//                     nextId="input2"
//                 />
//                 <OTPInput
//                     id="input2"
//                     value={inputValues.input2}
//                     onValueChange={handleInputChange}
//                     previousId="input1"
//                     handleSubmit={handleSubmit}
//                     nextId="input3"
//                 />
//                 <OTPInput
//                     id="input3"
//                     value={inputValues.input3}
//                     onValueChange={handleInputChange}
//                     previousId="input2"
//                     handleSubmit={handleSubmit}
//                     nextId="input4"
//                 />

//                 <span className={Styles.splitter}>&ndash;</span>
//                 <OTPInput
//                     id="input4"
//                     value={inputValues.input4}
//                     onValueChange={handleInputChange}
//                     previousId="input3"
//                     handleSubmit={handleSubmit}
//                     nextId="input5"
//                 />
//                 <OTPInput
//                     id="input5"
//                     value={inputValues.input5}
//                     onValueChange={handleInputChange}
//                     previousId="input4"
//                     handleSubmit={handleSubmit}
//                     nextId="input6"
//                 />
//                 <OTPInput
//                     id="input6"
//                     value={inputValues.input6}
//                     onValueChange={handleInputChange}
//                     previousId="input5"
//                     handleSubmit={handleSubmit}
//                 />
//             </div>
//         </>
//     );
// }

// const OTPInput = ({ id, previousId, nextId, value, onValueChange, handleSubmit }) => {

//     const handleKeyUp = (e) => {

//         if (e.keyCode === 8 || e.keyCode === 37) {

//             const prev = document.getElementById(previousId);
//             if (prev) {

//                 prev.select();
//             }
//         } else if (
//             (e.keyCode >= 48 && e.keyCode <= 57) ||
//             (e.keyCode >= 65 && e.keyCode <= 90) ||
//             (e.keyCode >= 96 && e.keyCode <= 105) ||
//             e.keyCode === 39
//         ) {

//             const next = document.getElementById(nextId);
//             if (next) {

//                 next.select();
//             } else {

//                 // const inputGroup = document.getElementById('OTPInputGroup');

//             }
//         }
//     }
//     return (
//         <>
//         <input
//             id={id}
//             name={id}
//             type="text"
//             className={Styles.DigitInput}
//             value={value}
//             maxLength="1"
//             onChange={(e) => onValueChange(id, e.target.value)}
//             onKeyUp={handleKeyUp}
//         />

//         </>
//     );
// };

// export default Showhide;
