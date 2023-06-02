import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Grid,
  Typography,
  Rating,
  CircularProgress,
  ButtonGroup,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { TheaterComedyOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { IMAGE_PATH } from "../Redux/constants";
import { getMovieDetails } from "../Redux/ActionCreator";

export default function Details() {
  const dispatch = useDispatch();
  let params = useParams();

  const movieDetails = useSelector((state) => state?.reducer?.MovieDetails);
  const movieLoading = useSelector((state) => state?.reducer?.loadingDetails);

  useEffect(() => {
    dispatch(getMovieDetails(params.id));
  }, []);
  const buttons = [
    <Button key="website">WEBSITE</Button>,
    <Button key="imda">IMDB</Button>,
    <Button key="trailer">TRAILER</Button>,
  ];
  const theme = useTheme();

  return (
    <>
      {movieLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size="6rem" />{" "}
        </Box>
      ) : (
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "space-around",
            width: "95%",
            margin: "25px auto 0px auto ",
          }}
        >
          <Grid item sm={12} md={4} align="center">
            <Box
              component="img"
              sx={{
                borderRadius: "20px",
                marginBottom: "20px",
                boxShadow: "0.5em 1em 1em rgb(60, 60, 60)",
                width: "80%",
                [theme.breakpoints.down("md")]: {
                  width: "50%",
                },
                [theme.breakpoints.down("sm")]: {
                  width: "80%",
                },
              }}
              src={IMAGE_PATH + movieDetails?.poster_path}
              alt={movieDetails?.title}
            />
          </Grid>
          <Grid item container direction="column" lg={7}>
            <Typography gutterBottom variant="h3" align="center">
              {movieDetails?.title} ({movieDetails?.release_date?.split("-")[0]}
              )
            </Typography>
            <Grid item sx={{ display: "flex", justifyContent: "space-around" }}>
              <Box display="flex">
                <Rating
                  readOnly
                  value={movieDetails?.vote_average / 2}
                  precision={0.1}
                />
                <Typography
                  gutterBottom
                  variant="subtitle1"
                  style={{ marginLeft: "10px" }}
                >
                  {movieDetails?.vote_average} / 10
                </Typography>
              </Box>
              <Typography gutterBottom variant="h6" align="center">
                {movieDetails?.runtime}min / {movieDetails?.original_language}
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexWrap: "wrap",
                my: 2,
              }}
            >
              {movieDetails?.genres?.length > 0 &&
                movieDetails?.genres.map((genre, i) => (
                  <Grid
                    item
                    key={i}
                    xs={6}
                    md={4}
                    lg="auto"
                    align="center"
                    sx={{ display: "flex", mb: 2, justifyContent: "center" }}
                  >
                    {" "}
                    <TheaterComedyOutlined
                      sx={{ mr: 1 }}
                    ></TheaterComedyOutlined>
                    <Typography>{genre.name}</Typography>
                  </Grid>
                ))}
            </Grid>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }}>
              Overview
            </Typography>
            <Typography gutterBottom marginBottom={"20px"}>
              {movieDetails?.overview}
            </Typography>
            <Typography gutterBottom variant="h5" sx={{ fontWeight: 600 }}>
              Top Cast
            </Typography>
            <Grid item container spacing={2}>
              {movieDetails?.credits?.cast?.length > 0 &&
                movieDetails?.credits?.cast
                  .map((actor, i) => (
                    <Grid key={i} item xs={4} md={2}>
                      <img
                        style={{
                          width: "100%",
                          height: "10em",
                          objectFit: "cover",
                          borderRadius: "10px",
                        }}
                        src={IMAGE_PATH + actor?.profile_path}
                        alt={actor?.name}
                      />
                      <Typography color="textPrimary" align="center">
                        {actor?.name}
                      </Typography>
                      <Typography color="textSecondary" align="center">
                        {actor?.character}
                      </Typography>
                    </Grid>
                  ))
                  .slice(0, 6)}
            </Grid>
            <Grid item container>
              <Grid item xs={12} sm={6} sx={{ py: 2 }}>
                <ButtonGroup size="small" aria-label="outlined  button group">
                  {buttons}
                </ButtonGroup>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ py: 2 }}>
                <ButtonGroup size="small" aria-label="small button group">
                  {buttons}
                </ButtonGroup>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
