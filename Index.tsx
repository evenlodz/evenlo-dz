import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import FeaturedEvents from "@/components/FeaturedEvents";
import NotificationCTA from "@/components/NotificationCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedEvents />
        <NotificationCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
