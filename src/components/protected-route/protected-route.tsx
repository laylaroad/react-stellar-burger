import { useEffect, FC, ReactElement, ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setAuthChecked } from '../../services/reducers/userReducer';
import { checkUserAuth } from '../../utils/api';
import { selectisAuthChecked, selectUser } from '../../services/selectors/userSelector';

interface ProtectedRouteProps {
    onlyUnAuth: boolean;
    component: ReactElement;
    children?: ReactNode,
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ onlyUnAuth = false, component }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAuthChecked(false));
        dispatch(checkUserAuth());
    }, [dispatch]);

    const isAuthChecked = useSelector(selectisAuthChecked) as boolean;
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
    return component;
};

export const OnlyAuth: FC<{ component: ReactElement }> = (props) => (
    <ProtectedRoute onlyUnAuth={false} {...props} />
);

export const OnlyUnAuth: FC<{ component: ReactElement }> = (props) => (
    <ProtectedRoute onlyUnAuth={true} {...props} />
);
