import {Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body
        className={`${outfit.className} ${ovo.className} antialiased overflow-x-hidden leading-8`}
      >
        {children}
      </body>
    </html>
  );
}
