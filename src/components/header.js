import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import "./header.scss"
 

const Header = () => (
 
    <div>
    <input type="checkbox" id="navcheck" role="button" title="menu"/>
<label for="navcheck" aria-hidden="true" title="menu">
	<span class="burger">
		<span class="bar">
			<span class="visuallyhidden"> </span>
		</span>
	</span>
</label>
<nav id="menu">
 <Link to="/">HOME</Link>
  <Link to="/advanced/">DESTINATIONS</Link>
 <Link to="/advanced/">RESERVE A SPOT</Link>
</nav>
         
  </div>
)

 

export default Header
