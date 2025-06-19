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
  Users,
  BookOpen,
  BarChart3,
  Settings,
  Bell,
  Calendar,
  MessageSquare,
  Award,
  Home,
  Video,
  FileText,
  PlusCircle,
  Edit,
  Send,
  Download,
  Clock,
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Star,
  Brain,
  Zap,
  Crown,
  Play,
  Eye,
  ThumbsUp,
  MessageCircle,
  Upload,
  Search,
  Filter,
  MoreVertical,
} from "lucide-react";
import { Link } from "react-router-dom";

const TeacherDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const teacherData = {
    name: "Dr. Sarah Ahmed",
    role: "Computer Science Professor",
    department: "Engineering Department",
    institution: "UAE University",
    avatar: "👩‍🏫",
    stats: {
      totalStudents: 342,
      activeClasses: 6,
      avgGrade: 87.5,
      completionRate: 94.2,
    },
  };

  const currentClasses = [
    {
      id: 1,
      name: "Advanced Machine Learning",
      code: "CS501",
      students: 45,
      schedule: "Mon, Wed, Fri 10:00 AM",
      nextClass: "Today at 10:00 AM",
      progress: 78,
      assignments: { pending: 3, graded: 12 },
      status: "active",
    },
    {
      id: 2,
      name: "Data Structures & Algorithms",
      code: "CS301",
      students: 67,
      schedule: "Tue, Thu 2:00 PM",
      nextClass: "Tomorrow at 2:00 PM",
      progress: 65,
      assignments: { pending: 5, graded: 8 },
      status: "active",
    },
    {
      id: 3,
      name: "Computer Networks",
      code: "CS401",
      students: 52,
      schedule: "Mon, Wed 1:00 PM",
      nextClass: "Wednesday at 1:00 PM",
      progress: 55,
      assignments: { pending: 2, graded: 15 },
      status: "active",
    },
    {
      id: 4,
      name: "Software Engineering",
      code: "CS302",
      students: 78,
      schedule: "Tue, Thu, Fri 11:00 AM",
      nextClass: "Friday at 11:00 AM",
      progress: 82,
      assignments: { pending: 1, graded: 18 },
      status: "active",
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: "assignment",
      title: "Neural Networks Assignment submitted",
      student: "Ahmed Hassan",
      class: "Advanced ML",
      time: "5 minutes ago",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      id: 2,
      type: "grade",
      title: "Quiz #3 graded for all students",
      class: "Data Structures",
      time: "1 hour ago",
      icon: CheckCircle,
      color: "text-green-600",
    },
    {
      id: 3,
      type: "question",
      title: "Student question about binary trees",
      student: "Fatima Al-Rashid",
      class: "Data Structures",
      time: "2 hours ago",
      icon: MessageCircle,
      color: "text-purple-600",
    },
    {
      id: 4,
      type: "attendance",
      title: "Class attendance recorded",
      class: "Computer Networks",
      time: "3 hours ago",
      icon: Users,
      color: "text-orange-600",
    },
  ];

  const pendingTasks = [
    {
      task: "Grade Neural Networks Assignment",
      class: "Advanced ML",
      due: "Today",
      priority: "high",
    },
    {
      task: "Prepare Quiz #4",
      class: "Data Structures",
      due: "Tomorrow",
      priority: "medium",
    },
    {
      task: "Review Project Proposals",
      class: "Software Engineering",
      due: "This Week",
      priority: "medium",
    },
    {
      task: "Update Course Materials",
      class: "Computer Networks",
      due: "Next Week",
      priority: "low",
    },
  ];

  const aiInsights = [
    {
      title: "Student Performance Alert",
      description: "3 students in Advanced ML are falling behind",
      action: "Review individual progress",
      type: "warning",
      icon: AlertCircle,
    },
    {
      title: "Engagement Boost",
      description: "Interactive content increased participation by 35%",
      action: "Add more interactive elements",
      type: "success",
      icon: TrendingUp,
    },
    {
      title: "Assignment Similarity",
      description: "Potential plagiarism detected in 2 submissions",
      action: "Review flagged submissions",
      type: "alert",
      icon: Eye,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Home Button */}
      <div className="fixed top-4 left-4 z-50">
        <Link to="/">
          <Button
            variant="outline"
            size="sm"
            className="bg-white/10 backdrop-blur-xl border-purple-500/30 text-white hover:bg-white/20 w-10 h-10 p-0 animate-fade-in-scale"
          >
            <Home className="w-4 h-4" />
          </Button>
        </Link>
      </div>

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-16 z-40 w-80 bg-slate-900/95 backdrop-blur-xl border-r border-purple-500/30">
        {/* Header */}
        <div className="p-6 border-b border-purple-500/30">
          <div className="flex items-center space-x-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-white font-bold text-lg font-['Sora'] drop-shadow-none">
                H
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-full"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white font-['Sora'] drop-shadow-none">
                HazeLearn
              </h1>
              <p className="text-xs text-purple-200">Teacher Portal</p>
            </div>
          </div>

          {/* Teacher Profile */}
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center text-xl">
                {teacherData.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate drop-shadow-none">
                  {teacherData.name}
                </h3>
                <p className="text-sm text-purple-200 truncate">
                  {teacherData.role}
                </p>
                <p className="text-xs text-purple-300">
                  {teacherData.institution}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <div className="space-y-2">
            {[
              { id: "overview", label: "Overview", icon: BarChart3 },
              { id: "classes", label: "My Classes", icon: BookOpen },
              { id: "students", label: "Students", icon: Users },
              { id: "assignments", label: "Assignments", icon: FileText },
              { id: "grading", label: "Grading", icon: CheckCircle },
              { id: "analytics", label: "Analytics", icon: TrendingUp },
              { id: "ai-tools", label: "AI Tools", icon: Brain },
              { id: "messages", label: "Messages", icon: MessageSquare },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.id
                    ? "bg-purple-600 text-white"
                    : "text-purple-200 hover:text-white hover:bg-purple-800/50"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-96 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-['Sora'] font-bold text-white mb-2 animate-fade-in-up drop-shadow-none">
              Teacher Dashboard
            </h1>
            <p
              className="text-purple-200 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Manage your classes, students, and teaching materials
            </p>
          </div>

          {activeTab === "overview" && (
            <div className="space-y-8">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    label: "Total Students",
                    value: teacherData.stats.totalStudents,
                    icon: Users,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    label: "Active Classes",
                    value: teacherData.stats.activeClasses,
                    icon: BookOpen,
                    color: "from-green-500 to-green-600",
                  },
                  {
                    label: "Average Grade",
                    value: `${teacherData.stats.avgGrade}%`,
                    icon: Star,
                    color: "from-yellow-500 to-yellow-600",
                  },
                  {
                    label: "Completion Rate",
                    value: `${teacherData.stats.completionRate}%`,
                    icon: Target,
                    color: "from-purple-500 to-purple-600",
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 animate-fade-in-scale"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-purple-300">
                            {stat.label}
                          </p>
                          <p className="text-2xl font-bold text-white">
                            {stat.value}
                          </p>
                        </div>
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                        >
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Activity & Pending Tasks */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-white drop-shadow-none">
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div
                          key={activity.id}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors"
                        >
                          <div
                            className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center ${activity.color}`}
                          >
                            <activity.icon className="w-4 h-4" />
                          </div>
                          <div className="flex-1">
                            <p className="text-white text-sm font-medium">
                              {activity.title}
                            </p>
                            <p className="text-purple-300 text-xs">
                              {activity.class} • {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Insights */}
                <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="text-white drop-shadow-none flex items-center">
                      <Brain className="w-5 h-5 mr-2" />
                      AI Insights
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {aiInsights.map((insight, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-white/5 border border-purple-500/20"
                        >
                          <div className="flex items-start space-x-3">
                            <div
                              className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                insight.type === "warning"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : insight.type === "success"
                                    ? "bg-green-500/20 text-green-400"
                                    : "bg-red-500/20 text-red-400"
                              }`}
                            >
                              <insight.icon className="w-4 h-4" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-white font-medium text-sm">
                                {insight.title}
                              </h4>
                              <p className="text-purple-300 text-xs mt-1">
                                {insight.description}
                              </p>
                              <Button
                                variant="ghost"
                                size="sm"
                                className="text-purple-400 hover:text-white p-0 h-auto mt-2"
                              >
                                {insight.action} →
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeTab === "classes" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-['Sora'] font-bold text-white">
                  My Classes
                </h2>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  <PlusCircle className="w-4 h-4 mr-2" />
                  New Class
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {currentClasses.map((classItem) => (
                  <Card
                    key={classItem.id}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-white text-lg drop-shadow-none">
                            {classItem.name}
                          </CardTitle>
                          <CardDescription className="text-purple-300">
                            {classItem.code} • {classItem.students} students
                          </CardDescription>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {classItem.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-purple-300">
                              Course Progress
                            </span>
                            <span className="text-white">
                              {classItem.progress}%
                            </span>
                          </div>
                          <Progress
                            value={classItem.progress}
                            className="h-2"
                          />
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-purple-300">Schedule</p>
                            <p className="text-white">{classItem.schedule}</p>
                          </div>
                          <div>
                            <p className="text-purple-300">Next Class</p>
                            <p className="text-white">{classItem.nextClass}</p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm">
                            <span className="text-purple-300">
                              Assignments:{" "}
                            </span>
                            <span className="text-yellow-400">
                              {classItem.assignments.pending} pending
                            </span>
                            <span className="text-purple-300"> • </span>
                            <span className="text-green-400">
                              {classItem.assignments.graded} graded
                            </span>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-purple-400 hover:text-white"
                          >
                            Manage →
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "ai-tools" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-['Sora'] font-bold text-white">
                AI Teaching Tools
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    name: "AI Rubric Generator",
                    description: "Generate detailed rubrics for any assignment",
                    icon: FileText,
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    name: "Auto Grader",
                    description: "AI-powered assignment grading and feedback",
                    icon: CheckCircle,
                    color: "from-green-500 to-green-600",
                  },
                  {
                    name: "Content Generator",
                    description: "Create course materials and quizzes",
                    icon: Edit,
                    color: "from-purple-500 to-purple-600",
                  },
                  {
                    name: "Plagiarism Detector",
                    description: "Advanced similarity and plagiarism checking",
                    icon: Eye,
                    color: "from-red-500 to-red-600",
                  },
                  {
                    name: "Student Analytics",
                    description: "Deep insights into student performance",
                    icon: BarChart3,
                    color: "from-yellow-500 to-yellow-600",
                  },
                  {
                    name: "Discussion Moderator",
                    description: "AI-assisted forum and discussion management",
                    icon: MessageSquare,
                    color: "from-indigo-500 to-indigo-600",
                  },
                ].map((tool, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                  >
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${tool.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
                      >
                        <tool.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {tool.name}
                      </h3>
                      <p className="text-purple-300 text-sm mb-4">
                        {tool.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500/30 text-purple-200 hover:bg-purple-800/30"
                      >
                        Launch Tool
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
