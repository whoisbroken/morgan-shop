import React from 'react';
import { withRouter } from 'react-router-dom';

import { connect } from "react-redux";

import { categoryFilter } from "../../redux/actions/action";

import './MenuItem.styles.scss';

const MenuItem = ({ categoryFilter, title, image, history, alias, match, id }) => {
  return (
    <div
      className="menu-item"
      onClick={() => {history.push(`${match.url}${alias}`); categoryFilter(id)}}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(https://morgan-shop.herokuapp.com${image})`
        }}
      />
      <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
)};

const mapDispatchToProps = (dispatch) => ({
  categoryFilter: (id) => dispatch(categoryFilter(id)),
})

export default withRouter(connect(null, mapDispatchToProps)(MenuItem));