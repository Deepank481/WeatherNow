import styles from "./DetailItem.module.css";
function DetailItem({ detailName, detailValue, detailClass }) {
  return (
    <div className={styles.detailItem}>
      <i className={`${detailClass}`}></i>
      <span className={styles.detailLabel}>{detailName}</span>
      <span className={styles.detailValue}>{detailValue}</span>
    </div>
  );
}

export default DetailItem;
