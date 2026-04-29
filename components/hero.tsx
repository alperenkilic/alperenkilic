import { Mail, Phone, MapPin, Globe } from "lucide-react";

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect width="4" height="12" x="2" y="9"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export function Hero() {
  return (
    <section className="min-h-[70vh] flex flex-col justify-center py-20 px-6">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-6">
          <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full border border-primary/20">
            Ar-Ge Muhendisi
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
          Alperen <span className="text-primary">Kilic</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mb-10">
          Gomulu sistemler, Linux tabanli altyapilar ve IoT cozumleri uzerine calisan bir Ar-Ge muhendisiyim. 
          Dusuk guc tuketimli sistemler, saha kosullarina dayanikli cihaz tasarimi ve uctan uca sistem entegrasyonu 
          konularinda deneyim sahibiyim.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-10">
          <a 
            href="mailto:kilicalperen@icloud.com" 
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <Mail className="w-4 h-4 text-primary" />
            <span className="text-sm">kilicalperen@icloud.com</span>
          </a>
          
          <a 
            href="tel:+905468953746" 
            className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border hover:border-primary/50 transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span className="text-sm">+90 546 895 37 46</span>
          </a>
          
          <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-lg border border-border">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-sm">Istanbul, Turkiye</span>
          </div>
        </div>
        
        <div className="flex gap-4">
          <a 
            href="https://linkedin.com/in/alperenkilic" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <LinkedinIcon />
            LinkedIn
          </a>
          
          <a 
            href="https://www.alperenkilic.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-lg font-medium hover:border-primary/50 transition-colors"
          >
            <Globe className="w-5 h-5" />
            Website
          </a>
        </div>
      </div>
    </section>
  );
}
