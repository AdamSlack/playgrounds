import React from "react";
import "./viewer.css";

export default function Root(props) {
  const [sectionCount, setSectionCount] = React.useState(10);

  const lorem = Array.from({ length: sectionCount }, (_, idx) => (
    <section>Lorem Ipum Section {idx}</section>
  ));

  const addSection = () => {
    setSectionCount(sectionCount + 1);
  };

  const removeSection = () => {
    setSectionCount(sectionCount - 1);
  };

  return (
    <div id="viewer">
      <h1>{props.name} is mounted!</h1>
      <button onClick={addSection}>Add</button>
      <button onClick={removeSection}>Remove</button>
      {lorem}
    </div>
  );
}
