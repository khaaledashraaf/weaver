/* eslint-disable @typescript-eslint/no-empty-object-type */

import "@mui/joy/Button";
import "@mui/joy/IconButton";
import "@mui/joy/styles";

declare module "@mui/joy/Button" {
  interface ButtonPropsSizeOverrides {
    xs: true;
    xl: true;
  }
  interface ButtonPropsVariantOverrides {
    link: true;
  }
}

declare module "@mui/joy/IconButton" {
  interface IconButtonPropsSizeOverrides {
    xs: true;
  }
}

declare module "@mui/joy/styles/types/typography" {
  interface TypographySystemOverrides {
    "display-xl": true;
    "display-lg": true;
    "display-md": true;
    "display-sm": true;
    "heading-md": true;
    "body-xl": true;
    "body-2xs": true;
    "body-3xs": true;
  }
}

export {};
