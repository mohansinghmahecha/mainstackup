import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { FAQ, OurServices } from "./components/Servicesand";
import { PricingPlan } from "./components/PricingPlan";

import LandingPage, { ContactUs } from "./components/ContactUs";
import { Technologies } from "./components/Technologies";
import { OurProjects } from "./components/OurProjects";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <PricingPlan/>
      <OurServices/>
      <OurProjects/>
      <Technologies/>
      <FAQ/>
      <LandingPage/>
    </div>
  );
}
