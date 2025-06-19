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
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Trophy,
  Star,
  Target,
  BookOpen,
  Clock,
  TrendingUp,
  Award,
  Coins,
  Zap,
  Flame,
  Crown,
  Users,
  CheckCircle,
  Calendar,
  BarChart3,
  Gamepad2,
  Gift,
  Brain,
  Globe,
  MessageSquare,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  ChevronRight,
  Play,
  Download,
  Share,
  Search,
  Filter,
  Video,
  FileText,
  Upload,
  Paperclip,
  Send,
  Eye,
  Plus,
  MoreVertical,
  ThumbsUp,
  MessageCircle,
  UserPlus,
  Mic,
  Camera,
  Screen,
  Phone,
  Home,
  ChevronDown,
  Folder,
  PlusCircle,
  Archive,
  Edit,
  MicOff,
  VideoOff,
  PhoneCall,
  Monitor,
  Volume2,
  Maximize,
  Minimize,
  Hand,
  Grid3X3,
  Users2,
  Pin,
  ScreenShare,
} from "lucide-react";
import { Link } from "react-router-dom";

const Portal = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [currentUser, setCurrentUser] = useState(null);
  const [inMeeting, setInMeeting] = useState(false);
  const [meetingData, setMeetingData] = useState(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);

  useEffect(() => {
    // Check for demo credentials and auto-login
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setCurrentUser(JSON.parse(userData));
    } else {
      // Auto-login with demo credentials for live demo
      const demoUser = {
        name: "Muhammad Zeriab Ali",
        role: "Student",
        id: "zeriab2024",
        institution: "UAE-EDU-001",
        avatar: "👨‍🎓",
        isDemo: true,
      };
      setCurrentUser(demoUser);
      localStorage.setItem("currentUser", JSON.stringify(demoUser));
    }
  }, []);

  // Enhanced user data
  const studentData = {
    name: currentUser?.name || "Muhammad Zeriab",
    avatar: "👨‍💻",
    studentId: currentUser?.studentId || "zeriab2024",
    institution: "Al Ain University",
    level: 15,
    xp: 3750,
    xpToNext: 4000,
    points: 1250,
    aedValue: (1250 * 0.025).toFixed(2),
    streak: 12,
    rank: 8,
    totalStudents: 2840,
    joinDate: "September 2024",
    country: "UAE",
    currency: "AED",
    timezone: "GMT+4",
    lastActive: "2 minutes ago",
  };

  // Enhanced schedule with live meeting capabilities
  const todaySchedule = [
    {
      id: 1,
      time: "09:00 - 10:30",
      title: "Advanced Machine Learning",
      type: "live",
      instructor: "Dr. Sarah Ahmed",
      room: "Virtual Room A",
      participants: 45,
      status: "live",
      meetingId: "ml-class-001",
      hasRecording: true,
      materials: ["Lecture_ML_Ch5.pdf", "Code_Examples.zip"],
      description: "Deep Learning and Neural Networks",
    },
    {
      id: 2,
      time: "11:00 - 13:00",
      title: "Computer Science Lab",
      type: "hands-on",
      instructor: "Prof. Hassan Ali",
      room: "Lab 204",
      participants: 20,
      status: "starting-soon",
      meetingId: "cs-lab-001",
      hasRecording: false,
      materials: ["Lab_Instructions.pdf"],
      description: "Data Structures Implementation",
    },
    {
      id: 3,
      time: "14:00 - 17:00",
      title: "Business Intelligence Workshop",
      type: "workshop",
      instructor: "Dr. Fatima Al-Zahra",
      room: "Virtual Room B",
      participants: 30,
      status: "upcoming",
      meetingId: "bi-workshop-001",
      hasRecording: true,
      materials: ["Workshop_Guide.pdf", "Dataset.xlsx"],
      description: "Advanced Analytics and Visualization",
    },
  ];

  // Class posts and announcements
  const classPosts = [
    {
      id: 1,
      class: "Advanced Machine Learning",
      instructor: "Dr. Sarah Ahmed",
      type: "announcement",
      title: "Assignment 3 Due Date Extended",
      content:
        "Due to the complexity of the neural network implementation, I'm extending the deadline by 3 days. New due date: December 30th.",
      timestamp: "2 hours ago",
      likes: 15,
      comments: 3,
      files: [],
    },
    {
      id: 2,
      class: "Computer Science Lab",
      instructor: "Prof. Hassan Ali",
      type: "material",
      title: "New Lab Resources Available",
      content:
        "I've uploaded additional practice problems for data structures. Make sure to complete them before next week's quiz.",
      timestamp: "5 hours ago",
      likes: 8,
      comments: 1,
      files: ["practice_problems.zip", "solutions_guide.pdf"],
    },
    {
      id: 3,
      class: "Business Intelligence",
      instructor: "Dr. Fatima Al-Zahra",
      type: "discussion",
      title: "Industry Case Study Discussion",
      content:
        "Let's discuss the Netflix recommendation system case study. What machine learning techniques do you think they use?",
      timestamp: "Yesterday",
      likes: 22,
      comments: 12,
      files: ["netflix_case_study.pdf"],
    },
  ];

  // Different class options and activities
  const classActivities = [
    {
      class: "Advanced Machine Learning",
      activities: [
        { type: "Live Lecture", status: "now", participants: 45 },
        { type: "Assignment", status: "due-soon", dueDate: "Dec 30" },
        { type: "Quiz", status: "upcoming", date: "Jan 5" },
        { type: "Project", status: "in-progress", progress: 78 },
      ],
    },
    {
      class: "Computer Science Lab",
      activities: [
        { type: "Lab Session", status: "starting-soon", participants: 20 },
        { type: "Coding Challenge", status: "active", participants: 15 },
        { type: "Peer Review", status: "pending", count: 3 },
      ],
    },
    {
      class: "Business Intelligence",
      activities: [
        { type: "Workshop", status: "upcoming", participants: 30 },
        { type: "Case Study", status: "discussion", comments: 12 },
        { type: "Report", status: "submitted", grade: "A-" },
      ],
    },
  ];

  // Meeting participants for live sessions
  const meetingParticipants = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      role: "Instructor",
      avatar: "👩‍🏫",
      isSpeaking: true,
      isMuted: false,
    },
    {
      id: 2,
      name: "Muhammad Zeriab",
      role: "Student",
      avatar: "👨‍💻",
      isSpeaking: false,
      isMuted: false,
    },
    {
      id: 3,
      name: "Ahmed Hassan",
      role: "Student",
      avatar: "👨‍🎓",
      isSpeaking: false,
      isMuted: true,
    },
    {
      id: 4,
      name: "Sarah Ali",
      role: "Student",
      avatar: "👩‍🎓",
      isSpeaking: false,
      isMuted: false,
    },
    {
      id: 5,
      name: "Omar Abdullah",
      role: "Student",
      avatar: "👨‍💼",
      isSpeaking: false,
      isMuted: true,
    },
    {
      id: 6,
      name: "Fatima Khan",
      role: "Student",
      avatar: "👩‍💻",
      isSpeaking: false,
      isMuted: false,
    },
  ];

  // Sidebar navigation
  const sidebarSections = [
    {
      title: "Main",
      items: [
        { id: "dashboard", icon: BarChart3, label: "Dashboard", badge: null },
        { id: "classes", icon: Video, label: "Live Classes", badge: "1" },
        { id: "assignments", icon: FileText, label: "Assignments", badge: "2" },
        { id: "calendar", icon: Calendar, label: "Calendar", badge: "3" },
      ],
    },
    {
      title: "Collaboration",
      items: [
        { id: "posts", icon: MessageSquare, label: "Class Posts", badge: "5" },
        { id: "teams", icon: Users, label: "Study Groups", badge: "3" },
        { id: "files", icon: Upload, label: "Files", badge: null },
        { id: "chat", icon: MessageCircle, label: "Messages", badge: "2" },
      ],
    },
    {
      title: "Learning",
      items: [
        { id: "courses", icon: BookOpen, label: "My Courses", badge: null },
        { id: "ai-tutor", icon: Brain, label: "AI Tutor", badge: null },
        { id: "grades", icon: Trophy, label: "Grades", badge: null },
        { id: "rewards", icon: Coins, label: "Rewards", badge: null },
      ],
    },
  ];

  const joinMeeting = (classItem) => {
    setMeetingData(classItem);
    setInMeeting(true);
  };

  const leaveMeeting = () => {
    setInMeeting(false);
    setMeetingData(null);
    setIsMuted(false);
    setIsVideoOff(false);
    setIsScreenSharing(false);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    console.log(`Microphone ${!isMuted ? "muted" : "unmuted"}`);
  };

  const toggleVideo = () => {
    setIsVideoOff(!isVideoOff);
    console.log(`Camera ${!isVideoOff ? "turned off" : "turned on"}`);
  };

  const toggleScreenShare = () => {
    setIsScreenSharing(!isScreenSharing);
    console.log(`Screen sharing ${!isScreenSharing ? "started" : "stopped"}`);
  };

  // Meeting Room Component
  const MeetingRoom = () => (
    <div className="fixed inset-0 z-50 bg-slate-900">
      {/* Meeting Header */}
      <div className="bg-slate-800 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
          <h2 className="text-white font-semibold">{meetingData?.title}</h2>
          <Badge variant="secondary" className="bg-green-600 text-white">
            Live
          </Badge>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-purple-300 text-sm">
            {meetingParticipants.length} participants
          </span>
          <Button
            variant="ghost"
            size="sm"
            onClick={leaveMeeting}
            className="text-red-400 hover:text-red-300"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Main Meeting Area */}
      <div className="flex h-[calc(100vh-80px)]">
        {/* Video Grid */}
        <div className="flex-1 p-4">
          <div className="h-full bg-slate-800 rounded-lg relative overflow-hidden">
            {/* Main Speaker View */}
            <div className="absolute inset-4 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center text-4xl mb-4 mx-auto">
                  👩‍🏫
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  Dr. Sarah Ahmed
                </h3>
                <p className="text-purple-200">
                  Sharing screen: Neural Networks Slides
                </p>
                <Badge className="mt-2 bg-red-600 text-white">
                  <Mic className="w-3 h-3 mr-1" />
                  Speaking
                </Badge>
              </div>
            </div>

            {/* Participant Thumbnails */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              {meetingParticipants.slice(1, 4).map((participant) => (
                <div
                  key={participant.id}
                  className="w-20 h-20 bg-slate-700 rounded-lg flex items-center justify-center relative"
                >
                  <span className="text-2xl">{participant.avatar}</span>
                  {participant.isMuted && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-red-600 rounded-full flex items-center justify-center">
                      <MicOff className="w-3 h-3 text-white" />
                    </div>
                  )}
                </div>
              ))}
              <Button
                variant="ghost"
                size="sm"
                className="w-20 h-20 bg-slate-700 text-white hover:bg-slate-600"
              >
                <Grid3X3 className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-slate-800 border-l border-slate-700">
          <Tabs defaultValue="participants" className="h-full">
            <TabsList className="w-full bg-slate-700">
              <TabsTrigger value="participants" className="flex-1">
                <Users className="w-4 h-4 mr-2" />
                Participants
              </TabsTrigger>
              <TabsTrigger value="chat" className="flex-1">
                <MessageSquare className="w-4 h-4 mr-2" />
                Chat
              </TabsTrigger>
            </TabsList>

            <TabsContent value="participants" className="p-4 space-y-3">
              {meetingParticipants.map((participant) => (
                <div
                  key={participant.id}
                  className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-700"
                >
                  <div className="relative">
                    <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-lg">
                      {participant.avatar}
                    </div>
                    {participant.isSpeaking && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">{participant.name}</p>
                    <p className="text-purple-300 text-xs">
                      {participant.role}
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    {participant.isMuted ? (
                      <MicOff className="w-4 h-4 text-red-400" />
                    ) : (
                      <Mic className="w-4 h-4 text-green-400" />
                    )}
                  </div>
                </div>
              ))}
            </TabsContent>

            <TabsContent value="chat" className="p-4">
              <div className="space-y-3 mb-4">
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-purple-300 text-xs mb-1">
                    Dr. Sarah Ahmed
                  </p>
                  <p className="text-white text-sm">
                    Welcome everyone! Today we'll cover neural networks in
                    detail.
                  </p>
                </div>
                <div className="bg-slate-700 rounded-lg p-3">
                  <p className="text-purple-300 text-xs mb-1">Ahmed Hassan</p>
                  <p className="text-white text-sm">
                    Thanks! Excited to learn about CNNs.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm"
                />
                <Button size="sm" className="bg-purple-600 hover:bg-purple-700">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Meeting Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-slate-800 rounded-full p-3">
        <Button
          variant={isMuted ? "destructive" : "secondary"}
          size="sm"
          onClick={toggleMute}
          className="rounded-full w-12 h-12"
        >
          {isMuted ? (
            <MicOff className="w-5 h-5" />
          ) : (
            <Mic className="w-5 h-5" />
          )}
        </Button>
        <Button
          variant={isVideoOff ? "destructive" : "secondary"}
          size="sm"
          onClick={toggleVideo}
          className="rounded-full w-12 h-12"
        >
          {isVideoOff ? (
            <VideoOff className="w-5 h-5" />
          ) : (
            <Camera className="w-5 h-5" />
          )}
        </Button>
        <Button
          variant={isScreenSharing ? "default" : "secondary"}
          size="sm"
          onClick={toggleScreenShare}
          className="rounded-full w-12 h-12"
        >
          <ScreenShare className="w-5 h-5" />
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="rounded-full w-12 h-12"
        >
          <Hand className="w-5 h-5" />
        </Button>
        <Button
          variant="destructive"
          size="sm"
          onClick={leaveMeeting}
          className="rounded-full w-12 h-12"
        >
          <Phone className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );

  if (inMeeting) {
    return <MeetingRoom />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Home Button */}
      <div className="fixed top-4 left-4 z-50">
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

      {/* Enhanced Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-80 bg-slate-900/95 backdrop-blur-xl border-r border-purple-500/30 transform transition-transform duration-300 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="p-6 border-b border-purple-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center relative overflow-hidden shadow-lg">
                <div className="text-white font-bold text-lg font-['Sora'] drop-shadow-none">
                  H
                </div>
                <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-full"></div>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white font-['Sora'] drop-shadow-none">
                HazeLearn
              </h1>
              <p className="text-xs text-purple-200">LMS Portal</p>
            </div>
          </div>

          {/* Student Profile Card */}
          <div className="bg-white/5 rounded-xl p-4 animate-fade-in-scale">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-xl animate-bounce-subtle">
                {currentUser?.avatar || "👤"}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate drop-shadow-none">
                  {currentUser?.name || "Demo User"}
                </h3>
                <p className="text-sm text-purple-200 truncate">
                  {studentData.studentId}
                </p>
                <div className="flex items-center gap-2 mt-1">
                  <Badge variant="secondary" className="text-xs px-2 py-0">
                    🇦🇪 {studentData.country}
                  </Badge>
                  <Badge variant="secondary" className="text-xs px-2 py-0">
                    Level {studentData.level}
                  </Badge>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="text-purple-300">
                  Progress to Level {studentData.level + 1}
                </span>
                <span className="text-purple-300">{studentData.xp} XP</span>
              </div>
              <Progress
                value={(studentData.xp / studentData.xpToNext) * 100}
                className="bg-purple-800"
              />
              <div className="text-xs text-purple-400 text-center">
                {studentData.xpToNext - studentData.xp} XP to next level
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Sections */}
        <div className="flex-1 overflow-y-auto p-4">
          {sidebarSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-6">
              <h4 className="text-xs font-semibold text-purple-400 uppercase tracking-wider mb-3">
                {section.title}
              </h4>
              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Button
                      key={item.id}
                      variant={activeTab === item.id ? "secondary" : "ghost"}
                      className={`w-full justify-between text-left h-auto py-3 ${
                        activeTab === item.id
                          ? "bg-purple-600 text-white"
                          : "text-purple-300 hover:text-white hover:bg-purple-800/50"
                      }`}
                      onClick={() => setActiveTab(item.id)}
                    >
                      <div className="flex items-center">
                        <Icon className="w-4 h-4 mr-3" />
                        <span>{item.label}</span>
                      </div>
                      {item.badge && (
                        <Badge
                          variant="secondary"
                          className="bg-red-600 text-white text-xs"
                        >
                          {item.badge}
                        </Badge>
                      )}
                    </Button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-purple-500/20">
          <div className="space-y-2">
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-start text-purple-300 hover:text-white hover:bg-purple-800/50"
            >
              <Settings className="w-4 h-4 mr-3" />
              Settings
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                localStorage.removeItem("currentUser");
                window.location.href = "/";
              }}
              className="w-full justify-start text-red-400 hover:text-red-300 hover:bg-red-900/20"
            >
              <LogOut className="w-4 h-4 mr-3" />
              Logout
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-80">
        {/* Enhanced Top Header */}
        <header className="bg-slate-900/80 backdrop-blur-xl border-b border-purple-500/20 p-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-white"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>

              <div>
                <h2 className="text-xl font-bold text-white font-['Sora']">
                  Good morning, {studentData.name.split(" ")[0]}! 🌅
                </h2>
                <p className="text-purple-300">
                  {new Date().toLocaleDateString("en-AE", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    timeZone: "Asia/Dubai",
                  })}{" "}
                  • {studentData.timezone}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses, assignments..."
                  className="bg-white/10 border border-purple-500/30 rounded-lg px-4 py-2 pl-10 text-sm text-white placeholder-purple-300 focus:outline-none focus:border-purple-400 w-64"
                />
                <Search className="w-4 h-4 text-purple-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-purple-300 hover:text-white relative"
              >
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </Button>

              <Button
                variant="ghost"
                size="sm"
                className="text-purple-300 hover:text-white"
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Live Classes Tab */}
          {activeTab === "classes" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-white font-['Sora']">
                  Live Classes
                </h1>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <Plus className="w-4 h-4 mr-2" />
                  Join with ID
                </Button>
              </div>

              {/* Live Classes Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                {todaySchedule.map((classItem) => (
                  <Card
                    key={classItem.id}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                            <Video className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-white text-lg">
                              {classItem.title}
                            </CardTitle>
                            <p className="text-purple-300 text-sm">
                              {classItem.instructor}
                            </p>
                          </div>
                        </div>
                        <Badge
                          variant={
                            classItem.status === "live"
                              ? "destructive"
                              : classItem.status === "starting-soon"
                                ? "default"
                                : "secondary"
                          }
                          className={
                            classItem.status === "live"
                              ? "bg-red-600 animate-pulse"
                              : classItem.status === "starting-soon"
                                ? "bg-green-600"
                                : ""
                          }
                        >
                          {classItem.status === "live"
                            ? "🔴 Live"
                            : classItem.status === "starting-soon"
                              ? "Starting Soon"
                              : "Upcoming"}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-purple-200 text-sm mb-4">
                        {classItem.description}
                      </p>

                      <div className="space-y-3 mb-4">
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                          <Clock className="w-4 h-4" />
                          <span>{classItem.time}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                          <Users className="w-4 h-4" />
                          <span>{classItem.participants} participants</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                          <Globe className="w-4 h-4" />
                          <span>{classItem.room}</span>
                        </div>
                      </div>

                      {classItem.materials.length > 0 && (
                        <div className="mb-4">
                          <p className="text-purple-300 text-sm mb-2">
                            Materials:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {classItem.materials.map((material, i) => (
                              <Badge
                                key={i}
                                variant="outline"
                                className="text-xs"
                              >
                                📎 {material}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex gap-2">
                        <Button
                          onClick={() => joinMeeting(classItem)}
                          className={`flex-1 ${
                            classItem.status === "live"
                              ? "bg-red-600 hover:bg-red-700"
                              : classItem.status === "starting-soon"
                                ? "bg-green-600 hover:bg-green-700"
                                : "bg-purple-600 hover:bg-purple-700"
                          }`}
                        >
                          {classItem.status === "live" ? (
                            <>
                              <Play className="w-4 h-4 mr-2" />
                              Join Live
                            </>
                          ) : classItem.status === "starting-soon" ? (
                            <>
                              <Video className="w-4 h-4 mr-2" />
                              Join Soon
                            </>
                          ) : (
                            <>
                              <Calendar className="w-4 h-4 mr-2" />
                              Set Reminder
                            </>
                          )}
                        </Button>
                        <Button variant="outline" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Class Posts Tab */}
          {activeTab === "posts" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold text-white font-['Sora']">
                  Class Posts
                </h1>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    New Post
                  </Button>
                </div>
              </div>

              {/* Posts Feed */}
              <div className="space-y-4">
                {classPosts.map((post) => (
                  <Card
                    key={post.id}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          👩‍🏫
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-semibold text-white">
                              {post.instructor}
                            </h3>
                            <Badge variant="outline" className="text-xs">
                              {post.type}
                            </Badge>
                          </div>
                          <p className="text-purple-300 text-sm">
                            {post.class} • {post.timestamp}
                          </p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <h4 className="text-white font-medium mb-2">
                        {post.title}
                      </h4>
                      <p className="text-purple-200 mb-4">{post.content}</p>

                      {post.files.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {post.files.map((file, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-2 bg-purple-800/30 rounded-lg p-2"
                              >
                                <FileText className="w-4 h-4 text-purple-400" />
                                <span className="text-purple-200 text-sm">
                                  {file}
                                </span>
                                <Button
                                  variant="ghost"
                                  size="sm"
                                  className="h-6 w-6 p-0"
                                >
                                  <Download className="w-3 h-3" />
                                </Button>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 border-t border-purple-500/20">
                        <div className="flex items-center gap-4">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-purple-300 hover:text-white"
                          >
                            <ThumbsUp className="w-4 h-4 mr-1" />
                            {post.likes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-purple-300 hover:text-white"
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            {post.comments}
                          </Button>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-300 hover:text-white"
                        >
                          <Share className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Dashboard Tab - Default */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              {/* Quick Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-0 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-blue-100 text-sm">Live Classes</p>
                        <p className="text-2xl font-bold">1</p>
                        <p className="text-xs text-blue-200 mt-1">
                          ML starting now
                        </p>
                      </div>
                      <Video className="w-8 h-8 text-blue-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-green-600 to-green-700 border-0 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-green-100 text-sm">Active Tasks</p>
                        <p className="text-2xl font-bold">4</p>
                        <p className="text-xs text-green-200 mt-1">
                          2 due soon
                        </p>
                      </div>
                      <FileText className="w-8 h-8 text-green-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-0 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-purple-100 text-sm">New Posts</p>
                        <p className="text-2xl font-bold">5</p>
                        <p className="text-xs text-purple-200 mt-1">
                          3 announcements
                        </p>
                      </div>
                      <MessageSquare className="w-8 h-8 text-purple-200" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-to-br from-yellow-600 to-orange-600 border-0 text-white">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-yellow-100 text-sm">Rewards (AED)</p>
                        <p className="text-2xl font-bold">
                          {studentData.aedValue}
                        </p>
                        <p className="text-xs text-yellow-200 mt-1">
                          {studentData.points} points
                        </p>
                      </div>
                      <Coins className="w-8 h-8 text-yellow-200" />
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Class Activities Overview */}
              <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white font-['Sora']">
                    Today's Class Activities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {classActivities.map((classData, index) => (
                      <div
                        key={index}
                        className="border-b border-purple-500/20 pb-4 last:border-b-0"
                      >
                        <h3 className="text-white font-semibold mb-3">
                          {classData.class}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                          {classData.activities.map((activity, i) => (
                            <div
                              key={i}
                              className="bg-slate-700/30 rounded-lg p-3 text-center"
                            >
                              <p className="text-purple-300 text-sm mb-1">
                                {activity.type}
                              </p>
                              <Badge
                                variant={
                                  activity.status === "now" ||
                                  activity.status === "live"
                                    ? "destructive"
                                    : activity.status === "starting-soon"
                                      ? "default"
                                      : "secondary"
                                }
                                className="mb-2"
                              >
                                {activity.status}
                              </Badge>
                              {activity.participants && (
                                <p className="text-purple-400 text-xs">
                                  {activity.participants} participants
                                </p>
                              )}
                              {activity.progress && (
                                <p className="text-purple-400 text-xs">
                                  {activity.progress}% complete
                                </p>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Other tabs - placeholder content */}
          {!["dashboard", "classes", "posts"].includes(activeTab) && (
            <div className="text-center py-20">
              <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {activeTab === "assignments" && (
                  <FileText className="w-8 h-8 text-white" />
                )}
                {activeTab === "teams" && (
                  <Users className="w-8 h-8 text-white" />
                )}
                {activeTab === "ai-tutor" && (
                  <Brain className="w-8 h-8 text-white" />
                )}
                {activeTab === "calendar" && (
                  <Calendar className="w-8 h-8 text-white" />
                )}
                {activeTab === "files" && (
                  <Upload className="w-8 h-8 text-white" />
                )}
                {activeTab === "chat" && (
                  <MessageCircle className="w-8 h-8 text-white" />
                )}
                {activeTab === "courses" && (
                  <BookOpen className="w-8 h-8 text-white" />
                )}
                {activeTab === "grades" && (
                  <Trophy className="w-8 h-8 text-white" />
                )}
                {activeTab === "rewards" && (
                  <Coins className="w-8 h-8 text-white" />
                )}
              </div>
              <h2 className="text-2xl font-bold text-white mb-2 font-['Sora']">
                {activeTab.charAt(0).toUpperCase() +
                  activeTab.slice(1).replace("-", " ")}
              </h2>
              <p className="text-purple-300">
                This section features advanced {activeTab.replace("-", " ")}{" "}
                management tools.
              </p>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default Portal;
