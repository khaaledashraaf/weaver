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

const textPrimary = "var(--joy-palette-text-primary)";

export const typographyConfig = {
  // ── Display ───────────────────────────────────────────────
  "display-xl": {
    fontSize: "6rem", // 96px
    fontWeight: 600,
    lineHeight: "104px",
    letterSpacing: "-0.03em",
    color: textPrimary,
  },
  "display-lg": {
    fontSize: "5.25rem", // 84px
    fontWeight: 700,
    lineHeight: "92px",
    letterSpacing: "-0.03em",
    color: textPrimary,
  },
  "display-md": {
    fontSize: "4.5rem", // 72px
    fontWeight: 700,
    lineHeight: "80px",
    letterSpacing: "-0.03em",
    color: textPrimary,
  },
  "display-sm": {
    fontSize: "3.75rem", // 60px
    fontWeight: 600,
    lineHeight: "68px",
    letterSpacing: "-0.03em",
    color: textPrimary,
  },

  // ── Heading ───────────────────────────────────────────────
  h1: {
    fontSize: "3rem", // 48px — heading-3xl
    fontWeight: 700,
    lineHeight: "56px",
    letterSpacing: "-0.02em",
    color: textPrimary,
  },
  h2: {
    fontSize: "2.5rem", // 40px — heading-2xl
    fontWeight: 700,
    lineHeight: "48px",
    letterSpacing: "-0.02em",
    color: textPrimary,
  },
  h3: {
    fontSize: "2rem", // 32px — heading-xl
    fontWeight: 700,
    lineHeight: "36px",
    letterSpacing: "-0.02em",
    color: textPrimary,
  },
  h4: {
    fontSize: "1.75rem", // 28px — heading-lg
    fontWeight: 600,
    lineHeight: "32px",
    letterSpacing: "-0.01em",
    color: textPrimary,
  },
  "heading-md": {
    fontSize: "1.5rem", // 24px
    fontWeight: 600,
    lineHeight: "28px",
    color: textPrimary,
  },

  // ── Title ─────────────────────────────────────────────────
  "title-lg": {
    fontSize: "1.25rem", // 20px — heading-sm
    fontWeight: 600,
    lineHeight: "24px",
    color: textPrimary,
  },
  "title-md": {
    fontSize: "1.0625rem", // 17px — heading-xs
    fontWeight: 600,
    lineHeight: "22px",
    color: textPrimary,
  },
  "title-sm": {
    fontSize: "0.9375rem", // 15px
    fontWeight: 500,
    lineHeight: "24px",
    color: textPrimary,
  },

  // ── Body ──────────────────────────────────────────────────
  "body-xl": {
    fontSize: "1.25rem", // 20px
    fontWeight: 400,
    lineHeight: "30px",
    color: textPrimary,
  },
  "body-lg": {
    fontSize: "1.0625rem", // 17px
    fontWeight: 400,
    lineHeight: "28px",
    color: textPrimary,
  },
  "body-md": {
    fontSize: "0.9375rem", // 15px
    fontWeight: 400,
    lineHeight: "24px",
    color: textPrimary,
  },
  "body-sm": {
    fontSize: "0.875rem", // 14px
    fontWeight: 400,
    lineHeight: "20px",
    color: textPrimary,
  },
  "body-xs": {
    fontSize: "0.8125rem", // 13px
    fontWeight: 400,
    lineHeight: "20px",
    color: textPrimary,
  },
  "body-2xs": {
    fontSize: "0.75rem", // 12px
    fontWeight: 400,
    lineHeight: "16px",
    color: textPrimary,
  },
  "body-3xs": {
    fontSize: "0.6875rem", // 11px
    fontWeight: 400,
    lineHeight: "14px",
    color: textPrimary,
  },
};
