import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/ui/navbar";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Building,
  Users,
  Globe,
  MessageSquare,
  Home,
  CheckCircle,
  Star,
  Calendar,
  Headphones,
} from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    students: "",
    message: "",
    inquiryType: "enterprise",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare email content
    const emailContent = `
Name: ${formData.name}
Email: ${formData.email}
Organization: ${formData.organization}
Number of Students: ${formData.students}
Inquiry Type: ${formData.inquiryType}

Message:
${formData.message}

---
Sent from HazeLearn Contact Form
Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}
    `.trim();

    // Create mailto link
    const subject = `HazeLearn Inquiry: ${formData.inquiryType} - ${formData.organization}`;
    const body = encodeURIComponent(emailContent);
    const mailtoLink = `mailto:contact.hazerx@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open default email client
    window.open(mailtoLink);

    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help from our expert team",
      contact: "contact.hazerx@gmail.com",
      availability: "24/7 Response",
      color: "from-blue-500 to-blue-700",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Instant support with our AI assistant",
      contact: "Available on all pages",
      availability: "Always Online",
      color: "from-purple-500 to-purple-700",
    },
    {
      icon: Calendar,
      title: "Schedule Demo",
      description: "Book a personalized demonstration",
      contact: "15-30 minute sessions",
      availability: "UAE Business Hours",
      color: "from-green-500 to-green-700",
    },
    {
      icon: Headphones,
      title: "Enterprise Support",
      description: "Dedicated support for institutions",
      contact: "Priority channel",
      availability: "Same day response",
      color: "from-orange-500 to-orange-700",
    },
  ];

  const enterpriseServices = [
    "Custom implementation planning",
    "Data migration assistance",
    "Staff training programs",
    "24/7 technical support",
    "Custom feature development",
    "Integration with existing systems",
    "Compliance and security setup",
    "Performance optimization",
  ];

  const institutions = [
    "🏫 Universities & Colleges",
    "🏢 Corporate Training Centers",
    "🎓 K-12 Schools",
    "🌍 International Schools",
    "📚 Online Education Providers",
    "🏛️ Government Training Institutes",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Home Button */}
      <div className="fixed top-20 left-4 z-40">
        <Link to="/">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 backdrop-blur-xl border-purple-500/30 text-white hover:bg-white/20 w-10 h-10 p-0"
          >
            <Home className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Background Pattern */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-30'
        }
      ></div>

      <div className="relative pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-purple-700 text-white border-0 px-6 py-2">
              <Building className="w-4 h-4 mr-2" />
              Enterprise Solutions
            </Badge>

            <h1 className="text-5xl md:text-6xl font-['Sora'] font-bold text-white mb-6">
              Get In
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>

            <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
              Ready to transform your educational institution? Our team is here
              to help you implement HazeLearn and revolutionize your learning
              experience.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 group text-center"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 font-['Sora']">
                      {method.title}
                    </h3>
                    <p className="text-purple-200 text-sm mb-3">
                      {method.description}
                    </p>
                    <div className="text-purple-300 text-sm mb-2">
                      {method.contact}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {method.availability}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white font-['Sora'] text-2xl">
                  Enterprise Inquiry
                </CardTitle>
                <CardDescription className="text-purple-200">
                  Tell us about your institution and we'll create a custom
                  solution for you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300"
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-white">
                      Institution Name *
                    </Label>
                    <Input
                      id="organization"
                      value={formData.organization}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          organization: e.target.value,
                        })
                      }
                      className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300"
                      placeholder="Your institution or organization"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="students" className="text-white">
                      Number of Students
                    </Label>
                    <select
                      id="students"
                      value={formData.students}
                      onChange={(e) =>
                        setFormData({ ...formData, students: e.target.value })
                      }
                      className="w-full bg-white/10 border border-purple-400/30 rounded-lg px-3 py-2 text-white"
                    >
                      <option value="">Select range</option>
                      <option value="1-100">1-100 students</option>
                      <option value="101-500">101-500 students</option>
                      <option value="501-1000">501-1,000 students</option>
                      <option value="1001-5000">1,001-5,000 students</option>
                      <option value="5000+">5,000+ students</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">
                      Tell us about your needs *
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-300 min-h-[120px]"
                      placeholder="Describe your requirements, timeline, and any specific questions..."
                      required
                    />
                  </div>

                  {submitted ? (
                    <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <div>
                        <p className="text-green-300 font-medium">
                          Message Sent!
                        </p>
                        <p className="text-green-400 text-sm">
                          We'll respond within 24 hours.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Send Enterprise Inquiry
                    </Button>
                  )}
                </form>
              </CardContent>
            </Card>

            {/* Enterprise Services */}
            <div className="space-y-6">
              <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white font-['Sora'] flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Enterprise Services
                  </CardTitle>
                  <CardDescription className="text-purple-200">
                    Comprehensive support for educational institutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {enterpriseServices.map((service, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-purple-100 text-sm">
                          {service}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white font-['Sora'] flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Serving All Institution Types
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {institutions.map((institution, index) => (
                      <div
                        key={index}
                        className="bg-purple-800/20 rounded-lg p-3 text-purple-100 text-sm"
                      >
                        {institution}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border-purple-500/20">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                  <h3 className="text-xl font-['Sora'] font-bold text-white mb-2">
                    Priority Support
                  </h3>
                  <p className="text-purple-200 mb-4">
                    Enterprise customers get dedicated support with guaranteed
                    response times and direct access to our technical team.
                  </p>
                  <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black">
                    🇦🇪 UAE Vision 2050 Aligned
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-['Sora'] font-bold text-white mb-6">
              Ready to Transform Education?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of institutions already using HazeLearn to deliver
              world-class education with AI-powered learning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Mail className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <p className="text-purple-200 text-sm">
                  contact.hazerx@gmail.com
                </p>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Response Time</h4>
                <p className="text-purple-200 text-sm">Within 24 hours</p>
              </div>
              <div className="text-center">
                <Globe className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                <h4 className="font-semibold text-white mb-1">Availability</h4>
                <p className="text-purple-200 text-sm">Global Support</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portal">
                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-lg px-8 py-3">
                  Try Live Demo
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-200 hover:bg-purple-800/30 text-lg px-8 py-3"
                >
                  View All Plans
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
