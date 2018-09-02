import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { mergeProps } from '../helpers';

export default class TileLayoutItem extends React.Component {
  static propTypes = {
    className: PropTypes.string.isRequired,
    style: PropTypes.object,
    children: PropTypes.string
  };

  static defaultProps = {
    className: 'tile-item'
  };

  componentDidMount() {
    //require('../../css/tile-layout/tile-layout.scss');
  }

  render() {
    return (
      <div className="tile-item" style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
