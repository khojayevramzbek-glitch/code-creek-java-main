import { Button } from "@/components/ui/button";
import { Code, Sparkles, Rocket, ArrowRight } from "lucide-react";
import heroImage from "@/assets/js-hero.jpg";

const JSHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-primary/5 to-secondary/5">
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroImage} 
          alt="JavaScript programming" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in">
            <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            <span className="text-sm font-bold tracking-widest uppercase bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Dunyo Eng Mashhur Dasturlash Tili
            </span>
            <Sparkles className="w-6 h-6 text-accent animate-pulse" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-8 animate-fade-in-up">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-shift">
              JavaScript
            </span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-foreground/80 mb-6 font-semibold animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Web'ni Jonlantiruvchi Til
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Interaktiv veb-saytlar, mobil ilovalar va server dasturlari yarating. 
            Bitta til bilan hamma narsani qiling!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary to-primary-glow hover:from-primary-dark hover:to-primary text-primary-foreground font-bold text-lg px-8 py-6 shadow-xl hover:shadow-2xl transition-all group">
              <Rocket className="mr-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
              Boshlash
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary hover:bg-primary/10 font-bold text-lg px-8 py-6 group">
              <Code className="mr-2 h-6 w-6 group-hover:rotate-12 transition-transform" />
              Kod Ko'rish
            </Button>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-card via-card to-primary/5 backdrop-blur border-2 border-border hover:border-primary transition-all hover:scale-105 hover:shadow-2xl animate-scale-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-5xl font-black bg-gradient-to-br from-primary to-primary-glow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                95%
              </div>
              <div className="text-sm text-muted-foreground font-semibold">Veb-saytlarda Ishlatiladi</div>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-card via-card to-secondary/5 backdrop-blur border-2 border-border hover:border-secondary transition-all hover:scale-105 hover:shadow-2xl animate-scale-in" style={{ animationDelay: '1s' }}>
              <div className="text-5xl font-black bg-gradient-to-br from-secondary to-secondary-glow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                #1
              </div>
              <div className="text-sm text-muted-foreground font-semibold">GitHub'da Eng Ommabop</div>
            </div>
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-card via-card to-accent/5 backdrop-blur border-2 border-border hover:border-accent transition-all hover:scale-105 hover:shadow-2xl animate-scale-in" style={{ animationDelay: '1.2s' }}>
              <div className="text-5xl font-black bg-gradient-to-br from-accent to-accent-glow bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                14M+
              </div>
              <div className="text-sm text-muted-foreground font-semibold">Dasturchilar Dunyoda</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JSHero;
