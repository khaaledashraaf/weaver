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
import { usePathname } from "next/navigation";
import "./globals.css";

const navGroups = [
  {
    items: [
      { label: "Overview", href: "/docs" },
    ],
  },
  {
    label: "FOUNDATIONS",
    items: [
      { label: "Tokens", href: "/components/tokens" },
      { label: "Icons", href: "/components/icons" },
      { label: "Typography", href: "/components/typography" },
    ],
  },
  {
    label: "INPUTS",
    items: [
      { label: "Button", href: "/components/buttons" },
      { label: "Input", href: "/components/inputs" },
      { label: "Select", href: "/components/select" },
      { label: "Checkbox", href: "/components/checkbox-radio" },
      { label: "Switch", href: "/components/switch" },
      { label: "Slider", href: "/components/slider" },
      { label: "Button Group", href: "/components/button-group" },
      { label: "Date Picker", href: "/components/date-picker" },
    ],
  },
  {
    label: "DATA DISPLAY",
    items: [
      { label: "Avatar", href: "/components/avatar" },
      { label: "Chips", href: "/components/chips" },
      { label: "Badge", href: "/components/badges" },
      { label: "Table", href: "/components/tables" },
      { label: "Tabs", href: "/components/tabs" },
      { label: "Tooltip", href: "/components/tooltips" },
      { label: "Divider", href: "/components/divider" },
    ],
  },
  {
    label: "NAVIGATION",
    items: [
      { label: "Breadcrumbs", href: "/components/breadcrumbs" },
      { label: "Pagination", href: "/components/pagination" },
    ],
  },
  {
    label: "FEEDBACK",
    items: [
      { label: "Alert", href: "/components/alerts" },
      { label: "Progress", href: "/components/progress" },
    ],
  },
  // {
  //   label: "SURFACES",
  //   items: [
  //     { label: "Card & Modal", href: "/components/cards-modals" },
  //     { label: "Accordion", href: "/components/accordion" },
  //   ],
  // },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLanding = pathname === "/";

  return (
    <html lang="en">
      <body>
        <WeaverProvider>
          {isLanding ? (
            children
          ) : (
            <Box sx={{ display: "flex", minHeight: "100vh" }}>
              {/* Left sidebar */}
              <Sheet
                sx={{
                  width: 220,
                  borderRight: "1px solid",
                  borderColor: "divider",
                  position: "fixed",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  overflowY: "auto",
                  zIndex: 10,
                  py: 2,
                  px: 1.5,
                }}
              >
                <Link href="/" style={{ textDecoration: "none" }}>
                  <Box sx={{ px: 1, mb: 2.5, mt: 0.5, cursor: "pointer" }}>
                    <Typography level="title-lg" fontWeight={600}>
                      Weaver
                    </Typography>
                  </Box>
                </Link>

                {navGroups.map((group, gi) => (
                  <Box key={gi} sx={{ mb: 1.5 }}>
                    {group.label && (
                      <Typography
                        level="body-xs"
                        textTransform="uppercase"
                        letterSpacing="0.08em"
                        fontWeight={600}
                        sx={{ px: 1, mb: 0.5, color: "text.tertiary", fontSize: "0.65rem" }}
                      >
                        {group.label}
                      </Typography>
                    )}
                    <List
                      size="sm"
                      sx={{
                        "--ListItem-radius": "6px",
                        "--List-gap": "1px",
                        "--ListItem-minHeight": "30px",
                        "--ListItemButton-paddingBlock": "0px",
                      }}
                    >
                      {group.items.map((item) => (
                        <ListItem key={item.href}>
                          <ListItemButton
                            component={Link}
                            href={item.href}
                            selected={pathname === item.href}
                            sx={{
                              fontSize: "0.8125rem",
                              fontWeight: pathname === item.href ? 600 : 400,
                              color: pathname === item.href ? "primary.600" : "text.secondary",
                            }}
                          >
                            {item.label}
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </Sheet>

              {/* Main content */}
              <Box
                component="main"
                sx={{
                  flexGrow: 1,
                  ml: "220px",
                  px: { xs: 3, md: 6 },
                  py: 5,
                  maxWidth: 860,
                }}
              >
                {children}
              </Box>
            </Box>
          )}
        </WeaverProvider>
      </body>
    </html>
  );
}
