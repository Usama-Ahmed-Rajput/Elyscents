import React from 'react'
import { CiSearch } from "react-icons/ci";
import style from './search.module.scss'


const Search = () => {
  return (
    <>
      <div className={style.search_input}>
        <input type="text" placeholder='Search'/>
        <span className={style.icon}><CiSearch /></span>
      </div>
    </>
  )
}

export default Search
