import { useState } from "react";

const VernierTable = () => {
  const VC = 0.01; // Vernier Constant in cm
  const [correction, setCorrection] = useState(0);

  const [rows, setRows] = useState([
    { N: "", n: "" },
    { N: "", n: "" },
    { N: "", n: "" },
  ]);

  const handleChange = (index, field, value) => {
    const updated = [...rows];
    updated[index][field] = value;
    setRows(updated);
  };

  const calculateDo = (N, n) => {
    const main = parseFloat(N);
    const vernier = parseFloat(n);

    if (isNaN(main) || isNaN(vernier)) return "";
    return (main + vernier * VC).toFixed(3);
  };

  const calculateCorrected = (Do) => {
    if (Do === "") return "";
    return (parseFloat(Do) + parseFloat(correction)).toFixed(3);
  };

  return (
    <div className="text-white p-6 rounded-2xl">
      <h2 className="text-xl font-semibold mb-4">
        Vernier Callipers Observation Table
      </h2>

      <div className="mb-4 flex items-center gap-3">
        <label>Zero Correction (c) in cm:</label>
        <input
          type="number"
          step="0.001"
          value={correction}
          onChange={(e) => setCorrection(e.target.value)}
          className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border border-gray-700 text-sm">
          <thead>
            <tr className="bg-[#000000]">
              <th className="border border-gray-700 px-3 py-2">
                Serial No. of Observation
              </th>
              <th className="border border-gray-700 px-3 py-2">
                Main Scale Reading (N) (cm)
              </th>
              <th className="border border-gray-700 px-3 py-2">
                No. of Vernier Division Coinciding (n)
              </th>
              <th className="border border-gray-700 px-3 py-2">
                Value n × V.C.
              </th>
              <th className="border border-gray-700 px-3 py-2">
                Observed Reading D₀ = N + n×V.C.
              </th>
              <th className="border border-gray-700 px-3 py-2">
                Corrected Reading D = D₀ + c
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => {
              const nVC =
                row.n !== "" ? (row.n * VC).toFixed(3) : "";
              const Do = calculateDo(row.N, row.n);
              const D = calculateCorrected(Do);

              return (
                <tr key={i}>
                  <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                    Observation {i + 1}
                  </td>

                  <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                    <input
                      type="number"
                      step="0.001"
                      value={row.N}
                      onChange={(e) =>
                        handleChange(i, "N", e.target.value)
                      }
                      className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0"
                    />
                  </td>

                  <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                    <input
                      type="number"
                      step="1"
                      value={row.n}
                      onChange={(e) =>
                        handleChange(i, "n", e.target.value)
                      }
                      className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0"
                    />
                  </td>

                  <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                    {nVC}
                  </td>

                  <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                    {Do}
                  </td>

                  <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                    {D}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="mt-3 text-gray-400 text-sm">
        * Vernier Constant (V.C.) = {VC} cm
      </p>
    </div>
  );
};

export default VernierTable;
