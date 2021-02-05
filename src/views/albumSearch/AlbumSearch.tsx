import { Grid } from "@material-ui/core";
import { useStyles } from "./albumSearchStyles";
import React, { useEffect, useState } from "react";
import SpotifyWebApi from "spotify-web-api-node";
import { MusicCard, CardProps } from "../../components/musicCard/MusicCard";
import { Header } from "../../components/header/Header";
import { useDataLayerValue } from "../../DataLayer";

export const AlbumSearch: React.FC<CardProps> = () => {
  const [{ token, artistId, artistName }] = useDataLayerValue();

  const spotifyApi = new SpotifyWebApi();

  useEffect(() => {
    spotifyApi.setAccessToken(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const classes = useStyles();
  const [results, setResults] = useState([]);

  useEffect(() => {
    spotifyApi.getArtistAlbums(artistId).then(
      (data) => {
        setResults(data.body.items);
      },
      (err) => {
        console.error(err);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [artistId, token]);

  return (
    <React.Fragment>
      <div>
        <Header
          albumPage={true}
          title="Spotify Album Search"
          artistName={artistName}
        />
        <Grid
          className={classes.gridContainer}
          container
          alignContent="center"
          direction="row"
          alignItems="center"
          spacing={9}
        >
          {results.map((artistAlbum, index) => {
            return (
              <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
                <MusicCard
                  key={artistAlbum.id}
                  AlbumCard={true}
                  image={artistAlbum.images[1]?.url}
                  albumTitle={artistAlbum.name}
                  artistName={artistAlbum.artists[0].name}
                  releaseDate={artistAlbum.release_date}
                  albumTrackCount={artistAlbum.total_tracks}
                  externalUrl={artistAlbum.external_urls.spotify}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </React.Fragment>
  );
};
