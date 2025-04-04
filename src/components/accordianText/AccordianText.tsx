import React, { useState } from "react";
import data from "../../data/accordianText";
import "./accordianText.scss";

//From
//https://github.com/sangammukherjee/25-reactjs-interview-projects/blob/master/src/components/accordian/index.jsx
//https://www.youtube.com/watch?v=5ZdHfJVAY-s

// Define the type for each data item
type AccordianDataItem = {
  id: number;
  question: string;
  answer: string;
};

function AccordianText() {
  const [selected, setSelected] = useState<number | null>(null); // State for single selection
  const [enableMultiSelection, setEnableMultiSelection] = useState<boolean>(false); // State to toggle multi-selection
  const [multiple, setMultiple] = useState<number[]>([]); // State for multi-selection

  // Handle single selection
  function handleSingleSelection(getCurrentId: number) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  // Handle multi-selection
  function handleMultiSelection(getCurrentId: number) {
    let cpyMultiple = [...multiple];
    const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

    if (findIndexOfCurrentId === -1) {
        cpyMultiple.push(getCurrentId);
    } else {
        cpyMultiple.splice(findIndexOfCurrentId, 1);
    }

    setMultiple(cpyMultiple);
  }

  return (
    <div className="acc-wrapper m-4 lg:m-0 lg:mt-4">
        <div className="multi-selection-toggle">
            <label className="toggle-switch">
                <input
                type="checkbox"
                checked={enableMultiSelection}
                onChange={() => setEnableMultiSelection(!enableMultiSelection)}
                />
                <span className="slider"></span>
            </label>
            <span className="toggle-label">
                {enableMultiSelection ? "Multi Selection Enabled" : "Multi Selection Disabled"}
            </span>
        </div>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem: AccordianDataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {enableMultiSelection
                ? multiple.includes(dataItem.id) && (
                    <div className="acc-content">{dataItem.answer}</div>
                  )
                : selected === dataItem.id && (
                    <div className="acc-content">{dataItem.answer}</div>
                )}
            </div>
          ))
        ) : (
          <div>No data found!</div>
        )}
      </div>
    </div>
  );
}

export default AccordianText;