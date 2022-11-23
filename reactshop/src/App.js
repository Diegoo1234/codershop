import {useState} from 'react';

 
import ItemList from './componentes/ItemListContainer.js';
import DetalleItemList from './componentes/ItemDetailContainer.js';
import {Bodypage} from './componentes/Bodypage';

function App() {
  
 const nombre_empresa = "My peru emprende"; 
 
  return (
    <Bodypage>
    <ItemList nombre_empresa={nombre_empresa} />
    </Bodypage>
  );
}

export default App;
