import React from "react";
import Head from "next/head";
import Link from "../src/Link";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  heading: {
    maxWidth: "40em",
  },
  mainContainer: {
    paddingLeft: "5em",
    paddingRight: "5em",
    paddingTop: "2em",
    padding: "10em",
  },
}));

const CustomSoftware = () => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Custom Software Development & Design - Free Estimate</title>
        <meta
          name="description"
          key="description"
          content="Cutting-edge custom software development with gorgeous
        designs from scratch - let us optimize your business, solving problems instead of creating new ones."
        />
        <meta
          property="og:title"
          content="Bringing West Coast Technology to the Midwest | Custom Software Development "
          key="og:title"
        />
        <meta property="og:url" content="arc.com/customsoftware" key="og:url" />
        <link rel="canonical" key="canonical" href="arc.com/customsoftware" />
      </Head>
      <Grid container direction="column" className={classes.mainContainer}>
        <Grid item container direction="row">
          <Grid item>
            <IconButton component={Link} href="/services">
              <ArrowBackIcon color="primary" />
            </IconButton>
          </Grid>

          <Grid item container direction="column" className={classes.heading}>
            <Grid item>
              <Typography variant="h2">Custom Software Development</Typography>
            </Grid>

            <Grid item>
              <Typography variant="body1">
                Whether we’re replacing old software or inventing new solutions,
                Arc Development is here to help your business tackle technology.
              </Typography>

              <Typography variant="body1">
                Using regular commercial software leaves you with a lot of stuff
                you don’t need, without some of the stuff you do need, and
                ultimately controls the way you work. Without using any software
                at all you risk falling behind competitors and missing out on
                huge savings from increased efficiency.
              </Typography>

              <Typography variant="body1">
                Our custom solutions are designed from the ground up with your
                needs, wants, and goals at the core. This collaborative process
                produces finely tuned software that is much more effective at
                improving your workflow and reducing costs than generalized
                options.
              </Typography>
              <Typography variant="body1">
                We create exactly what you what, exactly how you want it.
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <IconButton component={Link} href="/mobileapps">
              <ArrowForwardIcon color="primary" />
            </IconButton>
          </Grid>
        </Grid>

        {/* <Grid item container>
        <Grid item>Save energy</Grid>
        <Grid item>Save time</Grid>
        <Grid item>save money</Grid>
      </Grid> */}
      </Grid>
    </>
  );
};

export default CustomSoftware;
