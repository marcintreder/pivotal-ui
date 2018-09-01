import React from 'react';
import PropTypes from 'prop-types';
import { mergeProps } from '../helpers';

export default class NotificationItem extends React.PureComponent {
  static propTypes = {
    href: PropTypes.string,
    children: PropTypes.string
  };

  render() {
    const { href, children, ...props } = this.props;
    return (
      <a href={href} {...this.props}>
        {this.props.children}
      </a>
    );
  }
}
