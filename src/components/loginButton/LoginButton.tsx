import React from "react";
import { Button } from "@material-ui/core";
import { useStyles } from "./loginButtonStyles";
import { loginUrl } from "../../utils/LoginUrlBuilder";
import { SpotifyLogo } from "../../resources/icons/SpotifyLogo";
import { Colors } from "../../resources/styles/Colors";

interface LoginButtonProps {
  title: string;
  logo?: string;
}

export const LoginButton: React.FC<LoginButtonProps> = ({ title, logo }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => {
            window.location.href = loginUrl;
          }}
        >
          <p className={classes.buttonText}>{title}</p>
          <SpotifyLogo height={80} width={120} fill={Colors.spotifyGreen} />
        </Button>
      </div>
    </React.Fragment>
  );
};
