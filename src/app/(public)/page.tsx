import About from "@/components/About";
import HeroHome from "@/components/hero/Home";
import Products from "@/components/Products";
import Services from "@/components/Services";
import Testimoni from "@/components/Testimoni";

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroHome />
      <About />
      <Services />
      <Products />
      <Testimoni />
    </div>
  );
}
