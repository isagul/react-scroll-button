import React, { useState, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ScrollButton from '../../src';
import './index.css';

const items = [
  { name: 'red', value: 'red' },
  { name: 'blue', value: 'blue' },
  { name: 'green', value: 'green' },
  { name: 'yellow', value: 'yellow' },
  { name: 'orange', value: 'orange' },
  { name: 'lightblue', value: 'lightblue' },
  { name: 'purple', value: 'purple' },
  { name: 'lightgreen', value: 'lightgreen' },
];

 const Example = () => {
  const [targetId, setTargetId] = useState('red');

  const handleAreaId = e => {
    setTargetId(e.target.value);
  };

  return (
    <div className="index">
      <div className="github-area">
        <a
          href="https://github.com/isagul/react-scroll-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>View On Github</p>
        </a>
      </div>
      <div className="user-interaction-area">
        <label>Change Target Id: </label>
        <select
          onChange={handleAreaId}
          placeholder="red is default"
          value={targetId}
        >
          {items.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </div>
      <div className="items">
        {items.map((item, index) => {
          return (
            <div
              key={index}
              id={`${item.value}`}
              className="boxes"
              style={{
                backgroundColor: `${item.value}`,
              }}
            >
              id = {item.name}
            </div>
          );
        })}
      </div>

      <ScrollButton
        targetId={targetId}
        behavior="smooth"
        buttonBackgroundColor="#CD5252"
        buttonColor="#fff"
        iconType="up"
        scrollSpeed="0.5s"
      />
    </div>
  );
};

const rootElement =
  document.getElementById('root') || document.createElement('div');
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Example />
  </StrictMode>,
);
