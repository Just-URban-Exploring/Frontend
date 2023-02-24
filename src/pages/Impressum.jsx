import React from 'react';
import { useNavigate } from 'react-router-dom';

const Impressum = () => {

  const navigate = useNavigate();

  return (
    <div>
      <div>
        Impressum
      </div>
      <button onClick={() => navigate('/')}>Home</button>
    </div>
  )
}

export default Impressum