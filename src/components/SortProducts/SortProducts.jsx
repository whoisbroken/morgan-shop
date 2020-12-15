import { useDispatch } from "react-redux";

import { sortProducts } from "../../redux/actions/action";

const SortProducts = () => {
    const dispatch = useDispatch();

    const handSelectChange = (e) => {
        const target = e.target;
        const value = target.value;

        dispatch(sortProducts({ value }));
    };

    return (
        <div className="Products_Sort">
          <span className="Sort_Title">Sort by:</span>
          <select className="Sort_Select" onChange={handSelectChange}>
              <option value="hightToLow" className="Sort_Option">Price hight to low</option>
              <option value="lowToHight" className="Sort_Option">Price low to hight</option>
              <option value="sortNewness" className="Sort_Option">Newness</option>
          </select>
        </div>
    )
}

export default SortProducts;