import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { setAuthChecked } from '../../services/reducers/userReducer';
import { checkUserAuth } from '../../utils/api';
import { selectisAuthChecked, selectUser } from '../../services/selectors/userSelector';

const ProtectedRoute = ({ onlyUnAuth = false, component }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuthChecked(false));
        dispatch(checkUserAuth());
    }, [dispatch]);

    const isAuthChecked = useSelector(selectisAuthChecked);
    console.log(isAuthChecked);
    const user = useSelector(selectUser);
    const location = useLocation();

    if (!isAuthChecked) {
        console.log("Происходит авторизация, подождите...");
        return null;
    }

    if (onlyUnAuth && user) {
        console.log("Пользователь не авторизован");
        const { from } = location.state || { from: { pathname: "/" } };
        return <Navigate to={from} />;
    }

    if (!onlyUnAuth && !user) {

        return <Navigate to="/login" state={{ from: location }} />;
    }

    console.log("User is authenticated. Rendering component:", user);
    return component;
};

export const OnlyAuth = (props) => <ProtectedRoute onlyUnAuth={false} {...props} />;
export const OnlyUnAuth = (props) => <ProtectedRoute onlyUnAuth={true} {...props} />;
