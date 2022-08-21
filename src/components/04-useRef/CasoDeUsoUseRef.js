import React, { useState } from "react";
import Quote from "../03-examples/Quote";

const CasoDeUsoUseRef = () => {
  const [show, setshow] = useState(true);

  const onClickHandler = () => setshow(!show);
  return (
    <>
      <h1>UseRef Real use case</h1>
      <hr></hr>
      {show && <Quote />}
      <button className="btn" onClick={onClickHandler}>
        Show/Hide
      </button>
    </>
  );
};

export default CasoDeUsoUseRef;
