import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { ThemeToggle } from "./ThemeProvider";
import Button from "./ui/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path ? "text-wellness-green after:w-full" : "";
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-wellness-blue dark:text-wellness-green font-bold text-xl tracking-tight">
                WELLNESS CONNECT
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`nav-link ${isActive(
                "/"
              )} dark:text-gray-200 dark:hover:text-wellness-green`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`nav-link ${isActive(
                "/about"
              )} dark:text-gray-200 dark:hover:text-wellness-green`}
            >
              About Us
            </Link>
            <Link
              to="/products"
              className={`nav-link ${isActive(
                "/products"
              )} dark:text-gray-200 dark:hover:text-wellness-green`}
            >
              Products
            </Link>
            <Link
              to="/contact"
              className={`nav-link ${isActive(
                "/contact"
              )} dark:text-gray-200 dark:hover:text-wellness-green`}
            >
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
            <ThemeToggle />
          </div>

          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800`}
      >
        <div className="pt-2 pb-4 space-y-1 px-4">
          <Link
            to="/"
            className={`block py-2 px-3 rounded-md transition-colors ${
              location.pathname === "/"
                ? "bg-wellness-lightBlue dark:bg-wellness-green/20 text-wellness-blue dark:text-wellness-green font-medium"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`block py-2 px-3 rounded-md transition-colors ${
              location.pathname === "/about"
                ? "bg-wellness-lightBlue dark:bg-wellness-green/20 text-wellness-blue dark:text-wellness-green font-medium"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            to="/products"
            className={`block py-2 px-3 rounded-md transition-colors ${
              location.pathname === "/products"
                ? "bg-wellness-lightBlue dark:bg-wellness-green/20 text-wellness-blue dark:text-wellness-green font-medium"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className={`block py-2 px-3 rounded-md transition-colors ${
              location.pathname === "/contact"
                ? "bg-wellness-lightBlue dark:bg-wellness-green/20 text-wellness-blue dark:text-wellness-green font-medium"
                : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 pt-4 pb-3 px-4">
          <div className="flex items-center justify-around">
            <Button variant="ghost" size="icon" aria-label="Search">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Cart">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" aria-label="Account">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
