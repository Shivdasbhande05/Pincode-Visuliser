import styles from "./Searchbar.module.css";
import { useRef } from "react";
const SearchBar = ({ getPincode }) => {
  const pincodeNameElement = useRef();

  const handleClickedEvent = (event) => {
    const pincodeName = pincodeNameElement.current.value;
    getPincode(pincodeName);
    pincodeNameElement.current.value = "";
  };

  return (
    <>
      <div className={styles.inputForm}>
        <input
          type="text"
          maxLength={6}
          placeholder="Pincode"
          className={styles.inputPincode}
          ref={pincodeNameElement}
        />
        <button
          type="submit"
          className={styles.submit}
          onClick={handleClickedEvent}
        >
          Lookup
        </button>
      </div>
    </>
  );
};

export default SearchBar;
