import Link from "next/link";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-semibold">Cerebral</h2>
          <p className="mt-2 text-gray-400">
            Delivering top-tier mental health care with a modern approach.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-white">
                FAQ
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex space-x-4 text-gray-400">
            <Link href="#" className="hover:text-white">
              <FaFacebook size={24} />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaTwitter size={24} />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaLinkedin size={24} />
            </Link>
            <Link href="#" className="hover:text-white">
              <FaInstagram size={24} />
            </Link>
          </div>
          <p className="mt-3 text-gray-400">Email: contact@Cerebral.com</p>
          <p className="text-gray-400">Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Cerebral. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
