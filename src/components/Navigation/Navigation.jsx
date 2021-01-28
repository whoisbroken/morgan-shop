import React from 'react';
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategory } from "../../redux/selectors/data.selectors";
import { categoryFilter } from "../../redux/actions/action";

import "./Navigation.scss";

const Navigation = ({ categories, categoryFilter }) => {
  return (
    <nav className="Nav">
      <ul className="Nav_List">
        {categories.length === 0 ? <div>Load</div> : categories.map(({ title, alias, id }) => (
          <li className="Nav_Item" key={id}>
            <NavLink
              className="Nav_Link"
              to={`/${alias}`} 
              activeClassName="Nav_Link_active"
              onClick={() => categoryFilter(id)}
            >
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategory,
})

const mapDispatchToProps = (dispatch) => ({
  categoryFilter: (id) => dispatch(categoryFilter(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);