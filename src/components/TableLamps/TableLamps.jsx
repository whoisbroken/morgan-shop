import React, { Component } from 'react';
import { connect } from "react-redux";

import "./TableLamps.scss";
import AddIcon from "../../images/add.svg"
import { fetchProducts, fetchCategories } from '../../redux/actions/action';


class TableLamps extends Component {
  componentDidMount() {
    return this.props.products.length === 0 ? this.props.fetchProducts() : null
  }

  render() {
    return (
      <div className="TableLamps">
        <div className="TableLamps_Container Container">
          <div className="TableLamps_Sort">
              <span className="Sort-Title">Sort by:</span>
              <select className="Sort-Select">
                  <option value={"hightToLow"} className="Sort-Option">Price hight to low</option>
                  <option value={"lowToHight"} className="Sort-Option">Price low to hight</option>
                  <option value={"sortNewness"} className="Sort-Option">Newness</option>
              </select>
          </div>
          <ul className="TableLamps_List" >
            {
              this.props.products.filter((product => product.categoryId === "f95e6ae1-a4bd-44d5-917d-7015f6cdd592"))
                .map(({ id, categoryId, name, alias, price, image, timeStamp }) => (

                  <li className="TableLamps_Item" key={id}>
                    {
                      // // props.isBasket ?
                        // <ButtonIcon clazz='Product-Button' img={remove} alt='Remove item' /> :
                        <button className='TableLamps_Button'  alt='Add item'>
                          <img src={AddIcon} alt="add"/>
                        </button>
                    }
                    <img className="TableLamps_Img" src={image} alt="" />
                    <div className="TableLamps_Box">
                      <p className="TableLamps_Name">{name}</p>
                      <p className="TableLamps_Price">{+ price ? `£` + parseFloat(price).toFixed(2) : null}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(TableLamps);