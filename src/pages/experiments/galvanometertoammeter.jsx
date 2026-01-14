import Navigation from "@/components/Navigation";
import gta1 from "../../assets/gta1.png"
import gta2 from "../../assets/gta2.png"
import gta3 from "../../assets/gta3.png"
const GalvanometertoAmmeterExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Conversion of Galvanometer to Ammeter</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the conversion of galvanometer to ammeter experiment in a clear, exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>To convert a galvanometer into an ammeter of given range.</li>
                <li>To determine the current sensitivity of the galvanometer.</li>
              </ul>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Galvanometer</li>
                <li>Battery eliminator</li>
                <li>Rheostat</li>
                <li>Low resistance shunt (S)</li>
                <li>Key</li>
                <li>Resistance box</li>
                <li>Connecting wires</li>
                <li>Milliammeter</li>
              </ul>
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold">Theory</h2>
              <p className="text-muted-foreground mb-3">
                <li>A galvanometer is a device used to detect small currents.</li>
                <li>To measure large currents, a shunt of very low resistance is connected in parallel with the galvanometer.</li>
                <li>This allows most of the current to pass through the shunt, protecting the galvanometer.</li>
                <li>If G is the resistance of galvanometer and S is the shunt resistance, then the current divides into Ig through galvanometer and (I − Ig) through shunt.</li>
                <li>Since voltage across shunt = voltage across galvanometer:<br />Ig × G = (I − Ig) × S</li>
                <li>This relation is used to design the required range of ammeter.</li>
              </p>
              <img src={gta1} alt="Lab" />
            </div>

            {/* Procedure */}
            <div>
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <img src={gta2} alt="Lab" />
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Make connections as shown in circuit diagram.</li>
                <li>Without shunt, adjust rheostat till galvanometer shows full scale deflection.</li>
                <li>Note the milliammeter reading \( I_g \) (galvanometer full scale current).</li>
                <li>Connect shunt S across galvanometer terminals.</li>
                <li>Increase current till galvanometer again shows full scale deflection.</li>
                <li>Note milliammeter reading \( I \) (ammeter range).</li>
                <li>Repeat for different values of shunt resistance.</li>
              </ul>
            </div>

            {/* Observation Table */}
            <div className="space-y-4">
              <h2 id="Observation Table"className="text-xl font-semibold mb-4">Observation Table</h2>
              <div className="space-y-3 text-muted-foreground">
                <p className="font-medium mb-2">Galvanometer to Ammeter Conversion</p>
                <table className="w-full border border-border text-sm mb-4">
                  <thead className="bg-muted/40">
                    <tr>
                      <th className="border border-border p-2">S.No</th>
                      <th className="border border-border p-2">Shunt S (Ω)</th>
                      <th className="border border-border p-2">Ig (mA)</th>
                      <th className="border border-border p-2">I (mA)</th>
                      <th className="border border-border p-2">G (Ω)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border p-2">1</td>
                      <td className="border border-border p-2"></td>
                      <td className="border border-border p-2"></td>
                      <td className="border border-border p-2"></td>
                      <td className="border border-border p-2"></td>
                    </tr>
                    <tr>
                      <td className="border border-border p-2">2</td>
                      <td className="border border-border p-2"></td>
                      <td className="border border-border p-2"></td>
                      <td className="border border-border p-2"></td>
                      <td className="border border-border p-2"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculation */}
            <section>
              <h2 id="Calculations"className="text-xl font-semibold mb-2">Calculation</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3"/>
              <p>  
                <li>If G = resistance of galvanometer</li>
                <li>Ig = full-scale deflection current of galvanometer</li>
                <li>I = required range of ammeter</li>
                <li>Then shunt resistance  
                    S = (Ig × G) / (I − Ig)
                </li>
                <li>Using the above formula, calculate S.</li>
                <li>Compare measured current with standard ammeter.</li>
              </p>
            </section>

            {/*Result*/}
            <div>
                <h2 id="Result"className="text-xl font-semibold mb-2">Result"</h2>
                <ul className="text-muted-foreground list-disc list-inside space-y-2">
                    <li>
                        The given galvanometer is successfully converted into a Ammeter.
                    </li>
                    <li>
                        Range of Ammmeter = ______ V
                    </li>
                    <li>
                        Parallel resistance R<sub>s</sub> = ______ Ω
                    </li>
                </ul>
                <img src={gta3} alt="Lab" />
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Connections should be neat and tight.</li>
                <li>Shunt resistance should have low value.</li>
                <li>Current should not exceed safe limit of galvanometer.</li>
                <li>Readings should be taken at full scale deflection.</li>
                <li>Parallax error should be avoided.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Non-uniform resistance of shunt wire.</li>
                <li>Loose connections.</li>
                <li>Parallax error in taking readings.</li>
                <li>Variation in battery eliminator voltage.</li>
                <li>Resistance of connecting wires not negligible.</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-2">Viva Questions</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>
                  <span className="font-semibold">What is a galvanometer?</span>
                  <br />
                  A galvanometer is an instrument used to detect and measure small electric currents.
                </li>
                <li>
                  <span className="font-semibold">What is an ammeter?</span>
                  <br />
                  An ammeter is an instrument used to measure large electric currents.
                </li>
                <li>
                  <span className="font-semibold">Why is shunt used in ammeter?</span>
                  <br />
                  Shunt is a low resistance connected in parallel to bypass most of the current.
                </li>
                <li>
                  <span className="font-semibold">Why is shunt resistance low?</span>
                  <br />
                  To allow maximum current to pass through it and minimum through galvanometer.
                </li>
                <li>
                  <span className="font-semibold">What is current sensitivity?</span>
                  <br />
                  It is the current required to produce full scale deflection in galvanometer.
                </li>
                <li>
                  <span className="font-semibold">Why ammeter is always connected in series?</span>
                  <br />
                  To measure total current flowing through the circuit.
                </li>
                <li>
                  <span className="font-semibold">What happens if ammeter range is exceeded?</span>
                  <br />
                  Galvanometer coil may get damaged due to excessive current.
                </li>
                <li>
                  <span className="font-semibold">Why shunt is made of thick wire?</span>
                  <br />
                  To have low resistance and carry large current without heating.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default GalvanometertoAmmeterExperiment;
