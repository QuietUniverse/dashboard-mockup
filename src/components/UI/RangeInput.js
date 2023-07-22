import React, { useEffect, useRef } from "react";

import styles from "./RangeInput.module.css";

function RangeInput({ id, value, onChange }) {
  const rangeRef = useRef();

  useEffect(() => {
    handleRangeCaptureVisually();
  }, []);

  function handleRangeCaptureVisually() {
    const sliderValue = rangeRef.current.value;
    rangeRef.current.style.background = `linear-gradient(to right, #85afff ${sliderValue}%, #ececec ${sliderValue}%)`;
  }

  return (
    <input
      type="range"
      value={value}
      min="0"
      max="100"
      ref={rangeRef}
      onInput={handleRangeCaptureVisually}
      onChange={onChange}
      id={id}
    />
  );
}

export default RangeInput;
