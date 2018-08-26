import React from 'react';
import PropTypes from 'prop-types';
import { mergeProps } from '../helpers';

export default class NotificationItem extends React.PureComponent {
  static propTypes = {
    href: PropTypes.string
  };

  render() {
    const { href, children, ...props } = this.props;
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }
}
