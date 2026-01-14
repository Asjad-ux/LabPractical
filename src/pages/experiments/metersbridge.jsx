import Navigation from "@/components/Navigation";

const MeterBridgeExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Meter Bridge Experiment</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the Meter Bridge Experiment in a clear, exam-oriented, and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Objective</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>To determine the unknown resistance of a given wire using a meter bridge.</li>
                <li>To verify the principle of Wheatstone bridge.</li>
              </ul>
            </div>

            {/* Apparatus */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Meter Bridge</li>
                <li>Unknown resistance wire</li>
                <li>Standard resistance box</li>
                <li>Galvanometer</li>
                <li>Cell or Battery</li>
                <li>Plug key</li>
                <li>Connecting Wires</li>
                <li>Switch</li>
              </ul>
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 className="text-xl font-semibold mb-2">Theory</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>Meter bridge works on the principle of Wheatstone bridge.</p>
                <p>At balance point, ratio of resistances equals ratio of lengths of wire.</p>
                <p>If <code>X</code> is unknown resistance and <code>R</code> is known resistance, then:</p>
                <p className="font-mono text-sm bg-muted p-2 rounded">
                  <code>X / R = l / (100 − l)</code>
                </p>
                <p>Here <code>l</code> is the balancing length from one end of the bridge wire.</p>
              </div>
            </div>

            {/* Procedure */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Procedure</h2>
              <ol className="text-muted-foreground list-decimal list-inside space-y-2">
                <li>Set up the meter bridge and make proper connections.</li>
                <li>Connect the unknown resistance <code>X</code> in one gap and resistance box <code>R</code> in the other.</li>
                <li>Connect the galvanometer and battery as shown in circuit diagram.</li>
                <li>Insert a suitable resistance from resistance box.</li>
                <li>Close the key and find the null point using jockey.</li>
                <li>Note the balancing length <code>l</code>.</li>
                <li>Repeat the experiment for different values of <code>R</code>.</li>
              </ol>
            </div>

            {/* Observation Table */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Observation Table</h2>
              <div className="bg-muted/50 p-6 rounded-lg">
                <ul className="text-muted-foreground space-y-2 mb-6">
                  <li><strong>Length of meter bridge wire:</strong> 100 cm</li>
                  <li><strong>Zero error of meter scale:</strong> 0 cm</li>
                </ul>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-muted">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-muted p-3 text-left">S.No.</th>
                        <th className="border border-muted p-3 text-left">Balancing length <code>l</code> (cm)</th>
                        <th className="border border-muted p-3 text-left">Known resistance <code>R</code> (Ω)</th>
                        <th className="border border-muted p-3 text-left">Calculated unknown resistance <code>X</code> (Ω)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-muted p-3 font-medium">1</td>
                        <td className="border border-muted p-3">-</td>
                        <td className="border border-muted p-3">-</td>
                        <td className="border border-muted p-3">-</td>
                      </tr>
                      <tr>
                        <td className="border border-muted p-3 font-medium">2</td>
                        <td className="border border-muted p-3">-</td>
                        <td className="border border-muted p-3">-</td>
                        <td className="border border-muted p-3">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Calculations */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Calculations</h2>
              <div className="bg-muted/50 p-4 rounded-lg space-y-2 text-muted-foreground">
                <p><strong>Formula:</strong> <code>X = R × (l / (100 − l))</code></p>
                <p>Calculate <code>X</code> for each set of observations.</p>
                <p>Find the mean value of <code>X</code>: <code>X_mean = (X₁ + X₂ + ... + Xₙ) / n</code></p>
              </div>
            </div>

            {/* Result */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Result</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>The value of unknown resistance <code>X</code> is found to be <strong>__ Ω</strong>.</li>
                <li>The result verifies the principle of Wheatstone bridge.</li>
              </ul>
            </div>

            {/* Precautions */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>All connections should be tight and clean.</li>
                <li>Jockey should be pressed gently on the wire.</li>
                <li>Current should not flow for a long time to avoid heating.</li>
                <li>Balancing point should be near the middle of the wire.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Contact resistance at joints.</li>
                <li>Non-uniformity of bridge wire.</li>
                <li>Inaccurate reading of balancing length.</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 className="text-xl font-semibold mb-6">Viva Questions with Answers</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <ol className="list-decimal list-inside text-sm space-y-2">
                      <li><strong>What is the principle of meter bridge?</strong><br/>It works on Wheatstone bridge principle.</li>
                      <li><strong>Why is the wire one meter long?</strong><br/>For accurate ratio measurement.</li>
                      <li><strong>What is null point?</strong><br/>Point where galvanometer shows zero deflection.</li>
                      <li><strong>Why jockey is pressed lightly?</strong><br/>To avoid damage and heating of wire.</li>
                      <li><strong>What happens if wire is non-uniform?</strong><br/>Result becomes inaccurate.</li>
                    </ol>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <ol className="list-decimal list-inside text-sm space-y-2 start-6">
                      <li><strong>Why balancing point should be near center?</strong><br/>To reduce percentage error.</li>
                      <li><strong>What is Wheatstone bridge?</strong><br/>Arrangement to compare resistances.</li>
                      <li><strong>Role of galvanometer?</strong><br/>To detect current flow.</li>
                      <li><strong>Why resistance box is used?</strong><br/>To provide known resistance.</li>
                      <li><strong>SI unit of resistance?</strong><br/>Ohm (Ω).</li>
                    </ol>
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

export default MeterBridgeExperiment;
