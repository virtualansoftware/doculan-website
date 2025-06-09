
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Workflow, 
  Settings, 
  CheckCircle, 
  FileSignature, 
  FolderOpen, 
  FileText, 
  DollarSign, 
  Bot 
} from "lucide-react";

const services = [
  {
    icon: Settings,
    title: "Build Process Automation",
    description: "Create custom automated workflows tailored to your business needs. Design, build, and deploy automation solutions without coding.",
    features: ["Visual workflow builder", "Custom triggers", "API integrations"]
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline your business processes with intelligent workflow automation that connects all your tools and systems seamlessly.",
    features: ["Multi-step workflows", "Conditional logic", "Real-time monitoring"]
  },
  {
    icon: CheckCircle,
    title: "Approval Process",
    description: "Accelerate decision-making with automated approval workflows. Route requests to the right people and track progress in real-time.",
    features: ["Multi-level approvals", "Escalation rules", "Audit trails"]
  },
  {
    icon: FileSignature,
    title: "Electronic Signature",
    description: "Secure, legally binding electronic signatures that integrate seamlessly with your document workflows and approval processes.",
    features: ["Legally compliant", "Multi-party signing", "Template library"]
  },
  {
    icon: FolderOpen,
    title: "Document Management",
    description: "Centralized document storage with intelligent organization, version control, and collaborative editing capabilities.",
    features: ["Version control", "Search & indexing", "Access permissions"]
  },
  {
    icon: FileText,
    title: "Contract Lifecycle Management",
    description: "Manage your contracts from creation to renewal with automated alerts, compliance tracking, and performance monitoring.",
    features: ["Contract templates", "Renewal alerts", "Compliance tracking"]
  },
  {
    icon: DollarSign,
    title: "Claim Processing",
    description: "Automate insurance and expense claim processing with intelligent document analysis and approval routing.",
    features: ["Automated validation", "Fraud detection", "Quick approvals"]
  },
  {
    icon: Bot,
    title: "AI Bot Integration",
    description: "Enhance your automation with AI-powered bots that can handle complex decisions and natural language processing.",
    features: ["NLP capabilities", "Machine learning", "24/7 availability"]
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Complete Automation Suite
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate your business processes, from simple workflows 
            to complex enterprise solutions powered by AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-0 shadow-md">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg leading-tight">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" size="sm" className="w-full mt-4">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="px-8 py-6 text-lg">
            Explore All Features
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
