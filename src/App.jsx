import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components';
import { Home, Deposit, Withdraw } from './pages';
import './styles/main.css'

function App() {
  return (
    <div className="App">
      <NavBar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
        </Routes>
      </main>
    </div>
  );
}

export default App