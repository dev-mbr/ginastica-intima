import Image from "next/image";
import FirstSection from "../components/FirstSection";
import Footer from "../components/Footer";
import Modal from "../components/Modal";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <Footer />
    </div>
  );
}
