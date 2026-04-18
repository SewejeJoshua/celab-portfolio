import { Globe, Smartphone, Stethoscope, Pill, Database, Palette } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "Robust, scalable web platforms built with React, Django, and modern frameworks that perform flawlessly across all browsers.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Cross-platform mobile apps with React Native that deliver native-level experience on iOS and Android.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare Systems",
    desc: "HIPAA-aware digital health platforms — from patient management to telemedicine solutions tailored to medical practice.",
  },
  {
    icon: Pill,
    title: "Pharmaceutical Solutions",
    desc: "Drug inventory, prescription tracking, and pharmacy management systems built with compliance and accuracy at their core.",
  },
  {
    icon: Database,
    title: "Backend & API Development",
    desc: "Powerful Python/Django backends with PostgreSQL databases, RESTful APIs, and robust data architectures.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "User-centered designs crafted in Figma — intuitive, accessible, and beautiful interfaces that users love.",
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">What We Do</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">End-to-End Digital Solutions</h2>
        <p className="text-muted-foreground">From concept to deployment, we build systems that work seamlessly across every platform — with a special passion for healthcare innovation.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s) => (
          <div key={s.title} className="group p-6 rounded-xl bg-card border border-border card-elevated">
            <div className="w-12 h-12 rounded-lg bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <s.icon size={24} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
