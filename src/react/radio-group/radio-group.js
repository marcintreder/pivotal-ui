import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class RadioGroup extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.any,
    children: PropTypes.node
  };

  constructor(props) {
    super(props);
    this.state = { selection: null };
  }

  componentDidMount() {
    //require('../../css/forms/forms.scss');
  }

  render() {
    const { name, children, className, ...others } = this.props;
    const radioProps = { name };
    const { selection } = this.state;

    const defaultValue = this.props.value
      ? this.props.value
      : this.props.children[0].props.value;
    const value = this.state.selection ? this.state.selection : defaultValue;
    return (
      <div
        {...{
          ...others,
          value: 'UXPin',
          className: classnames('pui-radio-group', className)
        }}
      >
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            ...radioProps,
            checked: child.props.value === value,
            onChange: event => this.setState({ selection: event.target.value })
          })
        )}
      </div>
    );
  }
}
