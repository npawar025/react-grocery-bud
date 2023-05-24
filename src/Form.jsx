import React, { useState } from "react";
import { toast } from "react-toastify";

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState("");

  const handelSubmit = (e) => {
    e.preventDefault();
    if (!newItemName) {
      toast.error("please provide a value");
      return;
    }
    addItem(newItemName);
    setNewItemName("");
  };

  return (
    <form onSubmit={handelSubmit}>
      <h4>grocery bud</h4>
      <div className="form-control">
        <input
          type="text"
          name="input"
          id="input"
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn">
          add item
        </button>
      </div>
    </form>
  );
};

export default Form;
