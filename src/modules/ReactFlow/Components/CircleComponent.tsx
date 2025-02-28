import { Handle, Node, NodeProps, Position } from "@xyflow/react";
// import React from "react";

export type CounterNode = Node<
  {
    label?: string;
  },
  "Circle"
>;

export default function CircleComponent({
  data: { label },
}: NodeProps<CounterNode>) {
  return (
    <div className="w-auto h-auto  bg-green-200 border border-blue-700 rounded-4xl p-10">
      <div style={{ alignContent: "center" }}>
        <h3 className="text-xs font-bold" style={{ color: "black" }}>
          {label}
        </h3>
      </div>
      <Handle type="source" position={Position.Right} />
      <Handle type="target" position={Position.Left} />
    </div>
  );
}
