import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Brain,
  Search,
  Award,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  LinkedinIcon,
  GraduationCap,
  Briefcase,
  FileText,
  Code,
  Server,
  Network,
  Globe,
  Users,
  Trophy,
  BookOpen,
} from "lucide-react";

export default function Index() {
  const skills = [
    "Threat Detection",
    "Incident Response",
    "Risk Management",
    "SOC Operations",
    "MITRE ATT&CK",
    "Splunk",
    "Wazuh",
    "Suricata",
    "Digital Forensics",
    "Vulnerability Management",
    "Python",
    "PowerShell",
    "AWS Security",
    "Industrial Cybersecurity",
    "AI/ML Security",
    "Threat Intelligence",
  ];

  const certifications = [
    {
      name: "(ISC)² Certified in Cybersecurity",
      url: "https://drive.google.com/file/d/1ZouA7j7i_q83po-_oTjuJCwm6MSukdXc/view",
    },
    {
      name: "CompTIA Security+",
      url: "https://drive.google.com/file/d/12LaMmVag-fol8V7pEcEg0Phdp09guNge/view",
    },
    {
      name: "CompTIA CySA+",
      url: "https://drive.google.com/file/d/1VvcPKlAaGA2_8VbWv6Rd2eY7SxUcOKX7/view",
    },
    {
      name: "AWS Certified Security - Specialty",
      url: "https://drive.google.com/file/d/10T31--FTOJdTgHn8WCtKq3ck25zo-sFS/view",
    },
    {
      name: "CompTIA Security Analytics Professional",
      url: "https://drive.google.com/file/d/1eXDVYJYWj3ec3RCTHdTRY5EiXq-CYe2w/view",
    },
    {
      name: "Advanced Cyber Threat Intelligence",
      url: "https://drive.google.com/file/d/1jMUjvBpcIIcw8JD5pc5rplKIMT2xzJcw/view",
    },
    {
      name: "Operationalizing MITRE ATT&CK",
      url: "https://drive.google.com/file/d/1qfEfNWrizBawKgxFjaa96FURL2EefSFT/view",
    },
    {
      name: "Qualys VMDR - Vulnerability Management",
      url: "https://drive.google.com/file/d/12-_9eFJh9JQPxqudTypZF1rNn4-jgwO8/view",
    },
  ];

  const publications = [
    {
      title: "Cognitive Bias Detection Using Advanced Prompt Engineering",
      description:
        "NLP model to flag cognitive biases in geopolitical disinformation",
      type: "IEEE Research",
      url: "https://arxiv.org/abs/2503.05516",
    },
    {
      title:
        "Threat-Informed Detection & Response Architecture for Industrial Edge",
      description:
        "SOC-ready EDR stack for real-time detection in industrial environments",
      type: "Research Project",
      url: "https://github.com/Mzaki2024/BACnet-Unified-Service",
    },
    {
      title: "Cybersecurity Framework For the Healthcare Industry Using NGFW",
      description: "Framework for protecting multi-nodal hospital networks",
      type: "IEEE Journal",
      url: "https://ieeexplore.ieee.org/document/9388455",
    },
  ];

  const awards = [
    {
      name: "Tropaia Spirit of Georgetown Award (2025)",
      url: "https://drive.google.com/file/d/1drVgUzgbMyrZAEpddMWDKu1o85ercF87/view?usp=sharing",
    },
    {
      name: "Tropaia Outstanding Cybersecurity Student (2025)",
      url: "https://drive.google.com/file/d/1VDS1DKAHhe8pVHpaVFl4Hy12oK702rjv/view?usp=sharing",
    },
    {
      name: "Exceptional Master's Student Award (2024)",
      url: "https://drive.google.com/file/d/1jmiAKdbaH91q4K1U1FmAcljrDl33-X1R/view?usp=sharing",
    },
    {
      name: "InSc Young Researcher Award - Cybersecurity (2023)",
      url: "https://drive.google.com/file/d/1ImEyVYCOpyxxsyl6jR50Xi85RScYdQZK/view?usp=sharing",
    },
    {
      name: "AICTE Vishwakarma Award - Innovation in Healthcare Cybersecurity (2020)",
      url: "https://drive.google.com/file/d/1K9mbQ3bYKdcUj6U3RQHUPo1KHmno_1qY/view?usp=sharing",
    },
  ];

  return (
    <div className="min-h-screen bg-background matrix-bg">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full cyber-nav">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Shield className="mr-2 h-6 w-6 text-primary" />
            <span className="font-bold">Zaki Mohammed</span>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <a
                  href="#about"
                  className="transition-colors hover:text-primary"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="transition-colors hover:text-primary"
                >
                  Experience
                </a>
                <a
                  href="#education"
                  className="transition-colors hover:text-primary"
                >
                  Education
                </a>
                <a
                  href="#publications"
                  className="transition-colors hover:text-primary"
                >
                  Publications
                </a>
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
                <a
                  href="#contact"
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 text-center">
            {/* Professional Photo */}
            <div className="relative animate-pulse-glow">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2F5b38fc20b8cd403b91d5d704020852cc%2Fa43dd72a9a244a2e83c9998b53926865?format=webp&width=800"
                alt="Zaki Mohammed - Georgetown University Awards Ceremony"
                className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-lg shadow-lg cyber-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-primary/10 rounded-lg"></div>
            </div>

            <div className="space-y-2">
              <h1 className="text-6xl font-bold tracking-tight leading-[60px] cyber-text" style={{ fontFamily: 'Georgia, serif' }}>
                Zaki Mohammed
              </h1>
              <p className="mx-auto max-w-[700px] text-2xl leading-8 text-primary font-semibold" style={{ fontFamily: 'Times New Roman, serif' }}>
                Cybersecurity Engineer & AI Safety Researcher
              </p>
              <p className="mx-auto max-w-[600px] text-muted-foreground">
                4+ years of experience in threat detection, incident response,
                and risk management. Building secure-by-design systems at the
                intersection of AI, threat intelligence, and post-quantum
                resilience.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#publications" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  View Publications
                </a>
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <MapPin className="h-4 w-4" />
                Washington, DC
              </div>
              <div className="flex items-center gap-1">
                <GraduationCap className="h-4 w-4" />
                Georgetown University
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                About
              </h2>
              <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Cybersecurity Engineer with expertise in threat detection,
                incident response, and AI safety research. Currently pursuing a
                Master's in Cybersecurity & Risk Management at Georgetown
                University with a focus on building secure systems that advance
                the future of cybersecurity.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="cyber-card cyber-hover">
            <Card className="cyber-card cyber-hover">
              <CardHeader>
                <Shield className="h-10 w-10 text-primary animate-pulse-glow" />
                  Advanced threat detection and incident response with 90%
                  accuracy improvement across BACnet devices at Siemens.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Brain className="h-10 w-10 text-primary" />
                <CardTitle>AI Safety Research</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Published research in IEEE on adversarial NLP and cognitive
                  bias detection in digital communications.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-10 w-10 text-primary" />
                <CardTitle>Threat Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Authored 85+ intelligence reports using MITRE ATT&CK
                  framework, boosting MTTD by 25%.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Professional Experience
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 py-12">
            <Card className="cyber-card cyber-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Threat Detection Engineering & Research
                    </CardTitle>
                    <CardDescription>
                      Siemens Technology • Apr 2024 - Aug 2024
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Developed advanced detection module for BX-SOC, increasing
                    threat detection accuracy by 90%
                  </li>
                  <li>
                    • Integrated detection modules with Building-X
                    DataVisualizer via REST and GraphQL APIs
                  </li>
                  <li>
                    • Enhanced Siemens' Industrial Edge platform with
                    open-source threat intelligence module
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Cyber Security Program Associate
                    </CardTitle>
                    <CardDescription>
                      AntWalk Inc. • Aug 2022 - Jul 2023
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Designed custom cybersecurity training programs achieving
                    90% average NPS
                  </li>
                  <li>
                    • Configured virtual labs for real-world attack scenarios,
                    improving efficiency by 30%
                  </li>
                  <li>
                    • Automated network log analysis workflows, reducing
                    processing time by 25%
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      Cyber Threat Intelligence Analyst
                    </CardTitle>
                    <CardDescription>
                      Neumetric • May 2020 - Jul 2022
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>
                    • Authored 85+ tactical and strategic intelligence reports
                    with IOCs and TTPs
                  </li>
                  <li>
                    • Accelerated incident response by 30% through deep
                    contextual analysis
                  </li>
                  <li>
                    • Mapped adversary behaviors using MITRE ATT&CK, boosting
                    MTTD by 25%
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Education
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 py-12">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Master's in Cybersecurity & Risk Management
                    </CardTitle>
                    <CardDescription>
                      Georgetown University • Aug 2023 - May 2025 • GPA: 3.9/4.0
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Leadership & Activities:</h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• <a href="https://gradgov.georgetown.edu/profiles/zaki-mohammed/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Senator for Cybersecurity Risk Management - Graduate Student Government <ExternalLink className="h-3 w-3 inline" /></a></li>
                      <li>• Director for Online Students & Technology - Graduate Student Government</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Official Documents:</h4>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://drive.google.com/file/d/1MsXrqSOObYM6orBdBDB5xPE5N5sWVcxk/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        View Official Transcript
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Awards & Honors:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Tropaia Spirit of Georgetown Award (2025)</Badge>
                      <Badge variant="outline">Tropaia Outstanding Student Award (2025)</Badge>
                      <Badge variant="outline">Exceptional Master's Student Award (2024)</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Coursework:</h4>
                    <p className="text-muted-foreground">
                      Information Security, Information Assurance & Risk Management, Security Architecture & Design,
                      Cyber Threat Intelligence, Disruptive Technologies & Organizational Change, Information Security
                      Laws & Regulatory Compliance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Cybersecurity Accelerator Program
                    </CardTitle>
                    <CardDescription>
                      The Washington Center for Internships and Academic Seminars • Apr 2025
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed an immersive cybersecurity experience in Washington, D.C., engaging with representatives
                  from CISA, ICANN, U.S. Department of Defense, United States Cyber Command, FBI, Amazon Web Services (AWS),
                  The Aspen Institute, and more.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Advanced Computer Network Security Certificate
                    </CardTitle>
                    <CardDescription>
                      University of Colorado • Apr 2023 - Aug 2023 • GPA: 3.8/4.0
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Coursework:</h4>
                    <p className="text-muted-foreground">
                      Design Secure Networked Systems, Cryptography & Crypto API, Firewall & IDS
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Key Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline">Network Security</Badge>
                      <Badge variant="outline">Cybersecurity</Badge>
                      <Badge variant="outline">Cryptography</Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Official Documents:</h4>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href="https://drive.google.com/file/d/1Qs_L0qtBI5pyLRYlS2RwUWcUlEg76-WL/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        View Official Transcript
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Bachelor of Engineering - Computer Science Engineering
                    </CardTitle>
                    <CardDescription>
                      Visvesvaraya Technological University • Aug 2016 - Aug 2020 • GPA: 3.0/4.0
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Coursework:</h4>
                    <p className="text-muted-foreground">
                      Python Programming, Computer Networks & Network Security, Application Security, SDLC,
                      Design & Analysis of Algorithms, Database Management Systems, Data Analytics, Machine Learning
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      <section
        id="publications"
        className="py-12 md:py-24 lg:py-32"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Publications & Research
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 py-12">
            {publications.map((pub, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        {pub.title}
                      </CardTitle>
                      <Badge variant="secondary">{pub.type}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{pub.description}</p>
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      View Publication
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Certifications */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tighter mb-6">
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold tracking-tighter mb-6">
                Certifications
              </h3>
              <div className="space-y-2">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    {cert.url ? (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                      >
                        {cert.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    ) : (
                      <span className="text-muted-foreground">{cert.name}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Honors & Awards
            </h2>
          </div>

          <div className="mx-auto max-w-4xl py-12">
            <div className="grid gap-4 md:grid-cols-2">
              {awards.map((award, index) => (
                <Card key={index}>
                  <CardContent className="flex items-center gap-3 p-6">
                    <Trophy className="h-6 w-6 text-primary" />
                    <a
                      href={award.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 flex-1"
                    >
                      {award.name}
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Interested in cybersecurity research, threat intelligence, or AI
              safety? Let's connect.
            </p>
          </div>

          <div className="mx-auto max-w-sm space-y-4 py-12">
            <Button className="w-full" size="lg" asChild>
              <a
                href="mailto:znm6@georgetown.edu"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                znm6@georgetown.edu
              </a>
            </Button>

            <Button variant="outline" className="w-full" size="lg" asChild>
              <a
                href="https://www.linkedin.com/in/mohammedzaki20/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <LinkedinIcon className="h-4 w-4" />
                LinkedIn Profile
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>

            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-4">
              <Phone className="h-4 w-4" />
              (202) 294-7559
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Shield className="h-6 w-6 text-primary" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Zaki Mohammed. Cybersecurity Engineer & Researcher.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}