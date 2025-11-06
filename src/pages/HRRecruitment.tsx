import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ChevronDown, Users } from "lucide-react";

const HRRecruitment = () => {
  const [showForm, setShowForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

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
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HRRecruitment;
