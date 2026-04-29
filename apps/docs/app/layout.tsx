import type { Metadata } from "next";
import { Shell } from "./shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Weaver Design System",
  description:
    "Weaver is a design system maintained in Figma and implemented as an installable Joy UI theme.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
