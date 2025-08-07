import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import { FAQ, OurServices } from "./components/Servicesand";
import { PricingPlan } from "./components/PricingPlan";
import { ContactUs } from "./components/ContactUs";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero/>
      <OurServices/>
      <PricingPlan/>
      <FAQ/>
      <ContactUs/>
    </div>
  );
}
