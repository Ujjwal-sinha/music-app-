import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import WhyChooseUs from "@/components/WhyChooseUs";
import TestimonalialCards from "@/components/TestimonalialCards";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import Instructors from "@/components/Instructors";
import Footer from "@/components/Footer";
export default function Home() {
  return (
   <main className=" min-h-screen bg-[#02020c] antialiased " >
    
    <HeroSection/>
    <FeaturedCourses/>
    <WhyChooseUs/>
    <TestimonalialCards/>
    <UpcomingWebinar/>
    <Instructors/>
    <Footer/>
    </main>
  );
}
