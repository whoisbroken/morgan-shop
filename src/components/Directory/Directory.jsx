import React from 'react';
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategory } from "../../redux/selectors/data.selectors";

import MenuItem from '../MenuItem/MenuItem';

import './Directory.styles.scss';

const Directory = ({ category }) => {
  console.log(category)
      return (
        <div className='directory-menu'>
          {category.map(({ title, image, id, alias }) => (
            <MenuItem key={id} title={title} image={image} alias={alias} />
          ))}
        </div>
      );
}

const mapStateToProps = createStructuredSelector({
  category: selectCategory,
})


export default connect(mapStateToProps)(Directory);
  