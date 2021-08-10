import styles from "./MenuList.module.css";
const MenuList = () => {
  return (
    <div className={styles.menu}>
      {/* Title */}
      <h1 className={styles.title}>이력서 PDF</h1>
      <hr className={styles.hr} />

      {/* Menu */}
      <h4> 목차 </h4>
      <nav>
        <ol>
          <li className={(styles.menuList, styles.active)}>1 페이지</li>
          <li className={styles.menuList}>2 페이지</li>
          <li className={styles.menuList}>3 페이지</li>
          <li className={styles.menuList}>4 페이지</li>
        </ol>
      </nav>
      <hr className={styles.hr} />

      {/* Link */}
      <h4> 링크 </h4>
      <ul>
        <li className={styles.linkList}>
          <a
            href="https://github.com/devxian96"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className={styles.linkList}>
          <a
            href="https://devxian96.github.io/PortfolioNuxt/"
            target="_blank"
            rel="noreferrer"
          >
            Portfolio
          </a>
        </li>
      </ul>
      <hr className={styles.hr} />

      {/* Action */}
      <h4> 기타 </h4>
      <div className={styles.action}>
        <button className={styles.download}>PDF 다운로드</button>
      </div>
    </div>
  );
};

export default MenuList;
