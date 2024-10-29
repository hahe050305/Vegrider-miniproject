import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import SignUp from './components/signup';
import Login from './components/login';
import CompanySearch from './components/company_search';
import CompanyDetails from './components/company_details';
import Shipment from './components/shipment';

import './App.css';
import TAC from './components/terms';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>

          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/company_search" element={<CompanySearch />} />
          <Route path="/company_details" element={<CompanyDetails />} />
          <Route path="/shipment" element={<Shipment />} />
          <Route path='/terms' element={<TAC />}/>

        </Routes>
      </div>
    </Router>
  );
}

export default App;
