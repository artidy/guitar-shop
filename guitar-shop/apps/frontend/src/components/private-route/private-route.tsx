import { Navigate } from 'react-router-dom';

import { useAppSelector } from '../../hooks';
import { getIsAdmin, getIsUnknown } from '../../store/user-data/selectors';
import { AppRoute } from '../../conts';
import Spinner from '../spinner/spinner';

type PrivateRouteProps = {
  children: JSX.Element;
};

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const isUnknown = useAppSelector(getIsUnknown);
  const isAdmin = useAppSelector(getIsAdmin);

  if (isUnknown) {
    return <Spinner/>;
  }

  if (isAdmin) {
    return children;
  }

  return <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
