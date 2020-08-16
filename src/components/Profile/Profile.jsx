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
        alt="Patrick"
        src="https://th.bing.com/th/id/OIP.bGUz0iRAGP5x8RGgmq8RhwAAAA?w=141&h=150&c=7&o=5&dpr=1.05&pid=1.7"
        className={classes.large}
      />
    </div>
  );
}
