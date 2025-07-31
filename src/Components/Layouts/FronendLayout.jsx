import React from "react";
import { Outlet } from "react-router";
import Header from "../Header";
import Footer from "../Footer";

const FronendLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default FronendLayout;
