import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import cx from "classnames";
import styles from "./Cards.module.css";

const Cards = () => {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.goal1)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Goal1:
            </Typography>
            <Typography varaint="h5">Description:</Typography>
            <Typography color="textSecondary">Progress:</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.goal2)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Goal2:
            </Typography>
            <Typography varaint="h5">Description:</Typography>
            <Typography color="textSecondary">Progress:</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(styles.card, styles.goal3)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Goal3:
            </Typography>
            <Typography varaint="h5">Description:</Typography>
            <Typography color="textSecondary">Progress:</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
