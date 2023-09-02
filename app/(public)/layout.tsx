import React from "react";
import ThemeRegistry from "../components/ThemeRegistry/ThemeRegistry";

export const metadata = {
  title: "Sistemas Public",
  description: "Pagina Inicial",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
