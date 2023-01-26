import {withRouter, Link} from 'react-router-dom'

import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import {BsMoon, BsFillBrightnessHighFill} from 'react-icons/bs'
import {
  HeaderContainer,
  Image,
  UnorderedList,
  ThemeButton,
  Profile,
  LogoutButton,
} from './styledComponents'

const overlayStyles = {
  backgroundColor: '#fff',
}

const Header = props => {
  const {lightTheme, changeTheme} = props
  const onChangeTheme = () => {
    changeTheme()
  }

  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  const NxtWatchLogo = lightTheme
    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
  const ThemeIcon = lightTheme ? (
    <BsMoon size="30" />
  ) : (
    <BsFillBrightnessHighFill size="30" color="#fff" />
  )
  const LogoutBorder = lightTheme ? '#3b82f6' : '#fff'
  const BgColor = lightTheme ? '#fff' : '#181818'
  return (
    <HeaderContainer bgColor={BgColor}>
      <Link to="/">
        <Image src={NxtWatchLogo} alt="website logo" />
      </Link>
      <UnorderedList>
        <li>
          <ThemeButton
            data-testid="theme"
            onClick={onChangeTheme}
            type="button"
          >
            {ThemeIcon}
          </ThemeButton>
        </li>
        <li>
          <Profile
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
        </li>
        <div className="popup-container">
          <Popup
            modal
            trigger={
              <LogoutButton color={LogoutBorder} type="button">
                Logout
              </LogoutButton>
            }
            overlayStyle={overlayStyles}
          >
            {close => (
              <>
                <p>Are you sure, you want to logout</p>

                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => close()}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="trigger-button"
                  onClick={() => onLogout()}
                >
                  Confirm
                </button>
              </>
            )}
          </Popup>
        </div>
      </UnorderedList>
    </HeaderContainer>
  )
}

export default withRouter(Header)
