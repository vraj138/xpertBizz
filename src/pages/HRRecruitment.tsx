import ContactForm from "@/components/home/ContactForm";
import { Button } from "@/components/ui/button";
import { ChevronDown, Users } from "lucide-react";
import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const HRRecruitment = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto">
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

export default HRRecruitment;