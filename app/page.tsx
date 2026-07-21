"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        p: 4,
      }}
    >
      <Typography variant="h4" fontWeight={700}>
        Next.js + MUI Template
      </Typography>
      <Typography color="text.secondary">
        TypeScript / MUI / ESLint / Prettier セットアップ済み
      </Typography>
      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained">Primary</Button>
        <Button variant="outlined">Secondary</Button>
      </Stack>
    </Box>
  );
}
