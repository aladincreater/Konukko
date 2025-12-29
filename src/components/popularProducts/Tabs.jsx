import React from 'react';

const Tabs = ({ activeTab, setActiveTab }) => {
  const tabs = ['Top Rated', 'Best Selling', 'Latest Product'];

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <button
          key={tab}
          className={activeTab === tab ? 'active' : ''}
          onClick={() => setActiveTab(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;