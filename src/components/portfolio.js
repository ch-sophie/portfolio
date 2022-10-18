import "../App.css";
import { Link } from "react-router-dom";
import card2 from "../images/card2.png";
import card3 from "../images/card3.png";
import card4 from "../images/card4.png";

function Portfolio() {
    return(
        <div className="flex-container">
            <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/portfolio">Portfolio</Link>
            </nav>
            <div className="cardblock">
                {/* card 1 */}
                <section className="cardPort">
                    <div className="flip-card-portfolio">
                        <div className="flip-card-inner-portfolio">
                            <div className="flip-card-front-portfolio">
                                <img className="cardimage" src={card3} alt="Project" style={{width:"350px", height:"260px"}} />
                            </div>
                            <div className="flip-card-back-portfolio">
                                <h1 className="titleProject">Cookie Clicker project</h1>
                                <h3 className="subProject">In HTML/CSS/Javascript</h3>
                                <p className="pProject"><a className="linkcard" href="https://github.com/ch-sophie/Cookie-clicker"> See the project here</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* card 2 */}
                <section className="cardPort">
                    <div className="flip-card-portfolio">
                        <div className="flip-card-inner-portfolio">
                            <div className="flip-card-front-portfolio">
                                <img className="cardimage" src={card4} alt="Project" style={{width:"350px", height:"260px"}} />
                            </div>
                            <div className="flip-card-back-portfolio">
                                <h1 className="titleProject">Food guide project</h1>
                                <h3 className="subProject">In React, Node JS and MongoDB</h3>
                                <p className="pProject"><a className="linkcard" href="https://github.com/ch-sophie/food-guide"> See the project here</a></p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* card 3 */}
                <section className="cardPort">
                    <div className="flip-card-portfolio">
                        <div className="flip-card-inner-portfolio">
                            <div className="flip-card-front-portfolio">
                                <img className="cardimage" src={card2} alt="Project" style={{width:"350px", height:"260px"}} />
                            </div>
                            <div className="flip-card-back-portfolio">
                                <h1 className="titleProject">Random quotes generator</h1>
                                <h3 className="subProject">In React JS</h3>
                                <p className="pProject"><a className="linkcard" href="https://github.com/ch-sophie/random-quotes-generator"> See the project here</a></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className="iconsPort">
            <a target="blank" href="https://www.linkedin.com/in/sophie-cheng03/"><i class="fa-brands fa-linkedin"></i></a>
            <a target="blank" href="https://github.com/ch-sophie"><i class="fa-brands fa-github"></i></a>
            </section>
            <div class="twoPort">
                <section className="footerPort">
                    <p><q>Continuous effort, not strength or intelligence, is the key to unlocking our potential.</q></p>
                    <i class="fa-regular fa-copyright"></i> 2022
                </section>
            </div>
        </div>
    )
}

export default Portfolio;