"use client";

import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "OFAS",
    category: "Healthcare",
    status: "Currently Building",
    desc: "Comprehensive asthma patient management platform featuring inhaler tracking, trigger logging, peak flow monitoring, and emergency action plans for improved patient outcomes.",
    tech: ["React Native", "Django", "PostgreSQL", "Figma"],
    type: "Mobile & Web",
    link: "https://ofas.onrender.com/",
    highlight: true,
  },
  {
    title: "Comfort Homes CRM",
    category: "Real Estate",
    status: "Deployed",
    desc: "Comfort Homes & Properties Ltd stands as Abuja's foremost powerhouse, where success seamlessly meets innovation. This CRM streamlines property management, client relations, and operational efficiency.",
    tech: ["Mobile App"],
    type: "iOS App",
    link: "https://apps.apple.com/ng/app/comfort-homes-crm/id6761488550",
  },
  {
    title: "Qiimeet",
    category: "Social Platform",
    status: "Deployed",
    desc: "Meet real people, chat, and build genuine connections on Qiimeet. Designed for authentic engagement, real-time messaging, and meaningful interactions.",
    tech: ["Mobile App"],
    type: "Android App",
    link: "https://play.google.com/store/apps/details?id=com.qiimeet",
  },

  // --- Updated project ---
  {
    title: "EarlyChildhood",
    category: "Education",
    status: "Deployed",
    desc: "A digital platform focused on early childhood development, enabling structured learning, child data management, and seamless interaction between caregivers and administrators.",
    tech: ["React", "TypeScript", "API Integration"],
    type: "Web App",
    link: "https://early-childhood.onrender.com/",
  },

  // --- Others (no status) ---
  {
    title: "MedConnect",
    category: "Healthcare",
    desc: "Telemedicine platform connecting patients with doctors — including video consultations, appointment scheduling, and medical records management.",
    tech: ["React Native", "Django", "PostgreSQL"],
    type: "Mobile & Web",
  },
  {
    title: "ClinicFlow EHR",
    category: "Healthcare",
    desc: "Electronic health records system designed to streamline patient data, lab results, and billing within a unified interface.",
    tech: ["React", "Python", "PostgreSQL"],
    type: "Web App",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="py-24 bg-muted/50">
    <div className="container mx-auto px-4">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
          Our Portfolio
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Projects That Make an Impact
        </h2>
        <p className="text-muted-foreground">
          A selection of real-world systems and products across healthcare, real estate, and social platforms.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => {
          const Card = (
            <div
              className={`relative p-6 rounded-xl bg-card border card-elevated flex flex-col hover:shadow-lg transition ${
                p.highlight ? "border-primary glow" : "border-border"
              }`}
            >
              {/* Highlight badge */}
              {p.highlight && (
                <span className="absolute -top-3 left-4 px-3 py-1 rounded-full text-xs font-bold bg-primary text-primary-foreground">
                  🚀 Currently Building
                </span>
              )}

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold px-2 py-1 rounded bg-accent text-accent-foreground">
                  {p.category}
                </span>

                <div className="flex items-center gap-2">
                  {/* Status badge */}
                  {p.status && (
                    <span
                      className={`text-xs font-medium ${
                        p.status === "Deployed"
                          ? "text-green-500"
                          : "text-primary"
                      }`}
                    >
                      {p.status === "Deployed" ? "✅" : "🚀"} {p.status}
                    </span>
                  )}

                  {p.link && (
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold mb-2">{p.title}</h3>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-grow">
                {p.desc}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-border">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">
                  {p.type}
                </span>
              </div>
            </div>
          );

          return p.link ? (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              {Card}
            </a>
          ) : (
            <div key={p.title}>{Card}</div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProjectsSection;