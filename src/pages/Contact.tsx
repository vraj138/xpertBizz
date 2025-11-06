import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/home/ContactForm";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-foreground mb-6 text-center">Contact Us</h1>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Get in touch with our team to discuss your project.
          </p>
        </div>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
