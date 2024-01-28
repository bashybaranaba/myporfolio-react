import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";

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
      <Grid
        sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <Typography
          variant="body1"
          sx={{
            mb: 2,
            fontSize: { xs: "1rem", md: "1.5rem" },
            ml: { xs: 2, md: 0 },
          }}
        >
          Your daily dose of giggles and grins 😁
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          p: 4,
          backgroundColor: "#f5f5f5",
          borderRadius: 3,
        }}
      >
        {loading && <LinearProgress sx={{ mb: 2 }} />}
        {error && <Typography variant="body1">{error}</Typography>}

        {jokes.slice(0, 3).map((joke) => (
          <Grid container>
            <Grid item xs={1} md={1}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                🤣
              </Typography>
            </Grid>
            <Grid item xs={11} md={11}>
              <Typography variant="body1" sx={{ mb: 2 }}>
                {joke.setup} {joke.punchline}
              </Typography>
            </Grid>
          </Grid>
        ))}
        <Button
          variant="outlined"
          onClick={fetchJokes}
          sx={{ mt: 2, pl: 4, pr: 4, textTransform: "none" }}
        >
          Can't stop laughing? See more jokes
        </Button>
      </Grid>
    </Container>
  );
}
