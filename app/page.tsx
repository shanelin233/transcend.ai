import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Steps from '@/components/Steps';
import Features from '@/components/Features';
import Announcements from '@/components/Announcements';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Steps />
        <Features />
        <Announcements />
      </main>
      <Footer />
    </div>
  );
}
