import { Briefcase } from "lucide-react";

const experiences = [
  {
    company: "Natilon Teknoloji A.S.",
    role: "Arastirma ve Gelistirme Muhendisi",
    period: "Ekim 2022 - Halen",
    current: true,
    responsibilities: [
      "Linux ve Windows tabanli sistemlerde Bash, systemd ve cron kullanarak otomasyon surecleri gelistirilmesi; PowerShell ve Python ile API entegrasyonlari ve log analiz sistemlerinin kurulmasi",
      "AWS (EC2, Lambda, S3, Glacier, IAM) servisleri ve Terraform kullanarak olceklenebilir veri aktarim ve depolama altyapilarinin tasarlanmasi, kurulmasi ve operasyonun yurutulmesi",
      "Solar enerjili kamera sistemi icin guc yonetimi ve PCB tasarim sureclerinin yurutulmesi",
      "TCP/IP tabanli ag mimarilerinin tasarimi ve yonetimi; NAT, Firewall, VLAN ve QoS yapilandirmalari ile guvenli ve optimize ag altyapilarinin olusturulmasi",
      "STM32 ve ESP32 tabanli gomulu sistemlerde UART, GPIO, ADC/DAC arayuzlerinin kullanimi; Raspberry Pi ile entegre calisan veri toplama ve kontrol sistemlerinin gelistirilmesi",
      "Dusuk guc tuketimli (low-power) sistem mimarileri ve solar enerji ile calisan otonom cihazlarin gelistirilmesi",
      "Saha kosullarinda kesintisiz calisacak sekilde tasarlanmis, uzaktan yonetilebilir ve fault-tolerant sistemlerin gelistirilmesi ve devreye alinmasi"
    ]
  },
  {
    company: "ADS Muhendislik",
    role: "Stajyer Muhendis",
    period: "Temmuz 2019 - Eylul 2019",
    current: false,
    responsibilities: [
      "PLC programlama, HMI/SCADA tasarimi ve motor kontrol uygulamalari",
      "Elektrik otomasyon salt urun secimi, proje olusturma ve tekliflendirme"
    ]
  },
  {
    company: "Yildiz Teknik Universitesi",
    role: "Asistan Ogrenci",
    period: "2018 - 2021",
    current: false,
    responsibilities: [
      "Akademik destek, buro surec yonetimi ve ogrenci koordinasyonu"
    ]
  },
  {
    company: "Guvenlik Teknolojileri",
    role: "Editor",
    period: "2019 - 2020",
    current: false,
    responsibilities: [
      "Icerik uretimi ve teknik yazi olusturma",
      "Akilli guvenlik sistemleri uzerine teknik icerik derlemeleri"
    ]
  },
  {
    company: "S-Mart Guvenlik Teknolojileri Ltd. Sti.",
    role: "Stajyer Muhendis",
    period: "2017 - 2019",
    current: false,
    responsibilities: [
      "Donanim testleri, sensor uygulamalari ve yazilim destek gorevleri"
    ]
  }
];

export function Experience() {
  return (
    <section className="py-20 px-6" id="experience">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Briefcase className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-white">Is Deneyimi</h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="relative pl-8 pb-8 border-l-2 border-zinc-800 last:pb-0"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500" />
              
              <div className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-blue-500/30 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                    <p className="text-blue-500 font-medium">{exp.company}</p>
                  </div>
                  <span className={`px-3 py-1 text-sm rounded-full ${
                    exp.current 
                      ? "bg-green-500/10 text-green-500 border border-green-500/20" 
                      : "bg-zinc-800 text-zinc-400"
                  }`}>
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="text-zinc-400 text-sm leading-relaxed flex gap-2">
                      <span className="text-blue-500 mt-1.5 shrink-0">-</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
