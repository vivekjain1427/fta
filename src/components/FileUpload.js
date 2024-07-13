import React from 'react';

function FileUpload({ handleFileChange, handleFileUpload, progress }) {
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload File</button>
      <progress value={progress} max="100" />
    </div>
  );
}

export default FileUpload;
