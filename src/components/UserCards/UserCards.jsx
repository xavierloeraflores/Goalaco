import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red, blue } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  avatar2: {
    backgroundColor: blue[500],
  },
}));

export default function ReviewCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Feed" className={classes.avatar}>
              S
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Soren accomplished a Goal!"
          subheader="August 16, 2020"
        />
        <CardMedia
          className={classes.media}
          image="https://th.bing.com/th/id/OIP.-YYyqlFEjXh1vxQkodhRBgHaDt?w=301&h=174&c=7&o=5&dpr=1.05&pid=1.7"
          title="Completed a goal!"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Soren has found a job!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>

      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="Feed" className={classes.avatar2}>
              B
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title="Britiny accomplished a Goal!"
          subheader="August 15, 2020"
        />
        <CardMedia
          className={classes.media}
          image="https://th.bing.com/th/id/OIP.GXPBQPiIeN3qGyAzIYkH_AHaE8?w=229&h=180&c=7&o=5&dpr=1.05&pid=1.7"
          title="Completed a goal!"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Britiny is now a professional Counselor!
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}
