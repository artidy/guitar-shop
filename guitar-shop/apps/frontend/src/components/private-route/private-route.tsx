import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { getIsAdmin, getIsUnknown } from '../../store/user-data/selectors';
import { AppRoute } from '../../conts';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const { children } = props;
  const isUnknown = useAppSelector(getIsUnknown);
  const isAdmin = useAppSelector(getIsAdmin);

  if (isAdmin) {
    return children;
  }

  if (isUnknown) {
    return <Navigate to={AppRoute.Products} />;
  }

  return <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
