import * as React from "react";
import { styled } from "@mui/material/styles";
import {
  Container,
  Grid,
  Button,
  Typography,
  LinearProgress,
} from "@mui/material";
import axios from "axios";

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  marginBottom: theme.spacing(2),
  "& .MuiTypography-body1": {
    fontSize: theme.spacing(2),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      fontSize: theme.spacing(3),
      marginLeft: 0,
    },
  },
}));

const JokesGrid = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  padding: "32px",
  backgroundColor: "#f5f5f5",
  borderRadius: "10px",
  "& .MuiLinearProgress-root": {
    marginBottom: "16px",
  },
});

const StyledButton = styled(Button)({
  marginTop: "16px",
  paddingLeft: "32px",
  paddingRight: "32px",
  textTransform: "none",
});

const JokesTypography = styled(Typography)({
  marginBottom: "16px",
});

export default function Jokes() {
  const [jokes, setJokes] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    fetchJokes();
  }, []);

  const fetchJokes = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://official-joke-api.appspot.com/random_ten"
      );
      setJokes(response.data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="md">
      <StyledGrid>
        <Typography variant="body1">
          Your daily dose of giggles and grins 😁
        </Typography>
      </StyledGrid>
      <JokesGrid>
        {loading && <LinearProgress />}
        {error && <Typography variant="body1">{error}</Typography>}

        {jokes.slice(0, 3).map((joke) => (
          <Grid container key={joke.id}>
            <Grid item xs={1} md={1}>
              <Typography variant="body1">🤣</Typography>
            </Grid>
            <Grid item xs={11} md={11}>
              <JokesTypography variant="body1">
                {joke.setup} {joke.punchline}
              </JokesTypography>
            </Grid>
          </Grid>
        ))}
        <StyledButton variant="outlined" onClick={fetchJokes}>
          Can't stop laughing? See more jokes
        </StyledButton>
      </JokesGrid>
    </Container>
  );
}
