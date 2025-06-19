import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  Home,
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  TrendingUp,
  BookOpen,
  Brain,
  Trophy,
  Globe,
  Target,
  Users,
  Zap,
  Star,
  ArrowRight,
  Play,
  Download,
  Share,
  Eye,
  MessageCircle,
  ThumbsUp,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All Posts", count: 24 },
    { id: "ai-education", name: "AI Education", count: 8 },
    { id: "student-success", name: "Student Success", count: 6 },
    { id: "teaching-tips", name: "Teaching Tips", count: 5 },
    { id: "technology", name: "EdTech Trends", count: 3 },
    { id: "case-studies", name: "Case Studies", count: 2 },
  ];

  const featuredPost = {
    id: 1,
    title: "How AI is Revolutionizing Education in the UAE: A Complete Guide",
    excerpt:
      "Discover how artificial intelligence is transforming classrooms across the UAE, from personalized learning paths to intelligent assessment systems. Learn about real implementations and success stories.",
    author: "Dr. Sarah Al-Mahmoud",
    role: "AI Education Specialist",
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "AI Education",
    image: "🤖",
    stats: { views: "12.5K", likes: "234", comments: "45" },
    featured: true,
  };

  const blogPosts = [
    {
      id: 2,
      title: "10 Study Techniques That Doubled Student Performance",
      excerpt:
        "Research-backed study methods that helped students improve their grades by an average of 40% using HazeLearn's AI-powered learning system.",
      author: "Ahmed Hassan",
      role: "Educational Psychology",
      date: "December 12, 2024",
      readTime: "6 min read",
      category: "Student Success",
      image: "📚",
      stats: { views: "8.2K", likes: "156", comments: "28" },
    },
    {
      id: 3,
      title: "From Traditional to Digital: UAE School Transformation",
      excerpt:
        "How Al-Noor International School transformed their entire educational system using HazeLearn, resulting in 95% student satisfaction.",
      author: "Fatima Al-Zahra",
      role: "Digital Transformation Lead",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Case Studies",
      image: "🏫",
      stats: { views: "6.7K", likes: "98", comments: "19" },
    },
    {
      id: 4,
      title: "Gamification in Education: Beyond Points and Badges",
      excerpt:
        "Explore advanced gamification strategies that increase student engagement by 300% and create lasting learning habits.",
      author: "Mohammad Zeriab Ali",
      role: "Founder & CEO",
      date: "December 8, 2024",
      readTime: "7 min read",
      category: "Teaching Tips",
      image: "🎮",
      stats: { views: "9.1K", likes: "187", comments: "34" },
    },
    {
      id: 5,
      title: "The Future of Remote Learning in 2025",
      excerpt:
        "Predictions and trends shaping the future of education technology, including VR classrooms and AI-powered tutoring.",
      author: "Lisa Chen",
      role: "EdTech Researcher",
      date: "December 5, 2024",
      readTime: "9 min read",
      category: "Technology",
      image: "🚀",
      stats: { views: "11.3K", likes: "278", comments: "52" },
    },
    {
      id: 6,
      title: "Parent Engagement Through Digital Platforms",
      excerpt:
        "How digital tools can bridge the gap between home and school, improving parent involvement by 200%.",
      author: "Aisha Patel",
      role: "Family Engagement Expert",
      date: "December 3, 2024",
      readTime: "4 min read",
      category: "Teaching Tips",
      image: "👨‍👩‍👧‍👦",
      stats: { views: "5.4K", likes: "89", comments: "16" },
    },
    {
      id: 7,
      title: "Implementing AI Tutoring: Best Practices Guide",
      excerpt:
        "Step-by-step guide for educational institutions to successfully implement AI-powered tutoring systems.",
      author: "Dr. Robert Smith",
      role: "AI Implementation Specialist",
      date: "November 30, 2024",
      readTime: "12 min read",
      category: "AI Education",
      image: "🧠",
      stats: { views: "7.8K", likes: "134", comments: "25" },
    },
    {
      id: 8,
      title: "Student Mental Health in the Digital Age",
      excerpt:
        "Addressing the challenges and opportunities of maintaining student wellbeing in increasingly digital learning environments.",
      author: "Dr. Amira Hassan",
      role: "Educational Psychologist",
      date: "November 28, 2024",
      readTime: "8 min read",
      category: "Student Success",
      image: "💚",
      stats: { views: "13.2K", likes: "298", comments: "67" },
    },
    {
      id: 9,
      title: "Global Education Standards: UAE Leading the Way",
      excerpt:
        "How the UAE's educational reforms and Vision 2050 are setting new standards for global education excellence.",
      author: "Dr. Khalid Al-Mansoori",
      role: "Education Policy Expert",
      date: "November 25, 2024",
      readTime: "10 min read",
      category: "Case Studies",
      image: "🇦🇪",
      stats: { views: "16.7K", likes: "445", comments: "78" },
    },
  ];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" ||
      post.category.toLowerCase().replace(/\s+/g, "-") === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navbar />

      {/* Header */}
      <div className="pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <Link
              to="/"
              className="flex items-center space-x-2 text-purple-300 hover:text-white transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="text-sm">Back to Home</span>
            </Link>
          </div>

          <div className="text-center mb-12">
            <Badge className="mb-6 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2">
              <BookOpen className="w-4 h-4 mr-2" />
              Educational Insights
            </Badge>
            <h1 className="text-5xl md:text-6xl font-['Sora'] font-bold text-white mb-6">
              HazeLearn
              <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Knowledge Hub
              </span>
            </h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Discover insights, trends, and success stories from the world of
              AI-powered education
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-purple-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles, topics, or authors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-white/10 border-purple-500/30 text-white placeholder-purple-300"
              />
            </div>
            <Button
              variant="outline"
              className="border-purple-500/30 text-purple-200 hover:bg-purple-800/30"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-purple-600 text-white"
                    : "border-purple-500/30 text-purple-200 hover:bg-purple-800/30"
                }
              >
                {category.name}
                <Badge className="ml-2 bg-purple-700/50 text-white">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Article */}
      <div className="pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-['Sora'] font-bold text-white mb-2">
              Featured Article
            </h2>
            <p className="text-purple-300">
              Our top educational insights and trending topics
            </p>
          </div>

          <Card className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-xl border-purple-500/30 hover:bg-purple-600/30 transition-all duration-300 group cursor-pointer">
            <CardContent className="p-8">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="text-6xl">{featuredPost.image}</div>
                    <div>
                      <Badge className="bg-purple-600 text-white mb-2">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-purple-300">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {featuredPost.date}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {featuredPost.readTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-['Sora'] font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-purple-100 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white font-semibold">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold">
                          {featuredPost.author}
                        </div>
                        <div className="text-purple-300 text-sm">
                          {featuredPost.role}
                        </div>
                      </div>
                    </div>

                    <Button className="bg-white text-purple-700 hover:bg-purple-50">
                      Read Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>

                  <div className="flex items-center space-x-6 mt-6 pt-6 border-t border-purple-500/20">
                    <span className="flex items-center text-purple-300">
                      <Eye className="w-4 h-4 mr-1" />
                      {featuredPost.stats.views}
                    </span>
                    <span className="flex items-center text-purple-300">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {featuredPost.stats.likes}
                    </span>
                    <span className="flex items-center text-purple-300">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {featuredPost.stats.comments}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-['Sora'] font-bold text-white mb-2">
              Latest Articles
            </h2>
            <p className="text-purple-300">
              {filteredPosts.length} articles found
              {selectedCategory !== "all" &&
                ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card
                key={post.id}
                className="bg-white/5 backdrop-blur-xl border-purple-500/20 hover:bg-white/10 transition-all duration-300 group cursor-pointer h-full"
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="text-4xl mb-4">{post.image}</div>

                  <Badge className="bg-purple-600 text-white mb-3 w-fit">
                    {post.category}
                  </Badge>

                  <h3 className="text-xl font-['Sora'] font-bold text-white mb-3 group-hover:text-purple-300 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-purple-200 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center space-x-4 text-sm text-purple-300 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-purple-500/20">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white text-sm font-semibold">
                          {post.author}
                        </div>
                        <div className="text-purple-400 text-xs">
                          {post.role}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 mt-4 text-sm text-purple-400">
                    <span className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.stats.views}
                    </span>
                    <span className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1" />
                      {post.stats.likes}
                    </span>
                    <span className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      {post.stats.comments}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-purple-700 text-white hover:from-purple-600 hover:to-purple-800"
            >
              Load More Articles
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <div className="py-20 bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="text-4xl mb-6">📧</div>
          <h2 className="text-3xl md:text-4xl font-['Sora'] font-bold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Get the latest educational insights, AI trends, and success stories
            delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-white/10 border-purple-500/30 text-white placeholder-purple-300"
            />
            <Button className="bg-white text-purple-700 hover:bg-purple-50 font-semibold">
              Subscribe
            </Button>
          </div>
          <p className="text-sm text-purple-400 mt-4">
            Join 10,000+ educators worldwide. No spam, unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 border-t border-purple-500/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mr-4">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-['Sora'] font-bold text-white">
              HazeLearn Knowledge Hub
            </span>
          </div>
          <p className="text-purple-300 mb-4">
            Empowering education through insights and innovation
          </p>
          <p className="text-sm text-purple-400">
            © 2024 HazeLearn by HazerX. All Rights Reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Blogs;
