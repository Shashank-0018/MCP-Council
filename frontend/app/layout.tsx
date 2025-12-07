import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MCP-Council | Transform APIs into AI-Powered MCP Servers",
  description: "Automate the conversion of any REST API into Model Context Protocol (MCP) servers. Deploy AI-accessible tools in minutes, not days.",
  keywords: ["MCP", "Model Context Protocol", "API", "AI Tools", "Automation", "Claude", "Cursor", "Gemini"],
  authors: [{ name: "MCP-Council" }],
  openGraph: {
    title: "MCP-Council | Transform APIs into AI-Powered MCP Servers",
    description: "Automate the conversion of any REST API into Model Context Protocol (MCP) servers.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
