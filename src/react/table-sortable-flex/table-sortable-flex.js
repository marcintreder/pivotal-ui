import React from 'react';
import { SortableFlexTable } from '../table/index.js';
import PropTypes from 'prop-types';

export default function TableSortableFlex(props) {
  return <SortableFlexTable {...props} />;
}

TableSortableFlex.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array.isRequired,
  defaultSort: PropTypes.string
};
