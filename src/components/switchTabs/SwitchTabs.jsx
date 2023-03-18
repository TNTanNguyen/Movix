import React, { useState } from "react";

import "./style.scss";

const SwitchTabs = ({ data, onTabChange }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [left, setLeft] = useState(0);

  const handleActiveTab = (tab, index) => {
    setLeft(index * 100);
    setTimeout(() => {
      setSelectedTab(index);
    }, 300);
    if (onTabChange) {
      onTabChange(tab,index);
    }
  };

  return (
    <div className="switchingTabs">
      <div className="tabItems">
        {data.map((tab, index) => (
          <span
            key={index}
            className={`tabItem ${selectedTab === index ? "active" : ""}`}
            onClick={() => handleActiveTab(tab, index)}
          >
            {tab}
          </span>
        ))}
        <div className="movingBg" style={{ left: left }}></div>
      </div>
    </div>
  );
};

export default SwitchTabs;
