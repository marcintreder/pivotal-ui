import React from 'react';
import PropTypes from 'prop-types';
import { mergeProps } from '../helpers';

export default class NotificationItem extends React.PureComponent {
  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.oneOfType(PropTypes.string, PropTypes.node)
  };

  render() {
    const { href, children } = this.props;
    return <a href={href}>{this.props.children}</a>;
  }
}
