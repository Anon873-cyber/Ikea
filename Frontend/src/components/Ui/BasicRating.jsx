import * as React from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

export default function BasicRating({avgRating = 1}) {
  const [value, setValue] = React.useState(2);

  return (
    <Box
      sx={{
        transform: "scale(1.2)",
      }}
    >
      <Typography component="legend" className="font-bold">
        <p className="font-medium text-center text-[var(--font-heading)] text-gray-900 text-6xl">{avgRating}</p>
      </Typography>

      <Rating name="read-only" value={avgRating} precision={0.1} readOnly />
    </Box>
  );
}
