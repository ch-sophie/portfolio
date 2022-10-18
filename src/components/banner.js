import { Link } from "react-router-dom";
import "../App.css";

function Banner() {
    return (
        <div className="flex-container">
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link> 
            </nav>
            <section className="icons">
                <a target="blank" href="https://www.linkedin.com/in/sophie-cheng03/"><i class="fa-brands fa-linkedin"></i></a>
                <a target="blank" href="https://github.com/ch-sophie"><i class="fa-brands fa-github"></i></a>
            </section>
        </div>
    )
}

export default Banner;