import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Cards, UserCards, Profile } from "..";
import Search from "../Search/Search";
import Add from "../../AddComponents/Add";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={6}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="Feed" {...a11yProps(0)} />
          <Tab label="Your Goals" {...a11yProps(1)} />
          <Tab label="Add Goal" {...a11yProps(2)} />
          <Tab label="Search" {...a11yProps(3)} />
          <Tab label="Profile" {...a11yProps(4)} />
          <Tab label="Log Out" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <UserCards />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Cards />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Add />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Search />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Profile />
      </TabPanel>
      <TabPanel value={value} index={5}>
        Log Out
      </TabPanel>
    </div>
  );
}
