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
  Settings,
  BarChart3,
  Users,
  DollarSign,
  Shield,
  Database,
  Globe,
  Award,
  Home,
  Building,
  TrendingUp,
  UserPlus,
  Calendar,
  FileText,
  Zap,
  Crown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  Brain,
  Star,
  Activity,
  Server,
  Lock,
  Eye,
  Download,
  Upload,
  Search,
  Filter,
  MoreVertical,
  Plus,
  Edit,
  Trash,
} from "lucide-react";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const adminData = {
    name: "Dr. Khalid Al-Mansoori",
    role: "System Administrator",
    institution: "UAE Ministry of Education",
    avatar: "👨‍💼",
    permissions: "Super Admin",
  };

  const systemStats = {
    totalUsers: 25847,
    activeInstitutions: 156,
    monthlyRevenue: 2847652,
    systemUptime: 99.97,
    storageUsed: 78.5,
    bandwidthUsage: 65.2,
  };

  const institutions = [
    {
      id: 1,
      name: "UAE University",
      type: "University",
      students: 15420,
      teachers: 892,
      status: "active",
      subscription: "Enterprise",
      revenue: 125000,
      growth: 12.5,
    },
    {
      id: 2,
      name: "American University of Sharjah",
      type: "University",
      students: 8750,
      teachers: 445,
      status: "active",
      subscription: "Enterprise",
      revenue: 87500,
      growth: 8.3,
    },
    {
      id: 3,
      name: "Dubai International School",
      type: "School",
      students: 2340,
      teachers: 156,
      status: "active",
      subscription: "Pro",
      revenue: 23400,
      growth: 15.7,
    },
    {
      id: 4,
      name: "Abu Dhabi Education Council",
      type: "Government",
      students: 45780,
      teachers: 2890,
      status: "active",
      subscription: "Government",
      revenue: 457800,
      growth: 6.2,
    },
  ];

  const recentAlerts = [
    {
      type: "security",
      message: "Unusual login activity detected",
      institution: "UAE University",
      time: "5 min ago",
      severity: "high",
    },
    {
      type: "performance",
      message: "Server response time increased",
      system: "Database Cluster 3",
      time: "15 min ago",
      severity: "medium",
    },
    {
      type: "billing",
      message: "Payment overdue",
      institution: "Dubai International School",
      time: "1 hour ago",
      severity: "low",
    },
    {
      type: "system",
      message: "Backup completed successfully",
      system: "Main Database",
      time: "2 hours ago",
      severity: "info",
    },
  ];

  const financialData = [
    { month: "Jan", revenue: 2100000, expenses: 890000, profit: 1210000 },
    { month: "Feb", revenue: 2250000, expenses: 920000, profit: 1330000 },
    { month: "Mar", revenue: 2400000, expenses: 980000, profit: 1420000 },
    { month: "Apr", revenue: 2650000, expenses: 1050000, profit: 1600000 },
    { month: "May", revenue: 2847652, expenses: 1180000, profit: 1667652 },
  ];

  const userManagement = [
    {
      id: 1,
      name: "Dr. Sarah Ahmed",
      role: "Teacher",
      institution: "UAE University",
      lastActive: "2 min ago",
      status: "online",
    },
    {
      id: 2,
      name: "Ahmed Hassan",
      role: "Student",
      institution: "UAE University",
      lastActive: "5 min ago",
      status: "online",
    },
    {
      id: 3,
      name: "Prof. Michael Johnson",
      role: "Admin",
      institution: "AUS",
      lastActive: "1 hour ago",
      status: "away",
    },
    {
      id: 4,
      name: "Fatima Al-Rashid",
      role: "Student",
      institution: "Dubai Int. School",
      lastActive: "3 hours ago",
      status: "offline",
    },
  ];

  const systemHealth = [
    {
      component: "Main Database",
      status: "healthy",
      uptime: "99.98%",
      responseTime: "12ms",
    },
    {
      component: "API Gateway",
      status: "healthy",
      uptime: "99.95%",
      responseTime: "45ms",
    },
    {
      component: "AI Processing",
      status: "warning",
      uptime: "98.7%",
      responseTime: "234ms",
    },
    {
      component: "File Storage",
      status: "healthy",
      uptime: "99.99%",
      responseTime: "8ms",
    },
    {
      component: "Video Streaming",
      status: "healthy",
      uptime: "99.92%",
      responseTime: "67ms",
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
            <div className="relative w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center shadow-lg">
              <div className="text-white font-bold text-lg font-['Sora'] drop-shadow-none">
                H
              </div>
              <div className="absolute top-0 right-0 w-3 h-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-bl-full"></div>
            </div>
            <div>
              <h1 className="text-lg font-bold text-white font-['Sora'] drop-shadow-none">
                HazeLearn
              </h1>
              <p className="text-xs text-purple-200">Admin Panel</p>
            </div>
          </div>

          {/* Admin Profile */}
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center text-xl">
                {adminData.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-white truncate drop-shadow-none">
                  {adminData.name}
                </h3>
                <p className="text-sm text-purple-200 truncate">
                  {adminData.role}
                </p>
                <Badge className="bg-red-500/20 text-red-400 border-red-500/30 text-xs mt-1">
                  {adminData.permissions}
                </Badge>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-4">
          <div className="space-y-2">
            {[
              { id: "dashboard", label: "Dashboard", icon: BarChart3 },
              { id: "institutions", label: "Institutions", icon: Building },
              { id: "users", label: "User Management", icon: Users },
              { id: "financial", label: "Financial", icon: DollarSign },
              { id: "system", label: "System Health", icon: Server },
              { id: "security", label: "Security", icon: Shield },
              { id: "analytics", label: "Analytics", icon: TrendingUp },
              { id: "ai-insights", label: "AI Insights", icon: Brain },
              { id: "settings", label: "Settings", icon: Settings },
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
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-['Sora'] font-bold text-white mb-2 animate-fade-in-up drop-shadow-none">
              Admin Dashboard
            </h1>
            <p
              className="text-purple-200 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              System-wide administration and management
            </p>
          </div>

          {activeTab === "dashboard" && (
            <div className="space-y-8">
              {/* System Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    label: "Total Users",
                    value: systemStats.totalUsers.toLocaleString(),
                    icon: Users,
                    color: "from-blue-500 to-blue-600",
                    change: "+12.5%",
                  },
                  {
                    label: "Active Institutions",
                    value: systemStats.activeInstitutions,
                    icon: Building,
                    color: "from-green-500 to-green-600",
                    change: "+3.2%",
                  },
                  {
                    label: "Monthly Revenue",
                    value: `$${(systemStats.monthlyRevenue / 1000000).toFixed(1)}M`,
                    icon: DollarSign,
                    color: "from-yellow-500 to-yellow-600",
                    change: "+8.7%",
                  },
                  {
                    label: "System Uptime",
                    value: `${systemStats.systemUptime}%`,
                    icon: Activity,
                    color: "from-emerald-500 to-emerald-600",
                    change: "+0.02%",
                  },
                  {
                    label: "Storage Used",
                    value: `${systemStats.storageUsed}%`,
                    icon: Database,
                    color: "from-purple-500 to-purple-600",
                    change: "+5.3%",
                  },
                  {
                    label: "Bandwidth Usage",
                    value: `${systemStats.bandwidthUsage}%`,
                    icon: Globe,
                    color: "from-indigo-500 to-indigo-600",
                    change: "+2.1%",
                  },
                ].map((stat, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 animate-fade-in-scale"
                    style={{ animationDelay: `${0.1 * index}s` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center`}
                        >
                          <stat.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {stat.change}
                        </Badge>
                      </div>
                      <p className="text-sm text-purple-300">{stat.label}</p>
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Recent Alerts */}
              <Card className="bg-white/5 backdrop-blur-xl border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white drop-shadow-none flex items-center">
                    <AlertTriangle className="w-5 h-5 mr-2" />
                    System Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 p-4 rounded-lg border border-purple-500/20 hover:bg-white/5 transition-colors"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            alert.severity === "high"
                              ? "bg-red-500/20 text-red-400"
                              : alert.severity === "medium"
                                ? "bg-yellow-500/20 text-yellow-400"
                                : alert.severity === "low"
                                  ? "bg-blue-500/20 text-blue-400"
                                  : "bg-green-500/20 text-green-400"
                          }`}
                        >
                          {alert.severity === "high" ? (
                            <AlertTriangle className="w-4 h-4" />
                          ) : alert.severity === "medium" ? (
                            <Clock className="w-4 h-4" />
                          ) : alert.severity === "low" ? (
                            <Eye className="w-4 h-4" />
                          ) : (
                            <CheckCircle className="w-4 h-4" />
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="text-white font-medium text-sm">
                            {alert.message}
                          </p>
                          <p className="text-purple-300 text-xs">
                            {alert.institution || alert.system} • {alert.time}
                          </p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-purple-400 hover:text-white"
                        >
                          Resolve
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeTab === "institutions" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-['Sora'] font-bold text-white">
                  Institutions
                </h2>
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    className="border-purple-500/30 text-purple-200 hover:bg-purple-800/30"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                  <Button className="bg-purple-600 hover:bg-purple-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Institution
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {institutions.map((institution) => (
                  <Card
                    key={institution.id}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-white text-lg drop-shadow-none">
                            {institution.name}
                          </CardTitle>
                          <CardDescription className="text-purple-300">
                            {institution.type}
                          </CardDescription>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                            {institution.status}
                          </Badge>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="w-8 h-8 p-0"
                          >
                            <MoreVertical className="w-4 h-4 text-purple-400" />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-purple-300 text-sm">Students</p>
                            <p className="text-white text-lg font-semibold">
                              {institution.students.toLocaleString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-purple-300 text-sm">Teachers</p>
                            <p className="text-white text-lg font-semibold">
                              {institution.teachers.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-purple-300 text-sm">
                              Subscription
                            </p>
                            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                              {institution.subscription}
                            </Badge>
                          </div>
                          <div>
                            <p className="text-purple-300 text-sm">
                              Monthly Revenue
                            </p>
                            <p className="text-green-400 font-semibold">
                              ${institution.revenue.toLocaleString()}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                          <div className="text-sm">
                            <span className="text-purple-300">Growth: </span>
                            <span className="text-green-400">
                              +{institution.growth}%
                            </span>
                          </div>
                          <div className="flex space-x-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-purple-400 hover:text-white"
                            >
                              View Details
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-purple-400 hover:text-white"
                            >
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "system" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-['Sora'] font-bold text-white">
                System Health
              </h2>

              <div className="space-y-6">
                {systemHealth.map((component, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              component.status === "healthy"
                                ? "bg-green-500/20"
                                : component.status === "warning"
                                  ? "bg-yellow-500/20"
                                  : "bg-red-500/20"
                            }`}
                          >
                            <Server
                              className={`w-6 h-6 ${
                                component.status === "healthy"
                                  ? "text-green-400"
                                  : component.status === "warning"
                                    ? "text-yellow-400"
                                    : "text-red-400"
                              }`}
                            />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold">
                              {component.component}
                            </h3>
                            <p className="text-purple-300 text-sm">
                              Uptime: {component.uptime} • Response:{" "}
                              {component.responseTime}
                            </p>
                          </div>
                        </div>
                        <Badge
                          className={
                            component.status === "healthy"
                              ? "bg-green-500/20 text-green-400 border-green-500/30"
                              : component.status === "warning"
                                ? "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
                                : "bg-red-500/20 text-red-400 border-red-500/30"
                          }
                        >
                          {component.status}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeTab === "ai-insights" && (
            <div className="space-y-6">
              <h2 className="text-2xl font-['Sora'] font-bold text-white">
                AI System Insights
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "Predictive Analytics",
                    description:
                      "System load forecasting and resource optimization",
                    icon: TrendingUp,
                    status: "Active",
                  },
                  {
                    title: "Anomaly Detection",
                    description: "Real-time monitoring for unusual patterns",
                    icon: Eye,
                    status: "Active",
                  },
                  {
                    title: "Performance Optimization",
                    description: "AI-driven system performance improvements",
                    icon: Zap,
                    status: "Running",
                  },
                  {
                    title: "Security Analysis",
                    description: "Advanced threat detection and prevention",
                    icon: Shield,
                    status: "Active",
                  },
                  {
                    title: "User Behavior Analysis",
                    description:
                      "Learning pattern insights and recommendations",
                    icon: Brain,
                    status: "Active",
                  },
                  {
                    title: "Resource Management",
                    description: "Intelligent allocation of system resources",
                    icon: Database,
                    status: "Optimizing",
                  },
                ].map((insight, index) => (
                  <Card
                    key={index}
                    className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center">
                          <insight.icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          {insight.status}
                        </Badge>
                      </div>
                      <h3 className="text-white font-semibold mb-2">
                        {insight.title}
                      </h3>
                      <p className="text-purple-300 text-sm mb-4">
                        {insight.description}
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-purple-500/30 text-purple-200 hover:bg-purple-800/30"
                      >
                        View Details
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

export default AdminPanel;
