// // Header.tsx
// import { Link, useLocation } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { Menu, X, Search, Globe, Mail, ChevronDown } from "lucide-react";
// import { useState } from "react";
// import logo from "@/assets/xpertbizz-logo.png";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
// } from "@/components/ui/navigation-menu";

// const Header = () => {
//   const location = useLocation();
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Careers", path: "/careers" },
//     { name: "Contact Us", path: "/contact" },
//   ];

//   const serviceItems = [
//     { name: "HR Recruitment", path: "/services/hr-recruitment" },
//     { name: "Result-Driven Services", path: "/services/result-driven" },
//     { name: "Digital Transformation", path: "/services/digital-transformation" },
//   ];

//   const isActive = (path: string) => location.pathname === path;

//   return (
//     <header className="sticky top-0 z-50 w-full bg-[hsl(var(--header-bg))] text-[hsl(var(--header-foreground))] shadow-md">
//       <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
//         <Link to="/" className="flex items-center">
//           <img 
//             src={logo} 
//             alt="XpertBizz - Expect Excellence" 
//             className="h-10 md:h-12 w-auto"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden lg:flex items-center space-x-1">
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className={`px-4 py-2 text-sm font-medium transition-colors hover:text-accent ${
//                 isActive(item.path)
//                   ? "text-accent"
//                   : "text-white/90"
//               }`}
//             >
//               {item.name}
//             </Link>
//           ))}

//           <NavigationMenu>
//             <NavigationMenuList>
//               <NavigationMenuItem>
//                 <NavigationMenuTrigger className="bg-transparent text-white/90 hover:text-accent hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-accent px-4 py-2 text-sm font-medium">
//                   Services
//                 </NavigationMenuTrigger>
//                 <NavigationMenuContent>
//                   <div className="w-[300px] p-2 bg-popover">
//                     {serviceItems.map((item) => (
//                       <Link
//                         key={item.path}
//                         to={item.path}
//                       >
//                         <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
//                           <div className="text-sm font-medium leading-none">{item.name}</div>
//                         </NavigationMenuLink>
//                       </Link>
//                     ))}
//                   </div>
//                 </NavigationMenuContent>
//               </NavigationMenuItem>
//             </NavigationMenuList>
//           </NavigationMenu>
//         </div>

//         {/* Desktop Actions */}
//         <div className="hidden lg:flex items-center gap-3">
//           <button className="p-2 hover:text-accent transition-colors">
//             <Globe className="h-5 w-5" />
//           </button>
//           <button className="p-2 hover:text-accent transition-colors">
//             <Search className="h-5 w-5" />
//           </button>
//           <button className="p-2 hover:text-accent transition-colors">
//             <Mail className="h-5 w-5" />
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <Button
//           variant="ghost"
//           size="icon"
//           className="lg:hidden text-white hover:text-accent hover:bg-white/10"
//           onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//         >
//           {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//         </Button>
//       </nav>

//       {/* Mobile Navigation */}
//       {mobileMenuOpen && (
//         <div className="lg:hidden border-t border-white/10 bg-[hsl(var(--header-bg))]">
//           <div className="container mx-auto px-4 py-4 space-y-2">
//             {navItems.map((item) => (
//               <Link
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setMobileMenuOpen(false)}
//                 className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${
//                   isActive(item.path)
//                     ? "text-accent bg-white/10"
//                     : "text-white/90 hover:text-accent hover:bg-white/5"
//                 }`}
//               >
//                 {item.name}
//               </Link>
//             ))}

//             <div className="px-4 py-2">
//               <div className="text-sm font-medium text-white/90 mb-2">Services</div>
//               <div className="space-y-1 pl-2">
//                 {serviceItems.map((item) => (
//                   <Link
//                     key={item.path}
//                     to={item.path}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="block px-4 py-2 rounded text-sm text-white/90 hover:text-accent hover:bg-white/5 transition-colors"
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;

import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, Search, Globe, Mail } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/xpertbizz-logo.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceItems = [
    { name: "HR Recruitment", path: "/services/hr-recruitment" },
    { name: "Result-Driven Services", path: "/services/result-driven" },
    { name: "Digital Transformation", path: "/services/digital-transformation" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-gray-800 shadow-md border-b border-gray-200">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="XpertBizz - Expect Excellence"
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-1">
          {/* Home Link */}
          <Link
            to="/"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-[hsl(var(--accent))] ${isActive("/")
                ? "text-[hsl(var(--accent))]"
                : "text-gray-700"
              }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:text-[hsl(var(--accent))] hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[hsl(var(--accent))] px-4 py-2 text-sm font-medium">
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[300px] p-2 bg-white">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.path}
                        to={item.path}
                      >
                        <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[hsl(var(--accent))]/10 hover:text-[hsl(var(--accent))] focus:bg-[hsl(var(--accent))]/10 focus:text-[hsl(var(--accent))]">
                          <div className="text-sm font-medium leading-none">{item.name}</div>
                        </NavigationMenuLink>
                      </Link>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Remaining Nav Items */}
          <Link
            to="/careers"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-[hsl(var(--accent))] ${isActive("/careers")
                ? "text-[hsl(var(--accent))]"
                : "text-gray-700"
              }`}
          >
            Careers
          </Link>
          <Link
            to="/about"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-[hsl(var(--accent))] ${isActive("/about")
                ? "text-[hsl(var(--accent))]"
                : "text-gray-700"
              }`}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className={`px-4 py-2 text-sm font-medium transition-colors hover:text-[hsl(var(--accent))] ${isActive("/contact")
                ? "text-[hsl(var(--accent))]"
                : "text-gray-700"
              }`}
          >
            Contact Us
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="mailto:info@xpertbizz.com"
            className="p-2 hover:text-[hsl(var(--accent))] transition-colors text-gray-600"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>


        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden text-gray-700 hover:text-[hsl(var(--accent))] hover:bg-gray-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-gray-200 bg-white">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {/* Home */}
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${isActive("/")
                  ? "text-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10"
                  : "text-gray-700 hover:text-[hsl(var(--accent))] hover:bg-gray-50"
                }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="px-4 py-2">
              <div className="text-sm font-medium text-gray-700 mb-2">Services</div>
              <div className="space-y-1 pl-2">
                {serviceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-2 rounded text-sm text-gray-700 hover:text-[hsl(var(--accent))] hover:bg-gray-50 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Nav Items */}
            <Link
              to="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${isActive("/careers")
                  ? "text-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10"
                  : "text-gray-700 hover:text-[hsl(var(--accent))] hover:bg-gray-50"
                }`}
            >
              Careers
            </Link>
            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${isActive("/about")
                  ? "text-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10"
                  : "text-gray-700 hover:text-[hsl(var(--accent))] hover:bg-gray-50"
                }`}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded text-sm font-medium transition-colors ${isActive("/contact")
                  ? "text-[hsl(var(--accent))] bg-[hsl(var(--accent))]/10"
                  : "text-gray-700 hover:text-[hsl(var(--accent))] hover:bg-gray-50"
                }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;