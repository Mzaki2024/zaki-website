import { Button } from "@/components/ui/button";
import { Shield, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
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

      <div className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <Button variant="outline" asChild className="mb-8">
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          <h1 className="text-4xl font-bold tracking-tighter">
            Cybersecurity Blog
          </h1>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights on cybersecurity engineering, threat detection, AI safety,
            and the evolving landscape of digital security.
          </p>

          <div className="mt-12 p-8 border border-dashed border-muted-foreground/25 rounded-lg">
            <p className="text-muted-foreground">
              Blog posts coming soon. This space will feature detailed articles
              on:
            </p>
            <ul className="mt-4 space-y-2 text-left max-w-md mx-auto text-muted-foreground">
              <li>• Threat detection engineering best practices</li>
              <li>• AI safety and adversarial ML techniques</li>
              <li>• Industrial cybersecurity insights</li>
              <li>• Post-quantum cryptography research</li>
              <li>• SOC operations and automation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
