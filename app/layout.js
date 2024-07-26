import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./context/authContext";
import { StoreProvider } from "./context/StoreContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Devlinks",
  description: "Manage all your important reference links in one place",
};

export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <StoreProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </StoreProvider>
    </AuthProvider>
  );
}
