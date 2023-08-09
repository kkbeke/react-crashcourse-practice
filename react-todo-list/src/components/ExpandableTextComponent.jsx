import React, { useState } from "react";

const ExpandableTextComponent = ({ children, maxChars }) => {
  const [showFullText, setShowFullText] = useState(true);

  const text = showFullText ? children : children.substring(0, maxChars);

  if (children.length <= maxChars) return <div>{children}</div>;

  return (
    <div>
      <h2>Show more or less</h2>
      {text}..
      <button onClick={() => setShowFullText((prevState) => !prevState)}>
        {showFullText ? "Less" : "More"}
      </button>
    </div>
  );
};

export default ExpandableTextComponent;
