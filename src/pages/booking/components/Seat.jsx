import React from "react";
import { useState } from "react";

export default function Seat(props) {
  const [isSelected, setIsSelected] = useState(false);

  const populateClassName = () => {
    if (props.ele.daDat) {
      return "selected";
    }

    if (isSelected) {
      return "booked";
    }

    if (props.ele.loaiGhe === "Vip") {
      return "vip";
    }

    return "available";
  };

  const handleSelectSeat = () => {
    setIsSelected(!isSelected);

    props.handleSelect(props.ele);
  };

  return (
    <button
      onClick={handleSelectSeat}
      disabled={props.ele.daDat}
      style={{ width: 37, height: 37, padding: 0 }}
      className={`mr-1 mb-1  ${populateClassName()}`}
    >
      {props.ele.tenGhe}
    </button>
  );
}
