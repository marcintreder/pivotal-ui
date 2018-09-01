import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

export default class ListItem extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  };
  render() {
    return <li {...this.props}>{this.props.children}</li>;
  }
}
