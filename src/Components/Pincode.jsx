import styles from "./Pincode.module.css";
const Pincode = ({ name, type, status, district, division }) => {
  return (
    <div className={styles.pincode}>
      <p>Name : {name}</p>
      <p>Branch Type : {type}</p>
      <p>Delivery Status : {status}</p>
      <p>District :{district}</p>
      <p>Division :{division}</p>
    </div>
  );
};

export default Pincode;
