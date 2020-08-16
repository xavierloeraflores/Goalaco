import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar
        alt="Remy Sharp"
        src="https://th.bing.com/th/id/OIP.bGUz0iRAGP5x8RGgmq8RhwAAAA?w=141&h=150&c=7&o=5&dpr=1.05&pid=1.7"
      />
    </div>
  );
}
