import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Shield,
  ArrowLeft,
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  TrendingUp,
  BookOpen,
  Eye,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const featuredPost = {
    title: "The Future of OT Security: Protecting Industrial Control Systems",
    excerpt:
      "As operational technology becomes increasingly connected, the attack surface expands dramatically. Here's how to implement robust security frameworks for industrial environments.",
    author: "Zaki Mohammed",
    date: "December 15, 2024",
    readTime: "8 min read",
    views: "2.4k",
    category: "OT Security",
    image: "/api/placeholder/800/400",
    featured: true,
  };

  const recentPosts = [
    {
      title: "Implementing Zero Trust in Industrial Networks",
      excerpt:
        "A practical guide to deploying zero trust architecture in OT environments without disrupting operations.",
      author: "Zaki Mohammed",
      date: "December 10, 2024",
      readTime: "6 min read",
      views: "1.8k",
      category: "Zero Trust",
      image: "/api/placeholder/400/250",
    },
    {
      title: "MITRE ATT&CK for ICS: Mapping Industrial Threats",
      excerpt:
        "Understanding adversary tactics and techniques specific to industrial control systems using the MITRE framework.",
      author: "Zaki Mohammed",
      date: "December 5, 2024",
      readTime: "10 min read",
      views: "3.1k",
      category: "Threat Intelligence",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Building Resilient SOC Operations",
      excerpt:
        "Essential strategies for creating security operations centers that can effectively monitor and respond to modern threats.",
      author: "Zaki Mohammed",
      date: "November 28, 2024",
      readTime: "7 min read",
      views: "2.7k",
      category: "SOC Operations",
      image: "/api/placeholder/400/250",
    },
    {
      title: "AI-Powered Threat Detection: Reality vs Hype",
      excerpt:
        "Separating fact from fiction in AI security tools and implementing practical machine learning solutions for threat detection.",
      author: "Zaki Mohammed",
      date: "November 20, 2024",
      readTime: "9 min read",
      views: "4.2k",
      category: "AI Security",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Incident Response Automation Playbooks",
      excerpt:
        "Creating effective automated response workflows that reduce incident response time while maintaining security effectiveness.",
      author: "Zaki Mohammed",
      date: "November 15, 2024",
      readTime: "5 min read",
      views: "1.9k",
      category: "Incident Response",
      image: "/api/placeholder/400/250",
    },
    {
      title: "Cloud Security Compliance: AWS Best Practices",
      excerpt:
        "Comprehensive guide to maintaining security compliance in AWS environments with practical implementation strategies.",
      author: "Zaki Mohammed",
      date: "November 8, 2024",
      readTime: "12 min read",
      views: "3.6k",
      category: "Cloud Security",
      image: "/api/placeholder/400/250",
    },
  ];

  const categories = [
    "OT Security",
    "Threat Intelligence",
    "SOC Operations",
    "AI Security",
    "Zero Trust",
    "Incident Response",
    "Cloud Security",
    "Risk Management",
  ];

  const popularTags = [
    "cybersecurity",
    "threat-detection",
    "industrial-security",
    "mitre-attack",
    "zero-trust",
    "soc",
    "incident-response",
    "ai-security",
    "compliance",
    "risk-management",
  ];

  return (
    <div className="min-h-screen bg-background matrix-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full cyber-nav">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Shield className="mr-2 h-6 w-6 text-primary animate-pulse-glow" />
            <Link to="/" className="font-bold cyber-text">
              Zaki Mohammed
            </Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
                <Link
                  to="/articles"
                  className="transition-colors hover:text-primary"
                >
                  Articles
                </Link>
                <Link
                  to="/blog"
                  className="transition-colors hover:text-primary text-primary"
                >
                  Blog
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Button variant="outline" asChild className="mb-8 cyber-hover">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>

            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight cyber-text">
                Cybersecurity Insights
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                In-depth analysis, practical guides, and emerging trends in
                cybersecurity, operational technology protection, and threat
                intelligence.
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mt-8">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-10 cyber-card"
              />
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-8 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-primary" />
                <span>50+ Articles</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="h-4 w-4 text-primary" />
                <span>25k+ Views</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Weekly Updates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 cyber-text">
              Featured Article
            </h2>

            <Card className="cyber-card cyber-hover overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="h-64 md:h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <Shield className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse-glow" />
                      <p className="text-muted-foreground">
                        Featured Article Image
                      </p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge
                      variant="secondary"
                      className="bg-primary/10 text-primary"
                    >
                      {featuredPost.category}
                    </Badge>
                    <Badge variant="outline">Featured</Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 cyber-text">
                    {featuredPost.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <Eye className="h-4 w-4" />
                      {featuredPost.views}
                    </div>
                  </div>

                  <Button className="cyber-hover">Read Full Article</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Posts Grid */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold cyber-text">Recent Articles</h2>
              <Button variant="outline" className="cyber-hover">
                View All Posts
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map((post, index) => (
                <Card
                  key={index}
                  className="cyber-card cyber-hover overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                    <div className="text-center">
                      <BookOpen className="h-8 w-8 text-primary mx-auto mb-2" />
                      <p className="text-xs text-muted-foreground">
                        Article Image
                      </p>
                    </div>
                  </div>

                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg leading-tight hover:text-primary transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-3 w-3" />
                        {post.views}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Tags */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Categories */}
              <div>
                <h3 className="text-xl font-bold mb-6 cyber-text">
                  Browse by Category
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {categories.map((category, index) => (
                    <Card
                      key={index}
                      className="cyber-card cyber-hover p-4 text-center"
                    >
                      <Tag className="h-6 w-6 text-primary mx-auto mb-2" />
                      <h4 className="font-medium text-sm">{category}</h4>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div>
                <h3 className="text-xl font-bold mb-6 cyber-text">
                  Popular Topics
                </h3>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="cyber-hover cursor-pointer"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="mt-8 p-6 cyber-card rounded-lg">
                  <h4 className="font-bold mb-2 cyber-text">Stay Updated</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Get the latest cybersecurity insights delivered to your
                    inbox.
                  </p>
                  <div className="flex gap-2">
                    <Input placeholder="Your email" className="flex-1" />
                    <Button className="cyber-hover">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 cyber-nav">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-primary animate-pulse-glow" />
              <span className="font-bold">Zaki Mohammed</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Zaki Mohammed. Cybersecurity Professional & Researcher.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
