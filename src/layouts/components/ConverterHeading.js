import React from "react";
import "./ConverterHeading.css";

const ConverterHeading = ({ text1, text2 }) => {
  return (
    <div>
      <p className="head1">{text1}</p>
      <p className="head2">{text2}</p>
    </div>
  );
};

export default ConverterHeading;
