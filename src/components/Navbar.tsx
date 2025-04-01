import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? "text-wellness-green after:w-full" : "";
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-wellness-blue font-bold text-xl tracking-tight">
                WELLNESS CONNECT
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`nav-link ${isActive("/")}`}>
              Home
            </Link>
            <Link to="/about" className={`nav-link ${isActive("/about")}`}>
              About Us
            </Link>
            <Link
              to="/products"
              className={`nav-link ${isActive("/products")}`}
            >
              Products
            </Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact")}`}>
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button
              aria-label="Search"
              className="p-2 text-wellness-blue hover:text-wellness-green transition-colors"
            >
              <Search size={20} />
            </button>
            <button
              aria-label="Cart"
              className="p-2 text-wellness-blue hover:text-wellness-green transition-colors"
            >
              <ShoppingCart size={20} />
            </button>
            <button
              aria-label="Account"
              className="p-2 text-wellness-blue hover:text-wellness-green transition-colors"
            >
              <User size={20} />
            </button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-wellness-blue focus:outline-none"
              aria-label="Menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="pt-2 pb-4 space-y-1 px-4">
            <Link
              to="/"
              className={`block py-2 px-3 rounded-md ${
                location.pathname === "/"
                  ? "bg-wellness-lightBlue text-wellness-blue font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block py-2 px-3 rounded-md ${
                location.pathname === "/about"
                  ? "bg-wellness-lightBlue text-wellness-blue font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className={`block py-2 px-3 rounded-md ${
                location.pathname === "/products"
                  ? "bg-wellness-lightBlue text-wellness-blue font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`block py-2 px-3 rounded-md ${
                location.pathname === "/contact"
                  ? "bg-wellness-lightBlue text-wellness-blue font-medium"
                  : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
          <div className="border-t border-gray-200 pt-4 pb-3 px-4">
            <div className="flex items-center justify-around">
              <button aria-label="Search" className="p-2 text-wellness-blue">
                <Search size={20} />
              </button>
              <button aria-label="Cart" className="p-2 text-wellness-blue">
                <ShoppingCart size={20} />
              </button>
              <button aria-label="Account" className="p-2 text-wellness-blue">
                <User size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
