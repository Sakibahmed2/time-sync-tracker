import { ThemeProvider } from "@mui/material";
import React from "react";
import { Toaster } from "sonner";
import { theme } from "../theme/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <Toaster richColors position="top-right" />
      {children}
    </ThemeProvider>
  );
};

export default Providers;
