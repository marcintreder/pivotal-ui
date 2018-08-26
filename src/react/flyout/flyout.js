import React from 'react';
import PropTypes from 'prop-types';
import UIButton from '../UIButton/UIButton.js';
import Iconography from '../iconography/iconography.js';
import classnames from 'classnames';
import Dialog from '../dialog/dialog.js';
import Grid from '../grid/grid.js';
import FlexCol from '../flex-col/flex-col.js';

export default class Flyout extends React.PureComponent {
  static propTypes = {
    animationDuration: PropTypes.number,
    animationEasing: PropTypes.string,
    bodyClassName: PropTypes.string,
    children: PropTypes.any,
    dialogClassName: PropTypes.string,
    buttonAriaLabel: PropTypes.string,
    header: PropTypes.any,
    headerClassName: PropTypes.string,
    iconSrc: PropTypes.string,
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool,
    width: PropTypes.string
  };

  static defaultProps = {
    iconSrc: 'close',
    buttonAriaLabel: 'Close'
  };

  componentDidMount() {
    require('../../css/flyout');
  }

  render() {
    const {
      dialogClassName,
      buttonAriaLabel,
      header,
      onHide,
      children,
      headerClassName,
      bodyClassName,
      iconSrc,
      ...props
    } = this.props;

    const mergedDialogClassNames = classnames(
      dialogClassName,
      'pui-flyout-dialog'
    );
    const dialogProps = {
      ...props,
      hideOnBackdropClick: false,
      hideOnEscKeyDown: false,
      dialogClassName: mergedDialogClassNames,
      onHide,
      className: 'pui-flyout-dialog-backdrop',
      updateParentZIndex: true
    };

    return (
      <Dialog {...dialogProps}>
        <Grid className={classnames('pui-flyout-header', headerClassName)}>
          <FlexCol fixed>
            <UIButton
              {...{
                kind: 'default',
                className: 'pui-flyout-icon-btn',
                iconOnly: true,
                flat: true,
                'aria-label': buttonAriaLabel,
                onClick: onHide,
                icon: <Iconography {...{ src: iconSrc }} />
              }}
            />
          </FlexCol>
          <FlexCol>{header}</FlexCol>
        </Grid>
        <div className={classnames('pui-flyout-body', bodyClassName)}>
          {children}
        </div>
      </Dialog>
    );
  }
}
