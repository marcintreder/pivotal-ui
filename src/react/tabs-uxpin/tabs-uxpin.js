import React from 'react';
import Tabs from '../tabs/tabs.js';
import PropTypes from 'prop-types';

export default function TabsUxpin(props) {
  return <Tabs {...props} />;
}

TabsUxpin.propTypes = {
  actions: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
  activeKey: PropTypes.number,
  animation: PropTypes.bool,
  defaultActiveKey: PropTypes.any,
  id: PropTypes.string,
  largeScreenClassName: PropTypes.string,
  onSelect: PropTypes.func,
  paneWidth: PropTypes.number,
  position: PropTypes.oneOf(['top', 'left']),
  responsiveBreakpoint: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  smallScreenClassName: PropTypes.string,
  tabType: PropTypes.oneOf(['simple', 'simple-alt', 'left']),
  tabWidth: PropTypes.number,
  children: PropTypes.node
};
