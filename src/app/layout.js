import "./globals.css";
import { Inter } from "next/font/google"
import NavBar from "@/components/navbar/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Alen's Website",
  description: "Alen's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}