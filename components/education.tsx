import { GraduationCap, Award, FileText } from "lucide-react";

const projects = [
  {
    title: "IEEE Yayini",
    description: "Assessment of Several PID Controllers Applied to DC Motors (MATLAB/Simulink)"
  },
  {
    title: "Tubitak 2209-B",
    description: "Otonom robot supurge icin gezinim ve engelden kacinma algoritmalarinin gelistirilmesi"
  },
  {
    title: "Teknofest",
    description: "Bitkilerdeki hastalik tespiti icin yapay zeka destekli mobil robot sistemi gelistirilmesi"
  },
  {
    title: "Bonumair (2020)",
    description: "UV-C armaturlerle dezenfeksiyon saglayan sistem. UNIdeathon finalist projesi"
  },
  {
    title: "Gercek Zamanli Atik Seviye Takip Sistemi",
    description: "SMS bildirimli takip sistemi (Autoliv icin gelistirilmistir)"
  }
];

export function Education() {
  return (
    <section className="py-20 px-6 bg-card/50" id="education">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-primary/10 rounded-lg">
            <GraduationCap className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Egitim</h2>
        </div>
        
        <div className="bg-card rounded-xl p-8 border border-border mb-12">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <h3 className="text-2xl font-semibold">Yildiz Teknik Universitesi</h3>
              <p className="text-primary font-medium text-lg">Kontrol ve Otomasyon Muhendisligi</p>
            </div>
            <div className="text-right">
              <span className="block text-muted-foreground">2017 - 2025</span>
              <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                GPA: 2.93
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2 bg-accent/10 rounded-lg">
            <Award className="w-5 h-5 text-accent" />
          </div>
          <h3 className="text-xl font-semibold">Projeler ve Basarilar</h3>
        </div>
        
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-5 border border-border hover:border-primary/30 transition-colors"
            >
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold mb-1">{project.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
