import { Box, Container, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.content}>
      <Box my="4">
        <Typography variant="h4" component="h1" gutterBottom className={classes.text}>
          Hello World
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
