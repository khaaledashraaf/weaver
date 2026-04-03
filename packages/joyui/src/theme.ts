import { extendTheme } from "@mui/joy/styles";
import { colorSchemes } from "./palette";
import { fontFamilyConfig, typographyConfig } from "./typography";
import { components } from "./components";
import { tokens } from "./tokens";

export const weaverTheme = extendTheme({
  colorSchemes,
  fontFamily: fontFamilyConfig,
  typography: typographyConfig,
  radius: {
    xs: tokens.radius.xs,
    sm: tokens.radius.sm,
    md: tokens.radius.md,
    lg: tokens.radius.lg,
    xl: tokens.radius.xl,
  },
  shadow: {
    xs: tokens.shadow.xs,
    sm: tokens.shadow.sm,
    md: tokens.shadow.md,
    lg: tokens.shadow.lg,
    xl: tokens.shadow.xl,
  },
  components,
});

export { tokens };
