const AcidicRadicalTable = () => {
  return (
    <div className="overflow-x-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Classification of Acidic Radicals (Anions)
      </h2>

      <table className="w-full border border-gray-400 text-sm text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-2 py-1">Group</th>
            <th className="border border-gray-400 px-2 py-1">Acidic Radical</th>
            <th className="border border-gray-400 px-2 py-1">Confirmatory Reagent</th>
            <th className="border border-gray-400 px-2 py-1">Observation</th>
          </tr>
        </thead>

        <tbody>
          {/* Group I */}
          <tr>
            <td className="border px-2 py-1" rowSpan={4}>Group I</td>
            <td className="border px-2 py-1">CO₃²⁻ (Carbonate)</td>
            <td className="border px-2 py-1">Dil. HCl</td>
            <td className="border px-2 py-1">
              Brisk effervescence, CO₂ turns lime water milky
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">HCO₃⁻ (Bicarbonate)</td>
            <td className="border px-2 py-1">Dil. HCl</td>
            <td className="border px-2 py-1">Slow effervescence</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">S²⁻ (Sulphide)</td>
            <td className="border px-2 py-1">Dil. HCl</td>
            <td className="border px-2 py-1">Rotten egg smell (H₂S gas)</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">SO₃²⁻ (Sulphite)</td>
            <td className="border px-2 py-1">Dil. HCl</td>
            <td className="border px-2 py-1">
              Pungent smell, decolorises acidified KMnO₄
            </td>
          </tr>

          {/* Group II */}
          <tr>
            <td className="border px-2 py-1" rowSpan={5}>Group II</td>
            <td className="border px-2 py-1">Cl⁻ (Chloride)</td>
            <td className="border px-2 py-1">AgNO₃</td>
            <td className="border px-2 py-1">White curdy ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Br⁻ (Bromide)</td>
            <td className="border px-2 py-1">AgNO₃</td>
            <td className="border px-2 py-1">Pale yellow ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">I⁻ (Iodide)</td>
            <td className="border px-2 py-1">AgNO₃</td>
            <td className="border px-2 py-1">Yellow ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">NO₃⁻ (Nitrate)</td>
            <td className="border px-2 py-1">Brown ring test</td>
            <td className="border px-2 py-1">Brown ring at junction</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">NO₂⁻ (Nitrite)</td>
            <td className="border px-2 py-1">KI + starch</td>
            <td className="border px-2 py-1">Blue colour</td>
          </tr>

          {/* Miscellaneous */}
          <tr>
            <td className="border px-2 py-1" rowSpan={5}>Miscellaneous</td>
            <td className="border px-2 py-1">SO₄²⁻ (Sulphate)</td>
            <td className="border px-2 py-1">BaCl₂</td>
            <td className="border px-2 py-1">White ppt insoluble in HCl</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">PO₄³⁻ (Phosphate)</td>
            <td className="border px-2 py-1">Ammonium molybdate</td>
            <td className="border px-2 py-1">Yellow ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">CH₃COO⁻ (Acetate)</td>
            <td className="border px-2 py-1">FeCl₃</td>
            <td className="border px-2 py-1">Red colour disappears on heating</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">C₂O₄²⁻ (Oxalate)</td>
            <td className="border px-2 py-1">KMnO₄</td>
            <td className="border px-2 py-1">Pink colour discharged</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">BO₃³⁻ (Borate)</td>
            <td className="border px-2 py-1">Flame test</td>
            <td className="border px-2 py-1">Green edged flame</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AcidicRadicalTable;
