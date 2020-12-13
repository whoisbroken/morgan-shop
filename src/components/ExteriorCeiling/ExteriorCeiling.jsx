import React, { Component } from 'react';
import { connect } from "react-redux";

import "./ExteriorCeiling.scss";
import AddIcon from "../../images/add.svg"
import { fetchProducts, fetchCategories } from '../../redux/actions/action';


class ExteriorCeiling extends Component {
  componentDidMount() {
    return this.props.products.length === 0 ? this.props.fetchProducts() : null
  }

  render() {
    return (
      <div className="ExteriorCeiling">
        <div className="ExteriorCeiling_Container Container">
          <div className="ExteriorCeiling_Sort">
              <span className="Sort-Title">Sort by:</span>
              <select className="Sort-Select">
                  <option value={"hightToLow"} className="Sort-Option">Price hight to low</option>
                  <option value={"lowToHight"} className="Sort-Option">Price low to hight</option>
                  <option value={"sortNewness"} className="Sort-Option">Newness</option>
              </select>
          </div>
          <ul className="ExteriorCeiling_List" >
            {
              this.props.products.filter((product => product.categoryId === "f6e7591c-6743-432d-992b-c3bff746848d"))
                .map(({ id, categoryId, name, alias, price, image, timeStamp }) => (

                  <li className="ExteriorCeiling_Item" key={id}>
                    {
                      // // props.isBasket ?
                        // <ButtonIcon clazz='Product-Button' img={remove} alt='Remove item' /> :
                        <button className='ExteriorCeiling_Button'  alt='Add item'>
                          <img src={AddIcon} alt="add"/>
                        </button>
                    }
                    <img className="ExteriorCeiling_Img" src={image} alt="" />
                    <div className="ExteriorCeiling_Box">
                      <p className="ExteriorCeiling_Name">{name}</p>
                      <p className="ExteriorCeiling_Price">{+ price ? `£` + parseFloat(price).toFixed(2) : null}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(ExteriorCeiling);