import React from 'react';
import { Table } from '../table/index.js';
import PropTypes from 'prop-types';

export default function TableBasic(props) {
  return <Table {...props} />;
}

TableBasic.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array.isRequired
};
