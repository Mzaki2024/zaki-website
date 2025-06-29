import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowLeft, ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

export default function Articles() {
  const articles = [
    {
      title:
        "The Ethics of Artificial Intelligence: Building Trust in Digital Systems",
      publication: "Georgetown SCS Values",
      year: "2025",
      description:
        "Reflecting on AI ethics, international education, and making the world more beautiful through technology.",
      link: "https://scsvalues.georgetown.domains/service-in-action/2025-spirit-of-georgetown-winner-reflects-on-the-ethics-of-artificial-intelligence-the-value-of-international-education-and-the-importance-of-making-the-world-a-beautiful-place/",
      type: "Feature Article",
    },
    {
      title: "Cognitive Bias Detection in Digital Communications",
      publication: "IEEE Intelligent Systems",
      year: "2024",
      description:
        "Research on adversarial NLP and disinformation threat vectors using advanced prompt engineering.",
      type: "Peer-Reviewed Research",
    },
    {
      title: "Industrial Edge Security: Threat-Informed Detection Architecture",
      publication: "Research Publication",
      year: "2024",
      description:
        "SOC-ready EDR stack implementation for real-time threat detection in Dockerized industrial environments.",
      type: "Technical Paper",
    },
    {
      title:
        "Healthcare Cybersecurity Framework Using Next-Generation Firewalls",
      publication: "IEEE Journal",
      year: "2023",
      description:
        "Comprehensive framework for protecting multi-nodal hospital networks through containerization.",
      type: "Peer-Reviewed Research",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Shield className="mr-2 h-6 w-6 text-primary" />
            <span className="font-bold">Zaki Mohammed</span>
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

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <div className="text-center space-y-6 mb-12">
            <h1 className="text-4xl font-bold tracking-tighter">
              Publications & Articles
            </h1>

            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Research publications, technical articles, and thought leadership
              in cybersecurity, AI safety, and digital trust.
            </p>
          </div>

          <div className="space-y-6">
            {articles.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        {article.title}
                      </CardTitle>
                      <CardDescription>
                        {article.publication} • {article.year}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary">{article.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {article.description}
                  </p>
                  {article.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        Read Article
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 p-8 border border-dashed border-muted-foreground/25 rounded-lg text-center">
            <p className="text-muted-foreground">
              More publications and technical articles are regularly added.
              Check back for the latest research in cybersecurity and AI safety.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
