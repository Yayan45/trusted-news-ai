import Container from "../components/layout/Container";

import Navbar from "../components/landing/Navbar";
import HeroSection from "../components/landing/HeroSection";
import AboutSection from "../components/landing/AboutSection";
import FeatureSection from "../components/landing/FeatureSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import TeamSection from "../components/landing/TeamSection";

import Footer from "../components/layout/Footer";

function Home() {
  return (
    <>
      {/* NAVBAR */}
      <Navbar />

      <Container>
        {/* HERO */}
        <HeroSection />

        {/* ABOUT */}
        <AboutSection />

        {/* FEATURE */}
        <FeatureSection />

        {/* HOW IT WORKS */}
        <HowItWorksSection />

        {/* MAIN DETECTION */}

        {/* TEAM */}
        <TeamSection />

        {/* FOOTER */}
      </Container>
      <Footer />
    </>
  );
}

export default Home;
