import React from 'react';
import { SortableTable } from '../table/index.js';
import PropTypes from 'prop-types';

export default function TableSortable(props) {
  return <SortableTable {...props} />;
}

TableSortable.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array.isRequired,
  defaultSort: PropTypes.string
};
