import { Atom, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LanguageSidebar from "@/components/LanguageSidebar";
import { useState } from "react";

const experiments = [
  {
    id: 1,
    title: "Vernier Callipers",
    description:
      "Measure internal and external diameter and depth using vernier callipers.",
    slug: "vernier-callipers",
  },
  {
    id: 2,
    title: "Screw Gauge",
    description: "Determine the diameter of a wire using screw gauge.",
    slug: "screw-gauge",
  },
  {
    id: 3,
    title: "Simple Pendulum",
    description:
      "Determine acceleration due to gravity and study time period variation.",
    slug: "simple-pendulum",
  },
  {
    id: 4,
    title: "Parallelogram Law",
    description: "Verify parallelogram law of vector addition.",
    slug: "parallelogram-law",
  },
];

const Class11Physics = () => {
  const [language, setLanguage] = useState("en");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LanguageSidebar
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8">
          {/* Heading */}
          <div className="flex items-center gap-4 mb-10 animate-fade-in">
            <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center">
              <Atom className="w-7 h-7" />
            </div>
            <div>
              <div className="text-sm text-muted-foreground">Class 11</div>
              <h1 className="text-3xl font-bold">Physics Practicals</h1>
            </div>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp, index) => (
              <Link
                key={exp.id}
                to={`/class-11/physics/${exp.slug}`}
                className="group block p-6 bg-card border border-border rounded-xl transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-sm text-muted-foreground mb-2">
                      Experiment {exp.id}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.description}
                    </p>
                  </div>

                  <ArrowRight className="w-5 h-5 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Class11Physics;
