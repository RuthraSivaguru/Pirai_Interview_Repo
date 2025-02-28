import { ReactFlowProvider } from "@xyflow/react";
import "./App.css";
import TemporaryDrawer from "./modules/Dashboard";
// import WorkFlow from "./modules/ReactFlow/WorkFlow/WorkFlow";
import { DnDProvider } from "./modules/ReactFlow/Components/DndContext";

function App() {
  return (
    <ReactFlowProvider>
      <DnDProvider>
        <TemporaryDrawer />
      </DnDProvider>
    </ReactFlowProvider>
  );
}

export default App;
