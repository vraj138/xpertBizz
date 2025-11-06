// import { useState } from "react";
// import Header from "@/components/Header";
// import Footer from "@/components/Footer";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { 
//   Select, 
//   SelectContent, 
//   SelectItem, 
//   SelectTrigger, 
//   SelectValue 
// } from "@/components/ui/select";
// import { toast } from "sonner";
// import { Briefcase, Users, TrendingUp } from "lucide-react";

// const Careers = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     jobInterested: "",
//     contactNumber: "",
//     candidateProfile: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const jobDomains = [
//     "Engineering",
//     "Project Management",
//     "IT Support",
//     "Helpdesk Operations",
//     "Accounting",
//     "Billing",
//     "Data Entry",
//     "Database Management",
//     "Software Development",
//     "HR Recruitment",
//     "Other"
//   ];

//   const validateEmail = (email: string) => {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//   };

//   const validatePhone = (phone: string) => {
//     return /^[0-9+\-\s()]{10,}$/.test(phone);
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     if (!formData.fullName.trim() || !formData.email.trim() || !formData.jobInterested || !formData.contactNumber.trim() || !formData.candidateProfile.trim()) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     if (!validateEmail(formData.email)) {
//       toast.error("Please enter a valid email address");
//       return;
//     }

//     if (!validatePhone(formData.contactNumber)) {
//       toast.error("Please enter a valid contact number");
//       return;
//     }

//     setIsSubmitting(true);
    
//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000));
    
//     toast.success("Application submitted successfully! We'll get back to you soon.");
    
//     setFormData({
//       fullName: "",
//       email: "",
//       jobInterested: "",
//       contactNumber: "",
//       candidateProfile: "",
//     });
//     setIsSubmitting(false);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />
//       <main>
//         {/* Hero Section */}
//         <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto text-center">
//               <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
//                 We Are Hiring Across All Domains
//               </h1>
//               <p className="text-xl text-muted-foreground">
//                 Join our team and be part of something extraordinary
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* About Working at XpertBizz */}
//         <section className="py-16">
//           <div className="container mx-auto px-4">
//             <div className="max-w-4xl mx-auto space-y-8">
//               <div className="prose max-w-none">
//                 <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                   At XpertBizz, we are always looking for talented and passionate professionals to join our growing team. We offer exciting career opportunities across all domains, including <strong className="text-foreground">Project Management, IT Support, Helpdesk Operations, Accounting, Billing, Data Entry, Database Management, Software Development, and HR Recruitment</strong>.
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed mb-6">
//                   Our work environment is dynamic, inclusive, and collaborative, fostering innovation and professional growth. We believe in empowering our employees with the tools, training, and mentorship they need to excel in their roles and make a meaningful impact.
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   Whether you are an experienced professional or a motivated fresh graduate, we provide challenging projects, skill development opportunities, and a platform to grow your career. Join us and be part of a team dedicated to delivering excellence in support services while shaping the future of businesses worldwide.
//                 </p>
//               </div>

//               {/* Why Join Us */}
//               <div className="grid md:grid-cols-3 gap-6 my-12">
//                 <div className="bg-card border rounded-lg p-6 text-center">
//                   <Briefcase className="h-12 w-12 text-primary mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">Career Growth</h3>
//                   <p className="text-muted-foreground">
//                     Continuous learning and advancement opportunities
//                   </p>
//                 </div>
//                 <div className="bg-card border rounded-lg p-6 text-center">
//                   <Users className="h-12 w-12 text-primary mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">Collaborative Culture</h3>
//                   <p className="text-muted-foreground">
//                     Work with talented professionals in a supportive environment
//                   </p>
//                 </div>
//                 <div className="bg-card border rounded-lg p-6 text-center">
//                   <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
//                   <h3 className="text-xl font-semibold mb-2">Impactful Work</h3>
//                   <p className="text-muted-foreground">
//                     Make a difference in businesses worldwide
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Application Form */}
//         <section className="py-16 bg-secondary/20">
//           <div className="container mx-auto px-4">
//             <div className="max-w-2xl mx-auto">
//               <div className="text-center mb-12">
//                 <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
//                   Apply Now
//                 </h2>
//                 <p className="text-lg text-muted-foreground">
//                   Take the first step towards an exciting career with XpertBizz
//                 </p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded-lg border border-border shadow-md">
//                 <div className="space-y-2">
//                   <Label htmlFor="fullName">Full Name *</Label>
//                   <Input
//                     id="fullName"
//                     type="text"
//                     placeholder="John Doe"
//                     value={formData.fullName}
//                     onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="email">Email Address *</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     placeholder="john.doe@example.com"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="jobInterested">Job Interested *</Label>
//                   <Select 
//                     value={formData.jobInterested} 
//                     onValueChange={(value) => setFormData({ ...formData, jobInterested: value })}
//                   >
//                     <SelectTrigger>
//                       <SelectValue placeholder="Select a job domain" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {jobDomains.map((job) => (
//                         <SelectItem key={job} value={job}>
//                           {job}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="contactNumber">Contact Number *</Label>
//                   <Input
//                     id="contactNumber"
//                     type="tel"
//                     placeholder="+1 (555) 123-4567"
//                     value={formData.contactNumber}
//                     onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
//                     required
//                   />
//                 </div>

//                 <div className="space-y-2">
//                   <Label htmlFor="candidateProfile">Candidate Profile *</Label>
//                   <Textarea
//                     id="candidateProfile"
//                     placeholder="Tell us about your experience, skills, and why you'd be a great fit for XpertBizz..."
//                     rows={6}
//                     value={formData.candidateProfile}
//                     onChange={(e) => setFormData({ ...formData, candidateProfile: e.target.value })}
//                     required
//                   />
//                   <p className="text-sm text-muted-foreground">
//                     Include your relevant experience, skills, education, and career goals
//                   </p>
//                 </div>

//                 <Button 
//                   type="submit" 
//                   size="lg" 
//                   className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" 
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? "Submitting Application..." : "Submit Application"}
//                 </Button>
//               </form>
//             </div>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Careers;
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
import { Briefcase, Users, TrendingUp, Upload, X, FileText } from "lucide-react";

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    jobInterested: "",
    contactNumber: "",
    coverLetter: "",
  });
  const [resume, setResume] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    contactNumber: "",
    resume: "",
  });

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
    if (!email) return "";
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    return isValid ? "" : "Please enter a valid email address";
  };

  const validatePhone = (phone: string) => {
    if (!phone) return "";
    const cleaned = phone.replace(/[^\d+]/g, '');
    const isValid = /^\+?\d{10,15}$/.test(cleaned);
    return isValid ? "" : "Please enter a valid phone number (10-15 digits)";
  };

  const handleEmailChange = (email: string) => {
    setFormData({ ...formData, email });
    if (email.trim()) {
      setErrors({ ...errors, email: validateEmail(email) });
    } else {
      setErrors({ ...errors, email: "" });
    }
  };

  const handlePhoneChange = (phone: string) => {
    setFormData({ ...formData, contactNumber: phone });
    if (phone.trim()) {
      setErrors({ ...errors, contactNumber: validatePhone(phone) });
    } else {
      setErrors({ ...errors, contactNumber: "" });
    }
  };

  const handleResumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setErrors({ ...errors, resume: "Please upload a PDF or Word document" });
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors({ ...errors, resume: "File size must be less than 5MB" });
        return;
      }

      setResume(file);
      setErrors({ ...errors, resume: "" });
    }
  };

  const removeResume = () => {
    setResume(null);
    setErrors({ ...errors, resume: "" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName.trim() || !formData.email.trim() || !formData.jobInterested || !formData.contactNumber.trim() || !formData.coverLetter.trim()) {
      toast.error("Please fill in all required fields");
      return;
    }

    if (!resume) {
      setErrors({ ...errors, resume: "Please upload your resume" });
      toast.error("Please upload your resume");
      return;
    }

    // Validate on submit
    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.contactNumber);

    if (emailError || phoneError) {
      setErrors({ ...errors, email: emailError, contactNumber: phoneError });
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);
    
    // Create FormData for file upload
    const submitData = new FormData();
    submitData.append('fullName', formData.fullName);
    submitData.append('email', formData.email);
    submitData.append('jobInterested', formData.jobInterested);
    submitData.append('contactNumber', formData.contactNumber);
    submitData.append('coverLetter', formData.coverLetter);
    submitData.append('resume', resume);

    try {
      // Send to your backend API
      const response = await fetch('https://www.xpertbizz.com/api/career-application.php', {
        method: 'POST',
        body: submitData,
      });

      if (response.ok) {
        toast.success("Application submitted successfully! We'll get back to you soon.");
        
        setFormData({
          fullName: "",
          email: "",
          jobInterested: "",
          contactNumber: "",
          coverLetter: "",
        });
        setResume(null);
        setErrors({ email: "", contactNumber: "", resume: "" });
      } else {
        toast.error("Failed to submit application. Please try again.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("An error occurred. Please try again later.");
    }
    
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
                    onChange={(e) => handleEmailChange(e.target.value)}
                    className={errors.email ? "border-red-500" : ""}
                    required
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                  )}
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
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    className={errors.contactNumber ? "border-red-500" : ""}
                    required
                  />
                  {errors.contactNumber && (
                    <p className="text-sm text-red-500 mt-1">{errors.contactNumber}</p>
                  )}
                </div>

                {/* Resume Upload */}
                <div className="space-y-2">
                  <Label htmlFor="resume">Resume/CV *</Label>
                  {!resume ? (
                    <div className="relative">
                      <input
                        id="resume"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleResumeChange}
                        className="hidden"
                      />
                      <Label
                        htmlFor="resume"
                        className={`flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50 transition-colors ${
                          errors.resume ? "border-red-500" : "border-border"
                        }`}
                      >
                        <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground mb-1">
                          Click to upload resume
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF or Word (Max 5MB)
                        </p>
                      </Label>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-4 border rounded-lg bg-muted/50">
                      <div className="flex items-center gap-3">
                        <FileText className="h-8 w-8 text-primary" />
                        <div>
                          <p className="font-medium text-sm">{resume.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {(resume.size / 1024).toFixed(1)} KB
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={removeResume}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                  {errors.resume && (
                    <p className="text-sm text-red-500 mt-1">{errors.resume}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Cover Letter *</Label>
                  <Textarea
                    id="coverLetter"
                    placeholder="Tell us about your experience, skills, and why you'd be a great fit for XpertBizz..."
                    rows={6}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
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