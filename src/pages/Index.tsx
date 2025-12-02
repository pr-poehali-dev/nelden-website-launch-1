import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Equipment from '@/components/Equipment';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWidgets from '@/components/FloatingWidgets';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Services />
      <Equipment />
      <Contact />
      <Footer />
      <FloatingWidgets />
    </div>
  );
};

export default Index;