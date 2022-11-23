 import '../App.css';
import Navbar from './Navbar';

export const Bodypage = ({children}) => {
return (
<div className="App">
<Navbar/>
{children} 
</div>
);

}
 