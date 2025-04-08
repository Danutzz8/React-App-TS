import React, { useState } from 'react';
import './index.scss';

interface Tab {
    label: string;
    content: React.ReactNode;
}

interface CustomTabsProps {
    tabs: Tab[];
    onChange?: (activeTabIndex: number) => void;
}

const CustomTabs: React.FC<CustomTabsProps> = ({ tabs, onChange }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTabIndex(index);
        if (onChange) {
            onChange(index);
        }
    };

    return (
        <div className='tabs-container'>
            <div style={{ display: 'flex', borderBottom: '1px solid #ccc' }}>
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => handleTabClick(index)}
                        className={`tab-button ${activeTabIndex === index ? 'active' : ''}`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>
            <div className='tab-content'>
                {tabs[activeTabIndex]?.content}
            </div>
        </div>
    );
};

export default CustomTabs;