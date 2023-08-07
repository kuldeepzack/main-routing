import React from "react";
import "./style.scss";

const Loader = () => {
    return (
        <div className="spinner-container">
            <div className="loading-spinner">
            </div>
            <div>
                Loading...
            </div>
        </div>
    );
}

export default Loader;