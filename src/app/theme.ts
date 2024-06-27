"use client";
import { Victor_Mono } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  display: "swap",
  fallback: ["monospace"],
});

const theme = createTheme({
  typography: {
    fontFamily: victorMono.style.fontFamily,
  },
});

export default theme;
