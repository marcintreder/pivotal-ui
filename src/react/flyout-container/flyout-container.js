import React from 'react';
import PropTypes from 'prop-types';
import UIButton from '../UIButton/UIButton.js';
import Flyout from '../flyout/flyout.js';
import Toggle from '../toggle/toggle.js';
import Grid from '../grid/grid.js';
import FlexCol from '../flex-col/flex-col.js';

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { created, show, disableAnimation } = this.state;

    return (
      <div>
        <Grid>
          <FlexCol fixed>
            <UIButton
              kind="default"
              onClick={() => this.setState({ show: true })}
            >
              Open Flyout
            </UIButton>
          </FlexCol>
          <FlexCol>
            <Toggle
              size="medium"
              onChange={() =>
                this.setState({
                  disableAnimation: !this.state.disableAnimation
                })
              }
            />
          </FlexCol>
        </Grid>
        {created && (
          <p className="mtl">Last task created: {created.toLocaleString()}</p>
        )}

        <Flyout
          {...{
            animationDuration: this.state.disableAnimation ? 0 : undefined,
            show,
            header: <h3>Flyout header</h3>,
            headerClassName: 'header-class',
            bodyClassName: 'body-class',
            onHide: () => this.setState({ show: false })
          }}
        >
          <h1>Flyout content</h1>
        </Flyout>
      </div>
    );
  }
}
