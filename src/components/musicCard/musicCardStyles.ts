import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import { Colors } from "../../resources/styles/Colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: theme.spacing(40),
      backgroundColor: Colors.indigo,
      margin: "auto",
    },
    content: {},
    header: {
      color: Colors.fullWhite,
      paddingTop: theme.spacing(18.75),
      paddingBottom: 0,
      paddingLeft: 0,
      paddingRight: 0,
    },
    subHeader: {
      color: Colors.fullWhite,
    },
    media: {
      height: theme.spacing(21.875),
      width: "100%",
      objectFit: "contain",
    },
    image: {
      height: theme.spacing(40),
      width: "inherit",
    },
    imageNotFoundContainer: {
      textAlign: "center",
    },
    imageNotFound: {
      width: theme.spacing(25),
      height: theme.spacing(25),
    },
    artistName: {
      fontSize: theme.spacing(3),
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      width: theme.spacing(31.25),
    },
    tooltip: {
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(18),
    },
    boxContainer: {
      display: "flex",
      alignItems: "center",
      color: Colors.fullWhite,
    },
    AlbumboxContainer: {
      marginBottom: theme.spacing(0),
      marginTop: theme.spacing(-3.125),
      display: "flex",
      alignItems: "center",
      color: Colors.fullWhite,
    },
    rating: {
      paddingRight: theme.spacing(2.5),
    },
    link: {
      textDecoration: "none",
    },
    browseAlbumButton: {
      color: Colors.fullWhite,
      height: theme.spacing(6),
      backgroundColor: Colors.crimson,
      //keeps background color the same on hover
      "&:hover": {
        backgroundColor: Colors.crimson,
      },
    },
  })
);
