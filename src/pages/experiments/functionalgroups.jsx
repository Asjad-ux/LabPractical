import Navigation from "@/components/Navigation";

const FunctionalGroupExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl space-y-8">
          <h1 className="text-3xl font-bold">Functional Group Identification – Organic Compounds</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the identification of functional groups present in organic compounds using systematic tests, in a simple & exam-oriented manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>To identify the functional group present in the given organic compound.</li>
                <li>To perform preliminary and confirmatory tests.</li>
                <li>To write correct inference based on observations.</li>
              </ul>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Test tubes & test tube holder</li>
                <li>Droppers & spatula</li>
                <li>Beaker & burner</li>
                <li>Filter paper</li>
                <li>Litmus paper</li>
                <li>Glass rod</li>
              </ul>
            </div>

            {/* Theory */}
            <div>
              <h2 id="Theory"className="text-xl font-semibold mb-4">Theory</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Organic compounds contain functional groups that decide their properties.</li>
                <li>Different functional groups respond differently to chemical tests.</li>
                <li>By systematic testing, the correct group can be identified.</li>
              </ul>
            </div>

            {/* Carboxylic Acid Test */}
            <div>
              <h2 id="Test for Carboxylic Acid (–COOH)"className="text-xl font-semibold mb-2">Test for Carboxylic Acid (–COOH)</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Add sodium bicarbonate solution to sample.</li>
                <li>Brisk effervescence confirms evolution of CO₂ gas.</li>
                <li>Therefore, carboxylic acid is present.</li>
              </ol>
            </div>

            {/* Alcohol Test */}
            <div>
              <h2 id="Test for Alcohol (–OH)"className="text-xl font-semibold mb-2">Test for Alcohol (–OH)</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Add ethanol + acetic acid + 1 drop conc. H₂SO₄.</li>
                <li>Warm gently.</li>
                <li>Pleasant fruity smell confirms alcohol.</li>
              </ol>
            </div>

            {/* Phenol Test */}
            <div>
              <h2 id="Test for Phenol (–OH)"className="text-xl font-semibold mb-2">Test for Phenol (–OH)</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Add neutral ferric chloride solution.</li>
                <li>Violet / blue / green colour appears.</li>
                <li>Phenol is confirmed.</li>
              </ol>
            </div>

            {/* Aldehyde Test */}
            <div>
              <h2 id="Test for Aldehyde (–CHO)"className="text-xl font-semibold mb-2">Test for Aldehyde (–CHO)</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Add Tollens' reagent & warm gently.</li>
                <li>Silver mirror appears.</li>
                <li>Aldehyde is present.</li>
              </ol>
            </div>

            {/* Ketone Test */}
            <div>
              <h2 id="Test for Ketone (–CO–)"className="text-xl font-semibold mb-2">Test for Ketone (–CO–)</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Add 2,4-DNP reagent.</li>
                <li>Yellow-orange ppt appears.</li>
                <li>Carbonyl group (aldehyde or ketone) present.</li>
              </ol>
            </div>

            {/* Amine Test */}
            <div>
              <h2 id="Test for Amines (–NH₂)"className="text-xl font-semibold mb-2">Test for Amines (–NH₂)</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-2">
                <li>Add chloroform & alcoholic KOH.</li>
                <li>Warm gently.</li>
                <li>Pungent foul smell confirms primary amine.</li>
              </ol>
            </div>

            {/* Result */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <p className="text-muted-foreground">
                The given organic compound contains the functional group:
                <br />
                <strong>_________________</strong>
              </p>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Handle conc. acids and bromine water carefully.</li>
                <li>Do not inhale fumes directly.</li>
                <li>Use minimum reagents only.</li>
                <li>Wash hands after experiment.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Impure compound may give wrong test results.</li>
                <li>Contaminated reagents may affect observations.</li>
                <li>Overheating may decompose the sample.</li>
                <li>Parallax error while observing changes.</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-4">Viva Questions</h2>
              <div className="space-y-4 text-muted-foreground">
                {[
                  { q: "What is a functional group?", a: "A functional group is an atom or group of atoms that gives characteristic properties to an organic compound." },
                  { q: "Give two examples of functional groups.", a: "Examples include –OH (alcohol), –COOH (carboxylic acid), –CHO (aldehyde)." },
                  { q: "What is the functional group in alcohols?", a: "The hydroxyl group (–OH)." },
                  { q: "Which functional group is present in carboxylic acids?", a: "The –COOH group." },
                  { q: "Name the reagent used to detect phenols.", a: "Neutral ferric chloride solution." },
                  { q: "What colour is produced in phenol test with ferric chloride?", a: "Violet, blue or green colour." },
                  { q: "Which gas is evolved when carboxylic acid reacts with sodium bicarbonate?", a: "Carbon dioxide (CO₂)." },
                  { q: "How do you confirm aldehydes?", a: "By Tollens' test, which gives a silver mirror." },
                  { q: "Which reagent is used in 2,4-DNP test?", a: "2,4-dinitrophenylhydrazine reagent." },
                  { q: "What does 2,4-DNP test indicate?", a: "Presence of a carbonyl group (aldehyde or ketone)." },
                  { q: "What is esterification?", a: "Reaction between alcohol and carboxylic acid forming ester and water." },
                  { q: "What is the smell of an ester?", a: "A sweet fruity smell." },
                  { q: "Which test is used to detect primary amines?", a: "Carbylamine test." },
                  { q: "What is observed in carbylamine test?", a: "A very unpleasant and foul smell." },
                  { q: "What happens when acid reacts with sodium bicarbonate?", a: "Effervescence is produced due to CO₂ evolution." },
                  { q: "Why do we perform preliminary tests?", a: "To identify the nature of organic compound before confirmatory tests." },
                  { q: "Can functional groups affect physical properties?", a: "Yes, they affect solubility, boiling point, odour, and reactivity." },
                  { q: "What safety rule must be followed in the lab?", a: "Do not inhale chemical fumes directly and handle acids carefully." },
                  { q: "Why is minimum quantity of reagent used?", a: "To avoid wastage and unnecessary reactions." },
                  { q: "Why confirmatory tests are important?", a: "They help ensure correct identification of the functional group." }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-indigo-500 pl-4">
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

export default FunctionalGroupExperiment;
