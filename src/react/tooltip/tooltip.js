import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Tooltip extends React.PureComponent {
  static propTypes = {
    visible: PropTypes.bool,
    size: PropTypes.oneOf(['auto', 'sm', 'md', 'lg']),
    isSticky: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  };

  static defaultProps = {
    visible: true,
    size: 'auto',
    isSticky: false
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    require('../../css/tooltips/tooltips.scss');
  }

  render() {
    let {
      isSticky,
      visible,
      size,
      className,
      children,
      ...others
    } = this.props;

    const newClasses = classnames(
      'tooltip-container',
      visible ? 'tooltip-container-visible' : 'tooltip-container-hidden',
      size === 'auto' ? null : `tooltip-${size}`,
      isSticky ? 'tooltip-hoverable' : null,
      className
    );

    return (
      <div className={newClasses} {...others}>
        <div className="tooltip-content">{children}</div>
      </div>
    );
  }
}
