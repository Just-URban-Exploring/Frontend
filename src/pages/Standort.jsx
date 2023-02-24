import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Standort() {

  const navigate = useNavigate();

  return (
  <div>
    <h1>Standort</h1>
    <button onClick={() => navigate('/nav')}>Nav</button>
    <button onClick={() => navigate('/')}>Home</button>
  </div>
  );
}
