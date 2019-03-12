import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.module.css'

const Header = ({ siteTitle }) => (
  <header
    style={{
     // background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <Link to="/" >
      {siteTitle}
    </Link>
    
      <ul class="navigation-list">

      <li class="navigation-item">
        <Link to="/">Home</Link>
        </li>
        <li class="navigation-item">
      <Link to="/blog">Blog</Link>
        </li>
        <li class="navigation-item">
      <Link to="/project">Projet</Link>
        </li>
        <li class="navigation-item">
      <Link to="/about">Contact</Link>
        </li>
      </ul>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
