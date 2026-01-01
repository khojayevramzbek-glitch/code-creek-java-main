import { Zap, Globe, Layers, Smartphone, Database, Cloud } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Tezkor Ishlash",
    description: "Modern JavaScript engine'lari millisoniyalarda kod bajaradi va yuqori tezlikni ta'minlaydi.",
    color: "from-primary to-primary-glow",
    delay: "0s"
  },
  {
    icon: Globe,
    title: "Universal Til",
    description: "Brauzer, server, mobil - hamma joyda JavaScript. Bitta til, cheksiz imkoniyatlar!",
    color: "from-secondary to-secondary-glow",
    delay: "0.1s"
  },
  {
    icon: Layers,
    title: "Boy Ekosistema",
    description: "NPM orqali millionlab tayyor kutubxonalar. React, Vue, Angular va boshqalar.",
    color: "from-accent to-accent-glow",
    delay: "0.2s"
  },
  {
    icon: Smartphone,
    title: "Mobil Ilovalar",
    description: "React Native va Ionic bilan iOS va Android uchun native ilovalar yarating.",
    color: "from-primary to-accent",
    delay: "0.3s"
  },
  {
    icon: Database,
    title: "Full-Stack Dasturlash",
    description: "Node.js bilan backend, frontend va database - barchasini JS da yozing!",
    color: "from-secondary to-primary",
    delay: "0.4s"
  },
  {
    icon: Cloud,
    title: "Cloud & Serverless",
    description: "AWS Lambda, Vercel, Netlify - zamonaviy cloud xizmatlari JS'ni yaxshi qo'llab-quvvatlaydi.",
    color: "from-accent to-secondary",
    delay: "0.5s"
  }
];

const JSFeatures = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Nega JavaScript?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            Zamonaviy web dasturlashning asosi va eng kuchli vositasi
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group border-2 border-border hover:border-transparent transition-all hover:scale-105 hover:shadow-2xl bg-card/80 backdrop-blur overflow-hidden relative animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <CardHeader className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JSFeatures;
