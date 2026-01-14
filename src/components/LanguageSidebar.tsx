import { useState } from "react";
import { Globe, ChevronRight } from "lucide-react";

interface Language {
  code: string;
  label: string;
  nativeLabel: string;
}

const languages: Language[] = [
  { code: "en", label: "English", nativeLabel: "English" },
  { code: "hi", label: "Hindi", nativeLabel: "हिंदी" },
];

interface LanguageSidebarProps {
  currentLanguage: string;
  onLanguageChange: (code: string) => void;
}

const LanguageSidebar = ({ currentLanguage, onLanguageChange }: LanguageSidebarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className="fixed left-0 top-1/2 -translate-y-1/2 z-50"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className={`flex items-center transition-all duration-300 ${isExpanded ? 'translate-x-0' : '-translate-x-[calc(100%-48px)]'}`}>
        <div className="bg-card border border-border rounded-r-lg overflow-hidden shadow-lg">
          <div className="p-3 border-b border-border flex items-center gap-2">
            <Globe className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium whitespace-nowrap">Language</span>
          </div>
          
          <div className="py-2">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => onLanguageChange(lang.code)}
                className={`w-full px-4 py-2 text-left text-sm transition-all duration-200 flex items-center justify-between gap-8 ${
                  currentLanguage === lang.code
                    ? 'text-foreground bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
              >
                <span>{lang.nativeLabel}</span>
                {currentLanguage === lang.code && (
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                )}
              </button>
            ))}
          </div>
        </div>
        
        <div className="w-12 h-12 bg-card border border-l-0 border-border rounded-r-lg flex items-center justify-center cursor-pointer">
          <ChevronRight className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </div>
      </div>
    </div>
  );
};

export default LanguageSidebar;
