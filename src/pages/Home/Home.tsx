import Header from "../../components/Header/Header";
import About from "../About/About";
import Collections from "../Collections/Collections";
import Features from "../Features/Features";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import Instagram from "../Instagram/Instagram";
import Whatsapp from "../Whatsapp/Whatsapp";

export default function Home() {
  return <section>
    <Header />
    <Hero />
    <Collections />
    <Features />
    <About />
    <Instagram />
    <Whatsapp />
    <Footer />
  </section>
}
