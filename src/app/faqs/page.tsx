import FaqsSection from "@/components/FaqsSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import TopBar from "@/components/TopBar";
import React from "react";

const page = () => {
  return (
    <>
      <TopBar />
      <Header />
      <FaqsSection />
      <Footer />
    </>
  );
};

export default page;
