import Camp from "@/components/Camp";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-bold">
      <>
        <Hero />
        <Camp />
        <Guide />
        <Features />
        <GetApp />
      </>
    </div>
  );
}
