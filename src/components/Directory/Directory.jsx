import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategory } from "../../redux/selectors/data.selectors";

import MenuItem from '../MenuItem/MenuItem';

import './Directory.styles.scss';

const Directory = ({ categories }) => {
      return (
        <section className='Directory_Menu'>
          {categories.length === 0 ? <div>Load</div> : categories.map(item => (
            <MenuItem key={item.id} {...item} />
          ))}
        </section>
      );
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategory,
})


export default connect(mapStateToProps)(Directory);
  