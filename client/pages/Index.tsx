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
    <div className="min-h-screen bg-background matrix-bg page-transition">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full cyber-nav">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Shield className="mr-2 h-6 w-6 text-primary animate-pulse-glow" />
            <span className="font-bold cyber-text">Zaki Mohammed</span>
          </div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <div className="w-full flex-1 md:w-auto md:flex-none hidden sm:block">
              <nav className="flex items-center space-x-6 text-sm font-medium">
                <Link
                  to="/about"
                  className="transition-colors hover:text-primary"
                >
                  About
                </Link>
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
      <section className="relative py-16 md:py-20 lg:py-24 hero-bg section-transition">
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
              <h1
                className="text-6xl font-bold tracking-tight leading-[60px] cyber-text"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Zaki Mohammed
              </h1>
              <p
                className="mx-auto max-w-[700px] text-2xl leading-8 text-primary font-semibold"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Cybersecurity Professional & OT Security Specialist
              </p>
              <p className="mx-auto max-w-[700px] text-lg text-muted-foreground">
                Over 5 years of rigorous experience in cybersecurity, threat
                intelligence, and information assurance. Specializing in
                protecting operational technologies and mission-critical
                environments.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild className="cyber-hover">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="cyber-hover"
              >
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
      <section
        id="about"
        className="py-16 md:py-20 lg:py-24 about-bg section-transition"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl cyber-text">
                About Me
              </h2>
              <div className="mx-auto max-w-4xl space-y-6 text-left">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a{" "}
                  <span className="text-primary">
                    cybersecurity professional
                  </span>{" "}
                  driven by curiosity, precision, and a strong sense of mission.
                  With over{" "}
                  <span className="text-primary">
                    5 years of rigorous academic and professional experience
                  </span>{" "}
                  in cybersecurity, threat intelligence, and information
                  assurance; I've designed, implemented, and validated risk
                  management strategies for enterprises navigating today's
                  complex threat landscape.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  My current focus is on{" "}
                  <span className="text-primary">
                    protecting operational technologies (OT) environments
                  </span>{" "}
                  that are mission critical and often overlooked. My
                  professional background includes leading{" "}
                  <span className="text-primary">
                    ISO 27001 and PCI DSS initiatives
                  </span>
                  , engineering real-time detection models for industrial
                  environments, and building simulation-based cybersecurity
                  training programs that improve incident response and detection
                  efficiency.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I've worked at the intersection of technology risk, security
                  operations, and compliance, with hands-on expertise in tools
                  like{" "}
                  <span className="text-primary">
                    Splunk Enterprise, Nessus, OpenCTI, Wazuh, Suricata
                  </span>
                  , and more. I am deeply curious about developing{" "}
                  <span className="text-primary">
                    real-time detection models
                  </span>
                  , building automated response frameworks, and automating
                  threat analysis workflows.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I graduated with a{" "}
                  <span className="text-primary">
                    Bachelor's degree in Computer Science Engineering
                  </span>
                  , where I mastered the foundational skills required to
                  effectively understand and manage cybersecurity risks in
                  different applications. With a{" "}
                  <span className="text-primary">
                    Master's degree in Cybersecurity Risk Management from
                    Georgetown University
                  </span>
                  , I aim to make tangible impact working in dynamic
                  environments to ensure businesses meet their security
                  objectives.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  At Georgetown, I served in student leadership committees and
                  actively contribute to building collaborative and resilient
                  security community. I was honored with the{" "}
                  <span className="text-primary">
                    Tropaia Spirit of Georgetown Award, Tropaia Outstanding
                    Cybersecurity Student Award and Georgetown's Exceptional
                    Master's Student Award
                  </span>{" "}
                  over the period of 2 years.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I hold industry-recognized certifications including{" "}
                  <span className="text-primary">
                    CompTIA Security+, CySA+, AWS Security Specialty, (ISC)²
                    Certified in Cybersecurity
                  </span>
                  , and more.
                </p>

                <div className="mt-8 p-6 cyber-card rounded-lg border-l-4 border-l-primary">
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    <span className="text-primary">
                      I love connecting with great minds across the world
                    </span>{" "}
                    to discuss emerging security trends, innovative solutions,
                    and collaborative opportunities. Let's connect!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <Card className="cyber-card cyber-hover card-transition">
              <CardHeader>
                <Server className="h-10 w-10 text-primary animate-pulse-glow" />
                <CardTitle>OT Security Specialist</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Protecting mission-critical operational technologies and
                  industrial environments. Engineering real-time detection
                  models with 90% accuracy improvement across BACnet devices.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-hover">
              <CardHeader>
                <Award className="h-10 w-10 text-primary animate-pulse-glow" />
                <CardTitle>Compliance & Risk Management</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Leading ISO 27001 and PCI DSS initiatives. Designing and
                  implementing risk management strategies for enterprise threat
                  landscapes.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-hover">
              <CardHeader>
                <Brain className="h-10 w-10 text-primary animate-pulse-glow" />
                <CardTitle>Automated Detection & Response</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Building automated response frameworks and threat analysis
                  workflows. Developing simulation-based training programs that
                  improve incident response efficiency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 md:py-20 lg:py-24 experience-bg section-transition">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl cyber-text">
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

            <Card className="cyber-card cyber-hover">
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

            <Card className="cyber-card cyber-hover">
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
      <section
        id="education"
        className="py-16 md:py-20 lg:py-24 education-bg section-transition"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl cyber-text">
              Education
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-8 py-12">
            <Card className="cyber-card cyber-hover">
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
                    <h4 className="font-semibold mb-2">
                      Leadership & Activities:
                    </h4>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>
                        •{" "}
                        <a
                          href="https://gradgov.georgetown.edu/profiles/zaki-mohammed/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          Senator for Cybersecurity Risk Management - Graduate
                          Student Government{" "}
                          <ExternalLink className="h-3 w-3 inline" />
                        </a>
                      </li>
                      <li>
                        • Director for Online Students & Technology - Graduate
                        Student Government
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Official Documents:</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="cyber-hover"
                    >
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
                      <Badge variant="outline">
                        Tropaia Spirit of Georgetown Award (2025)
                      </Badge>
                      <Badge variant="outline">
                        Tropaia Outstanding Student Award (2025)
                      </Badge>
                      <Badge variant="outline">
                        Exceptional Master's Student Award (2024)
                      </Badge>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Coursework:</h4>
                    <p className="text-muted-foreground">
                      Information Security, Information Assurance & Risk
                      Management, Security Architecture & Design, Cyber Threat
                      Intelligence, Disruptive Technologies & Organizational
                      Change, Information Security Laws & Regulatory Compliance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Cybersecurity Accelerator Program
                    </CardTitle>
                    <CardDescription>
                      The Washington Center for Internships and Academic
                      Seminars • Apr 2025
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Completed an immersive cybersecurity experience in Washington,
                  D.C., engaging with representatives from CISA, ICANN, U.S.
                  Department of Defense, United States Cyber Command, FBI,
                  Amazon Web Services (AWS), The Aspen Institute, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="cyber-card cyber-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Advanced Computer Network Security Certificate
                    </CardTitle>
                    <CardDescription>
                      University of Colorado • Apr 2023 - Aug 2023 • GPA:
                      3.8/4.0
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Coursework:</h4>
                    <p className="text-muted-foreground">
                      Design Secure Networked Systems, Cryptography & Crypto
                      API, Firewall & IDS
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
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="cyber-hover"
                    >
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

            <Card className="cyber-card cyber-hover">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      <GraduationCap className="h-5 w-5 text-primary" />
                      Bachelor of Engineering - Computer Science Engineering
                    </CardTitle>
                    <CardDescription>
                      Visvesvaraya Technological University • Aug 2016 - Aug
                      2020 • GPA: 3.0/4.0
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Coursework:</h4>
                    <p className="text-muted-foreground">
                      Python Programming, Computer Networks & Network Security,
                      Application Security, SDLC, Design & Analysis of
                      Algorithms, Database Management Systems, Data Analytics,
                      Machine Learning
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Official Documents:</h4>
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="cyber-hover"
                    >
                      <a
                        href="https://drive.google.com/file/d/13Jt0yZ_Sx24c4GmBcXckCVMQ64O5WUzN/view?usp=sharing"
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
          </div>
        </div>
      </section>

      {/* Publications & Research */}
      <section id="publications" className="py-16 md:py-20 lg:py-24 publications-bg section-transition">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl cyber-text">
              Publications & Research
            </h2>
          </div>

          <div className="mx-auto max-w-4xl space-y-6 py-12">
            {publications.map((pub, index) => (
              <Card key={index} className="cyber-card cyber-hover">
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
                  <p className="text-muted-foreground mb-4">
                    {pub.description}
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="cyber-hover"
                  >
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
      <section className="py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl cyber-text mb-4">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Advanced cybersecurity capabilities across multiple domains with
              industry-recognized certifications
            </p>
          </div>

          {/* Technical Skills Grid */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold tracking-tighter mb-8 cyber-text text-center">
              Technical Arsenal
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {/* Threat Detection */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Threat Detection</h4>
              </Card>

              {/* Incident Response */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Search className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Incident Response</h4>
              </Card>

              {/* SOC Operations */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Server className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">SOC Operations</h4>
              </Card>

              {/* Network Security */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Network className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Network Security</h4>
              </Card>

              {/* AI/ML Security */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Brain className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">AI/ML Security</h4>
              </Card>

              {/* Programming */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Code className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Programming</h4>
              </Card>

              {/* Cloud Security */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Cloud Security</h4>
              </Card>

              {/* Risk Management */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Users className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Risk Management</h4>
              </Card>

              {/* MITRE ATT&CK */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Search className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">MITRE ATT&CK</h4>
              </Card>

              {/* Digital Forensics */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <FileText className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Digital Forensics</h4>
              </Card>

              {/* Vulnerability Management */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Vuln Management</h4>
              </Card>

              {/* Threat Intelligence */}
              <Card className="cyber-card cyber-hover text-center p-6">
                <Brain className="h-12 w-12 text-primary mx-auto mb-3 animate-pulse-glow" />
                <h4 className="font-semibold text-sm">Threat Intel</h4>
              </Card>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold tracking-tighter mb-8 cyber-text text-center">
              Technology Stack
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-orange-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Splunk</span>
                </div>
                <span className="text-sm font-medium">Splunk</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Wazuh</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-red-600 rounded-lg flex items-center justify-center">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Suricata</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Python</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-blue-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">PS</span>
                </div>
                <span className="text-sm font-medium">PowerShell</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-orange-400 rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">AWS</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Server className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Docker</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-green-600 rounded-lg flex items-center justify-center">
                  <Search className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Nessus</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-purple-600 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">OpenCTI</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-gray-700 rounded-lg flex items-center justify-center">
                  <Network className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">Wireshark</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-teal-600 rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">MITRE ATT&CK</span>
              </Card>

              <Card className="cyber-card cyber-hover p-4 text-center">
                <div className="h-12 w-12 mx-auto mb-3 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <span className="text-sm font-medium">YARA</span>
              </Card>
            </div>
          </div>

          {/* Professional Certifications */}
          <div>
            <h3 className="text-2xl font-bold tracking-tighter mb-8 cyber-text text-center">
              Professional Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="cyber-card cyber-hover p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2 text-sm leading-tight">
                        {cert.name}
                      </h4>
                      {cert.url ? (
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                          className="cyber-hover h-8 text-xs"
                        >
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1"
                          >
                            View Certificate
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        </Button>
                      ) : (
                        <Badge variant="secondary" className="text-xs">
                          Verified
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Security Frameworks */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold tracking-tighter mb-8 cyber-text text-center">
              Security Frameworks & Standards
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                "NIST CSF",
                "ISO 27001",
                "PCI DSS",
                "SOX 404",
                "IEC 62443",
                "MITRE ATT&CK",
              ].map((framework, index) => (
                <div
                  key={index}
                  className="cyber-card cyber-hover p-4 text-center border-l-4 border-l-primary"
                >
                  <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                  <span className="text-xs font-medium">{framework}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl cyber-text">
              Honors & Awards
            </h2>
          </div>

          <div className="mx-auto max-w-4xl py-12">
            <div className="grid gap-4 md:grid-cols-2">
              {awards.map((award, index) => (
                <Card key={index} className="cyber-card cyber-hover">
                  <CardContent className="flex items-center gap-3 p-6">
                    <Trophy className="h-6 w-6 text-primary animate-pulse-glow" />
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

            {/* Award Videos Section */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold tracking-tighter mb-8 cyber-text text-center">
                Award Ceremony Videos
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {/* Spirit of Georgetown Award Video */}
                <Card className="cyber-card cyber-hover overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Trophy className="h-5 w-5 text-primary" />
                      Spirit of Georgetown Award
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative group cursor-pointer">
                      <a
                        href="https://drive.google.com/file/d/1X8x7noSYrsaHQUbt0L59D02jE41WLm3x/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center relative overflow-hidden cyber-glow">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                          <div className="z-10 text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors">
                              <svg
                                className="w-8 h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <p className="text-primary font-semibold">
                              Award Ceremony Video
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Click to watch on Google Drive
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        May 2025
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="cyber-hover"
                      >
                        <a
                          href="https://drive.google.com/file/d/1X8x7noSYrsaHQUbt0L59D02jE41WLm3x/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Watch Video
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Outstanding Student Award Video */}
                <Card className="cyber-card cyber-hover overflow-hidden">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <Trophy className="h-5 w-5 text-primary" />
                      Outstanding Student Award
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="relative group cursor-pointer">
                      <a
                        href="https://drive.google.com/file/d/10vOB0TGAROu4F-AnxNMZ7BFTyT7qWsRc/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center relative overflow-hidden cyber-glow">
                          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                          <div className="z-10 text-center">
                            <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center mb-4 mx-auto group-hover:bg-primary transition-colors">
                              <svg
                                className="w-8 h-8 text-white ml-1"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M8 5v14l11-7z" />
                              </svg>
                            </div>
                            <p className="text-primary font-semibold">
                              Award Ceremony Video
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Click to watch on Google Drive
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        May 2025
                      </span>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="cyber-hover"
                      >
                        <a
                          href="https://drive.google.com/file/d/10vOB0TGAROu4F-AnxNMZ7BFTyT7qWsRc/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                        >
                          Watch Video
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background via-muted/30 to-background"
      >
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl cyber-text">
              Let's Connect & Collaborate
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Passionate about emerging security trends, innovative solutions,
              and collaborative opportunities in cybersecurity? Let's discuss
              how we can work together to advance the field.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground mt-4">
              <span>🔹 OT Security</span>
              <span>🔹 Threat Intelligence</span>
              <span>🔹 Risk Management</span>
              <span>🔹 Security Research</span>
              <span>🔹 AI Safety</span>
            </div>
          </div>

          <div className="mx-auto max-w-sm space-y-4 py-12">
            <Button className="w-full cyber-hover" size="lg" asChild>
              <a
                href="mailto:zaki@promaitheon-icsec.com"
                className="flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                zaki@promaitheon-icsec.com
              </a>
            </Button>

            <Button
              variant="outline"
              className="w-full cyber-hover"
              size="lg"
              asChild
            >
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

      {/* Mobile Navigation - only visible on mobile */}
      <nav className="mobile-nav sm:hidden">
        <div className="mobile-nav-grid">
          <Link to="/about" className="mobile-nav-item">
            <Users className="h-4 w-4 mx-auto mb-1" />
            About
          </Link>
          <a href="#experience" className="mobile-nav-item">
            <Briefcase className="h-4 w-4 mx-auto mb-1" />
            Work
          </a>
          <Link to="/articles" className="mobile-nav-item">
            <BookOpen className="h-4 w-4 mx-auto mb-1" />
            Research
          </Link>
          <a href="#contact" className="mobile-nav-item">
            <Mail className="h-4 w-4 mx-auto mb-1" />
            Contact
          </a>
        </div>
      </nav>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0 cyber-nav pb-20 sm:pb-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Shield className="h-6 w-6 text-primary animate-pulse-glow" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2024 Zaki Mohammed. Cybersecurity Engineer & Researcher.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
