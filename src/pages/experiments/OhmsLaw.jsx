import Navigation from "@/components/Navigation";

const OhmsLawExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Ohm's Law</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the Ohm's Law experiment in a clear, exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <p className="text-muted-foreground">
                To verify Ohm's Law by establishing a relationship between the potential difference (V) across a conductor and the current (I) flowing through it and to determine the resistance of the given conductor.
              </p>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Battery / Battery eliminator</li>
                <li>Plug key</li>
                <li>Rheostat</li>
                <li>Ammeter</li>
                <li>Voltmeter</li>
                <li>Resistance wire / given conductor</li>
                <li>Connecting Wires</li>
                <li>Switch</li>
              </ul>
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold">Theory</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>At constant temperature, the current flowing through a conductor is directly proportional to the potential difference applied across its ends.</p>
                <p>V is directly proportional to I</p>
                <p>V = IR</p>
                <ul className="list-disc list-inside space-y-1">
                  <li>Where:</li>
                  <li>V = Potential Difference</li>
                  <li>I = Current</li>
                  <li>R = Resistance of the Conductor</li>
                </ul>
                <p>If a graph is plotted between V and I, a straight line is obtained, proving Ohm's Law. The slope of the V-I graph gives the resistance R.</p>
              </div>
            </div>

            {/* Procedure */}
            <div>
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Set up the circuit as shown in the circuit diagram with ammeter in series and voltmeter in parallel with the resistor.</li>
                <li>Check the polarity of ammeter and voltmeter.</li>
                <li>Close the plug key and adjust the rheostat to obtain a small current.</li>
                <li>Note the readings of ammeter (I) and voltmeter (V).</li>
                <li>Increase the current gradually using the rheostat and note corresponding V and I readings.</li>
                <li>Take at least 5–6 sets of readings.</li>
                <li>Plot a graph between V and I.</li>
              </ol>
            </div>

            {/* Observation Table */}
            <div className="space-y-4">
              <h2 id="Observation Table"className="text-xl font-semibold mb-4">Observation Table</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left">S.No.</th>
                      <th className="border border-gray-300 p-3 text-left">Ammeter Reading (I) in A</th>
                      <th className="border border-gray-300 p-3 text-left">Voltmeter Reading (V) in V</th>
                      <th className="border border-gray-300 p-3 text-left">Resistance R = V/I (Ω)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3">1</td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">2</td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">3</td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3">4</td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                    </tr>
                    <tr className="font-semibold">
                      <td className="border border-gray-300 p-3">Mean R</td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3"></td>
                      <td className="border border-gray-300 p-3">....Ω</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculations */}
            <div className="space-y-3 text-muted-foreground">
              <h2 id="Calculation"className="text-xl font-semibold mb-4">Calculation</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>R = V/I</li>
                <li>Calculate resistance for each set of readings.</li>
                <li>Find the mean value of resistance.</li>
                <li>From Graph: R = Slope of V-I graph</li>
              </ul>
            </div>

            {/* Result */}
            <div className="space-y-3 text-muted-foreground">
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Ohm's Law is verified.</li>
                <li>The resistance of the given conductor is R =.....Ω.</li>
              </ul>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>All connections should be tight and clean.</li>
                <li>Ammeter should be connected in series and voltmeter in parallel.</li>
                <li>Current should be increased gradually.</li>
                <li>Temperature of the conductor should remain constant.</li>
                <li>Readings should be taken carefully without parallax error.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Loose connections in the circuit.</li>
                <li>Heating of the conductor due to large current.</li>
                <li>Zero error in ammeter or voltmeter.</li>
                <li>Inaccuracy of measuring instruments.</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div className="space-y-6">
              <h2 id="Viva Questions"className="text-xl font-semibold mb-6">Viva Questions with Answers (Ohm's Law)</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">1. What is Ohm's Law?</p>
                    <p className="text-muted-foreground mt-1">
                      Ohm's Law states that at constant temperature, the current flowing through a conductor is directly proportional to the potential difference applied across it.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">2. Write the mathematical form of Ohm's Law.</p>
                    <p className="text-muted-foreground mt-1">V = IR, where V is potential difference, I is current and R is resistance.</p>
                  </div>
                  <div>
                    <p className="font-semibold">3. What is resistance?</p>
                    <p className="text-muted-foreground mt-1">
                      Resistance is the property of a conductor by which it opposes the flow of electric current.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">4. What is the SI unit of resistance?</p>
                    <p className="text-muted-foreground mt-1">The SI unit of resistance is ohm (Ω).</p>
                  </div>
                  <div>
                    <p className="font-semibold">5. Why is ammeter connected in series?</p>
                    <p className="text-muted-foreground mt-1">
                      Ammeter is connected in series because it measures the current flowing through the circuit.
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">6. Why is voltmeter connected in parallel?</p>
                    <p className="text-muted-foreground mt-1">
                      Voltmeter is connected in parallel to measure the potential difference across the conductor.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">7. What type of graph is obtained between V and I?</p>
                    <p className="text-muted-foreground mt-1">
                      A straight-line graph is obtained between potential difference and current.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">8. What does the slope of V-I graph represent?</p>
                    <p className="text-muted-foreground mt-1">
                      The slope of the V-I graph represents the resistance of the conductor.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">9. What happens to resistance when temperature increases?</p>
                    <p className="text-muted-foreground mt-1">
                      Resistance of a metallic conductor increases with increase in temperature.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold">10. What is an ohmic conductor?</p>
                    <p className="text-muted-foreground mt-1">
                      A conductor which obeys Ohm's Law is called an ohmic conductor.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default OhmsLawExperiment;
