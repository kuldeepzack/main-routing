
import Modal from 'react-bootstrap/Modal';

const Create = (props) => {
  return (
    <Modal  {...props}
      centered
      className="modal2">

      <div className="container-fluid">
        <div className="container-update">
          <div className="d-flex justify-content-between m-2">
            <h2>Create</h2>
          </div>
          <form>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                onChange={props.name}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={props.email}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">plateform</label>
              <input
                type="text"
                className="form-control"
                onChange={props.plateform}
              />
            </div>
            <div className="d-flex">
            <button
              type="button"
              className="btn btn-primary mr-3"
              onClick={props.handleSubmit}
            >
              Submit
            </button>
            <button type="button" onClick={props.hide} className="btn btn-primary">Show Data</button>
            </div>
          </form>
        </div>
      </div>

    </Modal>
  );
};
export default Create;