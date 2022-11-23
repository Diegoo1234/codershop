 
const ItemsList = ({products}) => { 
return (
  
<div className="row"> 
{products.map((items) => (
      
<div className="col-lg-3 text-center" key={items.id}>
<div className="col-lg-12" > 
<img className="img_list" src={require('../images/'+items.url_img)} /> 
</div>    
<div className="col-lg-12"> 
{items.nombre}
</div>
</div>  

))}           
</div>
 

        
);

}
export default ItemsList;