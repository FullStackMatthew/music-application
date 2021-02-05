import { Grid } from "@material-ui/core";
import React from "react";
import { MusicCard } from "../musicCard/MusicCard";

export const MainContent = ({ results }) => {
  return (
    <div>
      <Grid
        container
        alignContent="center"
        direction="row"
        alignItems="center"
        spacing={9}
      >
        {results.map((artistResult, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
              <MusicCard
                key={index}
                ArtistCard={true}
                image={artistResult.images[0]?.url}
                artistName={artistResult.name}
                followers={artistResult.followers.total}
                popularity={Math.round(artistResult.popularity / 20)}
              />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
