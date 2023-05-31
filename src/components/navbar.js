import React from 'react'
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/catalog" activeClassName="active">Catalog</NavLink>
          <NavLink to="/artPage" activeClassName="active">ArtPage</NavLink>
          <NavLink to="/categories" activeClassName="active">Categories</NavLink>
    </div>
  )
}
