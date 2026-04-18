import { ExternalLink, ArrowRight } from "lucide-react";

const projects = [
  {
    title: "PharmTrack Pro",
    category: "Pharmaceutical",
    status: "Deployed",
    desc: "End-to-end pharmacy management system with drug inventory tracking, prescription management, and automated restocking alerts.",
    tech: ["Django", "React", "PostgreSQL"],
    type: "Web App",
  },
  {
    title: "MedConnect",
    category: "Healthcare",
    status: "Deployed",
    desc: "Telemedicine platform connecting patients with doctors — featuring video consultations, appointment scheduling, and medical records management.",
    tech: ["React Native", "Django", "PostgreSQL"],
    type: "Mobile & Web",
  },
  {
    title: "ClinicFlow EHR",
    category: "Healthcare",
    status: "Deployed",
    desc: "Electronic health records system for clinics — streamlining patient data, lab results, and billing in one unified interface.",
    tech: ["React", "Python", "PostgreSQL"],
    type: "Web App",
  },
  {
    title: "DrugSafe Inventory",
    category: "Pharmaceutical",
    status: "Deployed",
    desc: "Real-time pharmaceutical inventory management with expiry tracking, batch control, and regulatory compliance reporting.",
    tech: ["Django", "JavaScript", "PostgreSQL"],
    type: "Web App",
  },
  {
    title: "HealthPulse Mobile",
    category: "Healthcare",
    status: "Deployed",
    desc: "Patient health monitoring mobile app with vitals tracking, medication reminders, and direct doctor communication.",
    tech: ["React Native", "Django REST"],
    type: "Mobile App",
  },
  {
    title: "OFAS",
    category: "Healthcare",
    status: "In Development",
    desc: "Comprehensive asthma patient management platform — inhaler tracking, trigger logging, peak flow monitoring, and emergency action plans for a leading health agency.",
    tech: ["React Native", "Django", "PostgreSQL", "Figma"],
    type: "Mobile & Web",
    highlight: true,
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">Our Portfolio</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects That Make an Impact</h2>
        <p className="text-muted-foreground">A selection of deployed systems and active projects across healthcare and pharmaceutical domains.</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className={`relative p-6 rounded-xl bg-card border card-elevated flex flex-col ${p.highlight ? "border-primary glow" : "border-border"}`}>
            {p.highlight && (
              <span className="absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                🚀 Currently Building
              </span>
            )}
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold px-2 py-1 rounded bg-accent text-accent-foreground">{p.category}</span>
              <span className={`text-xs font-medium ${p.status === "Deployed" ? "text-secondary" : "text-primary"}`}>
                {p.status === "Deployed" ? "✅ " : "⏳ "}{p.status}
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">{p.desc}</p>
            <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
              <div className="flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">{t}</span>
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{p.type}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
