import React from 'react';
import './uxpin-wrapper.scss';


export default function UXPinWrapper({ children }) {
  return <div className="uxpin-wrapper">{children}</div>;
}

/*export default function UXPinWrapper(children) {
  const MergeComponent = children.children.type;
  return <MergeComponent {...children.children.props} className="uxpin-wrapper" />; 
}*/

