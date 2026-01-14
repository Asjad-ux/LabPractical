import Navigation from "@/components/Navigation";
import ObservationTableMeterBridge from "@/components/ObservationTableMeterBridge"
import mb from "../../assets/mb.png"
const MeterBridgeExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Meter Bridge Experiment</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the Meter's Bridge experiment in a clear, exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>To determine the unknown resistance of a given wire using a meter bridge.</li>
                <li>To verify the principle of Wheatstone bridge.</li>
              </ul>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Meter Bridge</li>
                <li>Unknown Resistance Wire</li>
                <li>Standard Resistance box</li>
                <li>Galvanometer</li>
                <li>Cell or Battery</li>
                <li>Plug Key</li>
                <li>Connecting Wires</li>
                <li>Jockey</li>
              </ul>
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold">Theory</h2>
              <div className="space-y-4 text-muted-foreground">
                <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                  <li>Meter bridge works on the principle of Wheatstone bridge.</li>
                  <li>At balance point, ratio of resistances equals ratio of lengths of wire.</li>
                  <li>
                    If X is unknown resistance and R is known resistance, then{" "}
                    X / R = l / (100 − l)
                  </li>
                  <li>Here l is the balancing length from one end of the bridge wire.</li>
                </ol>
              </div>
            </div>

            {/* Procedure */}
            <div>
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <ol className="text-muted-foreground space-y-2 list-decimal list-inside">
                <li>Set up the meter bridge and make proper connections.</li>
                <li>Connect the unknown resistance X in one gap and resistance box R in the other.</li>
                <li>Connect the galvanometer and battery as shown in circuit diagram.</li>
                <li>Insert a suitable resistance from resistance box.</li>
                <li>Close the key and find the null point using jockey.</li>
                <li>Note the balancing length l.</li>
                <li>Repeat the experiment for different values of R.</li>
              </ol>
              <img src={mb} alt="Lab" />
            </div>

            {/* Observation Table */}
            <div className="space-y-4">
              <h2 id="Observation Table"className="text-xl font-semibold mb-4">Observation Table</h2>
              <div className="overflow-x-auto">
                <ObservationTableMeterBridge/>
              </div>
            </div>

            {/* Calculations */}
            <div className="space-y-3 text-muted-foreground">
              <h2 id="Calculations"className="text-xl font-semibold mb-2">Calculations</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Using formula: X = R × l / (100 − l)</li>
                <li>Calculate X for each set of observation.</li>
                <li>Find the mean value of X.</li>
              </ul>
            </div>

            {/* Result */}
            <div className="space-y-3 text-muted-foreground">
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>The value of unknown resistance is found to be ______ Ω.</li>
                <li>The result verifies the principle of Wheatstone bridge.</li>
              </ul>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>All connections should be tight.</li>
                <li>Jockey should be pressed gently on the wire.</li>
                <li>Current should not flow for a long time.</li>
                <li>Balancing point should be near the middle of the wire.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-2">
                <li>Contact resistance at joints.</li>
                <li>Non-uniformity of bridge wire.</li>
                <li>Inaccurate reading of balancing length.</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div className="space-y-6">
              <h2 id="Viva Questions"className="text-xl font-semibold mb-6">
                Viva Questions with Answers (Ohm&apos;s Law)
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-xl font-semibold mb-2">
                      Viva Questions Related to the Experiment
                    </h2>
                    <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                      <li><strong>Why balancing point should be near center?</strong><br/>To reduce percentage error.</li>
                      <li><strong>What is Wheatstone bridge?</strong><br/>Arrangement to compare resistances.</li>
                      <li><strong>Role of galvanometer?</strong><br/>To detect current flow.</li>
                      <li><strong>Why resistance box is used?</strong><br/>To provide known resistance.</li>
                      <li><strong>SI unit of resistance?</strong><br/>Ohm (Ω).</li>
                      <li><strong>What is the principle of meter bridge?</strong><br/>It works on Wheatstone bridge principle.</li>
                      <li><strong>Why is the wire one meter long?</strong><br/>For accurate ratio measurement.</li>
                      <li><strong>What is null point?</strong><br/>Point where galvanometer shows zero deflection.</li>
                      <li><strong>Why jockey is pressed lightly?</strong><br/>To avoid damage and heating of wire.</li>
                      <li><strong>What happens if wire is non-uniform?</strong><br/>Result becomes inaccurate.</li>
                      <li>
                        What is the principle of meter bridge?
                        <br />
                        It works on Wheatstone bridge principle.
                      </li>
                      <li>
                        Why is the wire one meter long?
                        <br />
                        For accurate ratio measurement.
                      </li>
                      <li>
                        What is null point?
                        <br />
                        Point where galvanometer shows zero deflection.
                      </li>
                      <li>
                        Why jockey is pressed lightly?
                        <br />
                        To avoid damage and heating of wire.
                      </li>
                      <li>
                        What happens if wire is non-uniform?
                        <br />
                        Result becomes inaccurate.
                      </li>
                      <li>
                        Why balancing point should be near center?
                        <br />
                        To reduce percentage error.
                      </li>
                      <li>
                        What is Wheatstone bridge?
                        <br />
                        Arrangement to compare resistances.
                      </li>
                      <li>
                        Role of galvanometer?
                        <br />
                        To detect current flow.
                      </li>
                      <li>
                        Why resistance box is used?
                        <br />
                        To provide known resistance.
                      </li>
                      <li>
                        What is contact resistance?
                        <br />
                        Resistance at joints and connections.
                      </li>
                      <li>
                        What is unknown resistance?
                        <br />
                        Resistance to be determined.
                      </li>
                      <li>
                        Why key is opened after observation?
                        <br />
                        To prevent heating.
                      </li>
                      <li>
                        What is jockey made of?
                        <br />
                        Brass or copper.
                      </li>
                      <li>
                        Effect of temperature?
                        <br />
                        Resistance changes.
                      </li>
                      <li>
                        SI unit of resistance?
                        <br />
                        Ohm.
                      </li>
                      <li>
                        Why copper wire is used?
                        <br />
                        Low resistivity.
                      </li>
                      <li>
                        What is balancing length?
                        <br />
                        Length at null point.
                      </li>
                      <li>
                        Why multiple readings taken?
                        <br />
                        To find mean value.
                      </li>
                      <li>
                        Define resistance.
                        <br />
                        Opposition to current flow.
                      </li>
                      <li>
                        Conclusion of experiment?
                        <br />
                        Unknown resistance is determined accurately.
                      </li>
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
