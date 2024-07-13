import React, { useState } from 'react';
import { uploadFile } from '../api';

function FileTransferPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select a file to upload.');
      return;
    }

    setUploading(true);

    try {
      const token = localStorage.getItem('token');
      await uploadFile(file, token, (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(percentCompleted);
      });
      alert('File uploaded successfully!');
    } catch (error) {
      console.error('File upload error:', error);
      alert('Error uploading file: ' + (error.response?.data?.message || 'An unexpected error occurred.'));
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8">
      <h2 className="text-2xl font-semibold text-center mb-4">File Transfer</h2>
      <input
        type="file"
        onChange={handleFileChange}
        className="w-full px-3 py-2 border rounded-lg mb-4"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className={`bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${uploading ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {uploadProgress > 0 && (
        <div className="mt-4">
          <div className="bg-gray-200 rounded-full">
            <div
              className="bg-blue-500 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: `${uploadProgress}%` }}
            >
              {uploadProgress}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default FileTransferPage;
