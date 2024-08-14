import React from 'react';

const ChildComponent = ({ count }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Received Count: {count}</p>
    </div>
  );
};

export default ChildComponent;
