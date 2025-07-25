import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { logoutUser } from "slices/thunk";

//redux
import { useSelector, useDispatch } from "react-redux";
import withRouter from "Common/withRouter";
import { createSelector } from "reselect";

const Logout = () => {

    document.title = "SIMAUD | Logout";

    const dispatch = useDispatch<any>();

    const selectLogin = createSelector(
        (state: any) => state.Login,
        (login) => ({
          isUserLogout: login.isUserLogout,
        })
      );
      
    const { isUserLogout } = useSelector(selectLogin);

    useEffect(() => {
        dispatch(logoutUser());
    }, [dispatch]);

    if (isUserLogout) {
        return <Navigate to="../../login" />;
    }

    return <React.Fragment></React.Fragment>;
};

export default withRouter(Logout);