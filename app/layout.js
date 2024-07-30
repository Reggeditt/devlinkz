import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/app/context/authContext";
import { StoreProvider } from "@/app/context/StoreContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devlinks",
  description: "Manage all your important reference links in one place",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
          <AuthProvider>
            <body className={inter.className}>
              {children}
            </body>
          </AuthProvider>
    </html>
  );
}
