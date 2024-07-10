import './App.css'
import React from 'react'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer titulo={"Lorem Ipsum"}/>
    </>
  )
}

export default App