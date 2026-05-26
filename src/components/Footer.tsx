import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";
import logo from "@/assets/xpertbizz-logo.png";
import sdoLogo from "@/assets/SDO-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logo}
                alt="XpertBizz - Expect Excellence"
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Empowering Your Digital Transformation
            </p>
            <div className="pt-4">
              <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                Certifications & Affiliations
              </p>
              <div className="bg-white rounded-md p-2 inline-block">
                <img
                  src={sdoLogo}
                  alt="Massachusetts Supplier Diversity Office"
                  className="h-10 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy-sms-terms" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy & Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Boston, MA, USA</li>
              <li>
                <a href="mailto:info@xpertbizz.com" className="hover:text-white transition-colors">
                  info@xpertbizz.com
                </a>
              </li>
              <li>
                <a href="tel:+15086900917" className="hover:text-white transition-colors">
                  +1 (508) 690-0917
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <a
              href="https://www.linkedin.com/company/xpertbizz-solutions/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} XpertBizz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
