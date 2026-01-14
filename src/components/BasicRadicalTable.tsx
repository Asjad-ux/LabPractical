const BasicRadicalTable = () => {
  return (
    <div className="overflow-x-auto mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Classification of Basic Radicals (Cations)
      </h2>

      <table className="w-full border border-gray-400 text-sm text-left">
        <thead className="bg-gray-200">
          <tr>
            <th className="border border-gray-400 px-2 py-1">Group</th>
            <th className="border border-gray-400 px-2 py-1">Cation</th>
            <th className="border border-gray-400 px-2 py-1">Group Reagent</th>
            <th className="border border-gray-400 px-2 py-1">Precipitate / Observation</th>
          </tr>
        </thead>

        <tbody>
          {/* Group 0 */}
          <tr>
            <td className="border px-2 py-1">Group 0</td>
            <td className="border px-2 py-1">NH₄⁺ (Ammonium)</td>
            <td className="border px-2 py-1">Salt + Dil. NaOH</td>
            <td className="border px-2 py-1">NH₃ gas (pungent smell)</td>
          </tr>

          {/* Group 1 */}
          <tr>
            <td className="border px-2 py-1">Group I</td>
            <td className="border px-2 py-1">Pb²⁺ (Lead)</td>
            <td className="border px-2 py-1">Dil. HCl</td>
            <td className="border px-2 py-1">White ppt (PbCl₂)</td>
          </tr>

          {/* Group 2 */}
          <tr>
            <td className="border px-2 py-1" rowSpan={3}>Group II</td>
            <td className="border px-2 py-1">Cu²⁺ (Copper)</td>
            <td className="border px-2 py-1" rowSpan={3}>Dil. HCl + H₂S gas</td>
            <td className="border px-2 py-1">Black ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">As³⁺ (Arsenic)</td>
            <td className="border px-2 py-1">Yellow ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Pb²⁺ (Lead)</td>
            <td className="border px-2 py-1">Black ppt</td>
          </tr>

          {/* Group 3 */}
          <tr>
            <td className="border px-2 py-1" rowSpan={2}>Group III</td>
            <td className="border px-2 py-1">Fe³⁺ (Iron)</td>
            <td className="border px-2 py-1" rowSpan={2}>NH₄Cl + NH₄OH</td>
            <td className="border px-2 py-1">Reddish brown ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Al³⁺ (Aluminium)</td>
            <td className="border px-2 py-1">White ppt</td>
          </tr>

          {/* Group 4 */}
          <tr>
            <td className="border px-2 py-1" rowSpan={4}>Group IV</td>
            <td className="border px-2 py-1">Zn²⁺ (Zinc)</td>
            <td className="border px-2 py-1" rowSpan={4}>NH₄Cl + NH₄OH + H₂S</td>
            <td className="border px-2 py-1">White ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Ni²⁺ (Nickel)</td>
            <td className="border px-2 py-1">Black ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Co²⁺ (Cobalt)</td>
            <td className="border px-2 py-1">Black ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Mn²⁺ (Manganese)</td>
            <td className="border px-2 py-1">Light pink ppt</td>
          </tr>

          {/* Group 5 */}
          <tr>
            <td className="border px-2 py-1" rowSpan={3}>Group V</td>
            <td className="border px-2 py-1">Ba²⁺ (Barium)</td>
            <td className="border px-2 py-1" rowSpan={3}>(NH₄)₂CO₃</td>
            <td className="border px-2 py-1">White ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Sr²⁺ (Strontium)</td>
            <td className="border px-2 py-1">White ppt</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Ca²⁺ (Calcium)</td>
            <td className="border px-2 py-1">White ppt</td>
          </tr>

          {/* Group 6 */}
          <tr>
            <td className="border px-2 py-1">Group VI</td>
            <td className="border px-2 py-1">Mg²⁺ (Magnesium)</td>
            <td className="border px-2 py-1">(NH₄)₂HPO₄</td>
            <td className="border px-2 py-1">White ppt</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BasicRadicalTable;
