import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, TrendingUp, Package } from "lucide-react";

const frameworks = [
  {
    name: "React",
    category: "Frontend",
    description: "Foydalanuvchi interfeyslarini yaratish uchun eng mashhur kutubxona. Meta tomonidan qo'llab-quvvatlanadi.",
    stars: "220K+",
    trend: "hot",
    color: "from-blue-500 to-cyan-400"
  },
  {
    name: "Vue.js",
    category: "Frontend",
    description: "Progressiv JavaScript framework. Oddiy va kuchli, tez o'rganish mumkin.",
    stars: "207K+",
    trend: "rising",
    color: "from-green-500 to-emerald-400"
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Server tarafida JavaScript. Tezkor, asinkron va kengayuvchan backend yechim.",
    stars: "105K+",
    trend: "hot",
    color: "from-lime-600 to-green-500"
  },
  {
    name: "Next.js",
    category: "Full-Stack",
    description: "React uchun production-ready framework. SSR, SSG va boshqa imkoniyatlar.",
    stars: "122K+",
    trend: "hot",
    color: "from-gray-800 to-gray-600"
  },
  {
    name: "TypeScript",
    category: "Language",
    description: "JavaScript'ning typed versiyasi. Xatoliklarni oldindan aniqlash imkoniyati.",
    stars: "98K+",
    trend: "rising",
    color: "from-blue-600 to-blue-400"
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Node.js uchun minimal va moslashuvchan web framework. API yaratish uchun ideal.",
    stars: "64K+",
    trend: "stable",
    color: "from-gray-700 to-gray-500"
  }
];

const JSEcosystem = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Package className="w-5 h-5 text-primary" />
            <span className="text-sm font-bold text-primary">Ekosistema</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Eng Mashhur Framework'lar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Millionlab dasturchilar ishlatadigan va ishonch bildirgan vositalar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {frameworks.map((framework, index) => (
            <Card 
              key={index}
              className="group border-2 border-border hover:border-primary/50 transition-all hover:scale-105 hover:shadow-2xl bg-card/90 backdrop-blur overflow-hidden relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${framework.color}`}></div>
              
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-2xl font-black group-hover:text-primary transition-colors">
                    {framework.name}
                  </CardTitle>
                  <Badge 
                    variant={framework.trend === 'hot' ? 'default' : 'secondary'}
                    className={`${framework.trend === 'hot' ? 'bg-gradient-to-r from-accent to-accent-glow animate-pulse' : 'bg-secondary'}`}
                  >
                    {framework.trend === 'hot' && <Star className="w-3 h-3 mr-1" />}
                    {framework.trend === 'rising' && <TrendingUp className="w-3 h-3 mr-1" />}
                    {framework.category}
                  </Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Star className="w-4 h-4 fill-primary text-primary" />
                  <span className="font-bold">{framework.stars}</span>
                  <span>GitHub Stars</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {framework.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JSEcosystem;
