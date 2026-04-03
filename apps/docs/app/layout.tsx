"use client";

import * as React from "react";
import { WeaverProvider } from "weaver-ui-joyui";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import Typography from "@mui/joy/Typography";
import Link from "next/link";
import "./globals.css";

const navItems = [
  { label: "Overview", href: "/" },
  { label: "Buttons", href: "/components/buttons" },
  { label: "Inputs", href: "/components/inputs" },
  { label: "Select", href: "/components/select" },
  { label: "Checkbox & Radio", href: "/components/checkbox-radio" },
  { label: "Switch", href: "/components/switch" },
  { label: "Chips & Badges", href: "/components/chips-badges" },
  { label: "Alerts", href: "/components/alerts" },
  { label: "Tooltips", href: "/components/tooltips" },
  { label: "Avatar", href: "/components/avatar" },
  { label: "Tabs", href: "/components/tabs" },
  { label: "Cards & Modals", href: "/components/cards-modals" },
  { label: "Accordion", href: "/components/accordion" },
  { label: "Tables", href: "/components/tables" },
  { label: "Slider", href: "/components/slider" },
  { label: "Progress", href: "/components/progress" },
  { label: "Divider", href: "/components/divider" },
  { label: "Typography", href: "/components/typography" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WeaverProvider>
          <Box sx={{ display: "flex", minHeight: "100vh" }}>
            <Sheet
              sx={{
                width: 260,
                borderRight: "1px solid",
                borderColor: "divider",
                p: 2,
                position: "fixed",
                top: 0,
                left: 0,
                bottom: 0,
                overflowY: "auto",
              }}
            >
              <Typography level="h4" sx={{ mb: 2, px: 1 }}>
                Weaver DS
              </Typography>
              <List size="sm">
                {navItems.map((item) => (
                  <ListItem key={item.href}>
                    <ListItemButton
                      component={Link}
                      href={item.href}
                    >
                      {item.label}
                    </ListItemButton>
                  </ListItem>
                ))}
              </List>
            </Sheet>
            <Box
              component="main"
              sx={{
                flexGrow: 1,
                ml: "260px",
                p: 4,
                maxWidth: 960,
              }}
            >
              {children}
            </Box>
          </Box>
        </WeaverProvider>
      </body>
    </html>
  );
}
