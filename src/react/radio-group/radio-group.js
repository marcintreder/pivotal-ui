import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class RadioGroup extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    children: PropTypes.element
  };

  componentDidMount() {
    //require('../../css/forms/forms.scss');
  }

  render() {
    const {
      name,
      children,
      onChange,
      className,
      value,
      ...others
    } = this.props;
    const radioProps = onChange ? { name, onChange } : { name };

    return (
      <div
        {...{ ...others, className: classnames('pui-radio-group', className) }}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            ...radioProps,
            checked: child.props.value === value
          })
        )}
      </div>
    );
  }
}
