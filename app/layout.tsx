import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alperen Kilic | R&D Engineer",
  description: "Gomulu sistemler, Linux tabanli altyapilar ve IoT cozumleri uzerine calisan Ar-Ge muhendisi.",
  keywords: ["Alperen Kilic", "R&D Engineer", "Embedded Systems", "IoT", "Linux", "AWS"],
  authors: [{ name: "Alperen Kilic" }],
  openGraph: {
    title: "Alperen Kilic | R&D Engineer",
    description: "Gomulu sistemler, Linux tabanli altyapilar ve IoT cozumleri uzerine calisan Ar-Ge muhendisi.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="bg-background">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
