import { useState } from "react";
import ShowPage from "./Components/Showpage";
import FirstPage from "./Components/FirstPage";

function App() {
  const [pincode, setPincode] = useState([]);

  const getPincode = (resPincode) => {
    // console.log("New Pincode is = "+ resPincode);

    if (resPincode.length !== 6) {
      alert("Pincode must be 6 digits");
    } else {
      let p = fetch("https://api.postalpincode.in/pincode/" + resPincode);
      p.then((res) => res.json()).then((data) => setPincode(data));
    }
  };

  const getFilterItems = (postOffice) => {
    let newPincode = [...pincode];
    let filterPost = newPincode[0].PostOffice.filter(
      (data) => data.Name.toLowerCase() === postOffice.toLowerCase()
    );
    
  };

  return (
    <>
      {pincode.length === 0 ? (
        <FirstPage getPincode={getPincode} />
      ) : (
        <ShowPage pincode={pincode} filterItems={getFilterItems} />
      )}
    </>
  );
}

export default App;
