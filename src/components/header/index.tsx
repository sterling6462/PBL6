import { Grid, Typography } from "@mui/material";

import styles from "./style.module.scss";

//TODO handle User Account

type HeaderProps = {};

export const Header = (props: HeaderProps) => {
  return (
    <Grid container className={styles.PageHeading}>
      <Grid item>
        <Typography className={styles.WebName}> Mushroom Classified</Typography>
      </Grid>
    </Grid>
  );
};
