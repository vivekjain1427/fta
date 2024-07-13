import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Function to register a new user
export const register = async (userData) => {
  return await axios.post(`${API_URL}/register`, userData);
};

// Function to login a user
export const login = async (userData) => {
  return await axios.post(`${API_URL}/login`, userData);
};

// Function to upload a file
export const uploadFile = async (file, token, onUploadProgress) => {
  const formData = new FormData();
  formData.append('file', file);

  return await axios.post(`${API_URL}/upload`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
    onUploadProgress,
  });
};
