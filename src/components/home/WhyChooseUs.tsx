// import { CheckCircle } from "lucide-react";

// const WhyChooseUs = () => {
//   return (
//     <section className="py-16 md:py-24 bg-muted/30">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             Why Choose Us
//           </h2>
//           <p className="text-lg text-muted-foreground">
//             At XpertBizz, we go beyond staffing and project delivery, we build lasting partnerships that drive innovation. With deep industry expertise, we connect top talent with technology to create measurable business impact. From Engineering and IT to Finance and Administrative staffing, our scalable IT solutions empower organizations to innovate faster, scale smarter, and stay ahead in a digital world.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

const WhyChooseUs = () => {
  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            At <span className="font-semibold text-foreground">XpertBizz</span>, we go beyond staffing and project delivery, we build lasting partnerships that drive innovation. With deep industry expertise, we connect top talent with technology to create measurable business impact. From Engineering and IT to Finance and Administrative staffing, our scalable IT solutions empower organizations to innovate faster, scale smarter, and stay ahead in a digital world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;