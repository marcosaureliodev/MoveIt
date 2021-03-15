import { ppid } from "process";
import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img
        src="https://avatars.githubusercontent.com/u/63154006?s=460&u=42ba311a73dfa829f5ea8cd220fd054ee05314cb&v=4://avatars.githubusercontent.com/u/63154006?s=60&v=4"
        alt="Marcos Aurelio"
      />
      <div>
        <strong>Marcos Aurélio</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          Level 1
        </p>
      </div>
    </div>
  );
}
