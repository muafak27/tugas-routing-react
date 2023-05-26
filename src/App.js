import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Home from './home';

function App() {
  return (
    <div className='belajar'>
      <h3>belajar</h3>
      <nav>
        <Link to="/home" className='link'>Home</Link>
        <Link to="/about" className='link'>About</Link>
        <Link to="/category/food" className="link">Food</Link>
        <Link to="/category/drink" className="link">Drink</Link>
      </nav>
      <Outlet/>
    </div>
  );
}

export default App;
