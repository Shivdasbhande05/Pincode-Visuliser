import FilteredItems from "./FilteredItems";
import Message from "./Messege";
import Pincode from "./Pincode";
import PincodeHeading from "./PincodeHeading";
import Pincodes from "./Pincodes";

const ShowPage = ({ pincode }) => {
  return (
    <>
      <PincodeHeading currentPincode={pincode[0].PostOffice[0].Pincode} />
      <Message msg={pincode[0].Message} />
      {/* <FilteredItems/> */}
      <Pincodes pincode={pincode} />
    </>
  );
};

export default ShowPage;
