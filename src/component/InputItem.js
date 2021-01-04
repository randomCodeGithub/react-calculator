import React from "react";

const InputItem = (props) => {
  return (
    <div className="d-inline">
      <input
        placeholder={props.data.placeholder}
        name={props.data.name}
        onChange={props.data.onChange}
      />
    </div>
  );
};

export default InputItem;
