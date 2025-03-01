import { useState } from "react";
import ShowPage from "./Components/Showpage";
import FirstPage from "./Components/FirstPage";

function App() {
  
  const [pincode, setPincode] = useState([]);

  const getPincode = (resPincode) => {
    // console.log("New Pincode is = "+ resPincode);

    if(resPincode.length !== 6){
      alert("Pincode must be 6 digits");
    } else {
      let p = fetch("https://api.postalpincode.in/pincode/"+resPincode);
    p.then(res => res.json()).then(data => setPincode(data));
    }

  }

  return (
    <>{pincode.length === 0 ? <FirstPage getPincode={getPincode} /> : <ShowPage pincode={pincode} resPincode={getPincode}/>}</>
  );
}

export default App;
