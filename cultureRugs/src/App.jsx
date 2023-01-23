import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/NavBar/NavBar';
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  

  return (
    <>

      <NavBar/>
      <ItemListContainer saludo='saludo soy pori'/>

      </>

  )
}

export default App
