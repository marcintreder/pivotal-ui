import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { mergeProps } from '../helpers';

export default class TileLayoutItem extends React.Component {
  componentDidMount() {
    //require('../../css/tile-layout/tile-layout.scss');
  }

  render() {
    return <div {...mergeProps({ className: 'tile-item' }, this.props)} />;
  }
}

TileLayoutItem.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.object,
  children: PropTypes.string
};

TileLayoutItem.defaultProps = {
  className: 'tile-item'
};