import React from "react";

const Tab = ({activeTab, setActiveTab, tab_text}) => {

    const onClick = (i) => {
        setActiveTab(i)
    }

    const renderTab = tab_text.map((tab, i) => {
            return (
                <a key={i} className={activeTab===i ? "item active" : "item"} onClick={() => onClick(i)}>
                    {tab}
                </a>
            )
        }
    )

    return (
        <div className="ui tabular menu">
            {renderTab}
        </div>
    );
}
export default Tab;
