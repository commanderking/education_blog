import React from "react";
import styles from "./prototypeWrapper.module.css";

const PrototypeWrapper = ({ title, children }) => {
  return (
    <div>
      <div className={styles.title}>
        <h3 className={styles.clearMargin}>{title}</h3>
      </div>
      <div className={styles.container}>{children}</div>
    </div>
  );
};

export default PrototypeWrapper;
