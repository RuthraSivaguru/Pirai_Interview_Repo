import { Handle, Node, NodeProps, Position } from "@xyflow/react";
// import React from "react";

export type CounterNode = Node<
  {
    label?: string;
  },
  "Square"
>;

export default function SquareComp({
  data: { label },
}: NodeProps<CounterNode>) {
  return (
    <div className="w-40 h-40  bg-blue-200 border border-blue-700 rounded-lg">
      <div className="h-40">
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
