import { Card } from "@/components/ui/card";
import { CheckCircle2, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const JSCodeExample = () => {
  const [copied, setCopied] = useState(false);

  const codeExample = `// Modern JavaScript ES6+ sintaksisi
const greeting = (name) => {
  return \`Salom, \${name}! 👋\`;
};

// Async/Await bilan API so'rovlari
const fetchUserData = async (userId) => {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Xato:', error);
  }
};

// React komponenti yaratish
function App() {
  const [count, setCount] = useState(0);
  
  return (
    <button onClick={() => setCount(count + 1)}>
      Bosildi: {count} marta
    </button>
  );
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Oddiy va Kuchli Sintaksis
            </h2>
            <p className="text-xl text-muted-foreground">
              Zamonaviy JavaScript'ning chiroyli va tushunarli kod yozish imkoniyati
            </p>
          </div>

          <Card className="p-0 overflow-hidden border-2 border-border hover:border-primary/50 transition-all shadow-2xl animate-scale-in">
            {/* Code editor header */}
            <div className="bg-gradient-to-r from-muted to-muted/50 px-6 py-4 flex items-center justify-between border-b-2 border-border">
              <div className="flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-accent"></div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                  <div className="w-3 h-3 rounded-full bg-success"></div>
                </div>
                <span className="text-sm font-mono font-semibold text-muted-foreground">app.js</span>
              </div>
              <Button
                size="sm"
                variant="ghost"
                onClick={handleCopy}
                className="hover:bg-primary/10"
              >
                {copied ? (
                  <CheckCircle2 className="w-4 h-4 text-success" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </Button>
            </div>

            {/* Code content */}
            <div className="bg-gradient-to-br from-card to-muted/30 p-8 overflow-x-auto">
              <pre className="text-sm md:text-base leading-relaxed">
                <code className="font-mono">
                  <span className="text-muted-foreground">// Modern JavaScript ES6+ sintaksisi</span>
                  {'\n'}
                  <span className="text-secondary">const</span> <span className="text-primary">greeting</span> = <span className="text-accent">(</span><span className="text-foreground">name</span><span className="text-accent">)</span> <span className="text-secondary">=&gt;</span> <span className="text-accent">{'{'}</span>
                  {'\n  '}
                  <span className="text-secondary">return</span> <span className="text-success">{`\`Salom, \${name}! 👋\``}</span>;
                  {'\n'}
                  <span className="text-accent">{'}'}</span>;
                  {'\n\n'}
                  <span className="text-muted-foreground">// Async/Await bilan API so'rovlari</span>
                  {'\n'}
                  <span className="text-secondary">const</span> <span className="text-primary">fetchUserData</span> = <span className="text-secondary">async</span> <span className="text-accent">(</span><span className="text-foreground">userId</span><span className="text-accent">)</span> <span className="text-secondary">=&gt;</span> <span className="text-accent">{'{'}</span>
                  {'\n  '}
                  <span className="text-secondary">try</span> <span className="text-accent">{'{'}</span>
                  {'\n    '}
                  <span className="text-secondary">const</span> response = <span className="text-secondary">await</span> <span className="text-primary">fetch</span><span className="text-accent">(</span><span className="text-success">{`\`/api/users/\${userId}\``}</span><span className="text-accent">)</span>;
                  {'\n    '}
                  <span className="text-secondary">const</span> data = <span className="text-secondary">await</span> response.<span className="text-primary">json</span><span className="text-accent">()</span>;
                  {'\n    '}
                  <span className="text-secondary">return</span> data;
                  {'\n  '}
                  <span className="text-accent">{'}'}</span> <span className="text-secondary">catch</span> <span className="text-accent">(</span>error<span className="text-accent">)</span> <span className="text-accent">{'{'}</span>
                  {'\n    '}
                  console.<span className="text-primary">error</span><span className="text-accent">(</span><span className="text-success">'Xato:'</span>, error<span className="text-accent">)</span>;
                  {'\n  '}
                  <span className="text-accent">{'}'}</span>
                  {'\n'}
                  <span className="text-accent">{'}'}</span>;
                </code>
              </pre>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-4xl font-black text-primary mb-2">ES6+</div>
              <div className="text-sm text-muted-foreground">Zamonaviy Sintaksis</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="text-4xl font-black text-secondary mb-2">TypeScript</div>
              <div className="text-sm text-muted-foreground">Type Safety</div>
            </div>
            <div className="text-center p-6 rounded-xl bg-card/50 backdrop-blur border border-border animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-4xl font-black text-accent mb-2">JSX</div>
              <div className="text-sm text-muted-foreground">React Components</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JSCodeExample;
