import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import FileTransferPage from './pages/FileTransferPage';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/file-transfer" element={<FileTransferPage />} />
      </Routes>
    </div>
  );
}

const LandingPage = () => (
  <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
    <h2 className="text-2xl font-semibold mb-4">Welcome to File Transfer App</h2>
    <div className="space-y-4">
      <Link to="/login" className="block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </Link>
      <Link to="/register" className="block bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
        Register
      </Link>
    </div>
  </div>
);

export default App;
