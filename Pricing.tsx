import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Navbar } from "@/components/ui/navbar";
import {
  Check,
  Crown,
  Star,
  Users,
  Building,
  Globe,
  Zap,
  Brain,
  Trophy,
  Shield,
  ArrowRight,
  Home,
} from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Student",
      description: "Perfect for individual learners",
      monthlyPrice: 2.99,
      yearlyPrice: 29.99,
      currency: "USD",
      popular: false,
      features: [
        "Access to all courses",
        "AI tutoring assistance",
        "Basic gamification",
        "Mobile app access",
        "Email support",
        "Certificate downloads",
        "Progress tracking",
        "Basic rewards system",
      ],
      cta: "Start Learning",
      color: "from-blue-500 to-blue-700",
      icon: Users,
    },
    {
      name: "Pro",
      description: "For serious learners and professionals",
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      currency: "USD",
      popular: true,
      features: [
        "Everything in Student",
        "Advanced AI features",
        "Live tutoring sessions",
        "Premium course content",
        "Priority support",
        "Advanced analytics",
        "Team collaboration",
        "Custom learning paths",
        "Offline content access",
        "Global rewards system",
      ],
      cta: "Go Pro",
      color: "from-purple-500 to-purple-700",
      icon: Star,
    },
    {
      name: "Enterprise",
      description: "For educational institutions only",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      currency: "Contact for pricing",
      popular: false,
      features: [
        "Everything in Pro",
        "Institution dashboard",
        "Bulk user management",
        "Custom branding",
        "Advanced reporting",
        "API access",
        "SSO integration",
        "24/7 phone support",
        "Training & onboarding",
        "Custom integrations",
        "Multi-language support",
        "Compliance tools",
      ],
      cta: "Contact Sales",
      color: "from-yellow-500 to-orange-500",
      icon: Building,
    },
  ];

  const regionalPricing = [
    {
      region: "🇦🇪 UAE",
      currency: "AED",
      student: { monthly: 10.99, yearly: 109.99 },
      pro: { monthly: 36.99, yearly: 369.99 },
      enterprise: { monthly: 18.39, yearly: 183.99 },
    },
    {
      region: "🇪🇺 Europe",
      currency: "EUR",
      student: { monthly: 2.79, yearly: 27.99 },
      pro: { monthly: 9.29, yearly: 92.99 },
      enterprise: { monthly: 4.63, yearly: 46.39 },
    },
    {
      region: "🇬🇧 UK",
      currency: "GBP",
      student: { monthly: 2.39, yearly: 23.99 },
      pro: { monthly: 7.99, yearly: 79.99 },
      enterprise: { monthly: 3.99, yearly: 39.99 },
    },
    {
      region: "🇮🇳 India",
      currency: "INR",
      student: { monthly: 249, yearly: 2499 },
      pro: { monthly: 829, yearly: 8299 },
      enterprise: { monthly: 413, yearly: 4139 },
    },
  ];

  const enterpriseFeatures = [
    "Unlimited students and teachers",
    "Custom domain and branding",
    "Advanced learning analytics",
    "Parent/guardian portal",
    "Integrated LMS tools",
    "API and webhook access",
    "Priority customer success",
    "Custom training programs",
    "Compliance and security tools",
    "Multi-campus management",
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
              <Crown className="w-4 h-4 mr-2" />
              Extremely Affordable Pricing
            </Badge>

            <h1 className="text-5xl md:text-6xl font-['Sora'] font-bold text-white mb-6">
              Choose Your
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Learning Plan
              </span>
            </h1>

            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              World-class education technology at prices that make sense for
              everyone, everywhere.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span
                className={`mr-3 ${!isYearly ? "text-white" : "text-purple-300"}`}
              >
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                  isYearly ? "bg-purple-600" : "bg-gray-600"
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
              <span
                className={`ml-3 ${isYearly ? "text-white" : "text-purple-300"}`}
              >
                Yearly
              </span>
              {isYearly && (
                <Badge className="ml-3 bg-green-600 text-white">Save 67%</Badge>
              )}
            </div>
          </div>

          {/* Main Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice;

              return (
                <Card
                  key={index}
                  className={`relative bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 ${
                    plan.popular
                      ? "ring-2 ring-purple-500 scale-105"
                      : "hover:scale-105"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-1">
                        <Star className="w-3 h-3 mr-1" />
                        Most Popular
                      </Badge>
                    </div>
                  )}

                  <CardHeader className="text-center pb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-['Sora'] text-white">
                      {plan.name}
                    </CardTitle>
                    <CardDescription className="text-purple-200">
                      {plan.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="text-center">
                    <div className="mb-6">
                      <div className="text-4xl font-bold text-white mb-1">
                        {plan.name === "Enterprise" ? "Custom" : `$${price}`}
                      </div>
                      <div className="text-purple-300 text-sm">
                        {plan.name === "Enterprise"
                          ? "For Educational Institutions"
                          : `${plan.currency} / ${isYearly ? "year" : "month"}`}
                      </div>
                    </div>

                    {plan.name === "Enterprise" ? (
                      <Link to="/contact">
                        <Button className="w-full mb-6 bg-white/10 hover:bg-white/20 text-white border border-purple-500/30">
                          {plan.cta}
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        className={`w-full mb-6 ${
                          plan.popular
                            ? "bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800"
                            : "bg-white/10 hover:bg-white/20 text-white border border-purple-500/30"
                        }`}
                      >
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}

                    <div className="space-y-3 text-left">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-purple-100 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Regional Pricing */}
          <div className="mb-16">
            <h2 className="text-3xl font-['Sora'] font-bold text-white text-center mb-8">
              Global Pricing by Region
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {regionalPricing.map((region, index) => (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border-purple-500/20"
                >
                  <CardHeader>
                    <CardTitle className="text-white font-['Sora'] text-lg">
                      {region.region}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-300">Student:</span>
                      <span className="text-white">
                        {region.currency}{" "}
                        {isYearly
                          ? region.student.yearly
                          : region.student.monthly}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-300">Pro:</span>
                      <span className="text-white">
                        {region.currency}{" "}
                        {isYearly ? region.pro.yearly : region.pro.monthly}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-purple-300">Enterprise:</span>
                      <span className="text-white">
                        {region.currency}{" "}
                        {isYearly
                          ? region.enterprise.yearly
                          : region.enterprise.monthly}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Enterprise Section */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2">
                <Building className="w-4 h-4 mr-2" />
                Enterprise Solution
              </Badge>
              <h2 className="text-4xl font-['Sora'] font-bold text-white mb-4">
                Transform Your Institution
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Complete LMS solution for schools, universities, and
                corporations. Scale education with AI-powered tools.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-['Sora'] font-bold text-white mb-6">
                  Enterprise Features Include:
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {enterpriseFeatures.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-purple-100 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center lg:text-right">
                <div className="mb-6">
                  <div className="text-5xl font-bold text-white mb-2">
                    Starting at $4.99
                  </div>
                  <div className="text-purple-300">per student per month</div>
                  <div className="text-sm text-purple-400 mt-2">
                    Volume discounts available
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-black hover:from-yellow-600 hover:to-orange-600 font-semibold">
                    Request Enterprise Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-purple-300 text-purple-200 hover:bg-purple-800/30"
                  >
                    Download Enterprise Guide
                  </Button>
                </div>

                <div className="mt-6 p-4 bg-white/5 rounded-xl">
                  <p className="text-purple-200 text-sm mb-2">
                    Need custom pricing?
                  </p>
                  <p className="text-white font-medium">
                    📧 contact.hazerx@gmail.com
                  </p>
                  <p className="text-purple-300 text-xs mt-1">
                    Get personalized quotes for 1000+ students
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="text-center">
            <h2 className="text-3xl font-['Sora'] font-bold text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                {
                  q: "Can I switch plans anytime?",
                  a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.",
                },
                {
                  q: "Do you offer educational discounts?",
                  a: "Yes! We offer up to 50% discounts for verified educational institutions and students.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "We accept all major credit cards, PayPal, and local payment methods by region.",
                },
                {
                  q: "Is there a free trial?",
                  a: "Yes, all plans come with a 14-day free trial. No credit card required to start.",
                },
              ].map((faq, i) => (
                <Card
                  key={i}
                  className="bg-white/5 backdrop-blur-xl border-purple-500/20 text-left"
                >
                  <CardContent className="p-6">
                    <h4 className="font-semibold text-white mb-2">{faq.q}</h4>
                    <p className="text-purple-200 text-sm">{faq.a}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <p className="text-purple-200 mb-4">
              Questions about pricing or need a custom solution?
            </p>
            <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-lg px-8 py-3">
              Contact Sales Team
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-purple-400 text-sm mt-4">
              📧 contact.hazerx@gmail.com | Available 24/7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
