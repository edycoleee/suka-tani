import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <div>
      <h3>Ini Halaman Home</h3>
      <br />
      <fieldset>
        <Link to="/poli-anak">Poli Anak</Link>
      </fieldset>
    </div>
  );
}

export default Index;
