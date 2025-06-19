import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Users,
  Menu,
  X,
  Video,
  ChevronDown,
  Brain,
  DollarSign,
  LogIn,
  Home,
  Crown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-xl border-b border-purple-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Only */}
          <Link to="/" className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="text-white font-bold text-lg font-['Sora']">
                H
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-full"></div>
            </div>
          </Link>

          {/* Desktop Navigation - Compact */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/")
                  ? "bg-purple-600 text-white"
                  : "text-purple-200 hover:text-white hover:bg-purple-800/50"
              }`}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            {/* Demo Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium transition-all ${
                    isActive("/portal") || isActive("/ai")
                      ? "bg-purple-600 text-white"
                      : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                  }`}
                >
                  <Video className="w-4 h-4" />
                  <span>Demo</span>
                  <ChevronDown className="w-3 h-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="bg-slate-900/95 backdrop-blur-xl border-purple-500/30 text-white"
              >
                <DropdownMenuItem asChild>
                  <Link
                    to="/portal"
                    className="flex items-center space-x-2 cursor-pointer hover:bg-purple-800/50"
                  >
                    <Video className="w-4 h-4" />
                    <span>Live Demo</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/ai"
                    className="flex items-center space-x-2 cursor-pointer hover:bg-purple-800/50"
                  >
                    <Brain className="w-4 h-4" />
                    <span>AI Features</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    to="/blogs"
                    className="flex items-center space-x-2 cursor-pointer hover:bg-purple-800/50"
                  >
                    <Users className="w-4 h-4" />
                    <span>Educational Blogs</span>
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/team"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/team")
                  ? "bg-purple-600 text-white"
                  : "text-purple-200 hover:text-white hover:bg-purple-800/50"
              }`}
            >
              <Users className="w-4 h-4" />
              <span>Team</span>
            </Link>

            <Link
              to="/pricing"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/pricing")
                  ? "bg-purple-600 text-white"
                  : "text-purple-200 hover:text-white hover:bg-purple-800/50"
              }`}
            >
              <DollarSign className="w-4 h-4" />
              <span>Pricing</span>
            </Link>

            <Link
              to="/login"
              className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                isActive("/login")
                  ? "bg-purple-600 text-white"
                  : "text-purple-200 hover:text-white hover:bg-purple-800/50"
              }`}
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>

            <Link to="/pricing">
              <Button
                size="sm"
                className="bg-gradient-to-r from-white to-purple-50 text-purple-700 hover:from-purple-50 hover:to-white shadow-lg font-semibold ml-2"
              >
                Get Started
                <Crown className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-purple-200 hover:text-white"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-900/95 backdrop-blur-xl border-t border-purple-500/20">
              <Link
                to="/"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                  isActive("/")
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-5 h-5" />
                <span>Home</span>
              </Link>

              <Link
                to="/portal"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                  isActive("/portal")
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Video className="w-5 h-5" />
                <span>Live Demo</span>
              </Link>

              <Link
                to="/ai"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                  isActive("/ai")
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Brain className="w-5 h-5" />
                <span>AI Features</span>
              </Link>

              <Link
                to="/blogs"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                  isActive("/blogs")
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span>Educational Blogs</span>
              </Link>

              <Link
                to="/team"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                  isActive("/team")
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Users className="w-5 h-5" />
                <span>Team</span>
              </Link>

              <Link
                to="/pricing"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                  isActive("/pricing")
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <DollarSign className="w-5 h-5" />
                <span>Pricing</span>
              </Link>

              <Link
                to="/login"
                className={`flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all ${
                  isActive("/login")
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <LogIn className="w-5 h-5" />
                <span>Login</span>
              </Link>

              <div className="pt-4">
                <Link to="/pricing" className="block">
                  <Button
                    className="w-full bg-gradient-to-r from-white to-purple-50 text-purple-700 hover:from-purple-50 hover:to-white font-semibold"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Get Started
                    <Crown className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
