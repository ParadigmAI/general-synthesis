import type { Metadata, Viewport } from "next";
import { Inter, Newsreader } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400"],
});

const description =
  "We're building a company to advance what's possible through plant research. More soon.";

export const metadata: Metadata = {
  title: "General Synthesis",
  description,
  openGraph: {
    title: "General Synthesis",
    description: "New possibilities in plant science.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#f4f2ed",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${newsreader.variable} antialiased`}
    >
      <body className="bg-paper font-sans text-ink">{children}</body>
    </html>
  );
}
