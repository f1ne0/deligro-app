import type React from "react";
import styles from "./Header.module.scss";

import { useNavigate } from "react-router-dom";

const Header = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.header}>
      <span onClick={() => navigate(-1)} className={styles.btn__back}>
        <img src="/arrow-right.svg" alt="" />
      </span>
      {children}
    </div>
  );
};

export default Header;
