import React from "react";

const Form = ({ inputValue, setInputValue, handleAddItem }) => {
  return (
    <form
      className="form-control"
      onSubmit={(e) => {
        handleAddItem(e);
      }}
    >
      <input
        type="text"
        className="form-input"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit" className="btn">
        add item
      </button>
    </form>
  );
};

export default Form;
