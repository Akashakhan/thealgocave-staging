import Hero from '@/components/Hero';
import Impact from '@/components/Impact';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import GlobalReach from '@/components/GlobalReach';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Impact />
      <Services />
      <Testimonials />
      <FAQ />
      <GlobalReach />
      <Footer />
    </div>
  );
}
