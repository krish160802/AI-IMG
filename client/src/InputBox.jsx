import React from "react";

export const InputBox = ({ label, setAttribute, stateAttribute }) => {
  return (
    <div className="label-input-pair">
      <label className="label">{label}</label>
      <input
        type="text"
        className="main-input"
        value={stateAttribute}
        onChange={(e) => setAttribute(e.target.value)}
      />
    </div>
  );
};

export const InputBoxA = ({ label, setSize, size }) => {
  function doSomething(obj) {
    setSize(obj.target.value);
  }

  return (
    <div className="label-input-pair">
      <label className="label">{label}</label>
      <select
        id="btnState"
        onClick={(e) => {
          doSomething(e);
        }}
      >
        <option className="opt" value="256x256">256x256</option>
        <option className="opt" value="512x512">512x512</option>
      </select>
    </div>
  );
};
