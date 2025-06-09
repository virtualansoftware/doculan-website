
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Heart, 
  Scale, 
  Factory, 
  GraduationCap, 
  Shield,
  ArrowRight,
  CheckCircle,
  Users,
  TrendingUp,
  Clock
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Solutions = () => {
  const industries = [
    {
      icon: Building2,
      title: "Enterprise",
      description: "Large-scale automation for complex organizational workflows",
      features: ["Multi-department workflows", "Advanced analytics", "Custom integrations", "Dedicated support"],
      stats: { processes: "500+", time_saved: "80%", users: "10,000+" }
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "HIPAA-compliant automation for patient care and administration",
      features: ["Patient data management", "Appointment scheduling", "Compliance tracking", "Medical records"],
      stats: { processes: "200+", time_saved: "75%", users: "5,000+" }
    },
    {
      icon: Scale,
      title: "Legal",
      description: "Streamline legal processes with secure document management",
      features: ["Contract lifecycle", "Legal document review", "Client communication", "Billing automation"],
      stats: { processes: "150+", time_saved: "70%", users: "2,500+" }
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Optimize production workflows and supply chain management",
      features: ["Production planning", "Quality control", "Inventory management", "Supplier workflows"],
      stats: { processes: "300+", time_saved: "85%", users: "7,500+" }
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Automate administrative tasks and student management",
      features: ["Student enrollment", "Grade processing", "Administrative workflows", "Parent communication"],
      stats: { processes: "100+", time_saved: "60%", users: "15,000+" }
    },
    {
      icon: Shield,
      title: "Government",
      description: "Secure, compliant automation for public sector operations",
      features: ["Citizen services", "Permit processing", "Compliance management", "Inter-agency workflows"],
      stats: { processes: "250+", time_saved: "65%", users: "8,000+" }
    }
  ];

  const useCases = [
    {
      title: "Invoice Processing",
      description: "Automate end-to-end invoice processing from receipt to payment",
      benefits: ["95% reduction in processing time", "Elimination of manual errors", "Real-time tracking"]
    },
    {
      title: "Employee Onboarding",
      description: "Streamline new hire processes with automated workflows",
      benefits: ["50% faster onboarding", "Consistent experience", "Reduced HR workload"]
    },
    {
      title: "Contract Management",
      description: "Complete contract lifecycle automation with AI-powered insights",
      benefits: ["Automated renewals", "Risk assessment", "Compliance monitoring"]
    },
    {
      title: "Customer Support",
      description: "Intelligent ticket routing and automated response systems",
      benefits: ["24/7 availability", "Faster resolution", "Customer satisfaction"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto text-center">
          <Badge className="mb-6" variant="secondary">Industry Solutions</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Tailored Automation for Every Industry
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover how Doculan's intelligent automation platform transforms workflows 
            across different industries, driving efficiency and growth.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button size="lg" className="px-8 py-6 text-lg">
              Explore Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="px-8 py-6 text-lg">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Purpose-built automation solutions designed for the unique challenges of your industry.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <industry.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {industry.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <CheckCircle className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-3 gap-2 pt-4 border-t">
                      <div className="text-center">
                        <div className="font-bold text-primary">{industry.stats.processes}</div>
                        <div className="text-xs text-muted-foreground">Processes</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-primary">{industry.stats.time_saved}</div>
                        <div className="text-xs text-muted-foreground">Time Saved</div>
                      </div>
                      <div className="text-center">
                        <div className="font-bold text-primary">{industry.stats.users}</div>
                        <div className="text-xs text-muted-foreground">Users</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Popular Use Cases</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              See how organizations use Doculan to automate their most critical processes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{useCase.title}</CardTitle>
                  <CardDescription>{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <TrendingUp className="w-4 h-4 text-primary mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results Across Industries</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our platform delivers measurable impact for organizations of all sizes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">50,000+</div>
              <div className="text-muted-foreground">Active Users</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">300%</div>
              <div className="text-muted-foreground">Productivity Increase</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">75%</div>
              <div className="text-muted-foreground">Time Reduction</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="text-3xl font-bold mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Industry?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of organizations that have revolutionized their operations with Doculan.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
