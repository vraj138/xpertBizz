import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Briefcase, CheckCircle } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Delivering Excellence in Staffing and Support Services
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <div className="bg-card border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <Users className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    At XpertBizz, we specialize in <strong className="text-foreground">Staffing and Expert HR Recruitment</strong>, helping businesses attract and hire the right talent efficiently. With over <strong className="text-foreground">20 years of experience</strong> across Engineering, Facility Services, and Information Technology, we have built a reputation for delivering dependable support and results.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="bg-card border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <Briefcase className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">What We Do</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Beyond staffing, we provide comprehensive support services including <strong className="text-foreground">Project Management, Helpdesk Operations, Accounting, Billing, IT Support, Managed Services, Data Entry, and Database/Application Support</strong>. Our teams ensure seamless operations, from business process analysis to database management, software delivery support, and data analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Approach */}
            <div className="bg-card border rounded-lg p-8">
              <div className="flex items-start gap-4 mb-4">
                <CheckCircle className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-semibold mb-4">Our Approach</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    We combine industry knowledge, advanced tools, and a client-first approach to deliver reliable, high-quality support that enhances productivity, drives efficiency, and fosters business growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Highlights */}
            <div className="bg-secondary/20 rounded-lg p-8">
              <h2 className="text-2xl font-semibold mb-6 text-center">Why Choose XpertBizz</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">20+</div>
                  <div className="text-muted-foreground">Years of Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-muted-foreground">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">Expert</div>
                  <div className="text-muted-foreground">Professional Teams</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;