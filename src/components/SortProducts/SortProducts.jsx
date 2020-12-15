import { useDispatch } from "react-redux";

import "./SortProducts.scss";
import { sortProducts } from "../../redux/actions/action";

const SortProducts = () => {
    const dispatch = useDispatch();

    const handSelectChange = (e) => {
        const target = e.target;
        const value = target.value;

        dispatch(sortProducts({ value }));
    };

    return (
        <div className="SortProduct">
          <span className="SortProduct_Title">Sort by:</span>
          <select className="SortProduct_Select" onChange={handSelectChange}>
              <option value="hightToLow" className="SortProduct_Option">Price hight to low</option>
              <option value="lowToHight" className="SortProduct_Option">Price low to hight</option>
              <option value="sortNewness" className="SortProduct_Option">Newness</option>
          </select>
        </div>
    )
}

export default SortProducts;