/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./header";
import SecondSection from "./secondsection";
import ThirdSection from "./thirdsection";
import { data } from "./signupdata";
import Questions from "./Questions";
import Footer from "./footer";
const App = () => {
 return (
  <main className="main">
   <Header />
   <SecondSection />
   <ThirdSection data={data} />
   <Questions />
   <Footer />
  </main>
 );
};

export default App;
