import JSHero from "@/components/JSHero";
import JSFeatures from "@/components/JSFeatures";
import JSEcosystem from "@/components/JSEcosystem";
import JSCodeExample from "@/components/JSCodeExample";
import JSResources from "@/components/JSResources";

const Index = () => {
  return (
    <div className="min-h-screen">
      <JSHero />
      <JSFeatures />
      <JSCodeExample />
      <JSEcosystem />
      <JSResources />
    </div>
  );
};

export default Index;
