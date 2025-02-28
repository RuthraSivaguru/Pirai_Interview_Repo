// import React from "react";

// const Dashboard = () => {
//   return <div>Dashboard</div>;
// };

// export default Dashboard;
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { FaChartPie } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import WorkFlow from "./ReactFlow/WorkFlow/WorkFlow";
import Data from "./Data";

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState<any>("");

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };
  function handleDrawer(e: any) {
    console.log("new", e);
    setName(e);
  }

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <div className="p-10">Name</div>
        {/* {["DashBoard", "Chart"].map((text, index) => ( */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FaChartPie />
            </ListItemIcon>
            <Button onClick={() => handleDrawer("DashBoard")}>DashBoard</Button>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <FaDatabase />
            </ListItemIcon>
            <Button onClick={() => handleDrawer("Chart")}>Chart</Button>
          </ListItemButton>
        </ListItem>
        {/* ))} */}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
      {name == "DashBoard" ? (
        <div className="w-300 h-auto p-3">
          <Data />
        </div>
      ) : name == "Chart" ? (
        <div className="w-300 h-150">
          <WorkFlow />
        </div>
      ) : null}
      {/* <div className="w-300 h-150">
          <WorkFlow />
        </div> */}
    </div>
  );
}
