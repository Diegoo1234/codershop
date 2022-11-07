import {useState} from 'react';
import './App.css';
import Navbar from './componentes/Navbar';
import ItemList from './componentes/ItemListContainer.js';
function App() {
  
 const nombre_empresa = "My peru emprende"; 
 
  return (
    <div className="App">
    <Navbar/>
    <ItemList nombre_empresa={nombre_empresa} />
    </div>
  );
}

export default App;
