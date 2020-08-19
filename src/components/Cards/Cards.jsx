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

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://www.telegraph.co.uk/content/dam/health-fitness/2017/11/09/TELEMMGLPICT000146072663-xlarge_trans_NvBQzQNjv4Bqek9vKm18v_rkIPH9w2GMNtm3NAjPW-2_OvjCiS6COCU.jpeg"
            title="Fitness Goal"
          />
          <CardContent>
            <Progress value={80} max={100} />
            <Typography gutterBottom variant="h5" component="h2">
              Getting a six pack
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              To get a six pack you can follow along with this diet routine and
              a workout routine everyday.
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
        </CardActions>
      </Card>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image="https://th.bing.com/th/id/OIP.FXsNeCIjxingANs_EB72CgHaD4?w=309&h=180&c=7&o=5&dpr=1.05&pid=1.7"
            title="Computer Science Goal"
          />
          <CardContent>
            <Progress value={30} max={100} />
            <Typography gutterBottom variant="h5" component="h2">
              Learning JavaScript
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Learning JavaScript with us will help make your websites and apps
              function the way you imagine them.
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
        </CardActions>
      </Card>
    </div>
  );
}
