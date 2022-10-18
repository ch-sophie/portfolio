import "../App.css";
import portrait from "../images/image3.jpg";

function About() {
    const greeting = "Hello, I'm Sophie!";
    const dev = "Junior web developer";

    return (
        <div id="containerAbout">
            <section className="sectionAbout">
                <div className="flip-card-about">
                    <div className="flip-card-inner-about">
                        <div className="flip-card-front-about">
                            <img title="photo" className="image1" src={portrait} width="50%" alt="portrait" />
                            <h3 className="greetingAbout">{greeting}</h3>
                            <span className="title2">{dev}</span>
                            <hr />
                            <p className="pAbout">
                            I graduated in Translation in English-Chinese-French at the Free University of Brussels (ULB). I initially wanted to become a language teacher abroad, I am passionate about languages, learning and teaching, and discovering new cultures. However, after my graduation, I was not sure of the path I chose and I discovered the world of IT, which is very fascinating, and I am now on a journey to become a web developer. I am hardworking, organised and open-minded. <br />
                            In my free time, I like travelling, hiking, baking (I make great chocolate pecan cookies), solving puzzles and eating. <br />
                            I also love turtles and anything space-related. <i class="fa-solid fa-meteor"></i>
                            </p>
                        </div>
                        <div className="flip-card-back-about">
                            <h2 className="contact">Contact</h2>
                            <a target="_blank" rel="noopener noreferrer" href="https://delightful-clafoutis-008edf.netlify.app/" title="homepage"><i class="iconsAbout fa-solid fa-rocket"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://ch-sophie.github.io/My-CV/" title="myCV"><i class="iconsAbout fa-regular fa-id-badge"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sophie-cheng03/" title="myLinkedIn"><i class="iconsAbout fa-brands fa-linkedin"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/ch-sophie" title="myGithub"><i class="iconsAbout fa-brands fa-github"></i></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://ch-sophie.github.io/vcard/portfolio" title="myPortfolio"><i class="iconsAbout fa-regular fa-folder-open"></i></a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;