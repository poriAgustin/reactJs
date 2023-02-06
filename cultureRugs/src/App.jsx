import { useState, useEffect } from 'react'
import { BrowserRouter, Navigate, Route, Routes  } from 'react-router-dom';

import NavBar from './componentes/NavBar/NavBar';
import { ItemListContainer } from './componentes/ItemListContainer/ItemListContainer';
import ItemCount from './componentes/ItemCount/ItemCount';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import CartContainer from './componentes/CartContainer/CartContainer';

// import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) { 
   
    return (
        <BrowserRouter>
                <NavBar />
                    <div 
                        // className="border border-5  border-dark mt-1"
                        // onClick={() => alert('evento de app')}
                    >
                        <Routes>
                            <Route path='/' element = {<ItemListContainer saludo ='Hola'/>}/>
                            <Route path='/categoria/:idCategoria' element = {<ItemListContainer saludo ='Hola'/>}/>

                            <Route path='/detalle/:idProducto' element = {<ItemDetailContainer/>} />

                            <Route path='/cart' element = {<CartContainer/>}/>

                            <Route path='*' element ={ <Navigate to='/' />} />
                        </Routes>
                    </div>
                {/* <ItemCount />  */}
            </BrowserRouter>
            

            

       
    )
}

export default App

