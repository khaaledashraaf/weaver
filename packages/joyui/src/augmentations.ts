/* eslint-disable @typescript-eslint/no-empty-object-type */

import "@mui/joy/Button";

declare module "@mui/joy/Button" {
  interface ButtonPropsSizeOverrides {
    xl: true;
  }
}

export {};
