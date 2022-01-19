import React, { useState } from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import AdminDashboard from './pages/AdminDashboard';
import Dashboard from './pages/Dashboard';
import EmployerDashboard from './pages/EmployerDashboard';
import ParticipantDashboard from './pages/ParticipantDashboard';



function App(props) {



  return (
    <Router >
      <Routes>
        <Route path='/' element={<Dashboard
          client={props.client}
          logout={props.logout}
          user={props.user} />} />
        <Route path='/participant' element={<ParticipantDashboard />} />

        <Route path='/employer' element={<EmployerDashboard />} />

        <Route path='/admin' element={<AdminDashboard />} />


      </Routes>
    </Router>
  );
}

export default App;
