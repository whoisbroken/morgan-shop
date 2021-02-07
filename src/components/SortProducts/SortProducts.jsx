import React from "react";
import { connect, useDispatch } from "react-redux";
import { createStructuredSelector } from "reselect";

import { sortProducts } from "../../redux/actions/action";
import { selectSortBy } from "../../redux/selectors/sort.selectors";

import "./SortProducts.styles.scss";

const SortProducts = ({ sort }) => {
  const dispatch = useDispatch();

  const handSelectChange = (e) => {
    const target = e.target;
    const value = target.value;

    dispatch(sortProducts(value));
  };

  return (
    <section className="SortProducts">
      <span className="SortProducts_Title">Sort by:</span>
      <select 
        className="SortProducts_Select" 
        value={sort}
        onChange={handSelectChange} 
      >
        <option value="hightToLow" className="SortProducts_Option">Price hight to low</option>
        <option value="lowToHight" className="SortProducts_Option">Price low to hight</option>
        <option value="newness" className="SortProducts_Option">Newness</option>
      </select>
    </section>
  )
}

const mapStateToProps = createStructuredSelector({
  sort: selectSortBy,
});

export default connect(mapStateToProps, null)(SortProducts);