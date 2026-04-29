import { Heart, Award } from "lucide-react";

const activities = [
  {
    title: "Turk Egitim Vakfi (TEV)",
    description: "Basarili ogrencilere destek programi bursiyeri",
    type: "scholarship"
  },
  {
    title: "Istanbul Genclik Platformu",
    description: "Insan haklari ve sosyal sorumluluk projelerinde aktif gonullu",
    type: "volunteer"
  }
];

export function Volunteering() {
  return (
    <section className="py-20 px-6 bg-zinc-900/50" id="volunteering">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="p-2 bg-blue-500/10 rounded-lg">
            <Heart className="w-6 h-6 text-blue-500" />
          </div>
          <h2 className="text-3xl font-bold text-white">Gonulluluk ve Bursiyerlik</h2>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((activity, index) => (
            <div 
              key={index}
              className="bg-zinc-900 rounded-xl p-6 border border-zinc-800 hover:border-blue-500/30 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${
                  activity.type === "scholarship" 
                    ? "bg-green-500/10" 
                    : "bg-blue-500/10"
                }`}>
                  {activity.type === "scholarship" ? (
                    <Award className="w-6 h-6 text-green-500" />
                  ) : (
                    <Heart className="w-6 h-6 text-blue-500" />
                  )}
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{activity.title}</h3>
                  <p className="text-zinc-400">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
