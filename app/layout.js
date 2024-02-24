import { Inter } from "next/font/google";
import "./globals.css";
import { store } from '@/app/redux/store'
import { Provider } from 'react-redux'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rock Paper Scissors ",
  description: "Play the Rock Paper Lizard Game",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
