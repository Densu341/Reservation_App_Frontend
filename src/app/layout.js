import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Motel Roemah Djogja",
  description: "Motel Roemah Djogja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Navigation />
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}
