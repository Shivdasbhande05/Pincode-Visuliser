import styles from "./Messege.module.css";
const Message = ({ msg }) => {
  return (
    <>
      <div className={styles.msgBox}>
        <h3>Message : </h3>
        <p>{msg}</p>
      </div>
    </>
  );
};
export default Message;
