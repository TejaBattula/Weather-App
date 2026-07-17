import React, { useState } from 'react'
import './SearchBar.css'
const SearchBar = ({handleSubmit}) => {
  const [value,setvalue]=useState("")
  return (
    <div className='searchBar'>
        <form onSubmit={(e)=>{e.preventDefault()
          handleSubmit(value)
          setvalue("")}} style={{display:"flex"}}>
        <input value={value} onChange={(e)=>{setvalue(e.target.value)}} type="text" placeholder='search for a city...' />
        <button>Search</button>
        </form>
    </div>
  )
}

export default SearchBar