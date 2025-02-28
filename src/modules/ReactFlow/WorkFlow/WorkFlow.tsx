import { useCallback, useRef, useState } from "react";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Controls,
  EdgeTypes,
  NodeTypes,
  Panel,
  ReactFlow,
  useEdgesState,
  useNodesState,
  useReactFlow,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useDnD } from "../Components/DndContext";
import SideBar from "../Components/SideBar";
import { initialEdges, initialNodes } from "./WorkFlow_Instance";
import SquareComp from "../Components/SquareComponent";
import CircleComponent from "../Components/CircleComponent";
import RectangleComponent from "../Components/RectangleComponent";
import { DefaultEdgeOption } from "../CustomComponent";

const nodesTypes: NodeTypes = {
  Square: SquareComp,
  Circle: CircleComponent,
  Rectangle: RectangleComponent,
};

const edgeType: EdgeTypes = {};

let id = 0;
const getId = () => `dndnode_${id++}`;

const WorkFlow = () => {
  const reactFlowWrapper = useRef(null);
  const { screenToFlowPosition } = useReactFlow();
  const [type] = useDnD();

  const [nodes, setNodes] = useNodesState(initialNodes);
  const [edges, setEdges] = useEdgesState(initialEdges);

  const [newNodeName, setNewNodeName] = useState("");
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);

  const onConnect = useCallback((params: Connection) => {
    const edge = {
      ...params,
      animated: true,
      type: "customEdge",
    };
    setEdges((prevEdge) => addEdge(edge, prevEdge));
  }, []);

  const onChangeNodes = useCallback(
    (nds: any) => setNodes((prevNodes) => applyNodeChanges(nds, prevNodes)),
    []
  );

  const onChangeEdges = useCallback(
    (nds: any) => setEdges((prevNodes) => applyEdgeChanges(nds, prevNodes)),
    []
  );

  //  Drag and Drop
  const onDragOver = useCallback(
    (event: {
      preventDefault: () => void;
      dataTransfer: { dropEffect: string };
    }) => {
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    },
    []
  );

  const onDrop = useCallback(
    (event: { preventDefault: () => void; clientX: any; clientY: any }) => {
      event.preventDefault();

      if (!type) {
        return;
      }

      const position = screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });
      const newNode: any = {
        id: getId(),
        type,
        position,
        data: { label: `${type} node` },
      };

      setNodes((nds) => nds.concat(newNode));
    },
    [screenToFlowPosition, type]
  );

  const updateNodeName = (nodeId: string, newName: string) => {
    setNodes((nds) =>
      nds.map((node) => {
        if (node.id === nodeId) {
          // Update the label of the node
          return {
            ...node,
            data: {
              ...node.data,
              label: newName,
            },
          };
        }
        return node;
      })
    );
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewNodeName(event.target.value);
  };

  const handleUpdateName = () => {
    if (selectedNodeId && newNodeName.trim()) {
      console.log("NewNode", newNodeName.trim());
      console.log("Node", newNodeName);

      updateNodeName(selectedNodeId, newNodeName); // Update the selected node
      setNewNodeName(""); // Clear the input field
    }
  };

  const handleNodeClick = (event: React.MouseEvent, node: any) => {
    setSelectedNodeId(node.id); // Set the selected node ID
    setNewNodeName(node.data.label); // Populate the input field with the current node name
  };

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
      }}
      ref={reactFlowWrapper}
      className="react-wrapper flex rounded-3xl border border-blue-300 shadow-2xl"
    >
      <div
        style={{ width: "20%", height: "100%" }}
        className="bg-green-300 rounded-l-3xl shadow-2xl"
      >
        <label>Node Name :</label>
        <br />
        <input
          className="bodrer border-black-300 m-2 "
          type="text"
          value={newNodeName}
          onChange={handleInputChange}
          placeholder="Enter new node name"
        />
        <br />
        <button onClick={handleUpdateName}>Update Node Name</button>
        <br />
      </div>
      <div style={{ width: "80%", height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onChangeNodes}
          onEdgesChange={onChangeEdges}
          onConnect={onConnect}
          nodeTypes={nodesTypes}
          edgeTypes={edgeType}
          onDrop={onDrop}
          onDragOver={onDragOver}
          fitView={true}
          onNodeClick={handleNodeClick}
          defaultEdgeOptions={DefaultEdgeOption}
        >
          <Panel position="top-left">Ruthra</Panel>
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <div
        style={{ width: "20%", height: "100%" }}
        className="bg-blue-300 rounded-r-3xl shadow-2xl"
      >
        <SideBar />
      </div>
    </div>
  );
};

export default WorkFlow;
