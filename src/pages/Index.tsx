import { useState } from "react";
import { ArrowRight, Beaker, Atom, BookOpen, Users } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import LanguageSidebar from "@/components/LanguageSidebar";
import FlaskAnimation from "@/components/FlaskAnimation";
import SitemapSection from "@/components/SitemapSection.tsx";

const Index = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "Master Your Practicals",
      subtitle: "Clear, step-by-step guidance for Class 11 & 12 Physics and Chemistry experiments",
      cta: "Explore Experiments",
      features: [
        {
          icon: Beaker,
          title: "Chemistry Labs",
          description: "Detailed procedures for all chemistry practicals with safety guidelines",
        },
        {
          icon: Atom,
          title: "Physics Labs",
          description: "Comprehensive experiments with formulas and observation tables",
        },
        {
          icon: BookOpen,
          title: "Exam Ready",
          description: "Viva questions, precautions, and common mistakes to avoid",
        },
        {
          icon: Users,
          title: "Student Focused",
          description: "Simple explanations designed for real understanding",
        },
      ],
    },
    hi: {
      title: "अपने प्रैक्टिकल में महारत हासिल करें",
      subtitle: "कक्षा 11 और 12 की भौतिकी और रसायन विज्ञान प्रयोगों के लिए स्पष्ट, चरण-दर-चरण मार्गदर्शन",
      cta: "प्रयोग देखें",
      features: [
        {
          icon: Beaker,
          title: "रसायन विज्ञान प्रयोगशाला",
          description: "सुरक्षा दिशानिर्देशों के साथ सभी रसायन विज्ञान प्रैक्टिकल की विस्तृत प्रक्रियाएं",
        },
        {
          icon: Atom,
          title: "भौतिकी प्रयोगशाला",
          description: "सूत्रों और प्रेक्षण तालिकाओं के साथ व्यापक प्रयोग",
        },
        {
          icon: BookOpen,
          title: "परीक्षा के लिए तैयार",
          description: "वाइवा प्रश्न, सावधानियां और बचने के लिए सामान्य गलतियां",
        },
        {
          icon: Users,
          title: "छात्र केंद्रित",
          description: "वास्तविक समझ के लिए डिज़ाइन की गई सरल व्याख्याएं",
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LanguageSidebar currentLanguage={language} onLanguageChange={setLanguage} />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-muted/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-muted/10 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="space-y-4 opacity-0 animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Class 11 & 12 Practicals
                </div>
                
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  {t.title}
                </h1>
                
                <p className="text-xl text-muted-foreground max-w-lg">
                  {t.subtitle}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in animation-delay-200">
                <Link
                  to="/class-11/chemistry"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg font-medium transition-all duration-300 hover:gap-4 hover:shadow-lg hover:shadow-foreground/10"
                >
                  {t.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                
                <Link
                  to="/overview"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-lg text-foreground font-medium transition-all duration-300 hover:bg-secondary"
                >
                  Learn More
                </Link>
              </div>
              
              {/* Stats */}
              <div className="flex gap-8 pt-8 opacity-0 animate-fade-in animation-delay-400">
                <div>
                  <div className="text-3xl font-bold">20+</div>
                  <div className="text-sm text-muted-foreground">Experiments</div>
                </div>
                <div className="w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold">2</div>
                  <div className="text-sm text-muted-foreground">Subjects</div>
                </div>
                <div className="w-px bg-border" />
              </div>
            </div>
            
            {/* Right content - Flask Animation */}
            <div className="flex justify-center lg:justify-end opacity-0 animate-fade-in animation-delay-400">
              <FlaskAnimation />
            </div>
          </div>
        </div>
      </section>
      <div className="flex justify-end p-4">
      </div>

      
      {/* Features Section */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-8">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive resources designed to help you excel in practical exams
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.features.map((feature, index) => (
              <div
                key={feature.title}
                className="group p-6 bg-card border border-border rounded-xl transition-all duration-300 hover:border-muted-foreground/50 hover:shadow-lg opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Quick Links */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <Link
              to="/class-11/physics"
              className="group p-8 bg-background border border-border rounded-xl transition-all duration-300 hover:border-muted-foreground/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Class 11</div>
                  <h3 className="text-2xl font-semibold">Physics Practicals</h3>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
            
            <Link
              to="/class-11/chemistry"
              className="group p-8 bg-background border border-border rounded-xl transition-all duration-300 hover:border-muted-foreground/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Class 11</div>
                  <h3 className="text-2xl font-semibold">Chemistry Practicals</h3>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
            
            <Link
              to="/class-12/physics"
              className="group p-8 bg-background border border-border rounded-xl transition-all duration-300 hover:border-muted-foreground/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Class 12</div>
                  <h3 className="text-2xl font-semibold">Physics Practicals</h3>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
            
            <Link
              to="/class-12/chemistry"
              className="group p-8 bg-background border border-border rounded-xl transition-all duration-300 hover:border-muted-foreground/50"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Class 12</div>
                  <h3 className="text-2xl font-semibold">Chemistry Practicals</h3>
                </div>
                <ArrowRight className="w-6 h-6 text-muted-foreground transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </Link>
          </div>
        </div>
      </section>
      <SitemapSection />
      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2026 LabPractical All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/overview" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Overview
              </Link>
              <Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};


export default Index;
