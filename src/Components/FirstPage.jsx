import Heading from "./Heading";
import SearchBar from "./Searchbar";

const FirstPage = ({ getPincode }) => {
  return (
    <>
      <Heading />
      <SearchBar getPincode={getPincode} />
    </>
  );
};

export default FirstPage;
