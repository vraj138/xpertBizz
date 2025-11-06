import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, Users } from "lucide-react";
import { useState } from "react";
import ContactForm from "@/components/home/ContactForm";

const DigitalTransformation = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <Cloud className="h-10 w-10 text-primary" />
            <h1 className="text-4xl font-bold">Empowering Your Digital Transformation</h1>
          </div>

          <p className="text-lg text-muted-foreground mb-12">
            We help businesses embrace digital transformation with expert guidance and end-to-end support, migrating legacy systems and ERP platforms to modern cloud environments to boost speed, efficiency, and long-term scalability.
          </p>

          <div className="space-y-6 rounded-lg p-6 mb-6">
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

          <Button
            onClick={() => setShowForm(!showForm)}
            size="lg"
            className="mb-6"
          >
            Get Started
            <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showForm ? 'rotate-180' : ''}`} />
          </Button>

          {showForm && (
            <ContactForm
              variant="dropdown"
              title="Contact Us"
              onSuccess={() => setShowForm(false)}
            />
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalTransformation;
