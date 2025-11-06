import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/home/ContactForm";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users } from "lucide-react";
import { Briefcase, Headphones, Calculator, FileText, Database } from "lucide-react";
import { useState } from "react";

const ResultDrivenServices = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">Result-Driven Services</h1>
          <p className="text-lg text-muted-foreground text-center max-w-4xl mx-auto mb-12">
            We provide expert, result-driven support in project management, helpdesk, accounting, IT, and managed services, helping small and medium-sized businesses operate smoothly, stay efficient, and grow with confidence.
          </p>
        </section>

        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Project Management</h3>
              </div>
              <p className="text-muted-foreground">
                Our project management support ensures every initiative is delivered on time, within scope, and aligned with your business goals. We apply proven methodologies and clear communication to streamline collaboration and reduce risk strategy. From planning to execution, our experts keep your projects on track for measurable success.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Helpdesk Operations</h3>
              </div>
              <p className="text-muted-foreground">
                Delivering exceptional user experiences through responsive, 24/7 helpdesk operations. Our support team handles technical issues, troubleshooting and service requests with speed and professionalism. We focus on minimizing downtime and maintaining customer satisfaction at every interaction.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calculator className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Accounting</h3>
              </div>
              <p className="text-muted-foreground">
                Our accounting support services help businesses maintain accuracy, compliance, and financial transparency. We handle everything from bookkeeping and reporting to reconciliation and audits with meticulous attention to detail. Let our experienced team keep your finances organized and optimized for growth.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">Billing</h3>
              </div>
              <p className="text-muted-foreground">
                We provide dedicated billing support to help businesses manage invoicing, payment tracking, and financial accuracy with ease. Our team ensures timely processing, clear communication, and reliable coordination between departments. By focusing on consistent, high quality support, we help maintain smooth and efficient billing operations.
              </p>
            </div>

            <div className="bg-card border rounded-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-8 w-8 text-primary" />
                <h3 className="text-2xl font-semibold">IT Support</h3>
              </div>
              <p className="text-muted-foreground">
                Our IT support services provide proactive monitoring, troubleshooting, and maintenance to keep your systems running seamlessly. We respond quickly to technical issues and prevent potential disruptions before they occur. With round-the-clock support, your business can operate with confidence and continuity.
              </p>
            </div>

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

        <section className="max-w-4xl mx-auto">
          <div className="max-w-4xl mx-auto rounded-lg p-6 mb-6">
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

export default ResultDrivenServices;
