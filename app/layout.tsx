import "../styles/globals.css"
import { Metadata } from "next";
import AppWrapper from "../components/AppWrapper";

export const metadata: Metadata = {
  title: "Ahmed Raza | Frontend Developer",
  description: "Portfolio built using Next.js and Tailwind CSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
