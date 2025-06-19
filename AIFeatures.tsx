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
  Brain,
  Zap,
  Target,
  Users,
  BookOpen,
  TrendingUp,
  MessageSquare,
  Eye,
  Mic,
  Video,
  FileText,
  BarChart3,
  Crown,
  Star,
  ArrowRight,
  Home,
  Sparkles,
  Bot,
  Lightbulb,
  Cpu,
} from "lucide-react";
import { Link } from "react-router-dom";

const AIFeatures = () => {
  const aiCategories = [
    {
      title: "🧠 AI Tutoring & Learning",
      count: "15+",
      icon: Brain,
      color: "from-purple-500 to-purple-700",
      features: [
        "Personalized AI Tutor",
        "Adaptive Learning Paths",
        "Smart Content Recommendations",
        "Learning Style Analysis",
        "Progress Prediction",
      ],
    },
    {
      title: "📝 Automated Assessment",
      count: "12+",
      icon: FileText,
      color: "from-blue-500 to-blue-700",
      features: [
        "Auto-Grading System",
        "Essay Evaluation",
        "Smart Quiz Generation",
        "Plagiarism Detection",
        "Performance Analytics",
      ],
    },
    {
      title: "💬 Intelligent Communication",
      count: "8+",
      icon: MessageSquare,
      color: "from-green-500 to-green-700",
      features: [
        "AI Teaching Assistant",
        "Multilingual Support",
        "Voice-to-Text",
        "Smart Notifications",
        "Automated Feedback",
      ],
    },
    {
      title: "📊 Advanced Analytics",
      count: "10+",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Learning Analytics",
        "Engagement Tracking",
        "Behavior Analysis",
        "Risk Prediction",
        "Success Forecasting",
      ],
    },
  ];

  const showcaseFeatures = [
    {
      title: "AI-Powered Personal Tutor",
      description:
        "24/7 intelligent tutoring that adapts to your learning style and pace",
      icon: Bot,
      demo: "Ask me anything about calculus, and I'll explain it in your preferred learning style!",
      benefits: [
        "Available 24/7",
        "Personalized explanations",
        "Multi-subject support",
      ],
    },
    {
      title: "Smart Content Generation",
      description:
        "Automatically create quizzes, assignments, and study materials",
      icon: Sparkles,
      demo: "Generate a 10-question quiz on photosynthesis for grade 8 students",
      benefits: [
        "Instant content creation",
        "Curriculum-aligned",
        "Difficulty-adjusted",
      ],
    },
    {
      title: "Intelligent Grading System",
      description:
        "Automated grading with detailed feedback for all assignment types",
      icon: Target,
      demo: "This essay demonstrates good understanding but could improve on thesis clarity...",
      benefits: ["Instant feedback", "Consistent grading", "Detailed analysis"],
    },
    {
      title: "Predictive Learning Analytics",
      description: "AI predicts learning outcomes and suggests interventions",
      icon: TrendingUp,
      demo: "Sarah shows 85% probability of excelling in advanced mathematics",
      benefits: [
        "Early intervention",
        "Success prediction",
        "Personalized recommendations",
      ],
    },
  ];

  const stats = [
    { value: "40+", label: "AI Features" },
    { value: "99.8%", label: "Accuracy Rate" },
    { value: "60%", label: "Time Saved" },
    { value: "24/7", label: "Availability" },
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
              <Brain className="w-4 h-4 mr-2" />
              Powered by Advanced AI
            </Badge>

            <h1 className="text-5xl md:text-6xl font-['Sora'] font-bold text-white mb-6">
              Revolutionary
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                AI Features
              </span>
            </h1>

            <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
              Experience the future of education with our comprehensive AI
              suite. From personalized tutoring to intelligent analytics,
              discover how AI transforms learning.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-white mb-2 font-['Sora']">
                    {stat.value}
                  </div>
                  <div className="text-purple-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Categories */}
          <div className="mb-20">
            <h2 className="text-3xl font-['Sora'] font-bold text-white text-center mb-12">
              AI-Powered Feature Categories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {aiCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 group"
                  >
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-white font-['Sora'] text-lg">
                        {category.title}
                      </CardTitle>
                      <Badge variant="secondary" className="mx-auto">
                        {category.count} Features
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {category.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Zap className="w-3 h-3 text-purple-400" />
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
          </div>

          {/* Feature Showcase */}
          <div className="mb-20">
            <h2 className="text-3xl font-['Sora'] font-bold text-white text-center mb-12">
              AI Features in Action
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {showcaseFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white font-['Sora']">
                            {feature.title}
                          </CardTitle>
                          <CardDescription className="text-purple-200">
                            {feature.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                        <p className="text-purple-100 text-sm italic">
                          "{feature.demo}"
                        </p>
                      </div>
                      <div className="space-y-2">
                        {feature.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-400" />
                            <span className="text-purple-100 text-sm">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* AI Capabilities */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-4 py-2">
                <Cpu className="w-4 h-4 mr-2" />
                Advanced AI Capabilities
              </Badge>
              <h2 className="text-4xl font-['Sora'] font-bold text-white mb-4">
                What Makes Our AI Special
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Lightbulb,
                  title: "Adaptive Intelligence",
                  description:
                    "AI that learns from every interaction to provide better, more personalized experiences",
                },
                {
                  icon: Users,
                  title: "Collaborative AI",
                  description:
                    "AI assistants that work seamlessly with teachers and students to enhance learning",
                },
                {
                  icon: Crown,
                  title: "Enterprise-Grade",
                  description:
                    "Scalable AI infrastructure designed for institutions of any size worldwide",
                },
              ].map((capability, index) => {
                const Icon = capability.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-['Sora'] font-semibold text-white mb-2">
                      {capability.title}
                    </h3>
                    <p className="text-purple-200">{capability.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Technical Specs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white font-['Sora'] flex items-center gap-2">
                  <Brain className="w-5 h-5" />
                  AI Technology Stack
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Neural Language Models (GPT-4 class)",
                  "Computer Vision & Image Recognition",
                  "Natural Language Processing",
                  "Machine Learning Algorithms",
                  "Deep Learning Networks",
                  "Reinforcement Learning",
                ].map((tech, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Zap className="w-3 h-3 text-purple-400" />
                    <span className="text-purple-100 text-sm">{tech}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-white font-['Sora'] flex items-center gap-2">
                  <Eye className="w-5 h-5" />
                  AI Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "End-to-end encryption",
                  "GDPR & COPPA compliant",
                  "Local data processing options",
                  "Transparent AI decisions",
                  "Regular security audits",
                  "Student privacy protection",
                ].map((security, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Star className="w-3 h-3 text-green-400" />
                    <span className="text-purple-100 text-sm">{security}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-['Sora'] font-bold text-white mb-6">
              Ready to Experience AI-Powered Learning?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Join thousands of institutions already using our AI features to
              transform education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portal">
                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-lg px-8 py-3">
                  Try AI Features Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button
                  variant="outline"
                  className="border-purple-300 text-purple-200 hover:bg-purple-800/30 text-lg px-8 py-3"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
            <p className="text-purple-400 text-sm mt-6">
              Questions about AI features?{" "}
              <span className="text-white">contact.hazerx@gmail.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIFeatures;
