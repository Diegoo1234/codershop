

 
const ItemsList = ({products}) => {

const ruta_detalle_producto = (id_producto) => {
window.location.href = "http://localhost:3000/detalle_producto/"+id_producto;
}  

return (
  
<div className="row"> 
{products.map((items) => (
      
<div className="col-lg-3 text-center pointer" onClick={ () => ruta_detalle_producto(items.id) } key={items.id}>
<div className="col-lg-12"  > 
<img className="img_list" src={require('../images/'+items.url_img)} /> 
</div>    
<div className="col-lg-12"> 
{items.nombre}
</div>
<div className="col-lg-12"> 
Stock actual {items.stock}
</div>
</div>  

))}           
</div>
 

        
);

}
export default ItemsList;