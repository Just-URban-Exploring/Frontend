import React, { children, useState } from 'react';
import { Navigate } from 'react-router-dom';

export const RouteProtection = ({children}) => {
  console.log({children});

  const [authenticated, setAuthenticated] = useState(localStorage.getItem("authenticated"));

  if (!authenticated) {
    return <Navigate replace to='/login' />;
  } return children;
};
