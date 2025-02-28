import React from "react";
import { useDnD } from "./DndContext";

export default () => {
  const [_, setType] = useDnD();

  const onDragStart = (
    event: React.DragEvent<HTMLDivElement>,
    nodeType: string
  ) => {
    setType(nodeType);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <aside>
      <div
        className="dndnode Square p-2"
        onDragStart={(event) => onDragStart(event, "Square")}
        draggable
      >
        Square Node
      </div>
      <div
        className="dndnode Circle p-2"
        onDragStart={(event) => onDragStart(event, "Circle")}
        draggable
      >
        Circle Node
      </div>
      <div
        className="dndnode Rectangle p-2"
        onDragStart={(event) => onDragStart(event, "Rectangle")}
        draggable
      >
        Rectangle Node
      </div>
    </aside>
  );
};
