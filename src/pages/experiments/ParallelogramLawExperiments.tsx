import Navigation from "@/components/Navigation";
import ObservationTableParallelogram from "@/components/ObservationTableParallelogram.tsx"
import pl1 from "../../assets/pl1.png"
import pl2 from "../../assets/pl2.png"
const ParallelogramLawExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Parallelogram Law</h1>

          <p className="text-muted-foreground mb-8">
            This page explains the Parallelogram Law experiment in a clear,
            exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <p className="text-muted-foreground">
                To find the weight of a given body using parallelogram law of
                vectors.
              </p>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <p className="text-muted-foreground">
                Parallelogram law of forces apparatus (Gravesand&apos;s
                apparatus), plumb line, two hangers with slotted weights, a body
                (a wooden block) whose weight is to be determined, thin strong
                thread, white drawing paper sheet, drawing pins, mirror strip,
                sharp pencil, half metre scale, set squares and protractor.
              </p>
              <img src={pl1} alt="Lab" />
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold">Theory</h2>
              <div className="bg-[#1a1a1a] p-6 rounded-lg text-white">
                <ol className="list-decimal list-inside space-y-3">
                  <li>
                    <p className="text-gray-300">
                      If the body of unknown weight S suspended from the middle
                      hanger balances weights P and Q suspended from the other
                      two hangers, then the three forces are in equilibrium.
                    </p>
                    <p className="text-gray-300">
                      Their vector sum is zero and the magnitude of S can be
                      found using:
                    </p>
                    <p className="text-gray-300">
                      S = √(P² + Q² + 2PQ cos θ)
                    </p>
                    <p className="text-gray-300">
                      The unknown weight can be calculated from this relation.
                    </p>
                  </li>
                </ol>
              </div>
            </div>

            {/* Procedure */}
            <div className="space-y-3">
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>

              <div className="bg-[#1a1a1a] p-6 rounded-lg text-white">
                <ol className="list-decimal list-inside space-y-3 text-gray-300">
                  <li>
                    Set up the Gravesand&apos;s apparatus with its board vertical
                    (tested with the help of a plumb line).
                  </li>
                  <li>
                    Test that pulleys P<sub>1</sub> and P<sub>2</sub> are
                    frictionless. Oil them, if necessary.
                  </li>
                  <li>
                    Fix the white drawing paper sheet on the board with the help
                    of drawing pins.
                  </li>
                  <li>
                    Take three pieces of strong thread and tie their one end
                    together to make knot O. This knot becomes the junction of
                    the three threads.
                  </li>
                  <li>
                    From the other ends of two threads, tie a hanger with some
                    slotted weights in each. These serve as weights P and Q. From
                    the other end of the third thread tie the given body S.
                  </li>
                  <li>
                    Pass threads with weights P and Q over the pulleys and let
                    the third thread with given body S stay vertical in the
                    middle of the board.
                  </li>
                  <li>
                    Adjust the weights P and Q such that the junction O stays in
                    equilibrium slightly below the middle of the paper.
                  </li>
                  <li>
                    The weights P, Q and the wooden block S act as three forces
                    along the three threads at the junction O. The forces are in
                    equilibrium.
                  </li>
                  <li>
                    See that all the weights hang freely and none of them
                    touches the board or the table.
                  </li>
                  <li>
                    Mark the position of junction O on the white paper sheet by a
                    sharp pencil.
                  </li>
                  <li>Slightly disturb weights P and Q and leave them.</li>
                  <li>
                    Note position of junction O again. It must be very close to
                    the earlier position. If not, oil the pulleys to remove
                    friction.
                  </li>
                  <li>
                    Keeping a mirror strip lengthwise under each thread, mark the
                    position of the ends of the image of the thread in the mirror,
                    covering the image by the thread (to remove parallax error).
                    The positions are P<sub>1</sub>, P<sub>2</sub> for thread of
                    weight P, Q<sub>1</sub>, Q<sub>2</sub> for thread of weight Q
                    and S<sub>1</sub>, S<sub>2</sub> for thread of weight S.
                  </li>
                </ol>

                <p className="text-gray-300 mt-2">
                  14. Remove the paper from the board.
                </p>
                <p className="text-gray-300">
                  15. With the help of a half metre scale draw lines through
                  points P<sub>1</sub> and P<sub>2</sub> to represent P, through
                  points Q<sub>1</sub> and Q<sub>2</sub> to represent Q and
                  through points S<sub>1</sub> and S<sub>2</sub> to represent S.
                  These lines must meet at point O.
                </p>
                <p className="text-gray-300">
                  16. Taking a scale, 1 cm = 50 gwt, take OA = 3 cm and OB = 3 cm
                  to represent P = 150 gwt and Q = 150 gwt.
                </p>
                <p className="text-gray-300">
                  17. Complete parallelogram OACB using set squares and join OC.
                  It represents the resultant R.
                </p>
                <p className="text-gray-300">
                  18. Measure OC. Suppose it comes to be 3.9 cm.
                </p>
                <p className="text-gray-300">
                  19. For different sets of observation, change P and Q suitably.
                </p>
                <p className="text-gray-300">
                  20. Find weight of the wooden block by a spring balance.
                </p>
              </div>
            </div>

            {/* Observation */}
            <div>
              <h2 id="Observation"className="text-xl font-semibold mb-2">Observation</h2>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-white space-y-2">
                <p>Least count of spring balance = ...... gwt</p>
                <p>Zero error of spring balance = ...... gwt</p>
                <p>Weight of unknown body by spring balance = ...... gwt</p>
                <p>Scale: 1 cm = 50 gwt</p>
              </div>

              <h2 id="Observation Table"className="text-xl font-semibold mb-2">Observation Table</h2>
              <ObservationTableParallelogram/>
              <img src={pl2} alt="Lab" />
            </div>

            {/* Calculation */}
            <div className="space-y-3">
              <h2 id="Calculations"className="text-xl font-semibold mb-2">Calculation</h2>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-white space-y-2">
                <p>OC = 3.9 cm, R = 50 × 3.9 = 195 gwt</p>
                <p>Unknown weight, S = 195 gwt</p>
                <p>Mean unknown weight, S = (S₁ + S₂ + S₃) / 3 ≈ 195 gwt</p>
                <p>Weight by spring balance = 200 gwt</p>
                <p>Difference = 5 gwt</p>
              </div>
            </div>

            {/* Result */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-white">
                <p className="font-bold">
                  The unknown weight of given body ≈ 195 gwt.
                </p>
                <p>The error is within the limits of experimental error.</p>
              </div>
            </div>

            {/* Precautions */}
            <div className="space-y-3">
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-white space-y-1">
                <p>1. The board should be stable and vertical.</p>
                <p>2. The pulleys should be frictionless.</p>
                <p>3. The hangers should not touch the board or table.</p>
                <p>4. Junction O should be in the middle of the paper sheet.</p>
                <p>5. Points should be marked only when weights are at rest.</p>
                <p>6. Points should be marked with a sharp pencil.</p>
                <p>7. Arrows should be marked to show direction of forces.</p>
                <p>
                  8. A proper scale should be taken to make a fairly big
                  parallelogram.
                </p>
              </div>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-white space-y-1">
                <p>1. Pulleys may have friction.</p>
                <p>2. Weights may not be accurate.</p>
                <p>3. Points may not be marked correctly.</p>
                <p>
                  4. Weight measured by spring balance may not be very accurate.
                </p>
              </div>
            </div>

            {/* Viva Related Questions */}
            <div>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-2">Viva Related Questions</h2>
              <div className="bg-[#1a1a1a] p-4 rounded-lg text-white space-y-3">
                <p>
                  <strong>1. What is parallelogram law of vectors?</strong>
                  <br />
                  It states that if two vectors acting at a point are represented
                  in magnitude and direction by two adjacent sides of a
                  parallelogram, then their resultant is represented by the
                  diagonal of the parallelogram passing through that point.
                </p>

                <p>
                  <strong>2. Who gave the parallelogram law of vectors?</strong>
                  <br />
                  Parallelogram law of vectors was given by Sir Isaac Newton.
                </p>

                <p>
                  <strong>3. What does the diagonal of parallelogram represent?</strong>
                  <br />
                  The diagonal represents the resultant of the two vectors.
                </p>

                <p>
                  <strong>4. What is meant by resultant vector?</strong>
                  <br />
                  Resultant vector is a single vector which has the same effect as
                  two or more vectors acting together.
                </p>

                <p>
                  <strong>5. In parallelogram law, where do the vectors act?</strong>
                  <br />
                  The vectors act at a single point.
                </p>

                <p>
                  <strong>6. Can parallelogram law be applied to non-coplanar vectors?</strong>
                  <br />
                  No, parallelogram law is applicable only to coplanar vectors.
                </p>

                <p>
                  <strong>7. What type of quantities are added using parallelogram law?</strong>
                  <br />
                  Vector quantities are added using parallelogram law.
                </p>

                <p>
                  <strong>8. Give an example of vector quantity.</strong>
                  <br />
                  Force is an example of vector quantity.
                </p>

                <p>
                  <strong>9. What is the unit of force?</strong>
                  <br />
                  The SI unit of force is newton.
                </p>

                <p>
                  <strong>10. What happens if two forces are equal and act at 90°?</strong>
                  <br />
                  The resultant force is √2 times the magnitude of each force.
                </p>

                <p>
                  <strong>11. What happens if the angle between two forces is 0°?</strong>
                  <br />
                  The resultant is equal to the sum of the magnitudes of the two
                  forces.
                </p>

                <p>
                  <strong>12. What happens if the angle between two forces is 180°?</strong>
                  <br />
                  The resultant is equal to the difference of the magnitudes of
                  the two forces.
                </p>

                <p>
                  <strong>13. What is the formula for resultant by parallelogram law?</strong>
                  <br />
                  R = √(P² + Q² + 2PQ cos θ)
                </p>

                <p>
                  <strong>14. What does θ represent in the formula?</strong>
                  <br />
                  θ represents the angle between the two vectors.
                </p>

                <p>
                  <strong>15. What is Gravesand's apparatus used for?</strong>
                  <br />
                  It is used to verify the parallelogram law of vectors.
                </p>

                <p>
                  <strong>16. Why should pulleys be frictionless?</strong>
                  <br />
                  To ensure accurate direction and magnitude of forces.
                </p>

                <p>
                  <strong>17. Why are weights allowed to hang freely?</strong>
                  <br />
                  To avoid additional forces affecting the equilibrium.
                </p>

                <p>
                  <strong>18. What condition is necessary for equilibrium of forces?</strong>
                  <br />
                  The vector sum of all forces acting at a point must be zero.
                </p>

                <p>
                  <strong>19. Is weight a scalar or vector quantity?</strong>
                  <br />
                  Weight is a vector quantity.
                </p>

                <p>
                  <strong>20. Why is parallelogram law important?</strong>
                  <br />
                  It helps in determining the resultant of two forces acting at a
                  point.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ParallelogramLawExperiment;
