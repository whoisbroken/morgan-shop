import React from 'react';
import { NavLink } from "react-router-dom";

import "./Breadcrumbs.scss";

const Breadcrumbs = ({ category }) => {
  return (
    <div className="Breadcrumbs">
      <NavLink className="Breadcrumbs_Link" to="/">
        Products
      </NavLink>
      <p className="Breadcrumbs_Arrow">{">"}</p>
      <NavLink className="Breadcrumbs_Link" to="#">
        {category.title}
      </NavLink>
    </div>
  );
};

export default Breadcrumbs;
