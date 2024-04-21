import React from 'react';

const Row = ({
    content
}) => {
    return (
      <div style={{
          display: "flex",
          flexDirection: "row",
          background: "transparent",
          alignItems: "center",
          padding: "10px 30px"
      }}
      >{content}</div>
    );
};

export default Row;