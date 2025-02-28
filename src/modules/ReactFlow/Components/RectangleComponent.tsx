import { Handle, Node, NodeProps, Position } from "@xyflow/react";
// import React from "react";

export type CounterNode = Node<
  {
    label?: string;
  },
  "Rectangle"
>;

export default function RectangleComponent({
  data: { label },
}: NodeProps<CounterNode>) {
  return (
    <div className="w-60 h-30  bg-orange-200 border border-blue-700">
      <div>
        <h3
          className="text-xs font-bold"
          style={{ color: "black", margin: 50 }}
        >
          {label}
        </h3>
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
