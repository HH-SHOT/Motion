import Image from "next/image";
import Navbar from "./components/navbar/navbar";
import HeroSection from "./landingpage/herosection";
import SecondSection from "./landingpage/secondsection";
import Footer from "./landingpage/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <SecondSection/>
    <Footer/>
    </>
  );
}
