import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkuser"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinApt",
  description: "Finance With AI",
};


export default async function RootLayout({ children }) {
  
  await checkUser(); 

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/logo-sm.png" sizes="any" />
        </head>
        <body className={`${inter.className}`}>
          <Header />
          <main className="min-h-screen">
            {children}
          </main>
          
         
        </body>
      </html>
    </ClerkProvider>
  );
}