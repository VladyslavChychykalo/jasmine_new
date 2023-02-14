import React from "react";
import Navbar from "../../components/navbar";
import Header from "../../container/header";
import Gallery from "../../container/gallery";
import Team from "../../container/team";
import Services from "../../container/services";
import AboutUs from "../../container/aboutUs";
import Certificates from "../../container/certificates";
import Contacts from "../../container/contacts";

const HomePage = () => {
  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <Navbar />
      <Header />
      <AboutUs />
      <Gallery />
      <Team />
      <Services />
      <Certificates />
      <Contacts />
    </div>
  );
};

export default HomePage;
