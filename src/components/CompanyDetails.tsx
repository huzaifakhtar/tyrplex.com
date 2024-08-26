export default function CompanyDetails() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800">SHREE HEMKUNT TYRES AND SERVICES</h1>
        <div className="flex items-center mt-2">
          <span className="bg-green-500 text-white px-2 py-1 rounded text-sm mr-2">4.3</span>
          <span className="text-gray-600">2278 Reviews</span>
        </div>
        <p className="mt-2 text-gray-600">
          PLOT NUMBER-03 GROUND FLOOR OFF CAMPUS ROAD, AWADHPURI PHASE-02 INDRAPURAM, Ghaziabad, Uttar Pradesh 201014
        </p>
        <p className="mt-1 text-gray-600">Open - Monday to Sunday : 10:00AM to 8:00PM</p>
        <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
          Get Directions
        </button>
      </div>
    )
  }