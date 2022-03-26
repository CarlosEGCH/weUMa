import * as React from 'react';

import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props){
  if (!props.logged) {
    return <Navigate to={props.path} replace />;
  }
  
  return props.children;
};
