import React from 'react';
import classnames from 'classnames';
import Iconography from '../iconography/iconography';
import PropTypes from 'prop-types';
import uniqueId from 'lodash.uniqueid';

export default class Checkbox extends React.Component {
  static propTypes = {
    checked: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    id: PropTypes.string,
    labelClassName: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    style: PropTypes.object,
    type: PropTypes.string,
    indeterminate: PropTypes.bool,
    children: PropTypes.string
  };

  static defaultProps = {
    type: 'checkbox',
    indeterminate: false
  };

  componentDidMount() {
    this.el.indeterminate = this.props.indeterminate;
    //require('../../css/forms/forms.scss');
    //require('../../css/checkbox/checkbox.scss');
  }

  componentDidUpdate(prevProps) {
    if (prevProps.indeterminate !== this.props.indeterminate) {
      this.el.indeterminate = this.props.indeterminate;
    }
  }

  render() {
    const {
      indeterminate,
      className,
      disabled,
      children,
      labelClassName,
      style,
      id = uniqueId('checkbox'),
      ...others
    } = this.props;

    return (
      <div {...{ className: classnames('pui-checkbox', className), style }}>
        <input
          {...{
            ...others,
            className: 'pui-checkbox-input',
            type: 'checkbox',
            id,
            disabled,
            ref: el => (this.el = el),
            'aria-disabled': disabled
          }}
        />
        <label
          {...{
            className: classnames('pui-checkbox-label', labelClassName),
            htmlFor: id
          }}
        >
          <span className="pui-checkbox-control">
            <Iconography src={indeterminate ? 'remove' : 'check'} />
          </span>
          {children}
        </label>
      </div>
    );
  }
}
