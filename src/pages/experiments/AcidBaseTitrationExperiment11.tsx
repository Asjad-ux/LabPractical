import Navigation from "@/components/Navigation";
import ti from "../../assets/ti.png";

const AcidBaseTitrationExperiment11 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl space-y-8">
          <h1 className="text-3xl font-bold">Acid–Base Titration</h1>

          {/* Objective */}
          <section>
            <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
            <p className="text-muted-foreground">
              To determine the concentration of an acid or base by measuring the
              volume of titrant (of known concentration) that reacts with it
              according to a stoichiometric proton-transfer reaction.
            </p>
          </section>

          {/* Apparatus */}
          <section>
            <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Burette</li>
              <li>Pipette</li>
              <li>Conical flask</li>
              <li>Volumetric flask</li>
              <li>Funnel</li>
              <li>Standard solution of NaOH</li>
              <li>Given acid solution</li>
              <li>Indicator (phenolphthalein / methyl orange)</li>
            </ul>
          </section>

          {/* Theory */}
          <section className="space-y-3">
            <h2 id="Theory"className="text-xl font-semibold">Theory</h2>
            <p className="text-muted-foreground">
              Acid–base titration is a quantitative analysis method used to
              determine the concentration of an acid or base by neutralization
              reaction.
            </p>
            <p className="text-muted-foreground">At the equivalence point:</p>
            <p className="font-medium">Acid + Base → Salt + Water</p>
          </section>

          {/* Procedure */}
          <section>
            <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
            <ol className="list-decimal list-inside text-muted-foreground space-y-2">
              <li>Rinse the burette with standard NaOH solution.</li>
              <li>Fill the burette with NaOH and note the initial reading.</li>
              <li>Pipette out a fixed volume of the given acid into a conical flask.</li>
              <li>Add 2–3 drops of a suitable indicator.</li>
              <li>Titrate with NaOH till a colour change appears.</li>
              <li>Note the final burette reading.</li>
              <li>Repeat for three concordant readings.</li>
            </ol>
            <img src={ti} alt="Lab" />
          </section>

          {/* Observation */}
          <section>
            <h2 id="Observation"className="text-xl font-semibold mb-2">Observation</h2>
            <p className="text-muted-foreground">
              Burette reading table will be recorded for concordant values.
            </p>
          </section>

          {/* Result */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Result</h2>
            <p className="font-medium">
              The concentration of the given acid solution is ______ N.
            </p>
          </section>

          {/* Precautions */}
          <section>
            <h2 className="text-xl font-semibold mb-2">Precautions</h2>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              <li>Indicator should be added dropwise.</li>
              <li>Read the burette at eye level.</li>
              <li>The end point should be detected carefully.</li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default AcidBaseTitrationExperiment11;
