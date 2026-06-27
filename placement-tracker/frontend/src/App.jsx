import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import CodeVault from './pages/CodeVault';
import AIMockInterviews from './pages/AIMockInterviews';

function App() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      {/* Left Side: Sidebar Component */}
      <Sidebar />
      
      {/* Right Side: Dynamic Content Area */}
      <div className="flex-1 overflow-y-auto">
        <Routes>
          {/* Dashboard Route */}
          <Route path="/" element={<Dashboard />} />
          
          {/* Code Vault Route */}
          <Route path="/code-vault" element={<CodeVault />} />
          
          {/* AI Mock Interviews Route */}
          <Route path="/ai-interviews" element={<AIMockInterviews />} />
          
          {/* Catch-all Route for other links */}
          <Route path="*" element={
            <div className="p-8 text-cyan-400 text-2xl font-bold">
              Feature Coming Soon Partner! 🚀
            </div>
          } />
        </Routes>
      </div>
    </div>
  );
}

export default App;