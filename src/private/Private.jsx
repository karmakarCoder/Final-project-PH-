import React, { useContext } from "react";
import Authcontext from "../auth/context/Authcontext";
import { Navigate, useLocation } from "react-router-dom";

const Private = ({ children }) => {
  const { user } = useContext(Authcontext);
  const location = useLocation();
  if (user) {
    return children;
  }
  return (
    <Navigate to={"/signin"} state={location?.pathname}>
      Private
    </Navigate>
  );
};

export default Private;
