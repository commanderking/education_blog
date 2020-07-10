import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";

const Prototypes = () => {
  return (
    <div>
      <Layout>
        <h3>Prototypes</h3>
        <div>
          <Link to="/prototypes/celltower">Cell Tower Problem </Link>
          <p>Adding meaningful context to pythagorean theorem problems</p>
        </div>
      </Layout>
    </div>
  );
};

export default Prototypes;
