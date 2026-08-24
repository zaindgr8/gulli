import '@fortawesome/fontawesome-free/css/all.min.css';
import './globals.css';
import { Plus_Jakarta_Sans, Cormorant_Garamond } from 'next/font/google';
import { AOSInit } from './aoshook/aoshook';
import ImportBs from './importBs';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
});

export const metadata = {
  title: "The Realtaholic | Gulraiz Naveed | Dubai Luxury Real Estate Advisory",
  description: "Private client advisory and exclusive luxury real estate in Dubai by Gulraiz Naveed at Cresco Real Estate. Specializing in off-plan, ultra-luxury penthouses and high-yield investments.",
  icons: {
    icon: ["/assets/img/gulli/glogo1.png", "/glogo.png?v=4"],
    apple: ["/assets/img/gulli/glogo1.png"],
    shortcut: ["/glogo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${jakarta.variable} ${cormorant.variable}`}>
      <AOSInit />
      <body className={`${jakarta.className} bg-[#070709] text-[#E4E4E7] antialiased selection:bg-[#C5A85C] selection:text-black overflow-x-hidden`}>
        <ImportBs />
        <div className="min-h-screen flex flex-col">{children}</div>
      </body>
    </html>
  );
}
