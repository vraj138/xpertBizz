// import { Target } from "lucide-react";

// const MissionStatement = () => {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
//             <Target className="h-8 w-8 text-accent" />
//           </div>
          
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
//             Our Mission
//           </h2>
          
//           <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
//             At <span className="font-semibold text-foreground">XpertBizz</span>, our mission is to empower businesses with reliable staffing and support services that enhance efficiency, productivity, and growth. We are dedicated to delivering result-driven, technology enabled solutions with integrity, expertise, and a client-first approach.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default MissionStatement;

import { Target } from "lucide-react";

const MissionStatement = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <Target className="h-8 w-8 text-accent" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Our Mission
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            At <span className="font-semibold text-foreground">XpertBizz</span>, our mission is to empower businesses with reliable staffing and support services that enhance efficiency, productivity, and growth. We are dedicated to delivering result-driven, technology-enabled solutions with integrity, expertise, and a client-first approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;