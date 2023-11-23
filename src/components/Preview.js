import React from "react";

const Preview = ({ selectedFile }) => {
  return (
    <div className="previewRow">
      <img
        src={selectedFile ? URL.createObjectURL(selectedFile) : "./default.png"}
        className="previewImage"
      />
    </div>
  );
};

export default Preview;
