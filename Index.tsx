import { useState, useEffect } from "react";
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
import { Link } from "react-router-dom";
import {
  Zap,
  Brain,
  Trophy,
  Globe,
  Star,
  Users,
  BookOpen,
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Play,
  Crown,
  Sparkles,
  Target,
  X,
  Send,
  Bot,
} from "lucide-react";

const Index = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      role: "assistant",
      content:
        "👋 Hello! I'm HazeBot, your AI education consultant. I can help you with:\n\n• Course recommendations\n• Pricing information\n• Demo scheduling\n• Technical questions\n• Institutional setup\n\nHow can I assist you today?",
      time: "now",
      type: "welcome",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Education",
      description: "Advanced AI tutoring with 40+ intelligent features",
      stats: "99.8% accuracy",
    },
    {
      icon: Users,
      title: "Global Collaboration",
      description: "Connect learners worldwide with real-time tools",
      stats: "50+ countries",
    },
    {
      icon: Trophy,
      title: "Smart Rewards System",
      description: "Earn points convertible to local currency globally",
      stats: "1 Point = Local currency",
    },
    {
      icon: BookOpen,
      title: "Comprehensive LMS",
      description: "Complete learning management with 500+ features",
      stats: "All-in-one platform",
    },
  ];

  const stats = [
    { value: "40+", label: "AI Features", icon: Brain },
    { value: "1M+", label: "Students", icon: Users },
    { value: "50+", label: "Countries", icon: Globe },
    { value: "99.9%", label: "Uptime", icon: Zap },
  ];

  const trustedPartners = [
    "🇦🇪 UAE Ministry of Education",
    "🏫 Leading Universities",
    "🏢 Fortune 500 Companies",
    "🌍 International Schools",
  ];

  // Advanced AI Responses
  const getAIResponse = (message) => {
    const lowerMessage = message.toLowerCase();

    if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
      return "💰 **HazeLearn Pricing** (Extremely Affordable!):\n\n**Student Plan**: $2.99/month\n**Pro Plan**: $9.99/month\n**Enterprise**: $4.99/student/month\n\n🎯 Volume discounts available!\n📧 Enterprise quotes: contact.hazerx@gmail.com\n\nWould you like to see our pricing page?";
    }

    if (lowerMessage.includes("demo") || lowerMessage.includes("try")) {
      return "🚀 **Live Demo Available!**\n\nTry our platform instantly with these demo credentials:\n\n**Student Access:**\n• Institution: UAE-EDU-001\n• User ID: zeriab2024\n• Password: HazeLearn@2024\n\n[Access Portal Now](/portal)\n\nWant a personalized demo? I can schedule a call with our team!";
    }

    if (lowerMessage.includes("ai") || lowerMessage.includes("artificial")) {
      return "🧠 **Our AI Features Include:**\n\n• Personalized AI Tutor (24/7)\n• Auto-grading & feedback\n• Smart content generation\n• Learning path optimization\n• Predictive analytics\n• Multilingual support\n\n🎯 40+ AI features with 99.8% accuracy!\n\nWant to explore our AI capabilities?";
    }

    if (lowerMessage.includes("uae") || lowerMessage.includes("emirates")) {
      return "🇦🇪 **UAE Vision 2050 Aligned!**\n\n✅ Ministry of Education approved\n✅ Arabic & English support\n✅ Local currency integration (AED)\n✅ Cultural customization\n✅ Government compliance\n\n🏆 Supporting UAE's knowledge economy transformation!\n\nInterested in institutional deployment?";
    }

    if (
      lowerMessage.includes("enterprise") ||
      lowerMessage.includes("institution")
    ) {
      return "🏢 **Enterprise Solutions:**\n\n• Unlimited students & teachers\n• Custom branding & domain\n• Advanced analytics dashboard\n• API & SSO integration\n• 24/7 priority support\n• Training & onboarding\n\n📧 **Contact**: contact.hazerx@gmail.com\n🔥 **Special offer**: 30% off first year!\n\nReady to transform your institution?";
    }

    if (
      lowerMessage.includes("features") ||
      lowerMessage.includes("capabilities")
    ) {
      return "⭐ **500+ Features Across 8 Categories:**\n\n🧠 AI & Automation (40+ features)\n🎓 Student Tools (55+ features)\n👨‍🏫 Teacher Hub (55+ features)\n🏢 Admin Panel (50+ features)\n💬 Parent Portal (20+ features)\n💰 Rewards System (35+ features)\n🎮 Gamification (40+ features)\n🌍 Global Tools (25+ features)\n\nWhich category interests you most?";
    }

    if (lowerMessage.includes("support") || lowerMessage.includes("help")) {
      return "🆘 **Multiple Support Channels:**\n\n💬 **Chat**: AI + Human support 24/7\n📞 **Call**: Voice & video support\n📧 **Email**: contact.hazerx@gmail.com\n📚 **Docs**: Comprehensive guides\n🎥 **Training**: Video tutorials\n\n🚀 **Response times**:\n• Chat: Instant\n• Email: < 2 hours\n• Calls: < 15 minutes\n\nWant to schedule a call right now?";
    }

    // Default responses with variety
    const defaultResponses = [
      "I'd be happy to help! Could you tell me more about what you're looking for? I can assist with:\n\n• Pricing & plans\n• Feature demonstrations\n• Technical questions\n• Enterprise solutions\n• Demo scheduling",

      "Great question! HazeLearn offers:\n\n🎓 Complete LMS platform\n🤖 Advanced AI features\n🌍 Global accessibility\n💰 Affordable pricing\n\nWhat specific aspect would you like to explore?",

      "I'm here to help you discover how HazeLearn can transform education! Whether you're a:\n\n👨‍🎓 Student\n👨‍🏫 Teacher\n🏢 Institution\n\nI can provide tailored information. What's your role?",
    ];

    return defaultResponses[
      Math.floor(Math.random() * defaultResponses.length)
    ];
  };

  const sendMessage = () => {
    if (!chatMessage.trim()) return;

    const userMessage = chatMessage;
    setChatMessage("");

    // Add user message
    setChatMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: userMessage,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);

    // Show typing indicator
    setIsTyping(true);

    // Simulate realistic typing delay
    setTimeout(
      () => {
        setIsTyping(false);
        setChatMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: getAIResponse(userMessage),
            time: new Date().toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      },
      1500 + Math.random() * 1000,
    );
  };

  // Auto-scroll to bottom when new message is added
  useEffect(() => {
    const chatContainer = document.getElementById("chat-messages");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [chatMessages, isTyping]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 animate-gradient"></div>

      {/* Color Changing Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div
          className="absolute top-40 right-10 w-96 h-96 bg-blue-600/15 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-20 left-1/3 w-80 h-80 bg-pink-600/10 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 right-1/4 w-64 h-64 bg-indigo-600/20 rounded-full filter blur-3xl animate-pulse"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
            }}
          ></div>
        ))}
      </div>

      {/* Background Pattern */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-20'
        }
      ></div>

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <Badge className="mb-8 bg-gradient-to-r from-purple-500 to-purple-700 text-white border-0 px-6 py-2 text-sm animate-pulse">
            <Crown className="w-4 h-4 mr-2" />
            Advanced AI-Powered LMS Platform
          </Badge>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-['Sora'] font-bold text-white mb-8 leading-tight animate-fade-in-up">
            <span
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Revolutionize
            </span>{" "}
            <span
              className="inline-block animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Education
            </span>
            <span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent animate-fade-in-up bg-size-200 animate-gradient-text"
              style={{ animationDelay: "0.6s" }}
            >
              With HazeLearn AI
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-purple-100 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            From AI tutoring to global rewards — transform your institution with
            advanced AI features, intelligent automation, and world-class
            support. Experience the future of education with personalized
            learning, real-time analytics, and seamless collaboration tools
            designed for the modern classroom.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up"
            style={{ animationDelay: "1.0s" }}
          >
            <Link to="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-purple-50 text-purple-700 hover:from-purple-50 hover:to-white shadow-2xl text-lg px-12 py-4 h-auto font-semibold transform hover:scale-105 transition-all animate-bounce-subtle"
              >
                <Play className="w-5 h-5 mr-3" />
                Get Started
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
            <Link to="/portal">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-300 text-purple-200 hover:bg-purple-800/30 text-lg px-12 py-4 h-auto animate-pulse-subtle"
              >
                Live Demo
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div
            className="flex items-center justify-center space-x-6 mb-8 animate-fade-in-up"
            style={{ animationDelay: "1.2s" }}
          >
            <div className="flex -space-x-3">
              {["👨‍🎓", "👩‍💼", "👨‍💻", "👩‍🔬", "👨‍🏫"].map((avatar, i) => (
                <div
                  key={i}
                  className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center border-3 border-slate-900 text-lg animate-fade-in-scale"
                  style={{ animationDelay: `${1.4 + i * 0.1}s` }}
                >
                  {avatar}
                </div>
              ))}
            </div>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current animate-star-twinkle"
                  style={{ animationDelay: `${1.8 + i * 0.1}s` }}
                />
              ))}
              <span
                className="text-purple-200 ml-2 animate-fade-in-right"
                style={{ animationDelay: "2.3s" }}
              >
                Trusted by 1M+ learners globally
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Partners */}
      <section className="py-12 border-y border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-purple-300 text-sm mb-8">
            Trusted by Leading Educational Institutions Worldwide
          </p>
          <div className="flex items-center justify-center space-x-8 md:space-x-12 opacity-70">
            {trustedPartners.map((partner, index) => (
              <Badge
                key={index}
                variant="outline"
                className="border-purple-400 text-purple-200 px-4 py-2 text-xs md:text-sm"
              >
                {partner}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-['Sora']">
                    {stat.value}
                  </div>
                  <div className="text-purple-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Showcase */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-['Sora'] font-bold text-white mb-6 animate-fade-in-up">
              Why Choose HazeLearn?
            </h2>
            <p
              className="text-xl text-purple-200 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              The most comprehensive educational platform with cutting-edge AI
              and global reach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 font-['Sora']">
                      {feature.title}
                    </h3>
                    <p className="text-purple-200 mb-4">
                      {feature.description}
                    </p>
                    <Badge
                      variant="secondary"
                      className="bg-purple-600 text-white"
                    >
                      {feature.stats}
                    </Badge>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 animate-fade-in-scale">
              <Trophy className="w-4 h-4 mr-2" />
              Trusted Globally
            </Badge>
            <h2
              className="text-4xl md:text-5xl font-['Sora'] font-bold text-white mb-6 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              What Our Users Say
            </h2>
            <p
              className="text-xl text-purple-200 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              Join over 1 million students, teachers, and institutions worldwide
              who have transformed their educational experience with our
              AI-powered platform. From personalized learning paths to
              intelligent assessment systems, see why educators trust HazeLearn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Student Testimonial */}
            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic">
                  "HazeLearn's AI tutor helped me improve my grades by 40%. The
                  personalized learning paths and instant feedback are
                  incredible. I've earned enough points to buy my first laptop!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                    M
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Mohammed Al-Rashid
                    </div>
                    <div className="text-purple-300 text-sm">
                      Computer Science Student, UAE University
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Teacher Testimonial */}
            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic">
                  "The AI grading system saves me 10+ hours per week. My
                  students are more engaged with the gamified learning, and
                  parent involvement has increased by 60%."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                    S
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Sarah Johnson
                    </div>
                    <div className="text-purple-300 text-sm">
                      Mathematics Teacher, International School Dubai
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Institution Testimonial */}
            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic">
                  "HazeLearn transformed our institution. 95% improvement in
                  student engagement, 50% cost reduction, and seamless
                  integration with government systems. Outstanding support!"
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      Dr. Ahmed Hassan
                    </div>
                    <div className="text-purple-300 text-sm">
                      Dean of Education, Abu Dhabi University
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Parent Testimonial */}
            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic">
                  "The parent portal keeps me connected to my child's progress.
                  Real-time updates, teacher communication, and reward tracking
                  - everything I need in one place."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                    L
                  </div>
                  <div>
                    <div className="text-white font-semibold">Lisa Chen</div>
                    <div className="text-purple-300 text-sm">
                      Parent, Singapore International School
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enterprise Testimonial */}
            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic">
                  "Deployed across 50+ schools with 25,000 students. The
                  scalability, security, and government compliance features make
                  it perfect for enterprise education."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                    R
                  </div>
                  <div>
                    <div className="text-white font-semibold">Robert Smith</div>
                    <div className="text-purple-300 text-sm">
                      CTO, Education Districts Network
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Student Success Story */}
            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-purple-100 mb-6 italic">
                  "From struggling with physics to university scholarship
                  winner! HazeLearn's AI identified my learning style and
                  created a custom path. Now I mentor other students."
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                    A
                  </div>
                  <div>
                    <div className="text-white font-semibold">Aisha Patel</div>
                    <div className="text-purple-300 text-sm">
                      Physics Major, MIT (Former HazeLearn Student)
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Success Numbers */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Sora']">
                98.5%
              </div>
              <div className="text-purple-300">Student Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Sora']">
                40%
              </div>
              <div className="text-purple-300">Grade Improvement</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Sora']">
                60%
              </div>
              <div className="text-purple-300">Cost Reduction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 font-['Sora']">
                24/7
              </div>
              <div className="text-purple-300">AI Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <Badge className="mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-6 py-2 animate-fade-in-scale">
            <Sparkles className="w-4 h-4 mr-2" />
            Ready for UAE Government Demo
          </Badge>
          <h2
            className="text-4xl md:text-5xl font-['Sora'] font-bold text-white mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Transform Education Today
          </h2>
          <p
            className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Join the educational revolution with AI-powered learning, global
            rewards, and enterprise-grade platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pricing">
              <Button
                size="lg"
                className="bg-gradient-to-r from-white to-purple-50 text-purple-700 hover:from-purple-50 hover:to-white shadow-2xl text-lg px-12 py-4 h-auto font-semibold"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-3" />
              </Button>
            </Link>
            <Link to="/portal">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-300 text-purple-200 hover:bg-purple-800/30 text-lg px-12 py-4 h-auto"
              >
                Live Demo
              </Button>
            </Link>
          </div>
          <p className="text-purple-400 text-sm mt-6">
            Enterprise inquiries:{" "}
            <span className="text-white font-medium">
              contact.hazerx@gmail.com
            </span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mr-4">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-['Sora'] font-bold text-white">
              HazeLearn
            </span>
          </div>
          <p className="text-purple-300 mb-4">
            Built for the future. Available globally. Inspired by UAE Vision
            2050.
          </p>
          <p className="text-sm text-purple-400">
            © 2024 HazeLearn by HazerX. All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* Advanced Chatbot */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Chat Agent */}
        {chatOpen ? (
          <Card className="w-96 h-[500px] bg-slate-900/95 backdrop-blur-xl border-purple-500/30 flex flex-col shadow-2xl">
            <CardHeader className="pb-3 border-b border-purple-500/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-sm text-white font-['Sora']">
                      HazeBot AI Assistant
                    </CardTitle>
                    <div className="text-xs text-green-400 flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      Online • Instant responses
                    </div>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setChatOpen(false)}
                  className="text-purple-300 hover:text-white p-1"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              <div
                id="chat-messages"
                className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[340px]"
                style={{ scrollBehavior: "smooth" }}
              >
                {chatMessages.map((msg, i) => (
                  <div
                    key={i}
                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} animate-fade-in-up`}
                  >
                    <div
                      className={`max-w-[85%] p-3 rounded-lg text-sm shadow-lg ${
                        msg.role === "user"
                          ? "bg-purple-600 text-white"
                          : msg.type === "welcome"
                            ? "bg-gradient-to-r from-purple-700 to-blue-700 text-white"
                            : "bg-slate-700 text-purple-100"
                      }`}
                    >
                      <div
                        className="whitespace-pre-line"
                        dangerouslySetInnerHTML={{
                          __html: msg.content.replace(
                            /\*\*(.*?)\*\*/g,
                            "<strong>$1</strong>",
                          ),
                        }}
                      />
                      <div className="text-xs opacity-70 mt-1">{msg.time}</div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="flex justify-start animate-fade-in-up">
                    <div className="bg-slate-700 text-purple-100 p-3 rounded-lg text-sm max-w-[85%]">
                      <div className="flex items-center space-x-1">
                        <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></div>
                        <span className="ml-2 text-purple-300">
                          HazeBot is typing...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="p-4 border-t border-purple-500/20">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                    placeholder="Ask about features, pricing, demos..."
                    className="flex-1 bg-slate-800 border border-purple-500/30 rounded-lg px-3 py-2 text-sm text-white placeholder-purple-300 focus:outline-none focus:border-purple-400"
                  />
                  <Button
                    size="sm"
                    onClick={sendMessage}
                    className="bg-purple-600 hover:bg-purple-700 p-2"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-purple-400">
                  <span>Powered by HazeLearn AI</span>
                  <span>Enterprise support available</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Button
            onClick={() => setChatOpen(true)}
            className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 shadow-2xl group animate-pulse"
          >
            <MessageSquare className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Index;
