import React from "react";
import { useStyles } from "./headerStyles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

interface HeaderProps {
  title?: string;
  artistName?: string;
  albumPage?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  artistName,
  albumPage,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
      {albumPage ? (
        <div className={classes.content}>
          <h1 className={classes.heading}>{artistName}</h1>
          <h3>Albums</h3>
        </div>
      ) : null}
    </div>
  );
};
