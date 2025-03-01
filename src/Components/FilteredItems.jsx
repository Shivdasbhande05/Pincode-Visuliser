import { useRef } from "react";

const FilteredItems = ({filterData}) => {
    const filteritems = useRef();

    const postOffice = (event) => {
        const filterItem = filteritems.current.value;
        filterData(filterItem);
    }
    
    return<>
    <div>
        <input type="text" ref={filteritems}/>
        <button onClick={postOffice}>🔍</button>
    </div>
    </>
}

export default FilteredItems;