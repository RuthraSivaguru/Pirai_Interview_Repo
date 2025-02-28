import { MarkerType } from "@xyflow/react";

export const connectionLineStyle = { stroke: "green" };
export const DefaultEdgeOption = {
  animated: true,
  type: "smoothstep",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    color: "#b1b1b7",
  },
  style: {
    stroke: "green",
  },
};
