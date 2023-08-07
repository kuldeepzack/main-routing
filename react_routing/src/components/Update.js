

import Modal from 'react-bootstrap/Modal';
import {  useNavigate } from "react-router-dom";

const Update = (props) => {
  const navigate = useNavigate();


  return (
    <Modal
      {...props}
      centered
      className="modal2">

      <div className="container">
        <div className="container-update">
          <h2>Update</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                value={props.name}
                onChange={(e)=>props.editName(e)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                value={props.email}
                onChange={(e) =>props.editEmail(e)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">plateform</label>
              <input
                type="plateform"
                className="form-control"
               value={props.plateform}
                onChange={(e) => props.editPlateform(e)}
              />
            </div>

            <div className="back-btn">
              <button
                type="submit"
                className="btn btn-primary mx-2"
                onClick={props.handleUpdate}
              >
                Update
              </button>

              <button className="btn btn-secondary mx-2" onClick={props.handleBack}> Back </button>

            </div>

          </form>
        </div>
      </div>

    </Modal>
  );
};

export default Update;