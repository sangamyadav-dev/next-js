
import Featured from "@/components/Featured";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antiliased bg-grid-white/[0.3]">
      <HeroSection/>
      <Featured/>
      <Footer/>
    </main>
  );
}
