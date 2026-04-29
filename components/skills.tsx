import { Cpu, Cloud, Network, Code, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Gomulu Sistemler",
    icon: Cpu,
    skills: ["ESP32", "STM32", "Raspberry Pi", "UART", "GPIO", "ADC/DAC", "PCB Tasarimi", "Low-Power Sistemler"]
  },
  {
    title: "Cloud ve DevOps",
    icon: Cloud,
    skills: ["AWS EC2", "AWS Lambda", "S3", "Glacier", "IAM", "Terraform", "Linux", "Bash", "systemd", "cron"]
  },
  {
    title: "Ag ve Haberlesme",
    icon: Network,
    skills: ["TCP/IP", "NAT", "Firewall", "VLAN", "QoS", "Uzaktan Yonetim", "Fault-Tolerant Sistemler"]
  },
  {
    title: "Programlama",
    icon: Code,
    skills: ["Python", "PowerShell", "Bash Scripting", "API Entegrasyonu", "MATLAB/Simulink"]
  },
  {
    title: "Diger",
    icon: Wrench,
    skills: ["Solar Enerji Sistemleri", "Guc Yonetimi", "IoT", "HMI/SCADA", "PLC Programlama"]
  }
];

export function Skills() {
  return (
    <section className="py-20 px-6" id="skills">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-primary/10 rounded-lg">
            <Code className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Yetenekler</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
