import React from "react";
import { Navbar } from "react-bootstrap";
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const Styles ={
   width:'3%',
   padding:'10px',
   cursor: 'pointer',
   background: '#2196F3',
   color: 'white',
}

const NavBar = () => {
  return (
    <div style={{ fontSize: '20px', color: 'black' , padding:'10px', }}>
      <a style={{cursor: 'pointer'}}>movies-coming</a>
      <a style={{ padding:'10px', cursor: 'pointer'}}>top-rated-india</a>
      <a style={{ padding:'10px', cursor: 'pointer'}}>top-rated-movies</a>
      <a style={{ padding:'10px', cursor: 'pointer'}}>favourite</a>
      <input type='text' placeholder="Search movie" style={{marginLeft:'58em'}}></input>
      <button type="submit" style={{...Styles}}><i className="fa fa-search"></i></button>
      <hr />

    </div>


  )
}

export default NavBar;