const techStack = [
  { name: "Figma", category: "Design", icon: "🎨" },
  { name: "Python", category: "Backend", icon: "🐍" },
  { name: "Django", category: "Framework", icon: "🌐" },
  { name: "JavaScript", category: "Frontend", icon: "⚡" },
  { name: "React", category: "Frontend", icon: "⚛️" },
  { name: "React Native", category: "Mobile", icon: "📱" },
  { name: "PostgreSQL", category: "Database", icon: "🐘" },
  { name: "TypeScript", category: "Frontend", icon: "🔷" },
  { name: "REST APIs", category: "Backend", icon: "🔗" },
  { name: "Git", category: "DevOps", icon: "📦" },
  { name: "Docker", category: "DevOps", icon: "🐳" },
  { name: "Tailwind CSS", category: "Styling", icon: "🎯" },
];

const TechStackSection = () => (
  <section id="tech" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Tools</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technology Stack</h2>
        <p className="text-muted-foreground">We choose the right tool for every project — always prioritizing reliability, scalability, and performance.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {techStack.map((t) => (
          <div key={t.name} className="group flex items-center gap-3 p-4 rounded-xl bg-card border border-border card-elevated">
            <span className="text-2xl">{t.icon}</span>
            <div>
              <p className="font-semibold text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TechStackSection;
