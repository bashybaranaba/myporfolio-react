import * as React from "react";
import { styled } from "@mui/material/styles";
import { Avatar } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import TypingAnimator from "react-typing-animator";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AccountBalanceOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined";
import InterestsOutlinedIcon from "@mui/icons-material/InterestsOutlined";

export default function About() {
  return (
    <Container component="main" maxWidth="md">
      <Grid container spacing={1}>
        <Grid item xs={12} md={3}>
          <Avatar
            alt="Baranaba Mugabane"
            src="assets/images/me.jpeg"
            sx={{ width: 160, height: 160 }}
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2.6rem", md: "4rem" },
              ml: { xs: 2, md: 0 },
            }}
          >
            Hi, I'm Baranaba 👋
          </Typography>
          <Typography
            variant="h4"
            component="div"
            sx={{
              mb: { xs: 0, md: 2 },
              display: "flex",
              fontSize: { xs: "1.5rem", md: "2.3rem" },
              ml: { xs: 2, md: 0 },
            }}
          >
            {"👨🏾‍💻 I am a passionate" + " "}
            <span style={{ color: "#333", margin: 2 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <TypingAnimator
                textArray={[" Developer", " Artist", " Designer"]}
                cursorColor="#333"
                textColor="black"
                fontSize={"38px"}
                loop
                typingSpeed={60}
                delaySpeed={1000}
                backspace
                height="60px"
              />
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <TypingAnimator
                textArray={[" Developer", " Artist", " Designer"]}
                cursorColor="#333"
                textColor="black"
                fontSize={"24px"}
                loop
                typingSpeed={60}
                delaySpeed={1000}
                backspace
                height="60px"
              />
            </Box>{" "}
          </Typography>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 3,
              m: 1,
              borderRadius: 2,
              border: 1,
              borderColor: "#0097a7",
              display: { xs: "flex", md: "block" },
            }}
          >
            <SchoolOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                mb: 2,
                ml: { xs: 2, md: 0 },
                fontSize: { xs: "0.8rem", md: "1rem" },
                fontWeight: 500,
              }}
            >
              Just finished my bachelors degree in Informatics and Computer
              Science at Strathmore University
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              p: 3,
              m: 1,
              borderRadius: 2,
              border: 1,
              borderColor: "#0097a7",
              display: { xs: "flex", md: "block" },
            }}
          >
            <AccountBalanceOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                mb: 2,
                ml: { xs: 2, md: 0 },
                fontSize: { xs: "0.8rem", md: "1rem" },
                fontWeight: 500,
              }}
            >
              Previously engaged in software development roles at Ilab Africa
              and Strathmore Research & Consultancy Center
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              p: 3,
              m: 1,
              borderRadius: 2,
              border: 1,
              borderColor: "#0097a7",
              display: "flex",
            }}
          >
            <InterestsOutlinedIcon color="primary" sx={{ fontSize: 40 }} />
            <Typography
              variant="subtitle1"
              component="div"
              sx={{
                m: 1,
                ml: 2,
                fontSize: { xs: "0.8rem", md: "1rem" },
                fontWeight: 500,
              }}
            >
              Currently exploring the intersection of Decentralized technologies
              and Machine Learning
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
