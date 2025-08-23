import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Settings, Zap, Radio, Wrench } from "lucide-react";

const products = [
  {
    icon: Settings,
    title: "DSL Busbar Systems",
    description: "High-quality electrical conductor systems for efficient power distribution in crane operations",
    features: ["Durable Construction", "Safety Certified", "Easy Installation"]
  },
  {
    icon: Zap,
    title: "Limit Switches",
    description: "Precision limit switches ensuring safe and accurate crane positioning with reliable performance",
    features: ["High Precision", "Weather Resistant", "Long Lasting"]
  },
  {
    icon: Radio,
    title: "Crane Radio Remotes",
    description: "Advanced wireless control systems for precise and safe remote crane operations",
    features: ["Wireless Control", "Long Range", "Interference Free"]
  },
  {
    icon: Wrench,
    title: "Current Collectors",
    description: "Robust current collector systems for seamless power transfer in industrial crane applications",
    features: ["Seamless Transfer", "Low Maintenance", "Energy Efficient"]
  }
];

const ProductsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cmk-gray/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-cmk-text mb-6">
            Our Product Range
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive solutions for all your crane equipment needs, engineered with precision and built to last
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <Card
              key={product.title}
              className="group hover:shadow-cmk-lg transition-all duration-500 hover:scale-105 border-0 shadow-cmk-card animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-cmk-blue to-cmk-blue/80 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-cmk-text mb-4">
                  {product.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature) => (
                    <li key={feature} className="text-sm text-cmk-text flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-cmk-orange rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="outline"
                  className="w-full border-cmk-blue text-cmk-blue hover:bg-cmk-blue hover:text-white transition-all duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-cmk-blue hover:bg-cmk-blue/90 text-white font-semibold px-8 py-4 rounded-full shadow-cmk-lg transition-all duration-300 hover:scale-105"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;