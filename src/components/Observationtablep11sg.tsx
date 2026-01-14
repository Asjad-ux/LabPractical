import { useState } from "react";

interface ObservationRow {
  lsr: string;
  csr: string;
  lc: number;
  total: number | null;
}

type Field = "lsr" | "csr";

const ObservationTableScrewGauge = () => {
  const [rows, setRows] = useState<ObservationRow[]>([
    { lsr: "", csr: "", lc: 0.01, total: null },
    { lsr: "", csr: "", lc: 0.01, total: null },
    { lsr: "", csr: "", lc: 0.01, total: null },
    { lsr: "", csr: "", lc: 0.01, total: null },
    { lsr: "", csr: "", lc: 0.01, total: null },
  ]);

  const handleChange = (index: number, field: Field, value: string) => {
    const updatedRows = [...rows];

    updatedRows[index] = {
      ...updatedRows[index],
      [field]: value,
    };

    const lsr = parseFloat(updatedRows[index].lsr);
    const csr = parseFloat(updatedRows[index].csr);
    const lc = updatedRows[index].lc;

    if (!isNaN(lsr) && !isNaN(csr)) {
      updatedRows[index].total = Number((lsr + csr * lc).toFixed(3));
    } else {
      updatedRows[index].total = null;
    }

    setRows(updatedRows);
  };

  const meanDiameter = (): string => {
    const values = rows
      .map((r) => r.total)
      .filter((v): v is number => v !== null);

    if (values.length === 0) return "—";

    const mean = values.reduce((sum, v) => sum + v, 0) / values.length;
    return mean.toFixed(3);
  };

  return (
    <div className="overflow-x-auto mt-6">
      <h2 className="text-xl font-semibold mb-4">
        Observation Table (Screw Gauge)
      </h2>

      <table className="w-full border border-black text-sm">
        <thead className="bg-black text-white">
          <tr>
            <th className="border border-black p-2">S.No.</th>
            <th className="border border-black p-2">
              Linear Scale Reading (mm)
            </th>
            <th className="border border-black p-2">
              Circular Scale Reading
            </th>
            <th className="border border-black p-2">Least Count (mm)</th>
            <th className="border border-black p-2">
              Total Reading (mm)
            </th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border border-black p-2">{index + 1}</td>

              <td className="border border-black p-2">
                <input
                  type="number"
                  className="w-full bg-black text-white px-2 py-1"
                  value={row.lsr}
                  onChange={(e) =>
                    handleChange(index, "lsr", e.target.value)
                  }
                />
              </td>

              <td className="border border-black p-2">
                <input
                  type="number"
                  className="w-full bg-black text-white px-2 py-1"
                  value={row.csr}
                  onChange={(e) =>
                    handleChange(index, "csr", e.target.value)
                  }
                />
              </td>

              <td className="border border-black p-2">{row.lc}</td>

              <td className="border border-black p-2 font-semibold">
                {row.total !== null ? row.total : ""}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-lg font-semibold">
        Mean Diameter ={" "}
        <span className="text-primary">{meanDiameter()} mm</span>
      </div>
    </div>
  );
};

export default ObservationTableScrewGauge;
