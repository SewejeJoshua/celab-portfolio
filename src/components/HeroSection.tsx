import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Heart, Monitor, Smartphone } from "lucide-react";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-hero opacity-85" />
    </div>
    <div className="relative container mx-auto px-4 py-32">
      <div className="max-w-3xl">
        <div className="flex items-center gap-2 mb-6">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-secondary/20 text-secondary border border-secondary/30">
            <Heart size={14} /> Healthcare Tech Specialists
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6" style={{ color: 'hsl(0 0% 100%)' }}>
          Building Digital Systems That{" "}
          <span className="text-gradient">Save Lives</span> &amp; Drive Innovation
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed mb-8 max-w-2xl" style={{ color: 'hsl(210 20% 80%)' }}>
          We craft seamless web &amp; mobile applications for healthcare, pharmaceuticals, and beyond — powered by passion, precision, and 7+ years of expertise.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">
            View Our Work <ArrowRight size={18} />
          </a>
          <a href="#contact" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border font-semibold hover:bg-accent/10 transition-colors" style={{ borderColor: 'hsl(0 0% 100% / 0.2)', color: 'hsl(0 0% 100%)' }}>
            Start a Project
          </a>
        </div>
        <div className="flex items-center gap-8 mt-12 pt-8" style={{ borderTop: '1px solid hsl(0 0% 100% / 0.1)' }}>
          {[
            { icon: Monitor, label: "Web Apps", count: "15+" },
            { icon: Smartphone, label: "Mobile Apps", count: "10+" },
            { icon: Heart, label: "Healthcare Projects", count: "8+" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg flex items-center justify-center" style={{ background: 'hsl(199 89% 38% / 0.2)' }}>
                <s.icon size={20} style={{ color: 'hsl(168 60% 50%)' }} />
              </div>
              <div>
                <p className="text-lg font-bold" style={{ color: 'hsl(0 0% 100%)' }}>{s.count}</p>
                <p className="text-xs" style={{ color: 'hsl(210 20% 65%)' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
