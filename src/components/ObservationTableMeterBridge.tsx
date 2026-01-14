import { useState } from "react";

type Row = {
  l1: number | "";
  l2: number | "";
  R: number | "";
};

export default function ObservationTableMeterBridge() {
  const [rows, setRows] = useState<Row[]>([
    { l1: "", l2: "", R: "" },
    { l1: "", l2: "", R: "" },
    { l1: "", l2: "", R: "" },
    { l1: "", l2: "", R: "" },
    { l1: "", l2: "", R: "" },
  ]);

  const handleChange = (index: number, field: keyof Row, value: string) => {
    const newRows = [...rows];
    newRows[index][field] = value === "" ? "" : Number(value);
    setRows(newRows);
  };

  const calculateX = (row: Row) => {
    if (row.l1 === "" || row.l2 === "" || row.R === "") return "";
    if (row.l2 === 0) return "—";
    return (row.R * (row.l1 / row.l2)).toFixed(3);
  };

  const meanX = () => {
    const valid = rows
      .map(calculateX)
      .filter((v) => v !== "" && v !== "—")
      .map(Number);
    if (!valid.length) return "";
    return (valid.reduce((a, b) => a + b, 0) / valid.length).toFixed(3);
  };

  return (
    <div className="bg-muted/20 p-4 rounded-xl border border-border">
      <h3 className="font-semibold mb-3">
        Observation Table — Meter Bridge
      </h3>

      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-border rounded-lg">
          <thead className="bg-muted/40">
            <tr>
              <th className="p-2 border border-border">S.No</th>
              <th className="p-2 border border-border">
                l₁ (cm) — Left Wire Length
              </th>
              <th className="p-2 border border-border">
                l₂ (cm) — Right Wire Length
              </th>
              <th className="p-2 border border-border">
                Known Resistance R (Ω)
              </th>
              <th className="p-2 border border-border">
                X = R × (l₁ / l₂) (Ω)
              </th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className="text-center">
                <td className="p-2 border border-border">{i + 1}</td>

                <td className="p-2 border border-border">
                  <input
                    type="number"
                    value={row.l1}
                    onChange={(e) =>
                      handleChange(i, "l1", e.target.value)
                    }
                    className="w-full bg-background border border-border rounded px-2 py-1"
                    placeholder="cm"
                  />
                </td>

                <td className="p-2 border border-border">
                  <input
                    type="number"
                    value={row.l2}
                    onChange={(e) =>
                      handleChange(i, "l2", e.target.value)
                    }
                    className="w-full bg-background border border-border rounded px-2 py-1"
                    placeholder="cm"
                  />
                </td>

                <td className="p-2 border border-border">
                  <input
                    type="number"
                    value={row.R}
                    onChange={(e) =>
                      handleChange(i, "R", e.target.value)
                    }
                    className="w-full bg-background border border-border rounded px-2 py-1"
                    placeholder="Ω"
                  />
                </td>

                <td className="p-2 border border-border font-medium">
                  {calculateX(row)}
                </td>
              </tr>
            ))}

            <tr className="bg-muted/30 font-semibold">
              <td
                className="p-2 border border-border text-right"
                colSpan={4}
              >
                Mean Value of X (Ω)
              </td>
              <td className="p-2 border border-border text-center">
                {meanX()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-xs text-muted-foreground mt-3">
        Formula: X = R × (l₁ / l₂)
      </p>
    </div>
  );
}
