import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';


export default function TopHeader(props) {
  return (
    <div className='TopHeader'>
        {/* <h1> */}
            <Link to="/">TV MAZE</Link>
        {/* </h1> */}
        <div className='SearchBox'>
        <label>🔍</label>
        <input className='searchField'
        type="text"
        value={props.searchTerm}
        onChange={props.handleChange}
        ></input>
        </div>
    </div>
  )
}
