import { Award, Users, Clock, CheckCircle } from "lucide-react";

const stats = [
  { icon: Clock, value: "7+", label: "Years of Experience" },
  { icon: CheckCircle, value: "25+", label: "Projects Delivered" },
  { icon: Users, value: "20+", label: "Happy Clients" },
  { icon: Award, value: "8+", label: "Healthcare Systems" },
];

const AboutSection = () => (
  <section id="about" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">About Celab Tech</p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Passionate About Building Systems That Matter</h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              At Celab Tech, we don't just write code — we build digital ecosystems that transform how healthcare professionals and pharmaceutical companies operate. With over 7 years in the industry, we've seen firsthand how the right technology can improve patient outcomes and save lives.
            </p>
            <p>
              Our deep specialization in healthcare technology means we understand the unique challenges: regulatory compliance, data sensitivity, system reliability, and the critical importance of getting every detail right.
            </p>
            <p>
              From web platforms that manage entire clinic workflows to mobile apps that help asthma patients track their condition daily — every project we take on is driven by our belief that technology should serve humanity's most essential needs.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="p-6 rounded-xl bg-card border border-border card-elevated text-center">
              <s.icon size={28} className="mx-auto mb-3 text-primary" />
              <p className="text-3xl font-bold text-gradient mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
