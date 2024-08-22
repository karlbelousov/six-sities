import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute, AuthorizationStatus } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutUser } from '../../store/action';
import { getAuthorizationStatus, getUser } from '../../store/user-process/selectors';

function Header() {
  const authorisationStatus = useAppSelector(getAuthorizationStatus);
  const user = useAppSelector(getUser);
  const dispatch = useAppDispatch();

  const handleLogoutUser = () => {
    dispatch(logoutUser());
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {authorisationStatus === AuthorizationStatus.Auth && (
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    <span className="header__user-name user__name">
                      {user}
                    </span>
                    <span className="header__favorite-count">3</span>
                  </Link>
                </li>
              )}
              <li className="header__nav-item">
                {authorisationStatus === AuthorizationStatus.Auth ? (
                  <Link
                    className="header__nav-link"
                    onClick={handleLogoutUser}
                    to={''}
                  >
                    <span className="header__signout">
                      Sign out
                    </span>
                  </Link>
                ) : (
                  <Link
                    className="header__nav-link"
                    to={AppRoute.Login}
                  >
                    <span className="header__signout">
                      Sign in
                    </span>
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
