import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Categoria from '../modulos/categoria';

export const router = createBrowserRouter([
    {
     path: "/",
     element: <App />
    },
     { 
     path: "/categoria/:id",
     element: <Categoria />    
     }
    //{ 
    //}
    
]);
