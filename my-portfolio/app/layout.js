import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"], weight: ["400", "600", "700"],
});

const playfair = Playfair_Display({
  subsets: ["latin"], weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${playfair.className} antialiased overflow-x-hidden leading-8 bg-luxury-white text-luxury-dark`}
      >
        {children}
      </body>
    </html>
  );
}
