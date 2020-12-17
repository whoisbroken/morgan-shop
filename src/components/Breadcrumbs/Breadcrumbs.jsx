import React from 'react';
import { NavLink } from "react-router-dom";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ categories, id }) => {

  console.log(categories);
  console.log(id);

  const categoryIndex = categories ? categories.findIndex(category => category.id === id) : null ;

  return (
    <div className="Breadcrumbs">
      <NavLink className="Breadcrumbs_Link" to="/">
        Products
      </NavLink>
      <p className="Breadcrumbs_Arrow">{">"}</p>
      <NavLink className="Breadcrumbs_Link" to="#">
        {
          categoryIndex >= 0 ? 
          <span>{categories[categoryIndex].title}</span> :
          <span>Load category</span>
        }
      </NavLink>
    </div>
  );
};

export default Breadcrumbs;