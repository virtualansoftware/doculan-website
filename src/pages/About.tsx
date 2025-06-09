
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Shield,
  Heart
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible in automation technology."
    },
    {
      icon: Users,
      title: "Customer Success",
      description: "Your success is our success. We're committed to helping you achieve your goals."
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Enterprise-grade security and reliability you can count on."
    },
    {
      icon: Heart,
      title: "Human-Centered",
      description: "Technology should empower people, not replace them."
    }
  ];

  const stats = [
    { number: "50,000+", label: "Active Users" },
    { number: "1M+", label: "Workflows Automated" },
    { number: "99.9%", label: "Uptime" },
    { number: "150+", label: "Countries Served" }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description: "Former automation consultant with 15+ years in enterprise software."
    },
    {
      name: "Michael Chen",
      role: "CTO",
      description: "Lead architect behind our AI-powered automation engine."
    },
    {
      name: "Emily Rodriguez",
      role: "VP of Product",
      description: "Product visionary focused on user experience and innovation."
    },
    {
      name: "David Kim",
      role: "VP of Engineering",
      description: "Scaling technology to serve millions of automation workflows."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto text-center">
          <Badge className="mb-6" variant="secondary">About Us</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Virtualan Software, LLC
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Founded with a vision to democratize automation, we're building the future 
            where intelligent workflows empower every organization to achieve more.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                At Virtualan Software, we believe that every organization deserves access to 
                powerful automation tools that were once exclusive to tech giants. Our mission 
                is to democratize intelligent automation and make it accessible to businesses 
                of all sizes.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in 2019, we've grown from a small team with a big vision to a 
                leading automation platform trusted by thousands of organizations worldwide.
              </p>
              <div className="flex items-center gap-4">
                <Button size="lg">
                  Learn More
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline">
                  Our Story
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at Virtualan Software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Meet the visionaries driving innovation at Virtualan Software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones in our mission to democratize automation.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2019</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                  <p className="text-muted-foreground">Virtualan Software, LLC was established with a vision to make automation accessible to all.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2020</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">First Product Launch</h3>
                  <p className="text-muted-foreground">Launched Doculan v1.0 with core automation features for small businesses.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2022</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">AI Integration</h3>
                  <p className="text-muted-foreground">Introduced AI-powered workflow optimization and intelligent automation.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2024</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Global Expansion</h3>
                  <p className="text-muted-foreground">Serving 50,000+ users across 150+ countries with enterprise-grade features.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 gradient-bg text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join Our Mission
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Be part of the automation revolution. Whether you're a customer, partner, or team member, 
            we'd love to have you on this journey.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-8 py-6 text-lg">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
