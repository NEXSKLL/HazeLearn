import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Crown,
  Shield,
  BookOpen,
  Users,
  Building,
  Eye,
  EyeOff,
  ArrowRight,
  Star,
  Check,
  Info,
  Copy,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    institutionCode: "",
    studentId: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showTestCredentials, setShowTestCredentials] = useState(true);
  const navigate = useNavigate();

  const testCredentials = [
    {
      role: "Student",
      institutionCode: "UAE-EDU-001",
      studentId: "zeriab2024",
      password: "HazeLearn@2024",
      name: "Muhammad Zeriab",
    },
    {
      role: "Teacher",
      institutionCode: "UAE-EDU-001",
      studentId: "teacher001",
      password: "HazeTeach@2024",
      name: "Dr. Sarah Ahmed",
    },
    {
      role: "Admin",
      institutionCode: "UAE-GOV-001",
      studentId: "admin001",
      password: "HazeAdmin@2024",
      name: "Mohammed Al-Rashid",
    },
  ];

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate authentication
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Check credentials and route accordingly
    const credential = testCredentials.find(
      (cred) =>
        cred.institutionCode === formData.institutionCode &&
        cred.studentId === formData.studentId &&
        cred.password === formData.password,
    );

    if (credential) {
      // Store user data for portal
      localStorage.setItem("currentUser", JSON.stringify(credential));

      if (credential.role === "Student") {
        navigate("/portal");
      } else if (credential.role === "Teacher") {
        navigate("/teacher");
      } else {
        navigate("/admin");
      }
    } else {
      alert("Invalid credentials. Please use the test credentials provided.");
    }

    setLoading(false);
  };

  const useTestCredentials = (cred: (typeof testCredentials)[0]) => {
    setFormData({
      institutionCode: cred.institutionCode,
      studentId: cred.studentId,
      password: cred.password,
    });
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const features = [
    "AI-Powered Learning Analytics",
    "Real-time Collaboration Tools",
    "Global Currency Integration",
    "Advanced Assignment Management",
    "Live Video Conferencing",
    "Automated Grading System",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Background Pattern */}
      <div
        className={
          'absolute inset-0 bg-[url(\'data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\')] opacity-50'
        }
      ></div>

      <div className="relative min-h-screen flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 p-12 flex-col justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -top-1 -right-1">
                <Crown className="w-5 h-5 text-yellow-400" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white font-['Sora']">
                HazeLearn
              </h1>
              <p className="text-sm text-purple-200">by HazerX</p>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-5xl font-bold text-white font-['Sora'] leading-tight mb-6">
                Welcome to the
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Future of Education
                </span>
              </h2>
              <p className="text-xl text-purple-100 leading-relaxed">
                Access the world's most advanced LMS platform designed for UAE's
                educational excellence and global reach.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-purple-100">{feature}</span>
                </div>
              ))}
            </div>

            {/* UAE Vision Badge */}
            <div className="text-center p-6 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-purple-500/20">
              <Badge className="mb-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-1">
                🇦🇪 UAE Vision 2050 Aligned
              </Badge>
              <p className="text-purple-200 text-sm">
                Supporting UAE's transformation into a global knowledge economy
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="flex -space-x-2">
                {["👨‍🎓", "👩‍💼", "👨‍💻", "👩‍🔬", "👨‍🏫"].map((avatar, i) => (
                  <div
                    key={i}
                    className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center border-2 border-slate-900 text-sm"
                  >
                    {avatar}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-purple-200 text-sm">
                  Trusted by 1M+ learners
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md space-y-6">
            {/* Test Credentials Alert */}
            {showTestCredentials && (
              <Alert className="bg-blue-900/50 border-blue-500/30 backdrop-blur-sm">
                <Info className="h-4 w-4 text-blue-400" />
                <AlertDescription className="text-blue-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">
                      Demo Credentials Available
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setShowTestCredentials(false)}
                      className="text-blue-300 hover:text-white p-1"
                    >
                      ×
                    </Button>
                  </div>
                  <p className="text-sm mb-3">
                    Use these test accounts for UAE government demo:
                  </p>
                  <div className="space-y-2">
                    {testCredentials.map((cred, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between text-xs bg-blue-800/30 rounded p-2"
                      >
                        <div>
                          <div className="font-medium text-blue-100">
                            {cred.role}: {cred.name}
                          </div>
                          <div className="text-blue-300">
                            {cred.studentId} / {cred.institutionCode}
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => useTestCredentials(cred)}
                          className="text-blue-300 hover:text-white text-xs px-2 py-1"
                        >
                          Use
                        </Button>
                      </div>
                    ))}
                  </div>
                </AlertDescription>
              </Alert>
            )}

            <Card className="bg-white/10 backdrop-blur-xl border-purple-500/20">
              <CardHeader className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white font-['Sora']">
                    Secure Portal Access
                  </CardTitle>
                  <CardDescription className="text-purple-200 mt-2">
                    Enter your institutional credentials to access HazeLearn
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  {/* Institution Code */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="institutionCode"
                      className="text-white flex items-center gap-2"
                    >
                      <Building className="w-4 h-4" />
                      Institution Code
                    </Label>
                    <div className="relative">
                      <Input
                        id="institutionCode"
                        placeholder="e.g., UAE-EDU-001"
                        value={formData.institutionCode}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            institutionCode: e.target.value,
                          })
                        }
                        className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-200 focus:border-purple-400"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("UAE-EDU-001")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white p-1"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Student/User ID */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="studentId"
                      className="text-white flex items-center gap-2"
                    >
                      <Users className="w-4 h-4" />
                      User ID
                    </Label>
                    <div className="relative">
                      <Input
                        id="studentId"
                        placeholder="e.g., zeriab2024"
                        value={formData.studentId}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            studentId: e.target.value,
                          })
                        }
                        className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-200 focus:border-purple-400"
                        required
                      />
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard("zeriab2024")}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white p-1"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-white flex items-center gap-2"
                    >
                      <Shield className="w-4 h-4" />
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="bg-white/10 border-purple-400/30 text-white placeholder:text-purple-200 focus:border-purple-400 pr-20"
                        required
                      />
                      <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-1">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard("HazeLearn@2024")}
                          className="text-purple-300 hover:text-white p-1"
                        >
                          <Copy className="w-3 h-3" />
                        </Button>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => setShowPassword(!showPassword)}
                          className="text-purple-300 hover:text-white p-1"
                        >
                          {showPassword ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Login Button */}
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white font-medium py-3 h-auto"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Authenticating...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-4 h-4" />
                        Access Learning Portal
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    )}
                  </Button>
                </form>

                {/* Additional Info */}
                <div className="text-center space-y-3 pt-4 border-t border-purple-400/20">
                  <p className="text-purple-200 text-sm">
                    🔒 Secured with enterprise-grade encryption
                  </p>
                  <p className="text-purple-300 text-xs">
                    For production access, contact your institution
                    administrator
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Logo */}
      <div className="lg:hidden absolute top-8 left-8">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white font-['Sora']">
              HazeLearn
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
