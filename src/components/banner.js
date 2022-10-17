import "../App.css";

function Banner() {
    return (
        <div className="flex-container">
            <nav>
                <a href="https://ch-sophie.github.io/vcard">Home</a>
                <a href="https://ch-sophie.github.io/vcard/about">About</a> 
                <a href="https://ch-sophie.github.io/vcard/portfolio">Portfolio</a> 
            </nav>
            <section className="icons">
                <a target="blank" href="https://www.linkedin.com/in/sophie-cheng03/"><i class="fa-brands fa-linkedin"></i></a>
                <a target="blank" href="https://github.com/ch-sophie"><i class="fa-brands fa-github"></i></a>
            </section>
        </div>
    )
}

export default Banner;