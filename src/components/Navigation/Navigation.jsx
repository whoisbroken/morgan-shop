import React from 'react';
import { NavLink } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategory } from "../../redux/selectors/data.selectors";
import { categoryFilter } from "../../redux/actions/action";

import { selectShowNavMenu } from "../../redux/selectors/data.selectors";
import { toggleNavMenu } from "../../redux/actions/action";

import "./Navigation.styles.scss";

const Navigation = ({ categories, categoryFilter, showNavMenu, toggleNavMenu }) => {
  return (
    <nav className="Nav" style={showNavMenu ? {transform: 'translateX(0)'} : null}>
      <ul className="Nav_List">
        {categories.length === 0 ? <div>Load categories</div> : categories.map(({ title, alias, id }) => (
          <li className="Nav_Item" key={id}>
            <NavLink
              className="Nav_Link"
              to={`/${alias}`}
              activeClassName="Nav_Link_active"
              onClick={() => {categoryFilter(id); if(showNavMenu){toggleNavMenu()}}}
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
  showNavMenu: selectShowNavMenu,
})

const mapDispatchToProps = (dispatch) => ({
  categoryFilter: (id) => dispatch(categoryFilter(id)),
  toggleNavMenu: () => dispatch(toggleNavMenu()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);