import { Button } from "@/components/ui/button";
import { BookOpen, Video, Code2, Users, GraduationCap, FileText, ArrowRight } from "lucide-react";

const resources = [
  {
    icon: GraduationCap,
    title: "O'rganish Yo'li",
    description: "Boshlanuvchilar uchun to'liq kurs. Asoslardan ilg'or mavzulargacha bosqichma-bosqich.",
    link: "#",
    color: "from-primary to-primary-glow"
  },
  {
    icon: Video,
    title: "Video Darsliklar",
    description: "Amaliy misolar bilan video qo'llanmalar. Har bir mavzu chuqur tushuntirilgan.",
    link: "#",
    color: "from-accent to-accent-glow"
  },
  {
    icon: Code2,
    title: "Kod Namunalari",
    description: "Real loyihalar va tayyor kod snippetlar. Copy-paste qiling va o'rganing!",
    link: "#",
    color: "from-secondary to-secondary-glow"
  },
  {
    icon: BookOpen,
    title: "Dokumentatsiya",
    description: "Rasmiy MDN dokumentatsiyasi va eng yaxshi qo'llanmalar to'plami.",
    link: "#",
    color: "from-primary to-accent"
  },
  {
    icon: FileText,
    title: "Blog & Maqolalar",
    description: "Eng so'nggi yangiliklar, best practice'lar va professional maslahatlar.",
    link: "#",
    color: "from-secondary to-primary"
  },
  {
    icon: Users,
    title: "Hamjamiyat",
    description: "Telegram, Discord guruhlariga qo'shiling. Savol-javob va networking.",
    link: "#",
    color: "from-accent to-secondary"
  }
];

const JSResources = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-background via-primary/5 to-secondary/5 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 right-10 w-64 h-64 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-secondary/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            O'rganishni Boshlang
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-medium">
            JavaScript mutaxassisi bo'lish uchun zarur barcha manbalar
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 max-w-7xl mx-auto">
          {resources.map((resource, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card/80 backdrop-blur border-2 border-border hover:border-primary transition-all hover:scale-105 hover:shadow-2xl cursor-pointer relative overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${resource.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${resource.color} flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg relative`}>
                <resource.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                {resource.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-4">
                {resource.description}
              </p>
              
              <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                <span>Batafsil</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center space-y-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-dark hover:to-primary text-primary-foreground font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl group">
              <BookOpen className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Barcha Resurslar
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-secondary hover:bg-secondary/10 font-bold text-lg px-8 py-6 group">
              <Users className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
              Hamjamiyatga Qo'shilish
            </Button>
          </div>
          
          <p className="text-muted-foreground text-lg">
            <span className="font-bold text-primary">100,000+</span> dasturchi bizning platformada o'rganmoqda
          </p>
        </div>
      </div>
    </section>
  );
};

export default JSResources;
