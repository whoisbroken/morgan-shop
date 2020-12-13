import React, { Component } from 'react';
import { connect } from "react-redux";

import "./InteriorCeiling.scss";
import AddIcon from "../../images/add.svg"
import { fetchProducts, fetchCategories } from '../../redux/actions/action';


class InteriorCeiling extends Component {
  componentDidMount() {
    return this.props.products.length === 0 ? this.props.fetchProducts() : null
  }

  render() {
    return (
      <div className="InteriorCeiling">
        <div className="InteriorCeiling_Container Container">
          <div className="InteriorCeiling_Sort">
              <span className="Sort-Title">Sort by:</span>
              <select className="Sort-Select">
                  <option value={"hightToLow"} className="Sort-Option">Price hight to low</option>
                  <option value={"lowToHight"} className="Sort-Option">Price low to hight</option>
                  <option value={"sortNewness"} className="Sort-Option">Newness</option>
              </select>
          </div>
          <ul className="InteriorCeiling_List" >
            {
              this.props.products.filter((product => product.categoryId === "dc4437c1-364b-4ba5-992a-15f55ca2d8eb"))
                .map(({ id, categoryId, name, alias, price, image, timeStamp }) => (

                  <li className="InteriorCeiling_Item" key={id}>
                    {
                        <button className='InteriorCeiling_Button'  alt='Add item'>
                          <img src={AddIcon} alt="add"/>
                        </button>
                    }
                    <img className="InteriorCeiling_Img" src={image} alt="" />
                    <div className="InteriorCeiling_Box">
                      <p className="InteriorCeiling_Name">{name}</p>
                      <p className="InteriorCeiling_Price">{+ price ? `£` + parseFloat(price).toFixed(2) : null}</p>
                    </div>
                  </li>
                ))
            }
          </ul>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => ({
  products: state.data.products,
  categories: state.data.categories
})

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
  fetchCategories: () => dispatch(fetchCategories()),
})

export default connect(mapStateToProps, mapDispatchToProps)(InteriorCeiling);