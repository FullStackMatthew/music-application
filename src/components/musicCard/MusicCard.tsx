import React from "react";
import { useStyles } from "./musicCardStyles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Rating from "@material-ui/lab/Rating";
import { Box, Button, Tooltip } from "@material-ui/core";
import ErrorIcon from "@material-ui/icons/Error";
import { Link } from "react-router-dom";
import { useDataLayerValue } from "../../DataLayer";
import SpotifyWebApi from "spotify-web-api-node";

export interface CardProps {
  className?: string;
  key?: string;
  ArtistCard?: boolean;
  AlbumCard?: boolean;
  image?: string;
  artistName?: string;
  albumTitle?: string;
  releaseDate?: any;
  albumTrackCount?: number;
  followers?: number;
  popularity?: number;
  externalUrl?: string;
}

export const MusicCard: React.FC<CardProps> = ({
  image,
  artistName,
  albumTitle,
  followers,
  popularity,
  releaseDate,
  albumTrackCount,
  ArtistCard,
  AlbumCard,
  externalUrl,
}) => {
  const [{ token }] = useDataLayerValue();
  const spotifyApi = new SpotifyWebApi();
  spotifyApi.setAccessToken(token);

  const classes = useStyles();

  const handleRouteChange = (externalUrl) => {
    console.log(externalUrl);
  };
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}>
        {image ? (
          <img className={classes.image} src={image} alt="recipe thumbnail" />
        ) : (
          <div className={classes.imageNotFoundContainer}>
            <h1>Oopsie they don't have an image</h1>
            <ErrorIcon className={classes.imageNotFound} />
          </div>
        )}
      </CardMedia>
      <CardContent className={classes.content}>
        <CardHeader
          className={classes.header}
          title={
            <Tooltip
              title={
                ArtistCard ? (
                  <span className={classes.tooltip}>{artistName}</span>
                ) : (
                  <span className={classes.tooltip}>{albumTitle}</span>
                )
              }
            >
              <div>
                <Typography className={classes.artistName}>
                  {ArtistCard ? artistName : null}
                  {AlbumCard ? albumTitle : null}
                </Typography>
              </div>
            </Tooltip>
          }
          subheader={
            ArtistCard ? (
              <div className={classes.subHeader}>
                {followers?.toLocaleString()} followers
              </div>
            ) : null
          }
        />
      </CardContent>
      <div>
        {ArtistCard ? (
          <Box
            className={classes.boxContainer}
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Rating
              className={classes.rating}
              name="popularity"
              value={popularity}
              readOnly
            />
            <Link to="/album-search" className={classes.link}>
              <Button
                className={classes.browseAlbumButton}
                onClick={handleRouteChange}
              >
                Browse Albums
              </Button>
            </Link>
          </Box>
        ) : null}
        {AlbumCard ? (
          <Box
            className={classes.AlbumboxContainer}
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <div>
              <p>{artistName}</p>
              <p>{releaseDate}</p>
              <p>{albumTrackCount} tracks</p>
            </div>
          </Box>
        ) : null}
      </div>
      {AlbumCard ? (
        <a
          href={externalUrl}
          className={classes.link}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            fullWidth
            className={classes.browseAlbumButton}
            onClick={() => handleRouteChange(externalUrl)}
          >
            Preview on Spotify
          </Button>
        </a>
      ) : null}
    </Card>
  );
};
