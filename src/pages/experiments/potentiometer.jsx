import Navigation from "@/components/Navigation";

const PotentiometerExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Potentiometer</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the Potentiometer experiment in a clear, exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>To determine the internal resistance of a given primary cell using a potentiometer.</li>
              </ul>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Potentiometer</li>
                <li>Primary cell</li>
                <li>Rheostat</li>
                <li>Standard cell</li>
                <li>Two one way keys</li>
                <li>Galvanometer</li>
                <li>Jockey</li>
                <li>Ammeter</li>
                <li>Voltmeter</li>
                <li>High resistance box</li>
                <li>Connecting wires</li>
              </ul>
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold mb-4">Theory</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>The potentiometer works on the principle that the potential drop across a uniform wire is directly proportional to its length.</li>
                <li>
                  If <strong>E</strong> is the emf and <strong>V</strong> is terminal voltage, then when current flows through internal resistance <strong>r</strong>:
                  <br />
                  <strong>E = V + Ir</strong>
                </li>
                <li>The balance length is proportional to potential difference.</li>
              </ul>
            </div>

            {/* Procedure */}
            <div>
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Connect the circuit as per the circuit diagram.</li>
                <li>Insert the cell whose internal resistance is to be found.</li>
                <li>Adjust the rheostat so that a suitable current flows through the potentiometer wire.</li>
                <li>Take balancing length <strong>l₁</strong> without connecting external resistance across the cell.</li>
                <li>Now connect a known resistance across the cell and take balancing length <strong>l₂</strong>.</li>
                <li>Repeat readings 3–4 times for accuracy.</li>
                <li>
                  Use the formula to calculate internal resistance:
                  <br />
                  <strong>r = R (l₁ − l₂) / l₂</strong>
                </li>
              </ol>
            </div>

            {/* Observation Table */}
            <div className="space-y-4">
              <h2 id="Observation Table"className="text-xl font-semibold mb-4">Observation Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full border border-border text-sm">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border px-3 py-2">S.No</th>
                      <th className="border border-border px-3 py-2">Resistance R (ohm)</th>
                      <th className="border border-border px-3 py-2">Balancing Length l₁ (cm)</th>
                      <th className="border border-border px-3 py-2">Balancing Length l₂ (cm)</th>
                      <th className="border border-border px-3 py-2">Internal Resistance r (ohm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-3 py-2 text-center">1</td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 text-center">2</td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 text-center">3</td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculation */}
            <div>
              <h2 id="Calculation"className="text-xl font-semibold mb-2">Calculation</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Mean values of <strong>l₁</strong> and <strong>l₂</strong> are calculated.</li>
                <li>
                  Internal resistance is calculated using:
                  <br />
                  <strong>r = R (l₁ − l₂) / l₂</strong>
                </li>
              </ul>
            </div>

            {/* Result */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>The internal resistance of the given cell is ______ ohms (within limits of experimental error).</li>
              </ul>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Connections should be tight.</li>
                <li>The jockey should not be rubbed on the wire — only tapping is allowed.</li>
                <li>Do not plug key for a long time.</li>
                <li>Zero error of instruments should be checked.</li>
                <li>Use only a small current in the circuit.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Loose connections</li>
                <li>Non-uniform potentiometer wire</li>
                <li>Parallax error during reading</li>
                <li>Heating of wire</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-4">Viva Questions</h2>
              <div className="space-y-4 text-muted-foreground">
                {[
                  { q: "What is a potentiometer?", a: "A device used to measure potential difference accurately." },
                  { q: "What is the principle of a potentiometer?", a: "Potential drop across a uniform wire is directly proportional to its length." },
                  { q: "Why is a potentiometer more accurate than a voltmeter?", a: "Because it does not draw current from the circuit." },
                  { q: "What is internal resistance?", a: "The resistance offered by the electrolyte inside a cell." },
                  { q: "Why should the jockey not slide on the wire?", a: "Because it may damage the wire or change resistance." },
                  { q: "What is balance length?", a: "The length of the potentiometer wire at which galvanometer shows null deflection." },
                  { q: "What is null deflection condition?", a: "When no current flows through galvanometer." },
                  { q: "Why small current is used?", a: "To avoid heating and change of resistance." },
                  { q: "What happens if the wire is non-uniform?", a: "Proportionality between potential drop and length will not hold." },
                  { q: "What is the SI unit of resistance?", a: "Ohm." },
                  { q: "Why is rheostat used?", a: "To control the current in the circuit." },
                  { q: "Why key should not be closed for long?", a: "To prevent heating." },
                  { q: "What is emf?", a: "Energy supplied per unit charge." },
                  { q: "What is potential difference?", a: "Work done per unit charge between two points." },
                  { q: "Why standard cell is used?", a: "To set a reference potential gradient." },
                  { q: "What is potential gradient?", a: "Potential drop per unit length." },
                  { q: "What type of wire is used?", a: "Uniform manganin or constantan wire." },
                  { q: "What is the unit of potential difference?", a: "Volt." },
                  { q: "What is meant by sensitivity?", a: "Accuracy of detecting small changes." },
                  { q: "Why is galvanometer used?", a: "To detect current flow." }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-blue-500 pl-4">
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

export default PotentiometerExperiment;
