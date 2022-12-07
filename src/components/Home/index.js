// Write your code here
import ThemeContext from '../../context/ThemeContext'

import Navbar from '../Navbar'

import './index.css'

const Home = () => (
  <ThemeContext>
    {value => {
      const {isDarkTheme} = value
      const homeBgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const homeBgImg = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const homeText = isDarkTheme ? 'home-text-light' : 'home-text-dark'
      return (
        <div className={`home-app-container ${homeBgClassName}`}>
          <Navbar />
          <div className="container">
            <img className="img" src={homeBgImg} alt="home" />
            <p className="paragraph">{homeText}</p>
          </div>
        </div>
      )
    }}
  </ThemeContext>
)

export default Home
