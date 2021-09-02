import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './StoryContainer.scss';

function StoryContainer(props) {
  const { fill, spacing, children } = props;

  return <div styleName={classNames('container', { spacing, fill })}>{children}</div>;
}

StoryContainer.propTypes = {
  fill: PropTypes.bool,
  spacing: PropTypes.bool,
  children: PropTypes.any,
};

export default StoryContainer;
