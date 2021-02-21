import React from 'react'
import './home.css'
import Logo from '../images/MRlogo-01.svg'
import {Link} from 'react-router-dom'
class Home extends React.Component {
    render() {
      return (
          <>
          <header>
              <img id="logo" src={Logo} alt="Magenta Rejects Logo"/>
              <div className="titlebox">
                  <h1>Magenta Rejects</h1>
                  <h2>...is an art collective</h2>
              </div>
          </header>
          <nav>
            <Link className="link">rebecca</Link>
            <Link className="link">marion</Link>
            <Link className="link">lux pacifica</Link>
            <Link className="link">s.a. ribble</Link>
            <Link className="link">collabs</Link>
            <Link className="link">blog</Link>
          </nav>
          </>
    )  
    }
}
export default Home