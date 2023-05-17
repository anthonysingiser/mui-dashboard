import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Authentication from './pages/Authentication/Authentication'
import Database from './pages/Database/Database'
import Functions from './pages/Functions/Functions'
import Hosting from './pages/Hosting/Hosting'
import MachineLearning from './pages/MachineLearning/MachineLearning'
import Storage from './pages/Storage/Storage'

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route path="authentication" element={<Authentication/>}/>
      <Route path="database" element={<Database/>}/>
      <Route path="functions" element={<Functions/>}/>
      <Route path="hosting" element={<Hosting/>}/>
      <Route path="machine-learning" element={<MachineLearning/>}/>
      <Route path="storage" element={<Storage/>}/>   
    </Route>
  </Routes>
  </BrowserRouter>
);