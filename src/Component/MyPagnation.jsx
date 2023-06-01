import { Box, Button, Typography } from "@mui/material";
import React from "react";

export default function MyPagnation({ setPage, currentPage, totalPages }) {
  const handlePrev = () => {
    if (currentPage !== 1) {
      setPage((prevPage) => prevPage - 1);
    }
  };
  const handleNext = () => {
    if (currentPage !== totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  if (totalPages === 0) return null;

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 5,
        }}
      >
        <Button
          onClick={handlePrev}
          variant="contained"
          color="primary"
          type="button"
          size="medium"
        >
          PREVIOUS
        </Button>
        <Typography variant="h6" sx={{ mx: 3 }}>
          {currentPage}
        </Typography>
        <Button
          onClick={handleNext}
          variant="contained"
          color="primary"
          type="button"
          size="medium"
        >
          NEXT{" "}
        </Button>
      </Box>
    </>
  );
}
