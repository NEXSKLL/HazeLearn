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
import { Navbar } from "@/components/ui/navbar";
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
} from "lucide-react";

const StudentDashboard = () => {
  const studentData = {
    name: "Alex Johnson",
    level: 12,
    xp: 2450,
    xpToNext: 3000,
    points: 980,
    aedValue: (980 * 0.025).toFixed(2),
    streak: 7,
    rank: 23,
    totalStudents: 1250,
  };

  const badges = [
    {
      name: "Quiz Master",
      icon: Trophy,
      color: "text-yellow-500",
      earned: true,
    },
    {
      name: "Study Streak",
      icon: Flame,
      color: "text-orange-500",
      earned: true,
    },
    {
      name: "AI Assistant Pro",
      icon: Zap,
      color: "text-blue-500",
      earned: true,
    },
    {
      name: "Team Player",
      icon: Users,
      color: "text-green-500",
      earned: false,
    },
    {
      name: "Course Conqueror",
      icon: Crown,
      color: "text-purple-500",
      earned: false,
    },
    {
      name: "Perfect Score",
      icon: Star,
      color: "text-pink-500",
      earned: false,
    },
  ];

  const courses = [
    {
      name: "Advanced Mathematics",
      progress: 78,
      nextActivity: "Quiz: Calculus Integration",
      dueTime: "2 hours",
      xpReward: 150,
      status: "active",
    },
    {
      name: "Computer Science",
      progress: 92,
      nextActivity: "Project: AI Chatbot",
      dueTime: "Tomorrow",
      xpReward: 300,
      status: "almost-complete",
    },
    {
      name: "Physics",
      progress: 45,
      nextActivity: "Lab: Wave Properties",
      dueTime: "Next week",
      xpReward: 200,
      status: "in-progress",
    },
  ];

  const recentActivities = [
    {
      activity: "Completed Quiz: Linear Algebra",
      xp: 120,
      time: "2 hours ago",
      type: "quiz",
    },
    {
      activity: "Submitted Assignment: Programming Basics",
      xp: 200,
      time: "Yesterday",
      type: "assignment",
    },
    {
      activity: "Participated in Class Discussion",
      xp: 50,
      time: "2 days ago",
      type: "discussion",
    },
    {
      activity: "Earned Badge: Study Streak",
      xp: 100,
      time: "3 days ago",
      type: "badge",
    },
  ];

  const leaderboard = [
    { rank: 1, name: "Sarah Chen", xp: 3200, avatar: "👩‍🎓" },
    { rank: 2, name: "Mike Rodriguez", xp: 3150, avatar: "👨‍💼" },
    { rank: 3, name: "Emma Watson", xp: 2980, avatar: "👩‍🔬" },
    {
      rank: 4,
      name: "Alex Johnson",
      xp: 2450,
      avatar: "🧑‍💻",
      isCurrentUser: true,
    },
    { rank: 5, name: "David Kim", xp: 2300, avatar: "👨‍🎨" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-hazelearn-50">
      <Navbar />

      <div className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Welcome back, {studentData.name}! 🎓
          </h1>
          <p className="text-gray-600">
            Ready to continue your learning journey?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Level & XP Card */}
            <Card className="bg-gradient-to-r from-hazelearn-500 to-hazelearn-600 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Crown className="w-6 h-6" />
                      <span className="text-xl font-bold">
                        Level {studentData.level}
                      </span>
                    </div>
                    <p className="text-hazelearn-100">
                      Keep learning to level up!
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold">
                      {studentData.xp} XP
                    </div>
                    <p className="text-hazelearn-100">
                      {studentData.xpToNext - studentData.xp} XP to Level{" "}
                      {studentData.level + 1}
                    </p>
                  </div>
                </div>
                <Progress
                  value={(studentData.xp / studentData.xpToNext) * 100}
                  className="bg-hazelearn-400"
                />
              </CardContent>
            </Card>

            {/* Rewards Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Coins className="w-5 h-5 text-gold-500" />
                  Your Rewards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gold-50 rounded-xl">
                    <div className="text-2xl font-bold text-gold-600">
                      {studentData.points}
                    </div>
                    <div className="text-sm text-gold-700">Points Earned</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <div className="text-2xl font-bold text-green-600">
                      {studentData.aedValue} AED
                    </div>
                    <div className="text-sm text-green-700">Cash Value</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-blue-600">
                      <Gift className="w-4 h-4 mr-2" />
                      Redeem Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Course Progress */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-hazelearn-500" />
                  Your Courses
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-xl">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold text-gray-900">
                        {course.name}
                      </h3>
                      <Badge
                        variant={
                          course.status === "active" ? "default" : "secondary"
                        }
                        className={
                          course.status === "active" ? "bg-hazelearn-500" : ""
                        }
                      >
                        {course.progress}% Complete
                      </Badge>
                    </div>
                    <Progress value={course.progress} className="mb-3" />
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Target className="w-4 h-4" />
                        {course.nextActivity}
                      </div>
                      <div className="flex items-center gap-4 text-gray-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {course.dueTime}
                        </span>
                        <span className="flex items-center gap-1 text-hazelearn-600 font-medium">
                          <Zap className="w-4 h-4" />+{course.xpReward} XP
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-hazelearn-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-2 h-2 rounded-full ${
                            activity.type === "quiz"
                              ? "bg-blue-500"
                              : activity.type === "assignment"
                                ? "bg-green-500"
                                : activity.type === "discussion"
                                  ? "bg-purple-500"
                                  : "bg-gold-500"
                          }`}
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {activity.activity}
                          </p>
                          <p className="text-sm text-gray-500">
                            {activity.time}
                          </p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="text-hazelearn-600">
                        +{activity.xp} XP
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Stats Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-hazelearn-500" />
                  Your Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Study Streak</span>
                  <div className="flex items-center gap-1">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="font-bold">{studentData.streak} days</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Global Rank</span>
                  <span className="font-bold">
                    #{studentData.rank} of {studentData.totalStudents}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Courses Active</span>
                  <span className="font-bold">{courses.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Badges Earned</span>
                  <span className="font-bold">
                    {badges.filter((b) => b.earned).length}/{badges.length}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-hazelearn-500" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {badges.map((badge, index) => {
                    const Icon = badge.icon;
                    return (
                      <div
                        key={index}
                        className={`p-3 rounded-xl text-center transition-all ${
                          badge.earned
                            ? "bg-gray-50 shadow-sm"
                            : "bg-gray-100 opacity-50"
                        }`}
                      >
                        <Icon
                          className={`w-6 h-6 mx-auto mb-1 ${badge.earned ? badge.color : "text-gray-400"}`}
                        />
                        <p className="text-xs font-medium text-gray-700">
                          {badge.name}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-gold-500" />
                  Class Leaderboard
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {leaderboard.map((student, index) => (
                    <div
                      key={index}
                      className={`flex items-center justify-between p-2 rounded-lg ${
                        student.isCurrentUser
                          ? "bg-hazelearn-50 border border-hazelearn-200"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                            student.rank === 1
                              ? "bg-gold-100 text-gold-700"
                              : student.rank === 2
                                ? "bg-gray-100 text-gray-700"
                                : student.rank === 3
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-gray-50 text-gray-600"
                          }`}
                        >
                          {student.rank}
                        </div>
                        <span className="text-xl">{student.avatar}</span>
                        <span
                          className={`font-medium ${student.isCurrentUser ? "text-hazelearn-700" : "text-gray-900"}`}
                        >
                          {student.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-gray-600">
                        {student.xp} XP
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5 text-hazelearn-500" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="outline">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Join Study Session
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Users className="w-4 h-4 mr-2" />
                  Challenge Friend
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Study Time
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
