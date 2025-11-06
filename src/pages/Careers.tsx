import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { toast } from "sonner";
import { Briefcase, Users, TrendingUp } from "lucide-react";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobInterested: "",
    contactNumber: "",
    candidateProfile: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const jobDomains = [
    "Engineering",
    "Project Management",
    "IT Support",
    "Helpdesk Operations",
    "Accounting",
    "Billing",
    "Data Entry",
    "Database Management",
    "Software Development",
    "HR Recruitment",
    "Other"
  ];

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone: string) => {
    return /^[0-9+\-\s()]{10,}$/.test(phone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.jobInterested || !formData.contactNumber.trim() || !formData.candidateProfile.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!validatePhone(formData.contactNumber)) {
      toast.error("Please enter a valid contact number");
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast.success("Application submitted successfully! We'll get back to you soon.");
    
    setFormData({
      fullName: "",
      email: "",
      jobInterested: "",
      contactNumber: "",
      candidateProfile: "",
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                We Are Hiring Across All Domains
              </h1>
              <p className="text-xl text-muted-foreground">
                Join our team and be part of something extraordinary
              </p>
            </div>
          </div>
        </section>

        {/* About Working at XpertBizz */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="prose max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At XpertBizz, we are always looking for talented and passionate professionals to join our growing team. We offer exciting career opportunities across all domains, including <strong className="text-foreground">Project Management, IT Support, Helpdesk Operations, Accounting, Billing, Data Entry, Database Management, Software Development, and HR Recruitment</strong>.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our work environment is dynamic, inclusive, and collaborative, fostering innovation and professional growth. We believe in empowering our employees with the tools, training, and mentorship they need to excel in their roles and make a meaningful impact.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Whether you are an experienced professional or a motivated fresh graduate, we provide challenging projects, skill development opportunities, and a platform to grow your career. Join us and be part of a team dedicated to delivering excellence in support services while shaping the future of businesses worldwide.
                </p>
              </div>

              {/* Why Join Us */}
              <div className="grid md:grid-cols-3 gap-6 my-12">
                <div className="bg-card border rounded-lg p-6 text-center">
                  <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
                  <p className="text-muted-foreground">
                    Continuous learning and advancement opportunities
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
                  <p className="text-muted-foreground">
                    Work with talented professionals in a supportive environment
                  </p>
                </div>
                <div className="bg-card border rounded-lg p-6 text-center">
                  <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Impactful Work</h3>
                  <p className="text-muted-foreground">
                    Make a difference in businesses worldwide
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section className="py-16 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Apply Now
                </h2>
                <p className="text-lg text-muted-foreground">
                  Take the first step towards an exciting career with XpertBizz
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded-lg border border-border shadow-md">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="John Doe"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="jobInterested">Job Interested *</Label>
                  <Select 
                    value={formData.jobInterested} 
                    onValueChange={(value) => setFormData({ ...formData, jobInterested: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a job domain" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobDomains.map((job) => (
                        <SelectItem key={job} value={job}>
                          {job}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="candidateProfile">Candidate Profile *</Label>
                  <Textarea
                    id="candidateProfile"
                    placeholder="Tell us about your experience, skills, and why you'd be a great fit for XpertBizz..."
                    rows={6}
                    value={formData.candidateProfile}
                    onChange={(e) => setFormData({ ...formData, candidateProfile: e.target.value })}
                    required
                  />
                  <p className="text-sm text-muted-foreground">
                    Include your relevant experience, skills, education, and career goals
                  </p>
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;