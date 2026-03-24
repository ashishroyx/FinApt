import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkuser"; // 1. Import the sync function

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FinApt",
  description: "Finance With AI",
};

// 2. Make this function async
export default async function RootLayout({ children }) {
  // 3. Trigger the sync
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
          
          {/* <footer className="bg-black py-12">
            <div className="container mx-auto px-4 text-center text-gray-400">
              <p>Made by Ashish Kumar Roy</p>
            </div>
          </footer> */}
        </body>
      </html>
    </ClerkProvider>
  );
}