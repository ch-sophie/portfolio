import Banner from "./banner";
import "../App.css";

function Main() {
  return (
    <header>
      <Banner />
      {/* <div className="flex-container"> */}
      <div className="one">
        <section className="name">
          <h1>Cheng Sophie</h1>
          <h2>Junior web developer</h2>
        </section>
      </div>
      <div className="two">
        <section>
          <p>
            <q>
              Continuous effort, not strength or intelligence, is the key to
              unlocking our potential.
            </q>
          </p>
          <i class="fa-regular fa-copyright"></i> 2022
        </section>
      </div>
    </header>
  );
}

export default Main;
