import React from 'react'
import Card from './Card'
import './Card.css'
import staffList from './staffList'


function CardList (props)
{   const filteredStaff = staffList.filter((staff)=>{
    return staff.name.toLowerCase().includes(props.searchStaff.toLowerCase())
    })
    return <div className='row'>
    {filteredStaff.map((staff) => 
    <Card 
    key = {staff.key}
    avatar = {staff.avatar}
    name = {staff.name}
    position = {staff.position}
  />
)}
    
    </div>
}

export default CardList