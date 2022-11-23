import { useParams } from 'react-router-dom';
import ItemsList from '../componentes/ItemList.js';
import {Bodypage} from '../componentes/Bodypage';
import {itemsmocks} from '../mocks/Item.mock.js';

const Categoria = () => {
const { id } = useParams();
const filtro_categoria = itemsmocks.filter((datos) => datos.categoria === id) ;
return (  
<Bodypage> 
<div class="row">    
<ItemsList products={filtro_categoria} />  
</div>
</Bodypage>  
);

}
export default Categoria;