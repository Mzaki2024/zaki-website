import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, ArrowLeft, MapPin, GraduationCap, Briefcase, Award, Target, Users, Globe, Heart } from "lucide-react";
import { Link } from "react-router-dom";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Precision & Excellence",
      description: "Approaching every challenge with meticulous attention to detail and commitment to the highest standards."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building bridges across disciplines and fostering collaborative environments for innovative solutions."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Working to protect critical infrastructure and create safer digital environments worldwide."
    },
    {
      icon: Heart,
      title: "Mission-Driven",
      description: "Motivated by the opportunity to make the world more secure and beautiful through technology."
    }
  ];

  const timeline = [
    {
      year: "2025",
      title: "Graduation & Recognition",
      description: "Completing Master's at Georgetown with Tropaia Spirit Award. Focusing on operational technology security."
    },
    {
      year: "2024",
      title: "Industrial Security Research",
      description: "Led threat detection engineering at Siemens Technology, achieving 90% accuracy improvement in BACnet environments."
    },
    {
      year: "2023",
      title: "Georgetown Leadership",
      description: "Served as Senator for Cybersecurity Risk Management, launching Georgetown's first cybersecurity society."
    },
    {
      year: "2022-2023",
      title: "Training & Development",
      description: "Designed cybersecurity training programs at AntWalk Inc., achieving 90% average satisfaction scores."
    },
    {
      year: "2020-2022",
      title: "Threat Intelligence",
      description: "Authored 85+ intelligence reports at Neumetric, specializing in MITRE ATT&CK framework implementation."
    },
    {
      year: "2020",
      title: "Academic Foundation",
      description: "Graduated with Computer Science Engineering degree, beginning journey in cybersecurity research."
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
                  to="/about"
                  className="transition-colors hover:text-primary text-primary"
                >
                  About
                </Link>
                <Link
                  to="/articles"
                  className="transition-colors hover:text-primary"
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
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Button variant="outline" asChild className="mb-8 cyber-hover">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Portfolio
              </Link>
            </Button>

            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight cyber-text">
                My Story
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                From curious computer science student to cybersecurity professional protecting critical infrastructure worldwide.
              </p>
            </div>

            {/* Profile Image & Quick Info */}
            <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
              <div className="relative animate-pulse-glow mx-auto md:mx-0 order-2 md:order-1">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F5b38fc20b8cd403b91d5d704020852cc%2Fa43dd72a9a244a2e83c9998b53926865?format=webp&width=800"
                  alt="Zaki Mohammed - Georgetown University Awards Ceremony"
                  className="w-80 h-96 object-cover rounded-lg shadow-lg cyber-glow"
                />
              </div>

              <div className="space-y-6 order-1 md:order-2">
                <div>
                  <h2 className="text-2xl font-bold mb-4 cyber-text">Quick Facts</h2>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-primary" />
                      <span>Washington, DC</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      <span>Georgetown University - Cybersecurity Risk Management</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <span>5+ Years Professional Experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary" />
                      <span>Tropaia Spirit of Georgetown Award Winner</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {["OT Security", "Threat Intelligence", "Risk Management", "AI Safety", "Industrial Cybersecurity"].map((spec, index) => (
                      <Badge key={index} variant="outline" className="cyber-hover">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Journey */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 cyber-text">My Journey</h2>

            <div className="space-y-8">
              <div className="max-w-4xl mx-auto text-center mb-12">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a cybersecurity professional driven by <span className="text-primary font-semibold">curiosity, precision, and a strong sense of mission</span>.
                  With over 5 years of rigorous academic and professional experience, I've dedicated my career to protecting the systems
                  that power our modern world.
                </p>
              </div>

              <div className="grid gap-8">
                {timeline.map((item, index) => (
                  <Card key={index} className="cyber-card cyber-hover">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                            <span className="text-primary font-bold">{item.year}</span>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2 cyber-text">{item.title}</h3>
                          <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 cyber-text">Core Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide my work and drive my commitment to cybersecurity excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="cyber-card cyber-hover text-center p-6">
                  <CardHeader className="pb-4">
                    <value.icon className="h-12 w-12 text-primary mx-auto mb-4 animate-pulse-glow" />
                    <CardTitle className="text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="cyber-card p-12 text-center">
              <div className="space-y-6">
                <Shield className="h-16 w-16 text-primary mx-auto animate-pulse-glow" />
                <h2 className="text-2xl font-bold cyber-text">Mission Statement</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  My current focus is on <span className="text-primary font-semibold">protecting operational technologies (OT) environments</span> that are mission critical and often overlooked.
                  I believe in building secure-by-design systems that advance the future of cybersecurity at the intersection of AI, threat intelligence, and post-quantum resilience.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm deeply curious about developing <span className="text-primary font-semibold">real-time detection models</span>, building automated response frameworks,
                  and creating innovative solutions that make the digital world safer for everyone.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="py-16 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 cyber-text">Beyond Cybersecurity</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="cyber-card cyber-hover p-6">
                <CardHeader>
                  <Globe className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-lg">International Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Passionate about international education and building bridges across cultures through technology and shared learning experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-hover p-6">
                <CardHeader>
                  <Users className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-lg">Community Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Founded Georgetown's first cybersecurity society and actively contribute to building collaborative security communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="cyber-card cyber-hover p-6">
                <CardHeader>
                  <Heart className="h-8 w-8 text-primary mb-4" />
                  <CardTitle className="text-lg">Making Beauty</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Dedicated to making the world more beautiful through technology, ethical AI development, and meaningful human connections.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold cyber-text">Let's Connect</h2>
              <p className="text-lg text-muted-foreground">
                I love connecting with great minds across the world to discuss emerging security trends,
                innovative solutions, and collaborative opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="cyber-hover">
                  <Link to="/#contact">Get In Touch</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="cyber-hover">
                  <Link to="/articles">View My Research</Link>
                </Button>
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
