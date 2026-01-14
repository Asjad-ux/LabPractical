const ObservationTableParallelogram = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-black text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">S.No</th>
            <th className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">Force F₁ (N)</th>
            <th className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">Force F₂ (N)</th>
            <th className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">Angle θ</th>
            <th className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">Resultant R (N)</th>
          </tr>
        </thead>
        <tbody>
          {[1, 2, 3].map((i) => (
            <tr key={i}>
              <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">{i}</td>
              <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                <input className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0" />
              </td>
              <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                <input className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0" />
              </td>
              <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0">
                <input className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0" />
              </td>
              <td className="bg-transparent border border-gray-600 text-white focus:outline-none focus:ring-0"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ObservationTableParallelogram;
