import { Link } from "react-router-dom";


const Home = () => {
    return (

        

            <nav>
                <Link to="/home" className="link">Home</Link>
                <Link to="/about" className="link">About</Link>
                <Link to="/category/food" className="link">Food</Link>
                <Link to="/category/drink" className="link">Drink</Link>
            </nav> 
            

    )
}

export default Home;