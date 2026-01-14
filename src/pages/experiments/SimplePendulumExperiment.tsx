import Navigation from "@/components/Navigation";
import ObservationTableSimplePendulum from "@/components/ObservationTableSimplePendulum";
import sp1 from "../../assets/sp1.png"
import sp2 from "../../assets/sp2.png"
import sp3 from "../../assets/sp3.png"
const SimplePendulumExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Simple Pendulum</h1>

          <p className="text-muted-foreground mb-8">
            This page explains the Simple Pendulum experiment in a clear,
            exam-oriented and step-by-step manner.
          </p>

          {/* Main Section */}
          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <p className="text-muted-foreground">
                Using a simple pendulum, plot its L–T graph and use it to find
                the effective length of a seconds pendulum.
              </p>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <p className="text-muted-foreground">
                A clamp with stand, a split cork, thread, bob, Vernier
                Callipers, stopclock/watch, metre scale and a piece of chalk.
              </p>
              <img src={sp1} alt="Lab" />
            </div>

            {/* Theory */}
            <div className="space-y-3">
              <h2 id="Theory"className="text-xl font-semibold">Theory</h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  <strong>1. Simple Pendulum.</strong> An ideal simple pendulum
                  consists of a heavy point mass (called bob) tied to one end of
                  a perfectly inextensible, flexible and weightless string.
                  There is no ideal simple pendulum. In practice, a simple
                  pendulum is made by tying a metallic spherical bob to a fine
                  cotton stitching thread.
                </p>

                <p>
                  <strong>2. Length of Simple Pendulum.</strong> The distance
                  between the point of suspension of the pendulum and its centre
                  of gravity (C.G.) is called the length of the simple
                  pendulum. It is represented by the symbol{" "}
                  <span className="font-semibold">l</span>. Length of simple
                  pendulum = length of thread + length of hook of bob + mean
                  radius of the spherical bob, i.e.
                  <span className="font-semibold">
                    {" "}
                    l = l&apos; + h + r
                  </span>
                  .
                </p>

                <p>
                  <strong>3. Time Period of the Simple Pendulum.</strong> Time
                  taken by the bob of the simple pendulum to make one complete
                  vibration is called the time period of the simple pendulum. It
                  is represented by the symbol{" "}
                  <span className="font-semibold">T</span>. The time period is
                  given by the formula:
                </p>

                <p className="font-medium">
                  T = 2π √(l / g),&nbsp; T² = (4π² l) / g,&nbsp; l = (g T²) /
                  (4π²)
                </p>
              </div>
            </div>

            {/* Procedure */}
            <div>
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>
              <div className="text-muted-foreground space-y-2">
                <p>
                  1. Find the vernier constant and zero error of the Vernier
                  Callipers and record it (as in Experiment 1).
                </p>
                <p>
                  2. Determine the mean diameter of the spherical bob (as in
                  Experiment 1). Find the mean radius of the bob.
                </p>
                <p>
                  3. Find the length h of the hook attached to the bob by metre
                  scale and record it.
                </p>
                <p>
                  4. Take a cotton thread about 2 metres long and tie its one
                  end with the hook.
                </p>
                <p>
                  5. Put ink marks M₁, M₂, M₃ on the thread at distances of 80
                  cm, 90 cm, 100 cm, 110 cm, 120 cm, 130 cm, ... from the centre
                  of gravity of the bob. These distances give effective length
                  l of the simple pendulum.
                </p>
                <p>
                  6. Pass the thread through the two split parts of a cork with
                  the thread coming out just from the 80 cm mark.
                </p>
                <p>7. Tighten the two half-cork pieces between the clamp.</p>
                <p>
                  8. Fix the clamp in a stand kept on a table at such a height
                  that the bob is just 2 cm above the laboratory floor.
                </p>
                <p>
                  9. Mark a point A on the floor just below the position of bob
                  at rest (mean position).
                </p>
                <p>
                  10. Draw a straight line C–A–B, 10 cm long, in the direction
                  along which the bob will move when oscillating. A is the
                  middle point of C and B.
                </p>
                <p>
                  11. Find the least count and the zero error of the
                  stopclock/watch. Bring its hands at zero position.
                </p>
                <p>
                  12. Move the bob by hand to position B on the right of A and
                  release it. Ensure that the bob returns along line C–B without
                  spinning.
                </p>
                <p>
                  13. When the bob returns from C to A and starts moving to the
                  right of A, start the stopclock/watch and count zero.
                </p>
                <p>
                  14. The bob goes towards B (right extreme), returns, and goes
                  towards C (left extreme). When the bob crosses A from B
                  towards C, count one vibration.
                </p>
                <p>
                  15. In this way count up to 19. Become alert when the bob
                  starts the 20th vibration.
                </p>
                <p>
                  16. Just when the 20th vibration is completed, count 20 and at
                  once stop the stopclock/watch.
                </p>
                <p>
                  17. Find total time noting positions of both the hands of the
                  clock/watch. This time is the time for twenty vibrations.
                </p>
                <p>18. Repeat steps 13 to 17 two times more for the same length.</p>
                <p>19. Move the clamp up by 10 cm.</p>
                <p>
                  20. Loosen the cork pieces and pull the thread out to increase
                  its length by 10 cm. Now effective length of pendulum becomes
                  90 cm. The bob will again be 2 cm above the laboratory floor.
                </p>
                <p>
                  21. Repeat steps 13 to 19 two times to take in all two
                  observations for this new length.
                </p>
                <p>
                  22. Similarly take two observations each for lengths 100 cm,
                  110 cm, 120 cm and 130 cm.
                </p>
                <p>23. Record all the observations as given ahead.</p>
              </div>
              <img src={sp3} alt="Lab" />
            </div>

            {/* Observation – Text + Table */}
            <h2 id="Observation Table"className="text-xl font-semibold mb-2">Observation Table</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                1. Vernier constant of vernier callipers (V.C.) = ...... cm.
                <br />
                Zero error of vernier callipers (e):
                <br />
                (i) ...... cm,
                <br />
                (ii) ...... cm,
                <br />
                (iii) ...... cm.
                <br />
                Mean zero error, (e) = ..... cm
                <br />
                Mean zero correction (c) = eₘ
                <br />
                Observed diameter of the bob:
                <br />
                (i) ...... cm,
                <br />
                (ii) ...... cm,
                <br />
                (iii) ...... cm
                <br />
                Mean observed diameter,
                <br />
                Mean corrected diameter,
                <br />
                d = d₀ + c = ...... cm
                <br />
                Mean radius of the bob,
                <br />
                r = d/2 = ...... cm
                <br />
                Length of hook of the bob,
                <br />
                h = ..... cm
                <br />
                d₀ = ....... cm
                <br />
                Standard value of g = 980 cm s⁻²
              </p>

              <p>
                2. Least count of stop clock/watch = ...... s
                <br />
                Zero error of stop clock/watch
                <br />
                Zero correction of stop clock/watch =
              </p>

              <p>3. Table for Length (l) and time (T)</p>

              <ObservationTableSimplePendulum />
            </div>

            {/* Calculations */}
            <h2 id="Calcution"className="text-xl font-semibold mb-2">Calculations</h2>
            <div className="space-y-3 text-muted-foreground">
              <p>(a) With the table</p>

              <p>
                1. For each length, write mean time for 20 vibrations
                <br />
                t = (t₁ + t₂ + t₃) / 3 s
              </p>

              <p>2. Calculate mean values of t.</p>

              <p>
                3. For each length, find time period
                <br />
                T = t / 20 s
                <br />
                and find value of T²
              </p>

              <p>
                4. l – T² graph.
                <br />
                Plot a graph between l and T² by taking l along X-axis and T²
                along Y-axis.
                <br />
                The graph comes to be a straight line.
              </p>

              <p>
                5. The graph is a straight line because
                <br />
                T = 2π√(l / g)
              </p>

              <p>
                6. From this graph, for T² = 4, l comes to be 100 cm.
                <br />
                Hence, for seconds pendulum (T = 2 s) length comes to be 100 cm.
              </p>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>1. Thread should be strong, weightless and inextensible.</p>
                <p>2. Point of suspension should be fixed in a rigid support.</p>
                <p>3. Lower faces of split cork should be in same level.</p>
                <p>
                  4. Splitting should be perpendicular to the plane of vibration
                  of the pendulum.
                </p>
                <p>
                  5. Amplitude should be small to have sin θ ≈ θ (for small θ).
                </p>
                <p>6. The bob should move along a straight line.</p>
                <p>7. The bob should not spin during vibration.</p>
                <p>
                  8. Place of experiment should be free from building
                  vibrations or air current.
                </p>
                <p>9. Laboratory fan should be switched off.</p>
                <p>
                  10. Length of pendulum should include length of hook and
                  radius of bob.
                </p>
                <p>11. Counting should be proper and started from zero.</p>
                <p>12. Clock/watch should be accurate.</p>
                <p>
                  13. Length of pendulum should be increased in steps of 10 cm
                  to bring appreciable change in time period.
                </p>
                <p>14. Metre scale used should be accurate.</p>
              </div>
            </div>

            {/* Result */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <p className="font-bold">
                The value of acceleration due to gravity (g) is ______ m/s².
              </p>
              <img src={sp2} alt="Lab" />
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>1. The string may not be weightless and inextensible.</p>
                <p>2. Point of suspension may not be rigid.</p>
                <p>3. The amplitude may not be small.</p>
                <p>4. The bob may spin.</p>
                <p>5. The air currents may disturb vibrations.</p>
                <p>6. There may be an error in counting.</p>
                <p>7. The stop clock/watch may be inaccurate.</p>
                <p>
                  8. There may be delay in starting and stopping the
                  stopclock/watch.
                </p>
              </div>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 id="Viva Related"className="text-xl font-semibold mb-2">
                Viva Related Questions
              </h2>

              <div className="bg-[#1a1a1a] p-6 rounded-lg text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  Viva Questions – Simple Pendulum
                </h3>

                <ol className="list-decimal list-inside space-y-4">
                  <li>
                    <p className="font-medium">What is a simple pendulum?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> A simple pendulum consists of a small heavy
                      bob suspended from a rigid support by a light,
                      inextensible string.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why is it called a simple pendulum?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Because its construction and motion are
                      simple and it is used to study oscillatory motion.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is the length of a simple pendulum?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Distance between point of suspension and
                      centre of gravity of the bob.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      On what factors does time period depend?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Length of pendulum and acceleration due to
                      gravity.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      On what factors does time period not depend?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Mass of the bob and nature of the string.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Write the formula for time period.
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> T = 2π √(l / g)
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">What is one oscillation?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> One complete to-and-fro motion about the
                      mean position.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why should amplitude be small?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To maintain simple harmonic motion.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is a seconds pendulum?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> A pendulum having time period of 2 seconds.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is the length of a seconds pendulum?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Approximately 100 cm.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">Why is bob spherical?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To have a definite centre of gravity.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why is time measured for 20 oscillations?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To reduce reaction time error.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">What type of motion is this?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Simple harmonic motion.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What happens to time period if length increases?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Time period increases.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why should the bob not spin?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Spinning disturbs the plane of oscillation.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is the value of g used?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> g = 980 cm s⁻²
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why is cotton thread used?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> It is light, flexible and nearly
                      inextensible.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why should the point of suspension be rigid?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To avoid loss of energy.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is the effect of air resistance?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> It reduces amplitude gradually.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why are repeated readings taken?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To reduce experimental errors.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default SimplePendulumExperiment;
