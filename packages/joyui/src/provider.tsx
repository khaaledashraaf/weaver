import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import { weaverTheme } from "./theme";

export interface WeaverProviderProps {
  children: React.ReactNode;
  /** Inject CssBaseline for global resets. Defaults to true. */
  cssBaseline?: boolean;
}

export function WeaverProvider({
  children,
  cssBaseline = true,
}: WeaverProviderProps) {
  return (
    <CssVarsProvider theme={weaverTheme}>
      {cssBaseline && <CssBaseline />}
      {children}
    </CssVarsProvider>
  );
}
