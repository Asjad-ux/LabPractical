import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement.tsx"
import ReactGA from "react-ga"

import Index from "./pages/Index";
import Overview from "./pages/Overview";
import About from "./pages/About";
import Class11Chemistry from "./pages/Class11Chemistry";
import Class11Physics from "./pages/Class11Physics";
import Class12Chemistry from "./pages/Class12Chemistry";
import Class12Physics from "./pages/Class12Physics";
import PrivacyPolicy from "./pages/PrivacyPolicy";

import ChemistryExperiment from "./pages/experiments/ChemistryExperiment";
import PhysicsExperiment from "./pages/experiments/PhysicsExperiment";
import ScrewGaugeExperiment from "./pages/experiments/ScrewGaugeExperiment";
import SimplePendulumExperiment from "./pages/experiments/SimplePendulumExperiment";
import ParallelogramLawExperiment from "./pages/experiments/ParallelogramLawExperiments";
import AcidBaseTitrationExperiment11 from "./pages/experiments/AcidBaseTitrationExperiment11.tsx";
import OhmsLawExperiment from "./pages/experiments/OhmsLaw"
import MeterBridgeExperiment from "./pages/experiments/MeterBridgeExperiment";
import GalvanometertoAmmeterExperiment from "./pages/experiments/galvanometertoammeter.jsx";
import GalvanometertoVoltmeterExperiment from "./pages/experiments/galvanometertovoltmeter"
import PotentiometerExperiment from "./pages/experiments/potentiometer"
import PrismExperiment from "./pages/experiments/prism.jsx"
import SemiconductorExperiment from "./pages/experiments/semiconductor.jsx"
import FunctionalGroupExperiment from "./pages/experiments/functionalgroups";
import AcidBaseTitrationExperiment12 from "./pages/experiments/AcidBaseTitrationExperiment12.tsx";
import { Analytics } from "@vercel/analytics/react";
import NotFound from "./pages/NotFound";

const TRACKING_ID = "G-MBWK7ZQC68";
ReactGA.initialize(TRACKING_ID)

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />

      <BrowserRouter>
      <ScrollToHashElement />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/about" element={<About />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />


          <Route path="/class-11/chemistry" element={<Class11Chemistry />} />
          <Route path="/class-11/physics" element={<Class11Physics />} />

          <Route path="/class-12/chemistry" element={<Class12Chemistry />} />
          <Route path="/class-12/physics" element={<Class12Physics />} />

          <Route
            path="/class-12/chemistry/acid-base-titration"
            element={<AcidBaseTitrationExperiment12 />}                          //Titration CLASS 12
          />
          <Route
            path="class-12/chemistry/functional-group-tests"
            element={<FunctionalGroupExperiment/>}                               //Functional Groups CLASS 12
          />
          <Route
            path="/class-12/physics/semiconductors"
            element={<SemiconductorExperiment/>}                                 //Semiconductors CLASS 12
          />  
          <Route
            path="/class-12/physics/potentiometer"
            element={<PotentiometerExperiment/>}                                 //Potentiometer CLASS 12  
          />
          <Route
            path="/class-12/physics/prism-and-spectrometer"
            element={<PrismExperiment/>}                                         //Prism CLASS 12
          />
          <Route
            path="/class-12/physics/galvanometer-to-voltmeter"
            element={<GalvanometertoVoltmeterExperiment/>}                       //galvano to voltmeter CLASS 12
          />  
          <Route
            path="/class-12/physics/galvanometer-to-ammeter"
            element={<GalvanometertoAmmeterExperiment/>}                         //galvano to ammeter CLASS 12
          />
          <Route
            path="/class-12/physics/meter-bridge"
            element={<MeterBridgeExperiment />}                                  //Meter Bridge CLASS 12
          />
          <Route
            path="/class-11/physics/screw-gauge"
            element={<ScrewGaugeExperiment />}                                   //Screw Gauge CLASS 11
          />
          <Route
            path="/class-11/physics/simple-pendulum"
            element={<SimplePendulumExperiment />}                               //Simple Pendulum CLASS 11
          />
          <Route
            path="/class-11/physics/parallelogram-law"
            element={<ParallelogramLawExperiment />}                             //Parallelogram Law CLASS 11
          />
          <Route
            path="/class-11/chemistry/acid-base-titration"
            element={<AcidBaseTitrationExperiment11 />}                          //Acid Base Titration CLASS 11
          />
          <Route
            path="/class-12/physics/ohms-law"
            element={<OhmsLawExperiment/>}                                       //Ohms Law CLASS 12
          />
            <Route
            path="/class-11/chemistry/:slug"                   
            element={<ChemistryExperiment />}                                    //Salt Analysis CLASS 12          
          />
          <Route
            path="/class-12/chemistry/:slug"
            element={<ChemistryExperiment />}                                    
          />
          <Route
            path="/class-11/physics/:slug"
            element={<PhysicsExperiment />}                                      //Vernier Callipers CLASS 12
          />
          <Route
            path="/class-12/physics/:slug"
            element={<PhysicsExperiment />}                                     
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);
<Analytics />

export default App;
