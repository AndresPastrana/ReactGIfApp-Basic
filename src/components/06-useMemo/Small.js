import React from "react";
import { memo } from "react";

const Small = memo(({ text }) => {
  console.log("Rendering Small Component");
  return <small>{text}</small>;
});
export default Small;
