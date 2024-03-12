import { FC, useState } from "react";
import "./miniNavProject.scss";
import { Box, Tab } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import AllGifts from "./gifts/AllGifts";
import "./miniNavProject.scss"
import Comments from "./TabPanels/Comments";
import Supporters from "./TabPanels/Supporters";
import { Project } from "../../vite-env";

interface miniNavDivProps {
  project: Project;
}

const MiniNavProject: FC<miniNavDivProps> = ({ project }) => {
  const [value, setValue] = useState("1");
  const handleChange = (_: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="miniNavDiv" dir="rtl">

      <TabContext value={value}>
        <Box
          className="navBarInProject"
          sx={{ borderBottom: 1, borderColor: "divider" }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="על הפרוייקט" value="1" />
            <Tab label="תומכים.ות" value="2" />
            <Tab label="עדכונים" value="3" />
            <Tab label="תגובות" value="4" />
            <Tab
              className="imageIcon"
              icon={<img src="/image/IDEA ICON .png" alt="logo-idea" />}
              disabled
              value="5"
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div role="tabpanel" hidden={value !== "1"}>
            <div dangerouslySetInnerHTML={{ __html: project.projectStory }} />
          </div>{" "}
        </TabPanel>
        <TabPanel value="2"><Supporters /></TabPanel>
        <TabPanel value="3">עדכונים</TabPanel>
        <TabPanel value="4"><Comments /></TabPanel>
      </TabContext>
      <AllGifts project={project}/>
    </div>
  );
};

export default MiniNavProject;
