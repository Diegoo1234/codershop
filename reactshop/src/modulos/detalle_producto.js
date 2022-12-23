import { useParams } from 'react-router-dom';
import {useEffect, useState, useContext} from 'react';
//import ItemsList from '../componentes/ItemList.js';
import {Bodypage} from '../componentes/Bodypage';
//import {itemsmocks} from '../mocks/Item.mock.js';
import '../componentes/estilo/index.css';
import { doc, getDoc, getFirestore } from "firebase/firestore";
 
import { CartContext } from '../componentes/CartContext';
import Itemcount from './item_acount';

const DetalleProducto = () => {


const cartContext = useContext(CartContext);
const { addToCart} = cartContext;
const { id_producto } = useParams();

const onAdd = (cantidad) => {

addToCart(id_producto, cantidad)

} 
 
 
const [producto, SetProducto] = useState([]);

useEffect(() => {
const db = getFirestore();   
const items_product = doc(db, "productos", id_producto);

new Promise((resolve) =>  resolve( 
getDoc(items_product).then((snapshot) => { 

if(snapshot.exists()){
SetProducto([{ id: id_producto, ...snapshot.data() }]);   
} 
})
        
));
 


}, []);


return (  
<Bodypage> 
<div class="row">  
 
{ producto.length === 0 ? <div className='msg_producto'> Cargando... </div> :   producto.map((items) => (
          
<article className="product-detail">
<img  src={require('../images/'+items.url_img)} alt="" className="product-detail__img" />
<div className="product-detail__info">
<h2 className="name">{items.nombre}</h2>
<p className="description">{items.descripcion}</p>
<ul className="info-grid">
<li>Precio:</li>
<li>S/{items.precio}</li>
 
<li>Categoria:</li>
<li>{items.nombre_categoria}</li>

<li>Stock Actual:</li>
<li>{items.stock}</li>
</ul>


<Itemcount stock={items.stock} initial={1}  onAdd={onAdd}/>

</div>


</article>



))  }  

</div>
</Bodypage>  
);

}
export default DetalleProducto;