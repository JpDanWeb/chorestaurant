import React from "react";
import Header_home from "./components/spot";
import CardAbout from "./components/about";
import Nav_header from "./components/navbar";
import Gallery_food from "./components/gallery";
import Bunner from "./components/menu_dishes";
import Contacts_map from "./components/contacts";
import Footer_end from "./components/footer";



function App() {  
  return (
    <>
    <Nav_header/>
    <Header_home/>
    <CardAbout/>
    <Gallery_food/>
    <Bunner/>
    <Contacts_map/>
    <Footer_end/>
    </>
  );
}

export default App;
