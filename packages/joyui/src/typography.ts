const fontFamily = [
  '"Inter"',
  "-apple-system",
  "BlinkMacSystemFont",
  '"Segoe UI"',
  "Roboto",
  '"Helvetica Neue"',
  "Arial",
  "sans-serif",
].join(",");

export const fontFamilyConfig = {
  body: fontFamily,
  display: fontFamily,
};

export const typographyConfig = {
  h1: {
    fontSize: "3rem",
    fontWeight: 600,
    lineHeight: 1.2,
    letterSpacing: "-0.03em",
  },
  h2: {
    fontSize: "2.5rem",
    fontWeight: 700,
    lineHeight: 1.2,
    letterSpacing: "-0.03em",
  },
  h3: {
    fontSize: "2rem",
    fontWeight: 600,
    lineHeight: 1.25,
    letterSpacing: "-0.02em",
  },
  h4: {
    fontSize: "1.75rem",
    fontWeight: 600,
    lineHeight: 1.3,
    letterSpacing: "-0.01em",
  },
  "title-lg": {
    fontSize: "1.25rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  "title-md": {
    fontSize: "1.0625rem",
    fontWeight: 600,
    lineHeight: 1.4,
  },
  "title-sm": {
    fontSize: "0.9375rem",
    fontWeight: 500,
    lineHeight: 1.43,
  },
  "body-lg": {
    fontSize: "1.0625rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  "body-md": {
    fontSize: "0.9375rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
  "body-sm": {
    fontSize: "0.875rem",
    fontWeight: 400,
    lineHeight: 1.43,
  },
  "body-xs": {
    fontSize: "0.8125rem",
    fontWeight: 400,
    lineHeight: 1.5,
  },
};
