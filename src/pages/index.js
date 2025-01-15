import React from "react";
import { Link } from "gatsby";

const Home = () => (
  <main>
    <h1>Benvenuto!</h1>
    <p>Seleziona una delle seguenti pagine:</p>
    <div style={{ display: "flex", gap: "10px" }}>
      <Link to="/pagenew">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Vai alla Pagina 1
        </button>
      </Link>
      <Link to="/page-2">
        <button style={{ padding: "10px 20px", cursor: "pointer" }}>
          Vai alla Pagina 2
        </button>
      </Link>
    </div>
  </main>
);

export default Home;
