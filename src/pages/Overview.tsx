import { CheckCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import LanguageSidebar from "@/components/LanguageSidebar";
import { useState } from "react";

const Overview = () => {
  const [language, setLanguage] = useState("en");

  const content = {
    en: {
      title: "Overview",
      subtitle: "What We Offer",
      points: [
        "We help Class 11 and 12 students understand Physics and Chemistry practicals in a clear, step-by-step way.",
        "Each experiment is explained with objectives, required apparatus, formulas, procedures, and observation tables.",
        "Our content is designed to remove confusion and build real understanding, not rote learning.",
        "Students also get viva questions, precautions, and common mistakes to avoid in the lab.",
        "All explanations are simple, exam-oriented, and aligned with school practical requirements.",
        "We are currently in the early stages of development and will gradually continue to improve and expand alongside the curriculum.Your feedback is extremely valuable to us and helps us grow.Thank you for your support!!!",
      ],
    },
    hi: {
      title: "अवलोकन",
      subtitle: "हम क्या प्रदान करते हैं",
      points: [
        "हम कक्षा 11 और 12 के छात्रों को भौतिकी और रसायन विज्ञान के प्रैक्टिकल स्पष्ट, चरण-दर-चरण तरीके से समझने में मदद करते हैं।",
        "प्रत्येक प्रयोग को उद्देश्यों, आवश्यक उपकरणों, सूत्रों, प्रक्रियाओं और प्रेक्षण तालिकाओं के साथ समझाया गया है।",
        "हमारी सामग्री भ्रम को दूर करने और वास्तविक समझ बनाने के लिए डिज़ाइन की गई है, रटना नहीं।",
        "छात्रों को वाइवा प्रश्न, सावधानियां और प्रयोगशाला में बचने के लिए सामान्य गलतियां भी मिलती हैं।",
        "सभी व्याख्याएं सरल, परीक्षा-उन्मुख और स्कूल प्रैक्टिकल आवश्यकताओं के अनुरूप हैं।",
        "यह प्लेटफ़ॉर्म छात्रों को प्रैक्टिकल परीक्षाओं के दौरान बेहतर प्रदर्शन करने और आत्मविश्वासी महसूस करने में सहायता करने के लिए बनाया गया है।",
      ],
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <LanguageSidebar currentLanguage={language} onLanguageChange={setLanguage} />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="text-center mb-16 opacity-0 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">{t.title}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle}</p>
          </div>

          <div className="space-y-6">
            {t.points.map((point, index) => (
              <div
                key={index}
                className="flex gap-4 p-6 bg-card border border-border rounded-xl opacity-0 animate-fade-in"
                style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              >
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                <p className="text-foreground leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Overview;
