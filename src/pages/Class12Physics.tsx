import { Atom, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LanguageSidebar from "@/components/LanguageSidebar";
import { useState } from "react";

const experiments = [
  {
    id: 1,
    title: "Ohm's Law",
    description: "Verify Ohm's law and plot V–I characteristics of a resistor.",
    slug: "ohms-law",
  },
  {
    id: 2,
    title: "Meter Bridge",
    description: "Find the resistance of a wire using meter bridge.",
    slug: "meter-bridge",
  },
  {
    id: 3,
    title: "Galvanometer to Ammeter",
    description: "Convert a galvanometer into an ammeter.",
    slug: "galvanometer-to-ammeter",
  },
  {
    id: 4,
    title: "Galvanometer to Voltmeter",
    description: "Convert a galvanometer into a voltmeter.",
    slug: "galvanometer-to-voltmeter",
  },
  {
    id: 5,
    title: "Potentiometer",
    description: "Compare EMF of two cells using potentiometer.",
    slug: "potentiometer",              
  },
  {
    id: 6,
    title: "Prism and Spectrometer",
    description: "Determine refractive index of glass using spectrometer.",
    slug: "prism-and-spectrometer",
  },
  {
    id: 7,
    title: "Semiconductor Devices",
    description:
      "Study I–V characteristics of p–n junction and Zener diode.",
    slug: "semiconductors",            
  },
];

const Class12Physics = () => {
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
              <div className="text-sm text-muted-foreground">Class 12</div>
              <h1 className="text-3xl font-bold">Physics Practicals</h1>
            </div>
          </div>

          {/* Experiment Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {experiments.map((exp, index) => (
              <Link
                key={exp.id}
                to={`/class-12/physics/${exp.slug}`}
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

export default Class12Physics;
