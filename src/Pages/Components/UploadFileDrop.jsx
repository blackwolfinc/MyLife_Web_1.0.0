import React, {useEffect, useState} from 'react';
import Dropzone from 'react-dropzone';
import "../../Assets/Css/ComponentsCss/Upload.scss"



export const UploadFileDrop = () => {
    return (
        <div>
              <Dropzone >
        {({getRootProps, getInputProps}) => (
          <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
              <input {...getInputProps()} />
              <div className="iconTengah">
              <i class="fas fa-cloud-upload-alt"></i>
              <p> Drag and Drop File
</p>
</div>
            </div>
            <aside>
              <h4></h4>
              <ul></ul>
            </aside>
          </section>
        )}
      </Dropzone>
        </div>
    )
}





