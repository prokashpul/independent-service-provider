import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";
import { css } from "@emotion/react";
import { useState } from "react";
import { PropagateLoader } from "react-spinners";

const override = css`
  display: flex;
  margin: 0 auto;
  border-color: #42b7e2;
`;

const RequireAuth = ({ children }) => {
  const [color] = useState("#42b7e2");
  const location = useLocation();
  const [user, loading] = useAuthState(auth);
  if (loading) {
    return (
      <div className="sweet-loading">
        <PropagateLoader
          color={color}
          loading={loading}
          css={override}
          size={10}
        />
      </div>
    );
  }
  if (user) {
    return children;
  } else {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
};

export default RequireAuth;
