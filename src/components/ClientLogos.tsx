const clients = [
  { name: "ElectroMech", logo: "EM" },
  { name: "SafeX Industries", logo: "SX" },
  { name: "Anupam", logo: "AP" },
  { name: "KonecraneS", logo: "KC" },
  { name: "Elmech", logo: "EL" },
  { name: "Hercules Hoists", logo: "HH" },
  { name: "Cranex", logo: "CX" }
];

const ClientLogos = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-cmk-text mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We're proud to serve leading companies across various industries with our premium crane equipment solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-6 bg-gradient-card rounded-xl border border-gray-200 hover:border-cmk-blue/30 hover:shadow-cmk-card transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cmk-blue to-cmk-blue/80 rounded-lg flex items-center justify-center mb-2 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-lg">{client.logo}</span>
                </div>
                <div className="text-sm font-medium text-cmk-text opacity-75 group-hover:opacity-100 transition-opacity">
                  {client.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-200">
          <div className="text-center animate-slide-up">
            <div className="text-4xl font-bold text-cmk-blue mb-2">15+</div>
            <div className="text-muted-foreground">Years of Experience</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="text-4xl font-bold text-cmk-blue mb-2">500+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center animate-slide-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-4xl font-bold text-cmk-blue mb-2">100+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;