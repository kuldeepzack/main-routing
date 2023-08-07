import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import './style.css'

function SuccessModal(props) {
    const [successModal, setSuccessModal] = useState("")
    return (
        <Modal
            {...props}
            centered
            className="modal2"
        >
            <Modal.Body>
                <div className="moodal">

                    <h3>{props.status}</h3>
                    <p>{props.message}</p>
                    <button className="btn btn-danger" onClick={() => props.hide()}>Ok</button>
              
                </div>
            </Modal.Body>
      

        </Modal>
    );
}
export default SuccessModal;
