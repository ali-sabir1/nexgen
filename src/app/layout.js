import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LastDiv from "./components/LastDiv";

// Import fonts
const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "NexGen",
  description: "Online Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
        {children}
        <LastDiv />
        <Footer />
      </body>
    </html>
  );
}
