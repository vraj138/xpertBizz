import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroCarousel from "@/components/home/HeroCarousel";
import MissionStatement from "@/components/home/MissionStatement";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ContactForm from "@/components/home/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <MissionStatement />
        <WhyChooseUs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;