// for the button purpose 

import React from 'react';
import { Uploader } from "uploader"; // Installed by "react-uploader".
// import { UploadButton } from "react-uploader";
import { UploadDropzone } from "react-uploader";
import "./Fileupload.css"

const uploader = Uploader({
    apiKey: "free"
});


const options = { multi: true };

const Fileupload = () => (
    <div className='uploader'>
    <UploadDropzone uploader={uploader}
        options={options}
        onComplete={files => alert(files.map(x => x.fileUrl).join("\n"))}>
        {({ onClick }) =>
            <button onClick={onClick}>
                Upload a file...
            </button>
        }
    </UploadDropzone>
    </div>
);


export default Fileupload;





// for the dropzone 

// import { Uploader } from "uploader";
// import { UploadDropzone } from "react-uploader";
// import "./Fileupload.css"


// const uploader = Uploader({
//   apiKey: "free" 
// });


// const options = { multi: true };

// const Fileupload = () => (
//     <div className="upload">
//     <div className='uploader'>
//   <UploadDropzone uploader={uploader}
//                   options={options}
//                   onUpdate={files => alert(files.map(x => x.fileUrl).join("\n"))}
//                 //   width="600px"
//                 //   height="375px" 
//                 />
//                   </div>
//                   </div>
// );
// export default Fileupload;