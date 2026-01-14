import { useState } from "react";

const ObservationTableSimplePendulum = () => {
  const [rows, setRows] = useState([
    { length: "", time20: "", timePeriod: "" },
  ]);

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...rows];
    updated[index][field as keyof typeof updated[0]] = value;

    // Auto calculate Time Period T = t/20
    if (field === "time20") {
      const t = parseFloat(value);
      if (!isNaN(t)) {
        updated[index].timePeriod = (t / 20).toFixed(2);
      }
    }

    setRows(updated);
  };

  const addRow = () => {
    setRows([...rows, { length: "", time20: "", timePeriod: "" }]);
  };

  const meanT =
    rows.reduce((sum, r) => sum + Number(r.timePeriod || 0), 0) /
    rows.filter((r) => r.timePeriod).length || 0;

  return (
    <div className="overflow-x-auto border border-border rounded-lg">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-black text-white">
          <tr>
            <th className="border border-black p-2">S.No</th>
            <th className="border border-black p-2">Length L (m)</th>
            <th className="border border-black p-2">
              Time for 20 Oscillations (s)
            </th>
            <th className="border border-black p-2">
              Time Period T = t/20 (s)
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              <td className="border border-black p-2 text-center">
                {i + 1}
              </td>

              <td className="border border-black p-2">
                <input
                  type="number"
                  className="w-full bg-transparent outline-none"
                  value={row.length}
                  onChange={(e) =>
                    handleChange(i, "length", e.target.value)
                  }
                />
              </td>

              <td className="border border-black p-2">
                <input
                  type="number"
                  className="w-full bg-transparent outline-none"
                  value={row.time20}
                  onChange={(e) =>
                    handleChange(i, "time20", e.target.value)
                  }
                />
              </td>

              <td className="border border-black p-2 text-center">
                {row.timePeriod}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="p-4 space-y-3">
        <button
          onClick={addRow}
          className="px-4 py-2 bg-black text-white rounded"
        >
          + Add Observation
        </button>

        <p className="font-semibold">
          Mean Time Period (T̄) = {meanT.toFixed(2)} s
        </p>
      </div>
    </div>
  );
};

export default ObservationTableSimplePendulum;

