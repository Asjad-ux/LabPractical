import Navigation from "@/components/Navigation";
import gtv2 from "../../assets/gtv2.png"
import gtv3 from "../../assets/gtv3.png"
import gta4 from "../../assets/gtv4.png"
const GalvanometertoVoltmeterExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Conversion of Galvanometer to Voltmeter</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the conversion of galvanometer to Voltmeter experiment in a clear, exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>To convert a galvanometer into a Voltmeter of given range.</li>
                <li>To determine the current sensitivity of the galvanometer.</li>
              </ul>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Galvanometer</li>
                <li>Battery or DC power</li>
                <li>Rheostat</li>
                <li>High resistance Box (S)</li>
                <li>Plug Key</li>
                <li>Resistance box</li>
                <li>Connecting wires</li>
                <li>Voltmeter (for reference)</li>
                <li>Jockey / switches</li>
              </ul>
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold">Theory</h2>
              <p className="text-muted-foreground mb-3">
                A galvanometer is a sensitive current measuring device with very small current range.
                <br />
                To convert it into a voltmeter, a <strong>high resistance</strong> (called series resistance R<sub>s</sub>) is connected in series with it.
                <br />
                If G = resistance of galvanometer and I<sub>g</sub> = full scale deflection current, then total resistance of voltmeter becomes:
                <br />
                <strong>R = G + R<sub>s</sub></strong>
                <br />
                The range of voltmeter = <strong>V = I<sub>g</sub>(G + R<sub>s</sub>)</strong>
                <br />
                Thus, by choosing suitable R<sub>s</sub>, we can make voltmeter of any desired range.
              </p>
              <img src={gtv2} alt="Lab" />
            </div>

            {/* Procedure */}
            <div>
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Connect the galvanometer in series with high resistance R<sub>s</sub>.</li>
                <li>Connect battery and rheostat in series.</li>
                <li>Connect a standard voltmeter in parallel for calibration.</li>
                <li>Close the key and allow a small current.</li>
                <li>Adjust rheostat so galvanometer shows full scale deflection.</li>
                <li>Note corresponding voltmeter reading.</li>
                <li>Repeat readings for different voltages.</li>
                <li>Plot graph between V and galvanometer deflection.</li>
              </ol>
              <img src={gtv3} alt="Lab" />
            </div>

            {/* Observation Table */}
            <div className="space-y-4">
              <h2 id="Onservation Table"className="text-xl font-semibold mb-4">Observation Table</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="font-medium mb-2">Galvanometer to Voltmeter Conversion</p>
                <table className="w-full border border-border text-sm">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="border border-border p-2">S.No</th>
                      <th className="border border-border p-2">Galvanometer Deflection (Div)</th>
                      <th className="border border-border p-2">Voltages from Std. Voltmeter (V)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map((i) => (
                      <tr key={i}>
                        <td className="border border-border p-2 text-center">{i}</td>
                        <td className="border border-border p-2 text-center">-</td>
                        <td className="border border-border p-2 text-center">-</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculation */}
            <section>
              <h2 id="Calculation"className="text-xl font-semibold mb-2">Calculation</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Determine slope of V vs deflection graph.</li>
                <li>R = V / I<sub>g</sub></li>
                <li>
                  Series resistance:
                  <br />
                  <strong>R<sub>s</sub> = R − G</strong>
                </li>
              </ol>
              <img src={gta4} alt="Lab" />
            </section>

            {/* Result */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>The given galvanometer is successfully converted into a voltmeter.</li>
                <li>Range of voltmeter = ______ V</li>
                <li>Series resistance R<sub>s</sub> = ______ Ω</li>
              </ul>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>All connections must be tight.</li>
                <li>Press the key for short time only.</li>
                <li>Do not allow excess current.</li>
                <li>Read the voltmeter without parallax error.</li>
                <li>Use high resistance wire.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Contact resistance in wires.</li>
                <li>Galvanometer may not be perfectly calibrated.</li>
                <li>Power supply fluctuations.</li>
                <li>Parallax error while reading voltmeter.</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-2">Viva Questions</h2>
              {[
                {
                  q: "What is a galvanometer?",
                  a: "It is a device used to detect and measure small electric currents."
                },
                {
                  q: "What is a voltmeter?",
                  a: "A voltmeter is a device used to measure the potential difference between two points."
                },
                {
                  q: "How do you convert a galvanometer into a voltmeter?",
                  a: "By connecting a high resistance in series with the galvanometer."
                },
                {
                  q: "Why is a high resistance used in a voltmeter?",
                  a: "So that it draws negligible current from the circuit."
                },
                {
                  q: "Why is a galvanometer not directly used as a voltmeter?",
                  a: "Because it can only measure very small currents and may get damaged by larger currents."
                },
                {
                  q: "What is full scale deflection current?",
                  a: "It is the maximum current required to produce full scale deflection in the galvanometer."
                },
                {
                  q: "What is the SI unit of resistance?",
                  a: "Ohm (Ω)."
                },
                {
                  q: "Where is a voltmeter connected in a circuit?",
                  a: "In parallel across the component."
                },
                {
                  q: "Why is the resistance of a voltmeter very high?",
                  a: "To ensure that it does not disturb the original current in the circuit."
                },
                {
                  q: "What is the relation between voltage and current?",
                  a: "According to Ohm's law, V = IR."
                },
                {
                  q: "What happens if a voltmeter has very low resistance?",
                  a: "It will draw more current and change the circuit conditions."
                },
                {
                  q: "What is the use of a rheostat in this experiment?",
                  a: "To adjust the current flowing in the circuit."
                },
                {
                  q: "What is calibration?",
                  a: "Calibration means marking correct readings on the scale of an instrument."
                },
                {
                  q: "What is sensitivity of a galvanometer?",
                  a: "Deflection produced per unit current is called sensitivity."
                },
                {
                  q: "What type of resistance is used in this experiment?",
                  a: "High series resistance."
                },
                {
                  q: "What is the unit of potential difference?",
                  a: "Volt (V)."
                },
                {
                  q: "What is meant by range of a voltmeter?",
                  a: "It is the maximum voltage that can be measured by the voltmeter."
                },
                {
                  q: "Why should the key be pressed only for short time?",
                  a: "To avoid overheating or damaging the galvanometer."
                },
                {
                  q: "Why should readings be taken without parallax error?",
                  a: "To obtain accurate readings."
                },
                {
                  q: "Why is a voltmeter connected in parallel?",
                  a: "Because it measures potential difference across two points."
                }
              ].map((item, index) => (
                <div key={index} className="mb-4">
                  <p className="font-semibold">
                    {index + 1}. {item.q}
                  </p>
                  <p className="text-muted-foreground">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GalvanometertoVoltmeterExperiment;
