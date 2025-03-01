import { useRef } from "react";

const FilteredItems = () => {
    const filteritems = useRef();
    console.log(filteritems.current);
    return<>
    <div>
        <input type="text" ref={filteritems}/>
        <button>🔍</button>
    </div>
    </>
}

export default FilteredItems;