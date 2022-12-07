// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
      const notfoundHeadingClassName = isDarkTheme
        ? 'notfound-heading-dark'
        : 'notfound-heading-light'
      const notfoundTextClassName = isDarkTheme
        ? 'notfound-text-dark'
        : 'notfound-text-light'

      return (
        <div className={`home-app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="container">
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
              alt="not found"
            />
            <h1 className={`heading ${notfoundHeadingClassName}`}>
              Lost Your Way?
            </h1>

            <p className={`paragraph ${notfoundTextClassName}`}>
              We cannot seem to find the page you are looking for.
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext>
)

export default Home
