
import React, {useState} from 'react';
import Header from '../Header'
import CardList from '../CardList';
import {Outlet} from "react-router-dom"
function  HomePage() {
    const [searchTerm , setsearchTerm] = useState('')
  
    function onSearchChange(e)
    {
      setsearchTerm(e.target.value)
    }
    return (
      
      <div>
      <div className='header-div'>
        <Header 
          text = "Staff List"
        />
        
        <input 
        onChange = {onSearchChange}
        type="text"
        placeholder = "search staff"
        value = {searchTerm}
        />
     </div>
        <CardList 
          searchStaff= {searchTerm}
        />
        
      </div>
      
    );
}
export default HomePage;