// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
// import { toast } from "sonner";

// interface ContactFormProps {
//   variant?: "default" | "dropdown";
//   title?: string;
//   description?: string;
//   showHeader?: boolean;
//   className?: string;
//   onSuccess?: () => void;
// }

// const ContactForm = ({ 
//   variant = "default",
//   title = "Get in Touch",
//   description = "Have a project in mind? We'd love to hear from you. Fill out the form below to get started.",
//   showHeader = true,
//   className = "",
//   onSuccess
// }: ContactFormProps) => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     contactNumber: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [errors, setErrors] = useState({
//     email: "",
//     contactNumber: "",
//   });

//   const validateEmail = (email: string) => {
//     if (!email) return "";
//     const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
//     return isValid ? "" : "Please enter a valid email address";
//   };

//   const validatePhone = (phone: string) => {
//     if (!phone) return "";
//     // Remove all non-digit characters except + at the start
//     const cleaned = phone.replace(/[^\d+]/g, '');
//     // Check if it starts with + and has 10-15 digits, or just has 10-15 digits
//     const isValid = /^\+?\d{10,15}$/.test(cleaned);
//     return isValid ? "" : "Please enter a valid phone number (10-15 digits)";
//   };

//   const handleEmailChange = (email: string) => {
//     setFormData({ ...formData, email });
//     if (email.trim()) {
//       setErrors({ ...errors, email: validateEmail(email) });
//     } else {
//       setErrors({ ...errors, email: "" });
//     }
//   };

//   const handlePhoneChange = (phone: string) => {
//     setFormData({ ...formData, contactNumber: phone });
//     if (phone.trim()) {
//       setErrors({ ...errors, contactNumber: validatePhone(phone) });
//     } else {
//       setErrors({ ...errors, contactNumber: "" });
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.fullName.trim() || !formData.email.trim() || !formData.contactNumber.trim() || !formData.message.trim()) {
//       toast.error("Please fill in all fields");
//       return;
//     }

//     // Validate on submit
//     const emailError = validateEmail(formData.email);
//     const phoneError = validatePhone(formData.contactNumber);

//     if (emailError || phoneError) {
//       setErrors({ email: emailError, contactNumber: phoneError });
//       toast.error("Please fix the errors before submitting");
//       return;
//     }

//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     toast.success("Thank you for reaching out! We'll get back to you soon.");
    
//     setFormData({ 
//       fullName: "", 
//       email: "", 
//       contactNumber: "",
//       message: "" 
//     });
//     setErrors({ email: "", contactNumber: "" });
//     setIsSubmitting(false);

//     // Call onSuccess callback if provided
//     if (onSuccess) {
//       onSuccess();
//     }
//   };

//   // Dropdown variant (compact, no section wrapper)
//   if (variant === "dropdown") {
//     return (
//       <div className={`bg-card border rounded-lg p-6 animate-in fade-in slide-in-from-top-4 ${className}`}>
//         {showHeader && (
//           <h3 className="text-2xl font-semibold mb-6">{title}</h3>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <Label htmlFor="fullName">Full Name</Label>
//             <Input
//               id="fullName"
//               type="text"
//               placeholder="Enter your full name"
//               value={formData.fullName}
//               onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//               required
//             />
//           </div>

//           <div>
//             <Label htmlFor="email">Email Address</Label>
//             <Input
//               id="email"
//               type="email"
//               placeholder="your.email@example.com"
//               value={formData.email}
//               onChange={(e) => handleEmailChange(e.target.value)}
//               className={errors.email ? "border-red-500" : ""}
//               required
//             />
//             {errors.email && (
//               <p className="text-sm text-red-500 mt-1">{errors.email}</p>
//             )}
//           </div>

//           <div>
//             <Label htmlFor="contactNumber">Contact Number</Label>
//             <Input
//               id="contactNumber"
//               type="tel"
//               placeholder="+1 (555) 123-4567"
//               value={formData.contactNumber}
//               onChange={(e) => handlePhoneChange(e.target.value)}
//               className={errors.contactNumber ? "border-red-500" : ""}
//               required
//             />
//             {errors.contactNumber && (
//               <p className="text-sm text-red-500 mt-1">{errors.contactNumber}</p>
//             )}
//           </div>

//           <div>
//             <Label htmlFor="message">Message</Label>
//             <Textarea
//               id="message"
//               placeholder="Tell us about your needs..."
//               rows={5}
//               value={formData.message}
//               onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//               required
//             />
//           </div>

//           <Button type="submit" disabled={isSubmitting}>
//             {isSubmitting ? "Sending..." : "Submit"}
//           </Button>
//         </form>
//       </div>
//     );
//   }

//   // Default variant (full section with header)
//   return (
//     <section className={`py-12 md:py-16 bg-secondary/20 ${className}`}>
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-2xl mx-auto">
//           {showHeader && (
//             <div className="text-center mb-8">
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
//                 {title}
//               </h2>
//               <p className="text-lg text-muted-foreground">
//                 {description}
//               </p>
//             </div>
//           )}

//           <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded border border-border shadow-md">
//             <div className="space-y-2">
//               <Label htmlFor="fullName">Full Name</Label>
//               <Input
//                 id="fullName"
//                 type="text"
//                 placeholder="John Doe"
//                 value={formData.fullName}
//                 onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
//                 required
//               />
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email Address</Label>
//               <Input
//                 id="email"
//                 type="email"
//                 placeholder="john@example.com"
//                 value={formData.email}
//                 onChange={(e) => handleEmailChange(e.target.value)}
//                 className={errors.email ? "border-red-500" : ""}
//                 required
//               />
//               {errors.email && (
//                 <p className="text-sm text-red-500 mt-1">{errors.email}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="contactNumber">Contact Number</Label>
//               <Input
//                 id="contactNumber"
//                 type="tel"
//                 placeholder="+1 (555) 123-4567"
//                 value={formData.contactNumber}
//                 onChange={(e) => handlePhoneChange(e.target.value)}
//                 className={errors.contactNumber ? "border-red-500" : ""}
//                 required
//               />
//               {errors.contactNumber && (
//                 <p className="text-sm text-red-500 mt-1">{errors.contactNumber}</p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="message">Your Message</Label>
//               <Textarea
//                 id="message"
//                 placeholder="Tell us about your project..."
//                 rows={6}
//                 value={formData.message}
//                 onChange={(e) => setFormData({ ...formData, message: e.target.value })}
//                 required
//               />
//             </div>

//             <Button 
//               type="submit" 
//               size="lg" 
//               className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" 
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? "Sending..." : "Send Message"}
//             </Button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactForm;

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

interface ContactFormProps {
  variant?: "default" | "dropdown";
  title?: string;
  description?: string;
  showHeader?: boolean;
  className?: string;
  formType?: string;
  onSuccess?: () => void;
}

const ContactForm = ({ 
  variant = "default",
  title = "Get in Touch",
  description = "Have a project in mind? We'd love to hear from you. Fill out the form below to get started.",
  showHeader = true,
  className = "",
  formType = "General Contact",
  onSuccess
}: ContactFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    contactNumber: "",
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.email.trim() || !formData.contactNumber.trim() || !formData.message.trim()) {
      toast.error("Please fill in all fields");
      return;
    }

    const emailError = validateEmail(formData.email);
    const phoneError = validatePhone(formData.contactNumber);

    if (emailError || phoneError) {
      setErrors({ email: emailError, contactNumber: phoneError });
      toast.error("Please fix the errors before submitting");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://www.xpertbizz.com/api/contact-form.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          formType
        }),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Thank you for reaching out! We'll get back to you soon.");
        
        setFormData({ 
          fullName: "", 
          email: "", 
          contactNumber: "",
          message: "" 
        });
        setErrors({ email: "", contactNumber: "" });

        if (onSuccess) {
          onSuccess();
        }
      } else {
        toast.error(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      toast.error("An error occurred. Please try again later.");
    }
    
    setIsSubmitting(false);
  };

  // Dropdown variant (compact, no section wrapper)
  if (variant === "dropdown") {
    return (
      <div className={`bg-card border rounded-lg p-6 animate-in fade-in slide-in-from-top-4 ${className}`}>
        {showHeader && (
          <h3 className="text-2xl font-semibold mb-6">{title}</h3>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>

          <div>
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => handleEmailChange(e.target.value)}
              className={errors.email ? "border-red-500" : ""}
              required
            />
            {errors.email && (
              <p className="text-sm text-red-500 mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <Label htmlFor="contactNumber">Contact Number</Label>
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

          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Tell us about your needs..."
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    );
  }

  // Default variant (full section with header)
  return (
    <section className={`py-12 md:py-16 bg-secondary/20 ${className}`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {showHeader && (
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {title}
              </h2>
              <p className="text-lg text-muted-foreground">
                {description}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 md:p-10 rounded border border-border shadow-md">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
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
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="john@example.com"
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
              <Label htmlFor="contactNumber">Contact Number</Label>
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

            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                placeholder="Tell us about your project..."
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold" 
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;