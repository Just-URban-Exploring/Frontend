import React from 'react';
import '../css/Map.css';
import { useNavigate } from "react-router-dom";

export const LogoutButton = () => {

  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => navigate("/logout")}>Logout</button>
    </div>
  )
}
