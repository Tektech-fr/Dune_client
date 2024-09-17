import { Link } from "react-router-dom";

export default function Game() {
  return (
    <div id="GameContainer">
      <h1>Game</h1>

      <p>Game Page</p>

      <button>
        <Link to="/">Retour à l'accueil</Link>
      </button>
    </div>
  );
}
