import React from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div className="bg-[#1a1c1e] md:bg-[#f0f0f0] min-h-screen md:p-3">
      <div className="relative rounded-none md:rounded-[32px] overflow-hidden min-h-[100dvh] md:min-h-[calc(100vh-24px)] bg-white flex flex-col">
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;