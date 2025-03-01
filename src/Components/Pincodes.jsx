import Pincode from "./Pincode";
import styles from "./Pincodes.module.css";

const Pincodes = ({ pincode }) => {
  return (
    <>
      <div className={styles.setPincodes}>
        {pincode[0].PostOffice.map((data) => (
          <Pincode
            key={data.Name}
            name={data.Name}
            type={data.BranchType}
            status={data.DeliveryStatus}
            district={data.District}
            division={data.Division}
          />
        ))}
      </div>
    </>
  );
};

export default Pincodes;
