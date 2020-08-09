import React from 'react';

import './PageContainer.scss';

export default function PageContainer(props) {
  return (
    <section className={`page-container ${props.menuHidden && 'menu-hidden'}`}>
      <div className="page-container_content">{props.children}</div>
    </section>
  );
}
