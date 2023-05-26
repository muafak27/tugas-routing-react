import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('../home')
    }

    return(
        <div>
            <h3>Halaman About</h3>
            <button onClick={handleClick}>home</button>
        </div>
    )
}

export default About;