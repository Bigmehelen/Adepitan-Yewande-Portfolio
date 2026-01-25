import { Inter, Ovo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"], weight: ["400", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"],
});

export default function RootLayout({children}){
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${ovo.className} antialiased overflow-x-hidden leading-8`}
      >
        {children}
      </body>
    </html>
  );
}
