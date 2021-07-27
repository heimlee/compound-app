import React from 'react';

import './techItem.scss';

export const TechItem = (children) => (
    <div className="tech-item">
      <img className="tech-item-icon" src={children.icon} alt="" />
      <a className="tech-item-link" href={children.href}>{children.title}</a>
    </div>
);
