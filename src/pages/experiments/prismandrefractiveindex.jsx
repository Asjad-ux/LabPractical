import Navigation from "@/components/Navigation";
import prism from "../../assets/prism.png";
const PrismExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Prism and Refractive Index</h1>
          <p className="text-muted-foreground mb-8">
            This page explains the Prism and Refractive Index experiment in a clear, exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>To determine the refractive index of the material of a glass prism using a spectrometer.</li>
              </ul>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <ul className="text-muted-foreground list-disc list-inside space-y-1">
                <li>Spectrometer</li>
                <li>Glass Prism</li>
                <li>Sodium Vapour Lamp</li>
                <li>Reading Lens</li>
                <li>Brush and Dust Blower</li>
                <li>Pencil & Paper</li>
              </ul>
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold mb-4">Theory</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>When light passes through a prism, it bends (refracts) at both surfaces.</li>
                <li>At the angle of minimum deviation, the path of light inside the prism becomes symmetrical.</li>
                <li>
                  If <strong>A</strong> is the angle of prism and <strong>D</strong> is the angle of minimum deviation, then refractive index <strong>μ</strong> is given by:
                  <br />
                  <strong>\( \mu = \frac(\sin\left(\frac{A + D}{2}\right))(\sin\left(\frac{A}{2}\right)) \)</strong>
                </li>
              </ul>
              <img src={prism} alt="Lab" />
            </div>

            {/* Procedure */}
            <div>
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>Set up the spectrometer and level it properly.</li>
                <li>Focus the telescope for parallel rays and adjust the collimator slit sharply.</li>
                <li>Place the prism on the prism table.</li>
                <li>Take readings of the reflected ray from both faces of prism to determine the angle of prism <strong>A</strong>.</li>
                <li>Now rotate the prism to obtain the refracted ray at minimum deviation position.</li>
                <li>Note the angle of the deviated ray.</li>
                <li>Repeat readings at least three times.</li>
                <li>
                  Calculate <strong>μ</strong> using:
                  <br />
                  <strong>\( \mu = \frac(\sin\left(\frac{A + D}{2}\right))(\sin\left(\frac{A}{2}\right)) \)</strong>
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
                      <th className="border border-border px-3 py-2">Angle of Prism A (°)</th>
                      <th className="border border-border px-3 py-2">Angle of Minimum Deviation D (°)</th>
                      <th className="border border-border px-3 py-2">Refractive Index μ</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-border px-3 py-2 text-center">1</td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 text-center">2</td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                      <td className="border border-border px-3 py-2 text-center"></td>
                    </tr>
                    <tr>
                      <td className="border border-border px-3 py-2 text-center">3</td>
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
                <li>Find mean value of <strong>A</strong>.</li>
                <li>Find mean value of <strong>D</strong>.</li>
                <li>
                  Apply the formula:
                  <br />
                  <strong>\( \mu = \frac(\sin\left(\frac{A + D}{2}\right))(\sin\left(\frac{A}{2}\right)) \)</strong>
                </li>
              </ul>
            </div>

            {/* Result */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <ul className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>The refractive index of the material of the given prism is ______ (within limits of experimental error).</li>
              </ul>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>The prism should be clean and dry.</li>
                <li>Spectrometer should be properly levelled.</li>
                <li>Readings must be taken without parallax error.</li>
                <li>Use monochromatic light source.</li>
              </ul>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Improper leveling of spectrometer</li>
                <li>Parallax error</li>
                <li>Non-uniform prism material</li>
                <li>Incorrect placement of prism</li>
              </ul>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-4">Viva Questions</h2>
              <div className="space-y-4 text-muted-foreground">
                {[
                  { q: "What is a prism?", a: "A prism is a transparent optical element with two plane refracting surfaces inclined at an angle." },
                  { q: "What is refractive index?", a: "It is the ratio of speed of light in air to speed of light in the medium." },
                  { q: "What is the unit of refractive index?", a: "It has no unit." },
                  { q: "What is angle of prism?", a: "The angle between the two refracting surfaces of the prism." },
                  { q: "What is minimum deviation?", a: "The smallest angle through which a ray is deviated by a prism." },
                  { q: "Why monochromatic light is used?", a: "To avoid dispersion and get a sharp image." },
                  { q: "Name a monochromatic source commonly used.", a: "Sodium vapour lamp." },
                  { q: "What happens to deviation when refractive index increases?", a: "Deviation increases." },
                  { q: "What is spectrometer?", a: "An instrument used to study spectra and measure refractive index." },
                  { q: "What is dispersion?", a: "Splitting of light into its component colours." },
                  { q: "Which colour deviates the most?", a: "Violet." },
                  { q: "Which colour deviates the least?", a: "Red." },
                  { q: "Why prism is preferred over glass slab?", a: "Because it produces measurable deviation." },
                  { q: "What type of prism is used?", a: "Equilateral glass prism." },
                  { q: "Why leveling is important?", a: "To ensure accuracy of readings." },
                  { q: "What is parallax error?", a: "Error caused due to wrong eye position while taking readings." },
                  { q: "What is normal?", a: "A line perpendicular to the surface at the point of incidence." },
                  { q: "What happens to speed of light in denser medium?", a: "It decreases." },
                  { q: "What happens to wavelength in denser medium?", a: "It decreases." },
                  { q: "Does frequency change during refraction?", a: "No, frequency remains constant." }
                ].map((item, i) => (
                  <div key={i} className="border-l-4 border-purple-500 pl-4">
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

export default PrismExperiment;
