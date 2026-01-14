import { useParams } from "react-router-dom";
import Navigation from "@/components/Navigation";
import VernierTable from "@/components/Observationtablep11vc.jsx";
import vc1 from "../../assets/vc1.png";

const PhysicsExperiment = () => {
  const { slug } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4 capitalize">
            {slug?.replace(/-/g, " ")}
          </h1>

          <p className="text-muted-foreground mb-8">
            This page will explain the complete physics experiment in a
            step-by-step and exam-oriented manner.
          </p>

          {/* Sections */}
          <section className="space-y-6">
            {/* Objective Section */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <p className="text-muted-foreground">
                To measure diameter of a small spherical/cylindrical body using
                Vernier Callipers.
              </p>
               <img src={vc1} alt="Lab" />
            </div>

            {/* Apparatus Section */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <p className="text-muted-foreground">
                Vernier Callipers, a spherical body (pendulum bob) or a cylinder
                and a magnifying lens.
              </p>
            </div>

            {/* Theory Section */}
            <div className="space-y-4">
              <h2 id="Theory"className="text-xl font-semibold">Theory</h2>
              <p className="text-muted-foreground">
                Vernier callipers is a precision instrument used to measure the
                internal diameter, external diameter and depth of an object
                accurately.
              </p>

              <p className="text-muted-foreground">
                When the body is placed between the jaws of the vernier callipers:
              </p>

              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  If the zero of the vernier scale lies ahead of the <strong>N</strong>
                  <sup>th</sup> division of the main scale, then:
                  <br />
                  <span className="font-medium">
                    Main Scale Reading (M.S.R.) = N
                  </span>
                </li>

                <li>
                  If the <strong>n</strong>
                  <sup>th</sup> division of the vernier scale coincides with any
                  division of the main scale, then:
                  <br />
                  <span className="font-medium">
                    Vernier Scale Reading (V.S.R.) = n × L.C.
                  </span>
                </li>
              </ul>

              <p className="text-muted-foreground">
                Here, <strong>L.C.</strong> represents the least count of the
                vernier callipers, which is also known as the{" "}
                <strong>Vernier Constant (V.C.)</strong>.
              </p>

              <div className="bg-muted/40 border border-border rounded-lg p-4">
                <p className="font-medium mb-2">Total Reading (T.R.)</p>
                <p className="text-muted-foreground">
                  T.R. = M.S.R. + V.S.R.
                  <br />
                  T.R. = N + n × V.C.
                </p>
              </div>
            </div>

            {/* Procedure Section */}
            <div className="space-y-3">
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <ol className="list-decimal list-inside text-muted-foreground space-y-3">
                <li>
                  Determine the vernier constant (V.C.) i.e. least count (L.C.) of
                  the vernier callipers and record it stepwise.
                </li>
                <li>
                  Bring the movable jaw BD in close contact with the fixed jaw AC
                  and find the zero error. Do it three times and record them. If
                  there is no zero error, record zero error as nil.
                </li>
                <li>
                  Open the jaws, place the sphere or cylinder between the two jaws
                  A and B and adjust the jaw DB, such that it gently grips the body
                  without any undue pressure on it. Tighten the screw S attached to
                  the vernier scale V.
                </li>
                <li>
                  Note the position of the zero mark of the vernier scale on the
                  main scale. Record the main scale reading just before the zero mark
                  of the vernier scale. This reading (N) is called main scale reading
                  (M.S.R.).
                </li>
                <li>
                  Note the number (n) of the vernier scale division which coincides
                  with some division of the main scale.
                </li>
                <li>
                  Repeat steps 4 and 5 after rotating the body by 90° for measuring
                  the diameter in a perpendicular direction.
                </li>
                <li>
                  Repeat steps 3, 4, 5 and 6 for three different positions. Record
                  the observations in each set in a tabular form.
                </li>
                <li>Find total reading and apply zero correction.</li>
                <li>
                  Take mean of different values of diameter and show that in the
                  result with proper unit.
                </li>
              </ol>
            </div>

            {/* Observation Section */}
            <div className="space-y-4">
              <h2 id="Observation"className="text-xl font-semibold mb-2">Observation</h2>

              <div>
                <p className="font-semibold mb-2">
                  1. Determination of Vernier Constant (Least Count)
                </p>
                <div className="bg-muted/20 rounded-lg p-3 space-y-2 text-sm text-muted-foreground">
                  <p>1 M.S.D. = 1 mm</p>
                  <p>
                    1 V.S.D. = <sup>9</sup>/<sub>10</sub> × M.S.D. = 0.9 mm
                  </p>
                  <p>10 V.S.D. = 9 M.S.D.</p>
                  <p>Vernier Constant (V.C.) = 1 M.S.D. − 1 V.S.D.</p>
                  <p className="font-medium">
                    V.C. = (1 − 0.9) mm = 0.1 mm = 0.01 cm
                  </p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-2">2. Zero Error</p>
                <div className="space-y-2 text-muted-foreground">
                  <p>(i) ______ cm</p>
                  <p>(ii) ______ cm</p>
                  <p>(iii) ______ cm</p>
                  <p className="font-medium">Mean Zero Error (e) = ______ cm</p>
                  <p className="font-medium">Mean Zero Correction (c) = −e = ______ cm</p>
                </div>
              </div>

              <div>
                <p className="font-semibold mb-4">
                  3. Table for the Diameter (D)
                </p>

                {/* 👇 Vernier Calipers Table */}
                
                id="Observation Table"<VernierTable />
              </div>
            </div>

            {/* Precautions Section */}
            <div className="space-y-3">
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  Motion of the vernier scale on the main scale should be smooth (by
                  oiling if necessary).
                </li>
                <li>
                  Vernier constant and zero error should be carefully found and
                  properly recorded.
                </li>
                <li>
                  The body should be gripped between the jaws firmly but gently,
                  without applying undue pressure.
                </li>
                <li>
                  Observations should be taken at right angles and readings should be
                  taken at least at three different places.
                </li>
              </ul>
            </div>

            {/* Result Section */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <p className="mt-2 text-base font-bold text-foreground">
                The diameter of the given sphere/cylinder is ...... cm.
              </p>
            </div>

            {/* Viva Questions Section */}
            <div className="space-y-4">
              <h2 id="Viva Questions"className="text-xl font-semibold mb-4">Viva Questions</h2>

              {[
                {
                  q: "What is a Vernier Callipers?",
                  a: "Vernier Callipers is a precision instrument used to measure internal diameter, external diameter, and depth of an object accurately.",
                },
                {
                  q: "Why is Vernier Callipers more accurate than a ruler?",
                  a: "Because Vernier Callipers has a smaller least count, it gives more precise measurements.",
                },
                {
                  q: "What is the least count of Vernier Callipers?",
                  a: "Least count is the smallest length that can be measured by Vernier Callipers. Least count = 1 MSD − 1 VSD.",
                },
                {
                  q: "What is the value of one main scale division (MSD)?",
                  a: "One main scale division is equal to 1 mm or 0.1 cm.",
                },
                {
                  q: "What is Vernier constant?",
                  a: "Vernier constant is the difference between one main scale division and one vernier scale division.",
                },
                {
                  q: "Name the main parts of Vernier Callipers.",
                  a: "Main scale, Vernier scale, fixed jaw, movable jaw, and depth rod.",
                },
                {
                  q: "What is zero error?",
                  a: "Zero error occurs when the zero of Vernier scale does not coincide with the zero of the main scale.",
                },
                {
                  q: "What are the types of zero error?",
                  a: "There are two types: positive zero error and negative zero error.",
                },
                {
                  q: "What is zero correction?",
                  a: "Zero correction is the negative of zero error.",
                },
                {
                  q: "How do you find total reading?",
                  a: "Total Reading = Main Scale Reading + (Vernier Scale Reading × Least Count).",
                },
                {
                  q: "What is the use of upper jaws?",
                  a: "Upper jaws are used to measure the internal diameter of hollow objects.",
                },
                {
                  q: "What is the use of lower jaws?",
                  a: "Lower jaws are used to measure the external diameter of objects.",
                },
                {
                  q: "What is the function of depth rod?",
                  a: "Depth rod is used to measure the depth of holes or containers.",
                },
                {
                  q: "What precautions should be taken while using Vernier Callipers?",
                  a: "The jaws should be clean, object should be held gently, and readings should be taken at eye level.",
                },
                {
                  q: "Why do we take multiple readings?",
                  a: "Multiple readings are taken to reduce errors and improve accuracy.",
                },
                {
                  q: "What is positive zero error?",
                  a: "When the zero of Vernier scale lies to the right of main scale zero, it is called positive zero error.",
                },
                {
                  q: "What is negative zero error?",
                  a: "When the zero of Vernier scale lies to the left of main scale zero, it is called negative zero error.",
                },
                {
                  q: "Can Vernier Callipers measure thickness?",
                  a: "Yes, Vernier Callipers can measure the thickness of thin objects accurately.",
                },
                {
                  q: "What is the unit of least count?",
                  a: "The unit of least count is millimetre (mm) or centimetre (cm).",
                },
                {
                  q: "Why is eye positioning important while taking reading?",
                  a: "Proper eye positioning avoids parallax error and ensures accurate readings.",
                },
              ].map((item, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-b-0">
                  <p className="font-semibold text-foreground mb-2">
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

export default PhysicsExperiment;