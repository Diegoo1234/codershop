import {useEffect , useState} from 'react';

//FORMATO DE PRODUCTOS
import ItemsList from './ItemList.js';

import {itemsmocks} from '../mocks/Item.mock.js';

const ItemListContainer = () => {
    
const [products, SetProducts] = useState([]); 

useEffect(() => {

new Promise((resolve) =>  resolve(itemsmocks) ).then((data) => SetProducts(data));    
        
    
}, []);

return (
<div class="row">    
<ItemsList products={products}/> 
</div>
);
}

export default ItemListContainer;