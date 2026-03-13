import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { AppsSection } from "./components/AppsSection";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      <Header />

      <main className="max-w-7xl mx-auto px-4">
        <Hero />
        <AppsSection />
        <Newsletter />
      </main>

      <Footer />
    </div>
  );
}