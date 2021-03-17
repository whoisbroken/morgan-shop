import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import Slide from '@material-ui/core/Slide';
import { useSnackbar } from 'notistack';

import { addItem, removeItem, showMoreProducts, showAddAlert, showRemoveAlert } from '../../redux/actions/action';
import { selectProductsSizeNumber } from "../../redux/selectors/data.selectors";
import { selectCategoryFilter } from "../../redux/selectors/categoryFilterId.selectors";
import { selectCartItems, selectShowAddAlert, selectShowRemoveAlert } from "../../redux/selectors/cart.selectors";
import { selectSortBy } from "../../redux/selectors/sort.selectors";

import addIcon from "../../images/add.svg";
import removeIcon from "../../images/remove.svg";

import "./Products.styles.scss";

const Products = ({ products, productsListSize, sort, addItem, removeItem, showMoreProducts, cartItems, showAddAlert, showRemoveAlert }) => {

  const [sortBy, setSortBy] = React.useState(sort);
  const { enqueueSnackbar } = useSnackbar();

  if (products) {
    if (sortBy === "hightToLow") products.sort((a, b) => b.price - a.price)
    else if (sortBy === "lowToHight") products.sort((a, b) => a.price - b.price)
    else if (sortBy === "newness") products.sort((a, b) => {
      let dataA = new Date(a.timeStamp)
      let dataB = new Date(b.timeStamp)
      return dataB - dataA
    })
  }

  React.useEffect(() => {
    setSortBy(sort)
    return () => {
      setSortBy("")
    }
  }, [sort])

  const handleClickVariant = (variant) => {
    variant === "success" 
    ? enqueueSnackbar('Item added to basket', {
      anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
      },
      TransitionComponent: Slide,
      variant,
      }) 
    : enqueueSnackbar('Item removed from basket', {
      anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'right',
      },
      TransitionComponent: Slide,
      variant,
      });
  };

  return (
    <section className="Products">
      <ul className="ProductsList">
        {products.length ? (
          products.slice(0, productsListSize)
            .map(product => {
              return (
                <li className="ProductsList_Item" key={product.id}>
                  {cartItems.find(item => item.id === product.id)
                    ? (
                        <button
                          className='ProductsList_Item_Button'
                          onClick={() => {
                            removeItem(product);
                            showRemoveAlert();
                            handleClickVariant('error');
                          }}
                        >
                          <img src={removeIcon} alt="remove" />
                        </button>
                        
                    ) : (
                      <div>
                        <button
                          className='ProductsList_Item_Button'
                          onClick={() => {
                            addItem(product);
                            showAddAlert();
                            handleClickVariant('success');
                          }}
                        >
                          <img src={addIcon} alt="add" />
                        </button>
                      </div>

                    )
                  }
                  <img className="ProductsList_Img" src={`https://morgan-shop.herokuapp.com${product.image}`} alt={product.name} />
                  <div className="ProductsList_Box">
                    <p className="ProductsList_Name">{product.name}</p>
                    <p className="ProductsList_Price">{+ product.price ? `£` + parseFloat(product.price).toFixed(2) : null}</p>
                  </div>
                </li>
              )
            })
        ) : null
        }
      </ul>
      {products.length <= productsListSize ? (
        <button
          className="ProductsList_Button"
          onClick={() => window[`scrollTo`]({ top: 0, behavior: `smooth` })}
        >
          Roll up
        </button>
      ) : (
        <button
          className="ProductsList_Button"
          onClick={() => {
            showMoreProducts(productsListSize);
            setTimeout(() => { window.scrollTo(0, document.documentElement.scrollHeight) }, 80)
          }
          }
        >
          show more
        </button>
      )
      }
    </section>
  );
};

const mapStateToProps = createStructuredSelector({
  products: selectCategoryFilter,
  productsListSize: selectProductsSizeNumber,
  cartItems: selectCartItems,
  sort: selectSortBy,
  showAddAlert: selectShowAddAlert,
  showRemoveAlert: selectShowRemoveAlert
});

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
  removeItem: (item) => dispatch(removeItem(item)),
  showMoreProducts: (value) => dispatch(showMoreProducts(value)),
  showAddAlert: () => dispatch(showAddAlert()),
  showRemoveAlert: () => dispatch(showRemoveAlert()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
