import React from 'react';
import PropTypes from 'prop-types';
import Iconography from '../iconography/iconography.js';
import Dropdown from '../dropdown/dropdown.js';
import classnames from 'classnames';
import { mergeProps } from '../helpers';

const defaultChild = (icon, message) => (
  <div className="dropdown-notifications-none" role="presentation">
    <Icon src={icon} />
    <p className="type-neutral-4 em-alt mbn">{message}</p>
  </div>
);

export default class NotificationAlert extends React.PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
  };

  render() {
    const { size, children, ...others } = this.props;
    const numChildren = React.Children.count(children);
    const badge = numChildren > 0 && (
      <Iconography src="warning" className="dropdown-notifications-alert" />
    );
    const dropdownTitleClasses = classnames(
      'dropdown-notifications-title',
      size,
      { 'dropdown-notifications-has-alerts': numChildren > 0 }
    );
    const dropdownTitle = (
      <div className={dropdownTitleClasses}>
        <Iconography src="notifications" />
        {badge}
      </div>
    );
    const props = mergeProps(others, {
      className: 'dropdown-notifications dropdown-icon-only'
    });

    return (
      <Dropdown flat showIcon={false} title={dropdownTitle} {...props}>
        {children || defaultChild('notifications', 'no alerts')}
      </Dropdown>
    );
  }
}
