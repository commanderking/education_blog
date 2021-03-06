import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const Prototypes = () => {
  return (
    <div>
      <Layout>
        <h3>Prototypes</h3>
        <div>
          <Link to="/prototypes/celltower">Pythagorean Theorem</Link>
          <p>
            Applying the Pythagorean theorem to determine the optimal locations
            of cell towers in a Martian outpost{" "}
          </p>
        </div>
        <div>
          <Link to="/prototypes/coldcall">Cold Call Card Deck</Link>
          <p>
            Card deck used to randomly call students to check their
            understanding
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Prototypes;
