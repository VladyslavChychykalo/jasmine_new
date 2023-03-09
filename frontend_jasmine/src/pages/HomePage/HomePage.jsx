import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../container/header";
import Gallery from "../../container/gallery";
import Team from "../../container/team";
import Services from "../../container/services";
import AboutUs from "../../container/aboutUs";
import Certificates from "../../container/certificates";
import Contacts from "../../container/contacts";
// import CustomAccordionItem from "../../components/customAccordionItem/CustomAccordionItem";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
      }}
    >
      <Navbar />
      <Header />
      <main>
        <AboutUs />
        <Gallery />
        <Team />
        <Services />
        <Certificates />
      </main>
      {/* <Contacts /> */}
    </div>
  );
};

export default HomePage;
