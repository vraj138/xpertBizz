// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
// import { useState } from "react";
// import { toast } from "sonner";

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 1000));

//     toast.success("Thank you for reaching out! We'll get back to you soon.");
//     setFormData({ fullName: "", email: "", message: "" });
//     setIsSubmitting(false);
//   };

//   return (
//     <section className="py-16 md:py-24 bg-secondary/20">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-2xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//               Get in Touch
//             </h2>
//             <p className="text-lg text-muted-foreground">
//               Have a project in mind? We'd love to hear from you. Fill out the form below to get started.
//             </p>
//           </div>

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
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                 required
//               />
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

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ fullName: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section className="py-12 md:py-16 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground">
              Have a project in mind? We'd love to hear from you. Fill out the form below to get started.
            </p>
          </div>

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
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
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