import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import UIButton from '../UIButton/UIButton.js';
import Modal from '../modal/modal.js';
import Input from '../input/input.js';

export default class ModalContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false, disableAnimation: false };
  }

  render() {
    return (
      <div>
        <UIButton kind="default" onClick={() => this.setState({ show: true })}>
          Open Modal
        </UIButton>
        <Modal
          animationDuration={this.state.disableAnimation ? 0 : undefined}
          title="What a Header!"
          size="30%"
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
          footer={
            <UIButton
              kind="default"
              onClick={() => this.setState({ show: false })}
            >
              Close
            </UIButton>
          }
        >
          <p>Text in a body</p>
          <Input autoFocus placeholder="Tell me your darkest secrets" />
        </Modal>
      </div>
    );
  }
}
