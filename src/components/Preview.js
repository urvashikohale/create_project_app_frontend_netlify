import React from "react";

const Preview = ({ selectedFile }) => {
  return (
    <div className="previewRow">
      <img
        src={selectedFile ? URL.createObjectURL(selectedFile) : "./default.png"}
        className="previewImage"
        alt="previewImage"
      />
    </div>
  );
};

export default Preview;
