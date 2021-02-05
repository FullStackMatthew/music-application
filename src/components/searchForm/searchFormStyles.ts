import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Colors } from "../../resources/styles/Colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      marginTop: "100px",
      marginBottom: "100px",
      marginRight: "10%",
      marginLeft: "10%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    gridContainer: {},
    card: {
      wordBreak: "break-word",
      width: theme.spacing(37.5),
      margin: "auto",
      textAlign: "center",
      color: Colors.fullWhite,
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  })
);
