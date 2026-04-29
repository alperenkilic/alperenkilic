import { Mail, Linkedin, Globe, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="font-semibold text-lg">Alperen Kilic</p>
            <p className="text-muted-foreground text-sm">Ar-Ge Muhendisi</p>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="mailto:kilicalperen@icloud.com"
              className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/alperenkilic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/alperenkilic"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.alperenkilic.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
              aria-label="Website"
            >
              <Globe className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            2024 Alperen Kilic. Tum haklari saklidir.
          </p>
        </div>
      </div>
    </footer>
  );
}
