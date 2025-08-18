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
import { Shield, ArrowLeft, ExternalLink, BookOpen, Search, Filter, Calendar, Download, Star, Quote } from "lucide-react";
import { Link } from "react-router-dom";

export default function Articles() {
  const featuredArticle = {
    title: "The Ethics of Artificial Intelligence: Building Trust in Digital Systems",
    publication: "Georgetown SCS Values",
    year: "2025",
    description: "Reflecting on AI ethics, international education, and making the world more beautiful through technology. Featured as 2025 Spirit of Georgetown Award winner.",
    link: "https://scsvalues.georgetown.domains/service-in-action/2025-spirit-of-georgetown-winner-reflects-on-the-ethics-of-artificial-intelligence-the-value-of-international-education-and-the-importance-of-making-the-world-a-beautiful-place/",
    type: "Feature Article",
    featured: true,
    downloads: "500+",
    citations: "12"
  };

  const publications = [
    {
      title: "Cognitive Bias Detection in Digital Communications",
      publication: "IEEE Intelligent Systems",
      year: "2024",
      description: "Research on adversarial NLP and disinformation threat vectors using advanced prompt engineering techniques for detecting cognitive bias in geopolitical communications.",
      link: "https://arxiv.org/abs/2503.05516",
      type: "Peer-Reviewed Research",
      downloads: "1.2k+",
      citations: "8"
    },
    {
      title: "Industrial Edge Security: Threat-Informed Detection Architecture",
      publication: "Research Publication",
      year: "2024", 
      description: "SOC-ready EDR stack implementation for real-time threat detection in Dockerized industrial environments. Comprehensive framework for OT security.",
      link: "https://github.com/Mzaki2024/BACnet-Unified-Service",
      type: "Technical Paper",
      downloads: "800+",
      citations: "5"
    },
    {
      title: "Healthcare Cybersecurity Framework Using Next-Generation Firewalls",
      publication: "IEEE Journal",
      year: "2023",
      description: "Comprehensive framework for protecting multi-nodal hospital networks through containerization and advanced threat protection mechanisms.",
      link: "https://ieeexplore.ieee.org/document/9388455",
      type: "Peer-Reviewed Research",
      downloads: "950+", 
      citations: "15"
    }
  ];

  const upcomingPublications = [
    {
      title: "Zero Trust Architecture for Industrial Control Systems",
      publication: "IEEE Security & Privacy Magazine",
      status: "Under Review",
      expectedDate: "Q2 2025",
      description: "Practical implementation strategies for zero trust principles in operational technology environments."
    },
    {
      title: "AI-Driven Threat Hunting in Critical Infrastructure",
      publication: "ACM Computing Surveys", 
      status: "In Preparation",
      expectedDate: "Q3 2025",
      description: "Comprehensive survey of machine learning applications in threat detection for critical infrastructure protection."
    }
  ];

  const conferences = [
    {
      title: "Operational Technology Security in the Age of Industry 4.0",
      event: "RSA Conference 2024",
      type: "Keynote Speaker",
      date: "May 2024",
      location: "San Francisco, CA"
    },
    {
      title: "Building Resilient Security Operations Centers",
      event: "Black Hat USA 2024",
      type: "Technical Session",
      date: "August 2024", 
      location: "Las Vegas, NV"
    },
    {
      title: "Threat Intelligence Automation Workshop",
      event: "SANS Threat Hunting Summit",
      type: "Workshop Leader",
      date: "September 2024",
      location: "Virtual"
    }
  ];

  const mediaFeatures = [
    {
      title: "Georgetown Graduate Wins Spirit of Georgetown Award for AI Ethics Research",
      outlet: "Georgetown University News", 
      date: "May 2025",
      description: "Profile of award-winning research on AI ethics and international collaboration."
    },
    {
      title: "Young Cybersecurity Leader Addresses Industrial Security Challenges",
      outlet: "CSO Magazine",
      date: "March 2024",
      description: "Interview on emerging threats in operational technology environments."
    },
    {
      title: "The Future of Threat Intelligence: Expert Perspectives",
      outlet: "Security Week",
      date: "January 2024",
      description: "Roundtable discussion on automation and AI in threat intelligence."
    }
  ];

  return (
    <div className="min-h-screen bg-background matrix-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full cyber-nav">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Shield className="mr-2 h-6 w-6 text-primary animate-pulse-glow" />
            <Link to="/" className="font-bold cyber-text">Zaki Mohammed</Link>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link to="/" className="transition-colors hover:text-primary">
                  Home
                </Link>
                <Link
                  to="/articles"
                  className="transition-colors hover:text-primary text-primary"
                >
                  Articles
                </Link>
                <Link
                  to="/blog"
                  className="transition-colors hover:text-primary"
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
                Research & Publications
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Academic research, technical publications, and thought leadership in cybersecurity, 
                AI safety, and operational technology protection.
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <Card className="cyber-card p-4 text-center">
                <BookOpen className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-muted-foreground">Publications</div>
              </Card>
              <Card className="cyber-card p-4 text-center">
                <Star className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">40+</div>
                <div className="text-xs text-muted-foreground">Citations</div>
              </Card>
              <Card className="cyber-card p-4 text-center">
                <Download className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">3.5k+</div>
                <div className="text-xs text-muted-foreground">Downloads</div>
              </Card>
              <Card className="cyber-card p-4 text-center">
                <Quote className="h-6 w-6 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">8</div>
                <div className="text-xs text-muted-foreground">Media Features</div>
              </Card>
            </div>

            {/* Search & Filter */}
            <div className="flex gap-4 max-w-2xl mx-auto mt-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Search publications..." className="pl-10 cyber-card" />
              </div>
              <Button variant="outline" className="cyber-hover">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Publication */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 cyber-text">Featured Publication</h2>
            
            <Card className="cyber-card cyber-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <Badge className="bg-primary/10 text-primary">Featured</Badge>
                      <Badge variant="secondary">{featuredArticle.type}</Badge>
                    </div>
                    <CardTitle className="text-2xl leading-tight cyber-text">
                      {featuredArticle.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {featuredArticle.publication} • {featuredArticle.year}
                    </CardDescription>
                  </div>
                  <BookOpen className="h-8 w-8 text-primary animate-pulse-glow" />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                  {featuredArticle.description}
                </p>
                
                <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                  <div className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    {featuredArticle.downloads} downloads
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4" />
                    {featuredArticle.citations} citations
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {featuredArticle.year}
                  </div>
                </div>
                
                <Button className="cyber-hover" asChild>
                  <a
                    href={featuredArticle.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Read Full Article
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Published Research */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 cyber-text">Published Research</h2>
            
            <div className="space-y-6">
              {publications.map((pub, index) => (
                <Card key={index} className="cyber-card cyber-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary">{pub.type}</Badge>
                        </div>
                        <CardTitle className="text-xl leading-tight hover:text-primary transition-colors">
                          {pub.title}
                        </CardTitle>
                        <CardDescription>
                          {pub.publication} • {pub.year}
                        </CardDescription>
                      </div>
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {pub.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Download className="h-3 w-3" />
                          {pub.downloads}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          {pub.citations} citations
                        </div>
                      </div>
                      
                      <Button variant="outline" size="sm" asChild className="cyber-hover">
                        <a
                          href={pub.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          View Publication
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Publications */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 cyber-text">Upcoming Publications</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingPublications.map((pub, index) => (
                <Card key={index} className="cyber-card cyber-hover">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <Badge variant="outline" className="w-fit">
                          {pub.status}
                        </Badge>
                        <CardTitle className="text-lg leading-tight">
                          {pub.title}
                        </CardTitle>
                        <CardDescription>
                          {pub.publication} • {pub.expectedDate}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {pub.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Conference Presentations */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 cyber-text">Conference Presentations</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {conferences.map((conf, index) => (
                <Card key={index} className="cyber-card cyber-hover">
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">
                      {conf.title}
                    </CardTitle>
                    <div className="space-y-1">
                      <CardDescription className="font-medium">
                        {conf.event}
                      </CardDescription>
                      <div className="flex items-center gap-2 text-sm">
                        <Badge variant="outline" className="text-xs">
                          {conf.type}
                        </Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3 w-3" />
                        {conf.date}
                      </div>
                      <div>📍 {conf.location}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 cyber-text">Media Features & Press</h2>
            
            <div className="space-y-4">
              {mediaFeatures.map((feature, index) => (
                <Card key={index} className="cyber-card cyber-hover">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 hover:text-primary transition-colors cursor-pointer">
                          {feature.title}
                        </h3>
                        <div className="text-sm text-muted-foreground mb-2">
                          {feature.outlet} • {feature.date}
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                      <Quote className="h-5 w-5 text-primary ml-4" />
                    </div>
                  </CardContent>
                </Card>
              ))}
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
