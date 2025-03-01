import FilteredItems from "./FilteredItems";
import Message from "./Messege";
import PincodeHeading from "./PincodeHeading";
import Pincodes from "./Pincodes";

const ShowPage = ({ pincode , filterItems}) => {
  return (
    <>
      <PincodeHeading currentPincode={pincode[0].PostOffice[0].Pincode} />
      <Message msg={pincode[0].Message} />
      <FilteredItems filterData={filterItems}/>
      <Pincodes pincode={pincode} />
    </>
  );
};

export default ShowPage;
