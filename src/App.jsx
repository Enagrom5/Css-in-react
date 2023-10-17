import roses from "../public/img/roses.jpg";
import "./style.scss";

function App() {
  return (
    <section>
      <img src={roses} alt="rose" ></img>
      <div className="texte">
        <h1>Rozes</h1>
        <h2>Under the Grave </h2>
        <h3>(2016)</h3>
      </div>
      <div className="star">
        <p>Rate this album</p>
        <div className="stars">
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        <span>⭐</span>
        </div>
      </div>
    </section>
  );
}

export default App;
