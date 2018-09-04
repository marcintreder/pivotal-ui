import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Image from '../image/image.js';

const shortSizes = { xsmall: 'xs', small: 'sm', medium: 'md', large: 'lg' };
const charSizes = { small: 's', medium: 'm', large: 'l', xlarge: 'xl' };
const paddingDirection = { left: 'r', right: 'l' };

export default class Media extends React.Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    imageProxy: PropTypes.oneOfType([PropTypes.node, PropTypes.object]),
    new: PropTypes.bool,
    innerClassName: PropTypes.string,
    mediaSpacing: PropTypes.oneOf(['small', 'medium', 'large', 'xlarge']),
    stackSize: PropTypes.oneOf(['xsmall', 'small', 'medium', 'large']),
    vAlign: PropTypes.oneOf(['middle', 'bottom', 'top']),
    placement: PropTypes.oneOf(['left', 'right']),
    className: PropTypes.string,
    header: PropTypes.string,
    headerClass: PropTypes.string,
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.string])
  };

  static defaultProps = {
    placement: 'left',
    headerClass: 'media-heading mbn type-dark-2'
  };

  componentDidMount() {
    //require('../../css/media');
  }

  render() {
    const {
      className,
      innerClassName,
      image,
      mediaSpacing,
      stackSize,
      vAlign,
      placement,
      children,
      ...other
    } = this.props;
    const vAlignClass = vAlign && `media-${vAlign}`;
    const classes = classnames(
      'media',
      stackSize && `media-stackable-${shortSizes[stackSize]}`,
      className
    );
    const bodyClasses = classnames('media-body', vAlignClass, innerClassName);
    const mediaClasses = classnames(`media-${placement}`, vAlignClass, {
      [`p${paddingDirection[placement]}${charSizes[mediaSpacing]}`]: charSizes[
        mediaSpacing
      ]
    });

    /* UXPin Merge Image extension */
    const imageSelector = () => {
      if (this.props.new) {
        return <h3 className="mvn btn btn-brand btn-sm phl">New</h3>;
      } else if (this.props.imageProxy && !this.props.new) {
        return this.props.imageProxy;
      } else {
        return <Image src={this.props.imageSrc} alt={this.props.imageAlt} />;
      }
    };

    const headerSelector = () => {
      return <h5>{this.props.header}</h5>;
    };

    const content = [
      <div key={0} className={mediaClasses}>
        {imageSelector()}
      </div>,
      <div key={1} className={bodyClasses}>
        {this.props.header ? headerSelector() : ''}
        {children}
      </div>
    ];

    if (placement === 'right') content.reverse();

    return (
      <div {...this.props} className={classes}>
        {content}
      </div>
    );
  }
}
// Eliminate for UXPin Merge. Merge accepts only one component per file
/*export class Flag extends React.Component {
  componentDidMount() {
    //require('../../css/media');
  }

  render() {
    return <Media {...this.props} vAlign="middle" />;
  }
}*/
