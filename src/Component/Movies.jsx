import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Rating,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../Redux/ActionCreator";
import { IMAGE_PATH } from "../Redux/constants";
import MyPagnation from "./MyPagnation";
import avatar from "../../public/profileavatar.png";

export default function Movies(props) {
  const { query } = props;
  /**pagnation */
  const totalPages = 200;
  let [page, setPage] = useState(1);

  /**dispatch data */
  const dispatch = useDispatch();
  const allMovies = useSelector((state) => state?.reducer?.data);
  const moviesLoading = useSelector((state) => state?.reducer?.loading);

  const searchMovie = useSelector((state) => state?.reducer?.searchedMovie);
  const searchLoading = useSelector((state) => state?.reducer?.loadingSearch);

  useEffect(() => {
    if (moviesLoading === false) dispatch(getAllMovies(page));
  }, [page]);

  const numberOfMovies = 19;
  const ListBegin = allMovies[0] ? true : false;
  const theme = useTheme();

  return (
    <>
      {moviesLoading &&
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size="6rem" />{" "}
        </Box>
      }

      {searchLoading &&
        <Box display="flex" alignItems="center" justifyContent="center">
          <CircularProgress size="6rem" />{" "}
        </Box>
      }

      {/*first movie*/}
      {query
        ? null
        : allMovies?.length > 0 &&
          allMovies[0] && (
            <Box
              component={Link}
              to={`/Details/${allMovies[0]?.id}`}
              sx={{
                display: "flex",
                justifyContent: "center",
                height: "550px",
                width: "95%",
                margin: "20px auto ",
                textDecoration: "none",
              }}
            >
              <Card
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <CardMedia
                  media="picture"
                  image={IMAGE_PATH + allMovies[0]?.backdrop_path}
                  title={allMovies[0].title}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    height: "100%",
                    width: "100%",
                    backgroundColor: "rgba(0,0,0,0.575)",
                    backgroundBlendMode: "darken",
                  }}
                />
                <Box>
                  <CardContent
                    sx={{
                      color: "#fff",
                      width: "50%",
                      position: "relative",
                      px: "20px",
                      [theme.breakpoints.down("md")]: {
                        width: "90%",
                      },
                    }}
                  >
                    <Typography variant="h4" gutterBottom>
                      {allMovies[0].title}
                    </Typography>
                    <Typography variant="body1">
                      {allMovies[0].overview}
                    </Typography>
                  </CardContent>
                </Box>
              </Card>
            </Box>
          )}

      {/*other movies cards*/}
      <Box className="movie-container" sx={{ mt: 5 }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "Center",
            textAlign: "center",
            overflow: "auto",
          }}
        >
          {query && searchMovie?.length
            ? searchMovie?.slice(ListBegin, numberOfMovies).map((movie, i) => (
                <Grid key={i} item xs={12} sm={4} md={3} lg={2}>
                  <Link to={`/Details/${movie.id}`}>
                    <Box
                      component="img"
                      sx={{
                        borderRadius: "20px",
                      }}
                      width="100%"
                      alt={movie?.title}
                      src={
                        movie.poster_path
                          ? IMAGE_PATH + movie?.poster_path
                          : avatar
                      }
                    />
                  </Link>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {movie.title}
                  </Typography>
                  <Rating
                    readOnly
                    value={movie?.vote_average / 2}
                    precision={0.1}
                  ></Rating>
                </Grid>
              ))
            : allMovies?.slice(ListBegin, numberOfMovies).map((movie, i) => (
                <Grid key={i} item xs={12} sm={4} md={3} lg={2}>
                  <Link to={`/Details/${movie.id}`}>
                    <Box
                      component="img"
                      sx={{
                        borderRadius: "20px",
                      }}
                      width="100%"
                      alt={movie.title}
                      src={
                        movie?.poster_path
                          ? IMAGE_PATH + movie?.poster_path
                          : avatar
                      }
                    />
                  </Link>
                  <Typography
                    sx={{
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {movie?.title}
                  </Typography>
                  <Rating
                    readOnly
                    value={movie?.vote_average / 2}
                    precision={0.1}
                  ></Rating>
                </Grid>
              ))}
        </Grid>
        {moviesLoading || query ? null : (
          <MyPagnation
            setPage={setPage}
            currentPage={page}
            totalPages={totalPages}
          />
        )}
      </Box>
    </>
  );
}
