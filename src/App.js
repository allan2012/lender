import React from 'react';
import LoginLayout from './layouts/LoginLayout';
import BaseLayout from './layouts/BaseLayout'
import Members from "./pages/Members";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Loans from "./pages/Loans";
import MessageLog from "./pages/MessageLogs";

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" index element={<LoginLayout />} />
          <Route path="/" element={<BaseLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="members" element={<Members />} />
            <Route path="loans" element={<Loans />} />
              <Route path="messages" element={<MessageLog />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
