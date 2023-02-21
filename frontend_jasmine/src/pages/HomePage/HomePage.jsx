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
        // height: "100vh",
        display: "flex",
        flexDirection: "column",
        flex: "1",
      }}
    >
      {/* <CustomAccordionItem accordionTitle="Test" id="0">
        <div>
          as asdcsdf sdfsdfs sdfsdf sdfsdf sdfsdfhjfgsdhfa bfdafahjfakjbd
          fkdsjfaskdjf dfasdj
        </div>
      </CustomAccordionItem>
      <CustomAccordionItem accordionTitle="Test" id="1">
        <div>
          as asdcsdf sdfsdfs sdfsdf sdfsdf sdfsdfhjfgsdhfa bfdafahjfakjbd
          fkdsjfaskdjf dfasdj
        </div>
      </CustomAccordionItem> */}
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
