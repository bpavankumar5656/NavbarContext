import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value

      const onToggleTheme = () => {
        toggleTheme()
      }

      const themeImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'

      const themeLight = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const navItemClassName = isDarkTheme
        ? 'list-text-dark-theme'
        : 'list-text-light-theme'
      const NavbarBgColor = isDarkTheme ? 'dark-color' : 'light-color'

      return (
        <div className={`nav-container ${NavbarBgColor}`}>
          <div className="img-container">
            <img src={themeImg} alt="website logo" className="website" />
            <ul className="list">
              <Link to="/">
                <li className={`nav-list ${navItemClassName}`}>Home</li>
              </Link>
              <Link to="/about">
                <li className={`nav-list ${navItemClassName}`}>About</li>
              </Link>
            </ul>
            <button type="button" className="btn" onClick={onToggleTheme}>
              <img src={themeLight} alt="theme" className="theme" />
            </button>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Navbar
