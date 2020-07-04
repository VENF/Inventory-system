import React from 'react';

import './PageContainer.scss';

export default function PageContainer(props) {
  return <div className="page-container">{props.children}</div>;
}
