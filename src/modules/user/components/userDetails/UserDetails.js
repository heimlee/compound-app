import React, { useState } from 'react';

import './userDetails.scss';

export const UserDetails = (props) => {
  const [ activeTab, setActiveTab ] = useState(0);

  const renderTabs = () => {
    const tabs = props.children;
    return tabs.map((tab, index) => {
      let tabsStyle = index === activeTab ? "tab selected" : "tab";
      return (
        <div 
          key={index}
          index={index}
          activeTab={activeTab}
          className={tabsStyle}
          onClick={() => setActiveTab(index)}
        >
          {tab.props.title}
        </div>
      );
    });
  };

  return (
    <div className="user-details-container">
      <div className="tabs-list">{renderTabs()}</div>
      <div className="user-content">
        {props.children[activeTab]}
      </div>
    </div>
  );
};
