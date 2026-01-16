import Navigation from "@/components/Navigation";
import LanguageSidebar from "@/components/LanguageSidebar";
import { useState } from "react";

const About = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "About Us",
      tagline: "Learn . Study . Score . Win",
      description:
        "We are passionate about making science education accessible and understandable for all students. Our mission is to help you succeed in your practical exams with confidence.",
    },
    hi: {
      title: "हमारे बारे में",
      tagline: "सीखो · पढ़ो · स्कोर करो · जीतो",
      description:
        "हम विज्ञान शिक्षा को सभी छात्रों के लिए सुलभ और समझने योग्य बनाने के बारे में भावुक हैं। हमारा मिशन आपको आत्मविश्वास के साथ आपकी प्रैक्टिकल परीक्षाओं में सफल होने में मदद करना है।",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LanguageSidebar currentLanguage={language} onLanguageChange={setLanguage} />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="text-center opacity-0 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">{t.title}</h1>
            
            <div className="inline-block px-6 py-3 bg-card border border-border rounded-full mb-8">
              <span className="text-2xl font-medium italic text-muted-foreground">
                "{t.tagline}"
              </span>
            </div>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t.description}
            </p>
          </div>

          <div className="mt-20 grid md:grid-cols-3 gap-6 opacity-0 animate-fade-in animation-delay-200">
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">2+</div>
              <div className="text-sm text-muted-foreground">Years of Experience</div>
            </div>
            <div className="p-6 bg-card border border-border rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <div className="text-sm text-muted-foreground">Experiments Covered</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default About;
