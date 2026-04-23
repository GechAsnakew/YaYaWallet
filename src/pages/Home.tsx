import Hero from '../sections/Hero';
import Partners from '../sections/Partners';
import Services from '../sections/Services';
import Business from '../sections/Business';
import News from '../sections/News';
import WhyChooseUs from '../sections/WhyChooseUs';
import Steps from '../sections/Steps';
import Testimonials from '../sections/Testimonials';
import Download from '../sections/Download';

const Home = () => {
  return (
    <main className="flex-1">
      <Hero />
      <Partners />
      <Services />
      <Business />
      <News />
      <WhyChooseUs />
      <Steps />
      <Testimonials />
      <Download />
    </main>
  );
};

export default Home;
