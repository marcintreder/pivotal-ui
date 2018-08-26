import React from 'react';
import { FlexTable } from '../table/index.js';
import PropTypes from 'prop-types';

export default function TableFlex(props) {
  return <FlexTable {...props} />;
}

TableFlex.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array.isRequired
};
