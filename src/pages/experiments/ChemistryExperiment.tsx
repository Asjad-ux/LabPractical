import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import BasicRadicalTable from "@/components/BasicRadicalTable";
import AcidicRadicalTable from "@/components/AcidicRadicalTable";

const ChemistryExperiment = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4 capitalize">
            {slug?.replace("-", " ")}
          </h1>

          <p className="text-muted-foreground mb-8">
            This practical experiment is explained step-by-step for easy
            understanding.
          </p>

          <div className="space-y-6">
            <section>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <p className="text-muted-foreground">
                To understand the basic concept and procedure of this
                experiment.
              </p>
            </section>

            <section>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <p>Test tubes</p>
              <p>Test tube stand</p>
              <p>Test tube holder</p>
              <p>Beakers (small size)</p>
              <p>Conical flask</p>
              <p>Measuring cylinder</p>
              <p>Dropper / glass dropper</p>
              <p>Glass rod</p>
              <p>Funnel</p>
              <p>Filter paper</p>
              <p>Watch glass</p>
              <p>China dish / evaporating dish</p>
              <p>Bunsen burner / spirit lamp</p>
            </section>

            <section>
              <h2 id="Theory"className="text-xl font-semibold mb-2">Theory</h2>
              <p className="text-muted-foreground">
                Salt analysis is a systematic chemistry experiment to identify unknown cations (positive ions) and anions (negative ions) in a salt using physical observation (color, odor), solubility tests, flame tests, and specific wet chemical tests (preliminary & confirmatory) like preparing a sodium carbonate extract to detect groups of ions, leading to the final salt formula.
              </p>
            </section>

            <section>
              <h2 id="Acidic Radical Table"className="text-xl font-semibold mb-2">Acidic Radical Table</h2>
              <p className="text-muted-foreground">
                <AcidicRadicalTable/>
              </p>
            </section>

            <section>
              <h2 id="Basic Radical Table"className="text-xl font-semibold mb-2">Basic Radical Table</h2>
              <p className="text-muted-foreground">
                <BasicRadicalTable/>
              </p>
            </section>
            <section>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-2">Viva Questions</h2>
              <p className="text-muted-foreground">
                <ol className="list-decimal list-inside text-muted-foreground space-y-4">
        <li>
          <strong>What is salt analysis?</strong>
          <br />
          Salt analysis is the qualitative analysis used to identify acidic and
          basic radicals present in a given salt.
        </li>

        <li>
          <strong>What are acidic radicals?</strong>
          <br />
          Acidic radicals are negatively charged ions derived from acids, like
          Cl⁻, SO₄²⁻, CO₃²⁻.
        </li>

        <li>
          <strong>What are basic radicals?</strong>
          <br />
          Basic radicals are positively charged ions derived from bases, like
          Na⁺, Cu²⁺, Fe³⁺.
        </li>

        <li>
          <strong>Why preliminary tests are performed?</strong>
          <br />
          To get an idea about the acidic or basic radical present in the salt.
        </li>

        <li>
          <strong>Which acid is used in preliminary test for anions?</strong>
          <br />
          Dilute and concentrated sulphuric acid are used.
        </li>

        <li>
          <strong>What does effervescence with CO₂ indicate?</strong>
          <br />
          Presence of carbonate (CO₃²⁻) or bicarbonate.
        </li>

        <li>
          <strong>Which gas smells like rotten eggs?</strong>
          <br />
          Hydrogen sulphide (H₂S) gas.
        </li>

        <li>
          <strong>Which acidic radical gives rotten egg smell?</strong>
          <br />
          Sulphide (S²⁻).
        </li>

        <li>
          <strong>Which radical gives brown fumes with conc. H₂SO₄?</strong>
          <br />
          Nitrate (NO₃⁻).
        </li>

        <li>
          <strong>Which radical gives violet vapours?</strong>
          <br />
          Iodide (I⁻).
        </li>

        <li>
          <strong>Why HCl is used before group analysis of cations?</strong>
          <br />
          To precipitate Group I cations like Pb²⁺.
        </li>

        <li>
          <strong>Which group reagent is used for Group II cations?</strong>
          <br />
          Hydrogen sulphide gas in acidic medium.
        </li>

        <li>
          <strong>Name any two Group III cations.</strong>
          <br />
          Fe³⁺ and Al³⁺.
        </li>

        <li>
          <strong>Which group contains zinc, nickel and cobalt?</strong>
          <br />
          Group IV.
        </li>

        <li>
          <strong>Which reagent is used for Group V cations?</strong>
          <br />
          Ammonium carbonate in presence of NH₄Cl and NH₄OH.
        </li>

        <li>
          <strong>Which cation is tested in Group VI?</strong>
          <br />
          Magnesium (Mg²⁺).
        </li>

        <li>
          <strong>Why NH₄Cl is added during group analysis?</strong>
          <br />
          To control ionization and prevent premature precipitation.
        </li>

        <li>
          <strong>What is confirmatory test?</strong>
          <br />
          A specific test performed to confirm the presence of a particular
          radical.
        </li>

        <li>
          <strong>Which test confirms sulphate ion?</strong>
          <br />
          Formation of white precipitate with BaCl₂ solution.
        </li>

        <li>
          <strong>Why salt analysis is important?</strong>
          <br />
          It helps to identify unknown inorganic compounds accurately.
        </li>
      </ol>
              </p>
            </section>
            </div>
        </div>
      </main>
    </div>
  );
};

export default ChemistryExperiment;
