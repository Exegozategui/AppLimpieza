import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './Components/Maps/index';
import BathroomList from './Pages/BathroomList/BathroomList';
import BathroomDetails from './Pages/BathroomDetails/BathroomDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/bathroom-list/:sector" element={<BathroomList />} />
        <Route path="/bathroom-details/:bathroomId" element={<BathroomDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
