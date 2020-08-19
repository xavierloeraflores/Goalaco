import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Progress from "../Progress/Progress";
import styles from "./Search.module.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    border: 50,
    borderRadius: 30,
    height: 380,
  },
  media: {
    height: 180,
  },
});

const Search = () => {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://th.bing.com/th/id/OIP.G4G2Gu1sOoWRjR5icZhzKAHaD8?w=303&h=180&c=7&o=5&dpr=1.05&pid=1.7"
            title="Computer Science Goal"
          />
          <CardContent>
            <Progress value={0} max={100} />
            <Typography gutterBottom variant="h5" component="h2">
              Learning Python
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Learning Pythong using this method will drastically improve your
              skills in coding and get you that dream job you aleays wanted.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            See Steps
          </Button>
          <Button size="small" color="primary">
            Add Goal
          </Button>
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://th.bing.com/th/id/OIP.WQ_oala64bXnqlmJt5PztgHaF4?w=204&h=180&c=7&o=5&dpr=1.05&pid=1.7"
            title="Fitness Goal"
          />
          <CardContent>
            <Progress value={0} max={100} />
            <Typography gutterBottom variant="h5" component="h2">
              Get better at socccer
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Want to learn soccer? Follow these easy steps and you will be a
              pro in no time.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            See Steps
          </Button>
          <Button size="small" color="primary">
            Add Goal
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Search;
