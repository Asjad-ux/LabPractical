import Navigation from "@/components/Navigation";
import sc from "../../assets/sc.png"
const SemiconductorExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Semiconductors</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the Semiconductors experiment in a clear, exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>
                  To study the V–I characteristics of:
                  <br />
                  (a) p–n junction diode in forward & reverse bias
                  <br />
                  (b) Zener diode in reverse bias
                </li>
              </ul>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>p–n junction diode</li>
                <li>Zener diode</li>
                <li>Regulated DC power supply</li>
                <li>Ammeter (mA range)</li>
                <li>Voltmeter (0–3V / 0–30V)</li>
                <li>Resistor</li>
                <li>Connecting wires</li>
                <li>Breadboard or circuit board</li>
              </ul>
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold mb-4">Theory</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>A semiconductor is a material whose conductivity lies between conductor and insulator.</li>
                <li>In a p–n junction diode, current flows easily in forward bias and very little in reverse bias.</li>
                <li>In Zener diode, at a particular reverse voltage called Zener voltage, current suddenly increases.</li>
                <li>The graph between voltage (V) and current (I) gives the characteristics of the diode.</li>
              </ul>
              <img src={sc} alt="Lab" />
            </div>

            {/* Procedure */}
            <div>
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Connect the circuit for forward biased p–n junction diode.</li>
                <li>Increase voltage slowly and note current values.</li>
                <li>Plot V–I graph.</li>
                <li>Reverse the polarity and repeat for reverse bias.</li>
                <li>Repeat the experiment using Zener diode in reverse bias condition.</li>
                <li>Find the Zener breakdown voltage from graph.</li>
              </ol>
            </div>

            {/* Observation Table */}
            <div className="space-y-6">
              <h2 id="Observation Table"className="text-xl font-semibold mb-4">Observation Table</h2>
              
              {/* Forward Bias Table */}
              <div>
                <p className="font-semibold mb-2 text-foreground">Forward Bias (p–n Junction Diode)</p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-border text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-3 py-2">S.No</th>
                        <th className="border border-border px-3 py-2">Voltage (V)</th>
                        <th className="border border-border px-3 py-2">Current (mA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1,2,3,4,5].map(i => (
                        <tr key={i}>
                          <td className="border border-border px-3 py-2 text-center">{i}</td>
                          <td className="border border-border px-3 py-2 text-center">-</td>
                          <td className="border border-border px-3 py-2 text-center">-</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Reverse Bias Table */}
              <div>
                <p className="font-semibold mb-2 text-foreground">Reverse Bias (p–n Junction Diode)</p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-border text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-3 py-2">S.No</th>
                        <th className="border border-border px-3 py-2">Voltage (V)</th>
                        <th className="border border-border px-3 py-2">Current (µA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1,2,3,4,5].map(i => (
                        <tr key={i}>
                          <td className="border border-border px-3 py-2 text-center">{i}</td>
                          <td className="border border-border px-3 py-2 text-center">-</td>
                          <td className="border border-border px-3 py-2 text-center">-</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Zener Diode Table */}
              <div>
                <p className="font-semibold mb-2 text-foreground">Zener Diode (Reverse Bias)</p>
                <div className="overflow-x-auto">
                  <table className="w-full border border-border text-sm">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border px-3 py-2">S.No</th>
                        <th className="border border-border px-3 py-2">Voltage (V)</th>
                        <th className="border border-border px-3 py-2">Current (mA)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[1,2,3,4,5].map(i => (
                        <tr key={i}>
                          <td className="border border-border px-3 py-2 text-center">{i}</td>
                          <td className="border border-border px-3 py-2 text-center">-</td>
                          <td className="border border-border px-3 py-2 text-center">-</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Calculation */}
            <div>
              <h2 id="Calculation"className="text-xl font-semibold mb-2">Calculation</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Plot V–I graphs for all cases.</li>
                <li>Find knee voltage for p–n junction diode.</li>
                <li>Find Zener breakdown voltage from graph.</li>
              </ul>
            </div>

            {/* Result */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Knee voltage of p–n junction diode = ______ V</li>
                <li>Zener breakdown voltage = ______ V</li>
              </ul>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Connections should be tight.</li>
                <li>Increase voltage gradually.</li>
                <li>Use correct polarity.</li>
                <li>Take readings without parallax error.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Loose connections</li>
                <li>Parallax error</li>
                <li>Faulty meters</li>
                <li>Temperature variations</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-4">Viva Questions</h2>
              <div className="space-y-4 text-muted-foreground">
                {[
                  { q: "What is a semiconductor?", a: "A material whose conductivity lies between conductor and insulator." },
                  { q: "Give two examples of semiconductors.", a: "Silicon and Germanium." },
                  { q: "What is a p–n junction diode?", a: "A semiconductor device which allows current in one direction only." },
                  { q: "What is biasing?", a: "Connecting external voltage across a diode is called biasing." },
                  { q: "What is forward bias?", a: "When p–side is connected to positive terminal and n–side to negative terminal." },
                  { q: "What is reverse bias?", a: "When p–side is connected to negative terminal and n–side to positive terminal." },
                  { q: "What is knee voltage?", a: "Minimum forward voltage at which current increases rapidly." },
                  { q: "What is a Zener diode?", a: "A diode specially designed to operate in breakdown region." },
                  { q: "What is Zener breakdown?", a: "Sudden increase in current at a fixed reverse voltage." },
                  { q: "What is the use of Zener diode?", a: "It is used as a voltage regulator." },
                  { q: "What is the charge of electron?", a: "−1.6 × 10⁻¹⁹ C." },
                  { q: "What are majority carriers in n–type?", a: "Electrons." },
                  { q: "What are majority carriers in p–type?", a: "Holes." },
                  { q: "What is depletion region?", a: "Region around the junction devoid of free charge carriers." },
                  { q: "What is the unit of current?", a: "Ampere (A)." },
                  { q: "What is the unit of voltage?", a: "Volt (V)." },
                  { q: "Why resistor is used in the circuit?", a: "To limit the current and protect the diode." },
                  { q: "Does temperature affect diode current?", a: "Yes, current increases with temperature." },
                  { q: "Where is diode used?", a: "Rectifiers, regulators, protection circuits etc." },
                  { q: "What happens to current when reverse bias increases?", a: "It remains very small until breakdown." }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-green-500 pl-4">
                    <p className="font-semibold text-foreground">
                      {i + 1}. {item.q}
                    </p>
                    <p className="mt-1">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SemiconductorExperiment;
