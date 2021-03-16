import React, {useEffect, useState} from 'react';
import Dropzone from 'react-dropzone';
import "../../Assets/Css/ComponentsCss/Upload.scss"



export const UploadFileDrop = () => {
  const [fileNames, setFileNames] = useState([]);
  const handleDrop = acceptedFiles =>
    setFileNames(acceptedFiles.map(file => file.name));

    return (
        <div>
        <Dropzone onDrop={handleDrop}>
        {({ getRootProps, getInputProps }) => (
          <div {...getRootProps({ className: "dropzone" })}>
            <input {...getInputProps()} />
            <p>Drag'n'drop files, or click to select files</p>
          </div>
        )}
      </Dropzone>
      <div>
        <strong>Files:</strong>
        <ul>
          {fileNames.map(fileName => (
            <li key={fileName}>{fileName}</li>
          ))}
        </ul>
      </div>
        </div>
    )
}

// <Dropzone >
// {({getRootProps, getInputProps}) => (
//   <section className="container">
//     <div {...getRootProps({className: 'dropzone'})}>
//       <input {...getInputProps()} />
//       <div className="iconTengah">
//       <i class="fas fa-cloud-upload-alt"></i>
//       <p> Drag and Drop File
// </p>
// </div>
//     </div>
//     <aside>
//     {fileNames.map(fileName => (
//       <li key={fileName}>{fileName}</li>
//     ))}
//     </aside>
//   </section>
// )}
// </Dropzone>



