import "./App.css";
import MainPhoto from "./assets/Rectangle Copy.png";
import Oval from "./assets/Oval.svg";

function App() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>suxo</title>
      </head>
      <body>
        <div className="card">
          <div className="card-image">
            <img className="main-image" src={MainPhoto} alt="Equilibrium" />
          </div>
          <div className="card-content">
            <h2 className="card-title">Equilibrium #3429</h2>
            <p className="card-description">
              Our Equilibrium collection promotes balance and calm.
            </p>
            <div className="card-details">
              <span className="price">0.041 ETH</span>
              <span className="time">3 days left</span>
            </div>
            <div className="creator">
              <img src={Oval} alt="Creator" />
              Creation of
              <span className="creator-name">Jules Wyvern</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default App;
