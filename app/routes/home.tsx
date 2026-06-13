import type { Route } from "./+types/home";
import Hero from "../../components/Hero";
import Services from "../../components/Services";
import Explore from "../../components/Explore";
import Testmonials from "../../components/Testmonials";
import OurTeam from "../../components/OurTeam";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Statup Business" },
    { name: "description", content: "Welcome to Statup Businesss!" },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Explore />
      <Testmonials />
      <OurTeam />
    </>
  );
}
