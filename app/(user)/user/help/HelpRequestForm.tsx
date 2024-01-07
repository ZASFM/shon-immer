"use client";
import React, { useState } from "react";
import { MdOutlineQuestionMark } from "react-icons/md";

const HelpRequestForm = () => {
  const HelpType = [
    "Order Delivery",
    "Payment ",
    "Customer Service ",
    "Account Related ",
    "Other",
  ];

  const [helpType, SetHelpType] = useState("");
  const [descr, setDescr] = useState("");
  return (
    <form>
      <div className="flex flex-col space-y-8">
        <div>
          <label className="form-label" htmlFor="category">
            What kind of help do you need?
          </label>
          <select
            value={helpType}
            onChange={(e) => SetHelpType(e.target.value)}
            className="form-input"
            id="category"
          >
            {HelpType.map((help) => {
              return <option key={help}>{help}</option>;
            })}
          </select>
        </div>
        <div>
          <label className="form-label" htmlFor="description">
            Describe the issue
          </label>
          <textarea
            value={descr}
            onChange={(e) => setDescr(e.target.value)}
            rows={2}
            placeholder="Describe issue here"
            className="form-input"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-white flex items-center justify-center bg-green-600 hover:bg-green-700 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <p>Submit</p>
        </button>
      </div>
    </form>
  );
};

export default HelpRequestForm;
