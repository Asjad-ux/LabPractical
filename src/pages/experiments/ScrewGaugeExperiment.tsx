import Navigation from "@/components/Navigation";
import ScrewGaugeTable from "@/components/Observationtablep11sg.js";
import sg1 from "../../assets/sg1.png";
const ScrewGaugeExperiment = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-3xl font-bold mb-4">Screw Gauge Experiment</h1>

          <p className="text-muted-foreground mb-8">
            This page explains the Screw Gauge experiment in a step-by-step,
            exam-oriented manner.
          </p>

          <section className="space-y-6">
            {/* Objective */}
            <div>
              <h2 id="Objective"className="text-xl font-semibold mb-2">Objective</h2>
              <p className="text-muted-foreground">
                To measure diameter of a given wire using screw gauge.
              </p>
            </div>

            {/* Apparatus */}
            <div>
              <h2 id="Apparatus"className="text-xl font-semibold mb-2">Apparatus</h2>
              <p className="text-muted-foreground">
                Screw gauge, wire, half-metre scale and magnifying lens.
              </p>
              <img src={sg1} alt="Lab" />
            </div>

            {/* Theory / Formulae */}
            <h2 id="Theory"className="text-xl font-semibold mb-2">Theory</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                <span className="font-semibold text-white">1.</span>{" "}
                If with the wire between plane faces A and B, the edge of the
                cap lies ahead of{" "}
                <span className="font-semibold">N</span>th division of the
                linear scale, then:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Linear Scale Reading (L.S.R.) ={" "}
                  <span className="font-semibold">N</span>
                </li>
                <li>
                  If <span className="font-semibold">n</span>th division of
                  circular scale lies over the reference line, then:
                  <br />
                  Circular Scale Reading (C.S.R.) ={" "}
                  <span className="font-semibold">n × (L.C.)</span>
                </li>
                <li>(Where L.C. is the least count of screw gauge.)</li>
                <li>Total Reading (T.R.) = L.S.R. + C.S.R.</li>
              </ul>

              <p className="font-medium text-white">
                ∴ T.R. = N + n × (L.C.)
              </p>

              <p>
                <span className="font-semibold text-white">2.</span>{" "}
                If <span className="font-semibold">D</span> be the mean diameter
                and <span className="font-semibold">l</span> be the mean length
                of the wire, then the volume of the wire is:
              </p>

              <p className="font-medium text-white">V = πD²l / 4</p>
            </div>

            {/* Procedure Section */}
            <div className="space-y-3">
              <h2 id="Procedure"className="text-xl font-semibold mb-2">Procedure</h2>

              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>1. Find the value of one linear scale division (L.S.D.).</p>

                <p>
                  2. Determine the pitch and the least count of the screw gauge
                  and record it stepwise.
                </p>

                <p>
                  3. Bring the plane face B in contact with plane face A and
                  find the zero error. Do it three times and record them. If
                  there is no zero error, then record zero error as nil.
                </p>

                <p>
                  4. Move the face B away from face A. Place the wire lengthwise
                  over face A and move the face B towards face A using the
                  ratchet head R. Stop when R turns (slips) without moving the
                  screw.
                </p>

                <p>
                  5. Note the number of divisions of the linear scale visible
                  and uncovered by the edge of the cap. The reading (N) is
                  called linear scale reading (L.S.R.).
                </p>

                <p>
                  6. Note the number (n) of the division of the circular scale
                  lying over reference line.
                </p>

                <p>
                  7. Repeat steps 5 and 6 after rotating the wire by 90° for
                  measuring diameter in a perpendicular direction.
                </p>

                <p>
                  8. Repeat steps 4, 5, 6 and 7 for five different positions
                  separated equally throughout the length of the wire. Record
                  the observations in each set in a tabular form.
                </p>

                <p>9. Find total reading and apply zero correction in each case.</p>

                <p>10. Take mean of different values of diameter.</p>

                <p>
                  11. Measure the length of the wire by stretching it along a
                  half-metre scale. Keeping one end of wire at a known mark,
                  note the position of other end. Difference in position of the
                  two ends of the wire gives the length of the wire. Do it three
                  times and record them.
                </p>
              </div>
            </div>

            {/* Observation */}
            <div>
              <h2 id="Observation"className="text-xl font-semibold mb-2">Observation</h2>
              <div className="space-y-3 text-gray-300 leading-relaxed">
                <p>1. Determination of Least Count of the Screw Gauge</p>

                <p>1 L.S.D. = 1 mm</p>

                <p>Number of full rotations given to screw = 4</p>

                <p>Distance moved by the screw = 4 mm</p>

                <p>Hence, pitch = (distance moved) / (number of rotations).</p>

                <p>Number of divisions on circular scale = 100</p>

                <p>
                  Hence, least count = (pitch) / 100 = 0.01 mm = 0.001 cm.
                </p>

                <p>2. Zero Error.</p>

                <p>(i) ...... mm,</p>
                <p>(ii) ...... mm,</p>
                <p>(iii) ...... mm.</p>

                <p>Mean zero error (e) = ...... mm</p>

                <p>Mean zero correction (c) = −e = ...... mm</p>
              </div>

              <ScrewGaugeTable />
            </div>

            {/* Calculation */}
            <h2 id="Calculation"className="text-xl font-semibold mb-2">Calculations</h2>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <strong>1.</strong> Length of the wire, l = (i) ...... cm,
                (ii) ...... cm, (iii) ...... cm.
              </p>

              <p>
                <strong>2.</strong> Mean diameter of the wire,
                D = D₁(a) + D₁(b) + D₂(a) + D₂(b) + D₃(a) + D₃(b) / 6 = ...... mm
                = ...... cm
              </p>

              <p>
                <strong>3.</strong> Mean length of the wire,
                l = (l₁ + l₂ + l₃) / 3 = ...... cm
              </p>

              <p>
                <strong>4.</strong> Volume of the wire,
              </p>

              <p className="font-medium">V = π D² l / 4 = ...... cm³</p>
            </div>

            {/* Result */}
            <div>
              <h2 id="Result"className="text-xl font-semibold mb-2">Result</h2>
              <p className="font-bold">
                The diameter of the given wire is ______ cm.
              </p>
            </div>

            {/* Precautions */}
            <div>
              <h2 id="Precautions"className="text-xl font-semibold mb-2">Precautions</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>1.</strong> To avoid undue pressure, the screw should
                  always be rotated by ratchet R and not by hand directly.
                </p>

                <p>
                  <strong>2.</strong> The screw should move freely without
                  friction.
                </p>

                <p>
                  <strong>3.</strong> The zero correction, with proper sign,
                  should be noted very carefully and added algebraically.
                </p>

                <p>
                  <strong>4.</strong> For the same set of observations, the
                  screw should be moved in the same direction to avoid backlash
                  error.
                </p>

                <p>
                  <strong>5.</strong> At each place, the diameter of the wire
                  should be measured in two perpendicular directions and mean of
                  the two should be taken.
                </p>

                <p>
                  <strong>6.</strong> Readings should be taken at least for five
                  different places equally spaced along the whole length of the
                  wire.
                </p>

                <p>
                  <strong>7.</strong> Error due to parallax should be avoided.
                </p>
              </div>
            </div>

            {/* Sources of Error */}
            <div>
              <h2 id="Sources of Error"className="text-xl font-semibold mb-2">Sources of Error</h2>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>1.</strong> The screw may have friction.
                </p>

                <p>
                  <strong>2.</strong> The screw gauge may have backlash error.
                </p>

                <p>
                  <strong>3.</strong> Circular scale divisions may not be of
                  equal size.
                </p>

                <p>
                  <strong>4.</strong> The wire may not be uniform.
                </p>
              </div>
            </div>

            {/* Viva Questions */}
            <div>
              <h2 id="Viva Questions"className="text-xl font-semibold mb-2">
                Viva Related Questions
              </h2>

              <div className="bg-[#1a1a1a] p-6 rounded-lg text-white">
                <h3 className="text-2xl font-semibold mb-4">
                  Viva Questions – Screw Gauge
                </h3>

                <ol className="list-decimal list-inside space-y-4">
                  <li>
                    <p className="font-medium">What is a screw gauge?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Screw gauge is a precision instrument used
                      to measure very small lengths such as diameter of a wire
                      or thickness of a sheet.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why is screw gauge called a precision instrument?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Because it can measure very small
                      dimensions accurately.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is the least count of screw gauge?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Least count is the smallest length that can
                      be measured by a screw gauge.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">How is least count calculated?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Least Count = Pitch / Number of divisions
                      on circular scale.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is pitch of screw gauge?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Pitch is the distance moved by the screw in
                      one complete rotation.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Name the main parts of screw gauge.
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Pitch scale, circular scale, anvil,
                      spindle, ratchet and frame.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">What is zero error?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Zero error occurs when the zero of circular
                      scale does not coincide with the reference line when jaws
                      are closed.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">What is zero correction?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Zero correction is the negative of zero
                      error.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">Why is ratchet used?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To apply uniform pressure and avoid damage
                      to the object.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">What is backlash error?</p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Error due to looseness between screw and
                      nut.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      How can backlash error be reduced?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> By taking readings while rotating the screw
                      in one direction only.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is linear scale reading?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Reading on the main scale visible just
                      before the circular scale edge.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is circular scale reading?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Reading on the circular scale coinciding
                      with reference line.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Write formula for total reading.
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Total Reading = L.S.R. + (C.S.R. × Least
                      Count)
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why is wire measured in two perpendicular directions?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To account for non-uniform thickness of the
                      wire.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why are multiple readings taken?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To reduce random errors and increase
                      accuracy.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What material is screw gauge usually made of?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Steel or alloy metal.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What is the typical least count of a screw gauge?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> 0.01 mm or 0.001 cm.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      What error is caused due to parallax?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> Error in reading due to improper eye
                      position.
                    </p>
                  </li>

                  <li>
                    <p className="font-medium">
                      Why should screw move freely?
                    </p>
                    <p className="text-gray-300">
                      <b>Answer:</b> To ensure accurate and smooth readings.
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

export default ScrewGaugeExperiment;
