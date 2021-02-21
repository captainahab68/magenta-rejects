import React from 'react'
import './home.css'
import Logo from '../images/MRlogo-01.svg'
class Home extends React.Component {
    render() {
      return (
          <header>
              <img id="logo" src={Logo} alt="Magenta Rejects Logo"/>
              <div className="titlebox">
                  <h1>Magenta Rejects</h1>
                  <h2>...is an art collective</h2>
              </div>
          </header>
    )  
    }
}
export default Home