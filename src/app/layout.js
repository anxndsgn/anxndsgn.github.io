import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/background";
import "remixicon/fonts/remixicon.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ANXN",
  description: "designed by anxn",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Background />
      </body>
    </html>
  );
}
