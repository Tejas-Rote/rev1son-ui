import styles from "./page.module.css";
import { TbLicense } from "react-icons/tb";
import { TbBrandTypescript } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

export default function Home() {
  return (
    <div className={styles.page_wrapper}>
      <div className={styles.page_section}>
        <div className={styles.title}>
          <h1>Hi !!, Welcome to rev1son-ui</h1>
        </div>
        <div className={styles.subtitle}>
          <p>
            A lightweight go-to library for modern and customizable UI
            components.
          </p>

          <p>
            Simplify your development process with our comprehensive suite of
            reusable, customizable, and responsive components. Designed to help
            you build beautiful and consistent user interfaces quickly and
            efficiently.
          </p>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <div className={styles.feature_icon}>
              <TbLicense className={styles.icon} />
            </div>
            <div className={styles.feature_name}>Free & Open source</div>
            <div className={styles.feature_info}>
              All packages have MIT license, you can use in any project.
            </div>
          </div>
          <div className={styles.feature}>
            <div className={styles.feature_icon}>
              <TbBrandTypescript className={styles.icon} />
            </div>
            <div className={styles.feature_name}>TypeScript based</div>
            <div className={styles.feature_info}>
              Build type safe applications, with typesafe components.
            </div>
          </div>
        </div>
        <div className={styles.btns}>
          <button className={`${styles.btn} ${styles.primary}`}>
            Get started
          </button>
          <button className={styles.btn}>
            <FaGithub className={styles.btn_icon} />

            <p>Git Hub</p>
          </button>
        </div>
      </div>
    </div>
  );
}
