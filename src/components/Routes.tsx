import { Switch, Route } from "react-router-dom";
import { AlbumSearch } from "../views/albumSearch/AlbumSearch";
import { ArtistSearch } from "../views/ArtistSearch";
import { LandingPage } from "../views/LandingPage";

export const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/artist-search" component={ArtistSearch} />
      <Route exact path="/album-search" component={AlbumSearch} />
    </Switch>
  </main>
);
