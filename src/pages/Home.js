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
          <main>
              <section className="shop">
                  <h2>Shop</h2>
                  <div className="box">
                      <h3>check out what's new from MR.</h3>
                      <span className="images"> <img className="grow" src="https://cdn.myanimelist.net/images/characters/12/400261.jpg" alt="Galo Thymos"/><img className="grow" src="https://pbs.twimg.com/profile_images/1227675611998584840/K6mXWH0A_400x400.jpg" alt="Lio Fotio"/></span>
                      <h3>shop all</h3>
                  </div>
              </section>
              <section className="blog">
                  <h2>Blog</h2>
                  <div className="box">
                      <h3>Blog Post Title</h3>
                      <h4>By: Poppy</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem corporis, ducimus quidem atque molestiae et saepe animi, amet nobis, veritatis ex. Delectus ipsa eos ipsum, eius deleniti, tenetur, tempora excepturi totam perspiciatis eveniet incidunt magni voluptatem repudiandae ad? Exercitationem fugiat aliquid explicabo autem obcaecati facere laboriosam ratione voluptatibus id quos!</p>
                      <h3>see more</h3>
                  </div>
              </section>
          </main>
          </>
    )  
    }
}
export default Home