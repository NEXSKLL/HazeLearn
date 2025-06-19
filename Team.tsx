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
  Crown,
  Star,
  Users,
  Linkedin,
  Twitter,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  Home,
  Zap,
  Brain,
  Target,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const founders = [
    {
      name: "Muhammad Zeriab Ali",
      position: "Founder",
      avatar: "👨‍💻",
      description:
        "Visionary leader driving HazeLearn's mission to revolutionize global education through AI-powered learning solutions.",
      achievements: [
        "🚀 Founded HazeLearn with vision for advanced AI education",
        "🎓 Educational technology innovation pioneer",
        "🌍 Leading global expansion across 50+ countries",
        "🇦🇪 UAE Vision 2050 alignment champion",
      ],
      expertise: [
        "AI & Machine Learning",
        "Educational Technology",
        "Product Strategy",
        "Global Expansion",
      ],
      gradient: "from-purple-500 to-purple-700",
      contact: {
        email: "zeriab@hazerx.org",
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Muhammad Hasaan Ali",
      position: "Co-Founder & CEO",
      avatar: "👨‍💼",
      description:
        "Strategic executive leading operations and scaling HazeLearn's revolutionary LMS platform for educational institutions worldwide.",
      achievements: [
        "📈 Scaling platform to serve 1M+ students globally",
        "🏢 Building enterprise partnerships with Fortune 500",
        "💡 Pioneering reward-based learning economics",
        "🎯 Driving 99.9% platform uptime excellence",
      ],
      expertise: [
        "Business Operations",
        "Strategic Partnerships",
        "Enterprise Sales",
        "Platform Scaling",
      ],
      gradient: "from-blue-500 to-blue-700",
      contact: {
        email: "hasaan@hazerx.org",
        linkedin: "#",
        twitter: "#",
      },
    },
  ];

  const companyStats = [
    { value: "40+", label: "AI Features", icon: Brain },
    { value: "1M+", label: "Students", icon: Users },
    { value: "50+", label: "Countries", icon: Globe },
    { value: "99.9%", label: "Uptime", icon: Zap },
  ];

  const achievements = [
    {
      title: "Educational Innovation Award",
      description: "Recognized for revolutionizing learning through AI",
      year: "2024",
      icon: Award,
    },
    {
      title: "UAE Tech Excellence",
      description: "Supporting UAE Vision 2050 educational goals",
      year: "2024",
      icon: Crown,
    },
    {
      title: "Global Education Impact",
      description: "Transforming education across 50+ countries",
      year: "2024",
      icon: Globe,
    },
    {
      title: "AI Technology Leadership",
      description: "Leading innovation in educational AI",
      year: "2024",
      icon: Brain,
    },
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
              <Users className="w-4 h-4 mr-2" />
              Meet Our Founders
            </Badge>

            <h1 className="text-5xl md:text-6xl font-['Sora'] font-bold text-white mb-6">
              Leadership
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Vision & Innovation
              </span>
            </h1>

            <p className="text-xl text-purple-100 mb-12 max-w-4xl mx-auto">
              Meet the visionary leaders behind HazeLearn, driving educational
              transformation through cutting-edge AI technology and global
              innovation.
            </p>
          </div>

          {/* Company Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2 font-['Sora']">
                    {stat.value}
                  </div>
                  <div className="text-purple-300">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Founders */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-6">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${founder.gradient} rounded-3xl flex items-center justify-center mx-auto mb-6 text-4xl group-hover:scale-110 transition-transform`}
                  >
                    {founder.avatar}
                  </div>
                  <CardTitle className="text-2xl font-['Sora'] text-white mb-2">
                    {founder.name}
                  </CardTitle>
                  <Badge
                    className={`bg-gradient-to-r ${founder.gradient} text-white border-0 px-4 py-1`}
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    {founder.position}
                  </Badge>
                </CardHeader>

                <CardContent className="space-y-6">
                  <p className="text-purple-100 text-center leading-relaxed">
                    {founder.description}
                  </p>

                  {/* Achievements */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Key Achievements:
                    </h4>
                    <div className="space-y-2">
                      {founder.achievements.map((achievement, i) => (
                        <div key={i} className="text-purple-200 text-sm">
                          {achievement}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Expertise */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Expertise:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {founder.expertise.map((skill, i) => (
                        <Badge
                          key={i}
                          variant="outline"
                          className="border-purple-400 text-purple-200"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Contact */}
                  <div className="flex justify-center space-x-4 pt-4 border-t border-purple-500/20">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-300 hover:text-white"
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-300 hover:text-white"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-purple-300 hover:text-white"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Company Achievements */}
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-3xl p-8 md:p-12 mb-16">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Company Achievements
              </Badge>
              <h2 className="text-4xl font-['Sora'] font-bold text-white mb-4">
                Recognition & Impact
              </h2>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Our commitment to educational excellence has earned recognition
                worldwide
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <Card
                    key={index}
                    className="bg-white/10 backdrop-blur-xl border-purple-500/20 text-center"
                  >
                    <CardContent className="p-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-white mb-2">
                        {achievement.title}
                      </h3>
                      <p className="text-purple-200 text-sm mb-2">
                        {achievement.description}
                      </p>
                      <Badge variant="secondary" className="text-xs">
                        {achievement.year}
                      </Badge>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="text-center">
            <h2 className="text-3xl font-['Sora'] font-bold text-white mb-6">
              Our Mission
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              To revolutionize global education through innovative AI
              technology, making world-class learning accessible to every
              student, teacher, and institution worldwide. We're building the
              future of education today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/portal">
                <Button className="bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-lg px-8 py-3">
                  Experience Our Platform
                  <Target className="w-5 h-5 ml-2" />
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
              Questions about our team?{" "}
              <span className="text-white font-medium">
                contact.hazerx@gmail.com
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
