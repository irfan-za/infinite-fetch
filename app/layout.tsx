import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Infinite fetch API",
  description: "just a simple fetch API",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
