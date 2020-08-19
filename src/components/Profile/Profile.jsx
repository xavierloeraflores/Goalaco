import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
    large: {
      width: theme.spacing(9),
      height: theme.spacing(9),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Vincent"
        src="https://th.bing.com/th/id/OIP.WZ1tfPWqR59Fj6_jW8U-QAHaJ4?w=128&h=180&c=7&o=5&dpr=1.05&pid=1.7"
        className={classes.large}
      />
    </div>
  );
}
