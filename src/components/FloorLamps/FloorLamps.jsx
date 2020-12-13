import React, { Component } from 'react';
import { connect } from "react-redux";

import "./FloorLamps.scss";
import AddIcon from "../../images/add.svg"
import { fetchProducts, fetchCategories } from '../../redux/actions/action';


class FloorLamps extends Component {
  componentDidMount() {
    return this.props.products.length === 0 ? this.props.fetchProducts() : null
  }

  render() {
    return (
      <div className="FloorLamps">
        <div className="FloorLamps_Container Container">
          <div className="FloorLamps_Sort">
              <span className="Sort-Title">Sort by:</span>
              <select className="Sort-Select">
                  <option value={"hightToLow"} className="Sort-Option">Price hight to low</option>
                  <option value={"lowToHight"} className="Sort-Option">Price low to hight</option>
                  <option value={"sortNewness"} className="Sort-Option">Newness</option>
              </select>
          </div>
          <ul className="FloorLamps_List" >
            {
              this.props.products.filter((product => product.categoryId === "66ef32ef-03ad-48c2-b295-bdfc018b5881"))
                .map(({ id, categoryId, name, alias, price, image, timeStamp }) => (

                  <li className="FloorLamps_Item" key={id}>
                    {
                        <button className='FloorLamps_Button'  alt='Add item'>
                          <img src={AddIcon} alt="add"/>
                        </button>
                    }
                    <img className="FloorLamps_Img" src={image} alt="" />
                    <div className="FloorLamps_Box">
                      <p className="FloorLamps_Name">{name}</p>
                      <p className="FloorLamps_Price">{+ price ? `£` + parseFloat(price).toFixed(2) : null}</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(FloorLamps);