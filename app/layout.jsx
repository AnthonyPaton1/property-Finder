import React from "react";
import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import Footer from "@/components/Footer";

export const metadata = {
  title: "propertyFinder | Find the perfect venue for you",
  description: "Find fun and exciting accesible venues near you",
  keywords:
    "find disability venues, accessability venues, fun venues, safe spaces ",
};

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang="en">
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
