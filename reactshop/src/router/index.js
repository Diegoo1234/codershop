import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Categoria from '../modulos/categoria';
import DetalleProducto from '../modulos/detalle_producto';

export const router = createBrowserRouter([
    {
     path: "/",
     element: <App />
    },
     { 
     path: "/categoria/:id",
     element: <Categoria />    
     },
     { 
     path: "/detalle_producto/:id_producto",
     element: <DetalleProducto />    
     }
   
    
]);
