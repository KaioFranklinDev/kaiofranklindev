import { Inter } from "next/font/google";
import "./globals.css"
import Header from "./header/Header";
import Footer from "./Footer/Footer";
import styles from "./page.module.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kaio Franklin Dev",
  description: "site de portifolio pra um programador web full stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link type="image/png" sizes="16x16" rel="icon" href="./favicon.png" />
      </head>
      <body className={`${styles.wrapper} ${inter.className} `}> 
        
        <Header />
        {children}
        <Footer />
        
      </body>
    </html>
  );
}
