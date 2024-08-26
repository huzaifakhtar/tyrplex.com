const deals = ['MRF', 'CEAT', 'Goodyear', 'Apollo', 'Bridgestone', 'JK Tyre', 'Michelin'];

export default function Deals() {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Deals in</h2>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        {deals.map((deal) => (
          <div key={deal} className="flex-shrink-0 bg-gray-100 rounded-lg p-4 w-32 h-32 flex items-center justify-center">
            <span className="text-center font-medium">{deal}</span>
          </div>
        ))}
      </div>
    </div>
  );
}