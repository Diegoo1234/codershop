import React from 'react';
import { useParams } from 'react-router-dom';
 
import {useEffect, useState} from 'react';
//import ItemsList from '../componentes/ItemList.js';

import '../componentes/estilo/index.css';
 
const Itemcount = ({ initial, stock, onAdd }) => {
    
const [Cantidad, setCantidad] = useState(initial);   
const [showButton, setshowButton] = useState(false);

 

const addProduct = (num) => {
const suma = Cantidad + num;
if(suma <= 0){
suma= 1;   
}
setCantidad(suma);
}; 
   


return (  
 
<div class="row">  
 
       
<article className="product-detail">
<div className="count-container">
<div className="count-container__contador ">
<button className="count-container__button"   onClick={() => addProduct(-1)} > -
</button>
<span className="count-container__qty">{Cantidad}</span>
<button className="count-container__button" onClick={() => addProduct(1)}  disabled={Cantidad == stock ? true : null}  >
+
</button>
</div>
<div className="count-container py-3">
<button className="button-primary anadir"  onClick={() => { onAdd(Cantidad);  setshowButton(true) }} >
A&ntilde;adir
</button>
</div>
</div>
</article>
 

</div>
 
);

}
export default Itemcount;