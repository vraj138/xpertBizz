import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, Users, Briefcase, Calculator, FileText, Headphones, Database, Cloud } from "lucide-react";

const Services = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    // Scroll to section if hash is present
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    if (!validateEmail(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Success!",
      description: "We've received your message and will get back to you soon.",
    });
    
    setFullName("");
    setEmail("");
    setMessage("");
    setIsSubmitting(false);
    setShowForm(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        {/* Expert HR Recruitment Section */}
        <section id="hr-recruitment" className="mb-20 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Users className="h-10 w-10 text-primary" />
              <h1 className="text-4xl font-bold text-foreground">Expert HR Recruitment</h1>
            </div>
            <p className="text-lg text-muted-foreground mb-6">
              We specialize in temporary, permanent, and contract staffing across industries such as healthcare, IT, engineering, and administrative support. Our goal is to take the stress out of recruiting by connecting you with skilled professionals who fit your company's culture and business needs.
            </p>
            <div className="bg-muted/50 rounded-lg p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Here's what sets us apart:</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="font-semibold text-foreground mr-2">•</span>
                  <span><strong className="text-foreground">Customized solutions:</strong> We tailor our staffing strategies to your unique requirements.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-foreground mr-2">•</span>
                  <span><strong className="text-foreground">Pre-screened candidates:</strong> Every professional we place is thoroughly vetted for skills, experience, and reliability.</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold text-foreground mr-2">•</span>
                  <span><strong className="text-foreground">Fast turnaround:</strong> We know time is critical, so our streamlined process ensures you get the right talent exactly when you need it.</span>
                </li>
              </ul>
            </div>
            
            <Button 
              onClick={() => setShowForm(!showForm)}
              size="lg"
              className="mb-6"
            >
              Get Started
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showForm ? 'rotate-180' : ''}`} />
            </Button>

            {showForm && (
              <div className="bg-card border rounded-lg p-6 animate-in fade-in slide-in-from-top-4">
                <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                      id="fullName"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your staffing needs..."
                      required
                      rows={5}
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Submit"}
                  </Button>
                </form>
              </div>
            )}
          </div>
        </section>

        {/* Core Services Section */}
        <section id="core-services" className="mb-20 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Project Management */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Project Management</h3>
              </div>
              <p className="text-muted-foreground">
                Our project management support ensures every initiative is delivered on time, within scope, and aligned with your business goals. We apply proven methodologies and clear communication to streamline collaboration and reduce risk strategy. From planning to execution, our experts keep your projects on track for measurable success.
              </p>
            </div>

            {/* Helpdesk Operations */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Helpdesk Operations</h3>
              </div>
              <p className="text-muted-foreground">
                Delivering exceptional user experiences through responsive, 24/7 helpdesk operations. Our support team handles technical issues, troubleshooting and service requests with speed and professionalism. We focus on minimizing downtime and maintaining customer satisfaction at every interaction.
              </p>
            </div>

            {/* Accounting */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Accounting</h3>
              </div>
              <p className="text-muted-foreground">
                Our accounting support services help businesses maintain accuracy, compliance, and financial transparency. We handle everything from bookkeeping and reporting to reconciliation and audits with meticulous attention to detail. Let our experienced team keep your finances organized and optimized for growth.
              </p>
            </div>

            {/* Billing */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Billing</h3>
              </div>
              <p className="text-muted-foreground">
                We provide dedicated billing support to help businesses manage invoicing, payment tracking, and financial accuracy with ease. Our team ensures timely processing, clear communication, and reliable coordination between departments. By focusing on consistent, high quality support, we help maintain smooth and efficient billing operations.
              </p>
            </div>

            {/* IT Support */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">IT Support</h3>
              </div>
              <p className="text-muted-foreground">
                Our IT support services provide proactive monitoring, troubleshooting, and maintenance to keep your systems running seamlessly. We respond quickly to technical issues and prevent potential disruptions before they occur. With round-the-clock support, your business can operate with confidence and continuity.
              </p>
            </div>

            {/* Data Entry */}
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Data Entry</h3>
              </div>
              <p className="text-muted-foreground">
                We provide accurate and reliable data entry support to help businesses maintain organized and UpToDate records. Our team handles data input, validation, and formatting with speed and precision, reducing errors and saving valuable time. With dedicated support, your business can focus on core operations while we manage your critical data efficiently.
              </p>
            </div>
          </div>
        </section>

        {/* Managed Services Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Managed Services</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We offer end-to-end managed services that enhance performance, security, and scalability across your IT environment. Our team ensures proactive management and continuous improvement for all critical systems. Within this, we specialize in:
            </p>
            
            <div className="space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3">Database Support</h3>
                <p className="text-muted-foreground">
                  Comprehensive database management, monitoring, and optimization to ensure stability, speed, and security. We handle backups, updates, and performance tuning to keep your data reliable and accessible.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3">Application Support</h3>
                <p className="text-muted-foreground">
                  End-to-end application support designed to maintain uptime and enhance functionality. Our specialists manage updates, troubleshooting, and integrations to keep your business applications running smoothly.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Digital Transformation Section */}
        <section id="digital-transformation" className="mb-20 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Cloud className="h-10 w-10 text-primary" />
              <h2 className="text-3xl font-bold">Digital Transformation</h2>
            </div>
            
            <div className="space-y-6">
              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3">Cloud Infrastructure Migration</h3>
                <p className="text-muted-foreground">
                  Seamlessly transition your legacy environments and on-premise systems to the cloud. Our experts ensure a secure, scalable, and optimized migration process that minimizes downtime and maximizes performance.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3">Legacy ERP to Cloud Applications</h3>
                <p className="text-muted-foreground">
                  Upgrade from outdated ERP systems to modern, cloud-based applications that streamline business processes and improve agility. We provide comprehensive migration support, integration expertise, and post deployment optimization.
                </p>
              </div>

              <div className="bg-card border rounded-lg p-6">
                <h3 className="text-2xl font-semibold mb-3">Ongoing Cloud Support and Management</h3>
                <p className="text-muted-foreground">
                  Maintain peak performance with continuous monitoring, maintenance, and technical support for your cloud infrastructure. Our managed services are designed to enhance reliability, security, and operational efficiency.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
