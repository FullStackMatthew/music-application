import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    content: {
      textAlign: "center",
    },
    heading: {
      fontSize: theme.spacing(5),
    },
    subHeading: {
      fontSize: theme.spacing(3.125),
    },
  })
);
