import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { Colors } from "../../resources/styles/Colors";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    search: {
      marginTop: theme.spacing(12.5),
      marginBottom: theme.spacing(12.5),
      marginRight: "10%",
      marginLeft: "10%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    gridContainer: {
      marginTop: "5%",
    },
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
