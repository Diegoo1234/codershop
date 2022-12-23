import {useEffect , useState} from 'react';

//FORMATO DE PRODUCTOS
import ItemsList from './ItemList.js';

import {itemsmocks} from '../mocks/Item.mock.js';

import { collection, getDocs, getFirestore } from "firebase/firestore";

const ItemListContainer = () => {
    
const [products, SetProducts] = useState([]); 

useEffect(() => {
const db = getFirestore();   
const items_products = collection(db, "productos");
new Promise((resolve) =>  resolve(  getDocs(items_products).then((snapshot) => {
    
const productos =  snapshot.docs.map(doc => ({id : doc.id , ...doc.data(),} ))   

SetProducts(productos);
    
}   )       ) );    
        
    
}, []);

return (
<div class="row">   
{products.length === 0 ? <div className='msg_producto'> Cargando... </div> :    
<ItemsList products={products}/> }
</div>
);
}

export default ItemListContainer;