
import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css'

import { Inter_Tight } from 'next/font/google'
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';

const inter = Inter_Tight({ subsets: ['latin'] })
export const metadata = {
  title: "The Realtaholic",
  description: "Helping you achieve your Real Estate Goals in Dubai!",
  icons: {
    icon: ["/glogo.png?v=4"],
    apple: ["/glogo.png?v4"],
    shortcut: ["/glogo.png"],
  },
};

export default function RootLayout({ children }) {
 
  return (
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>  
      <ImportBs/>
        <div className=''>{children}</div>
      </body>
    </html>
  )
}
