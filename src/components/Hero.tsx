
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 gradient-bg text-white">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Automate Your Business
            <span className="block text-accent">Like Never Before</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Transform your workflows with our comprehensive automation platform. 
            From process automation to AI-powered document management, we've got you covered.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
              Start Free Trial
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
              <Play className="mr-2 w-5 h-5" />
              Watch Demo
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-3xl font-bold text-accent">99.9%</div>
              <div className="text-sm opacity-75">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">10,000+</div>
              <div className="text-sm opacity-75">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent">500M+</div>
              <div className="text-sm opacity-75">Tasks Automated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
