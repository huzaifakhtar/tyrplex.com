const tyres = [
    { id: 1, name: 'AMAZER 4G LIFE', size: '145/80 R12', rating: 4.3, reviews: 520, price: 3136, warranty: '5 Year Warranty' },
    { id: 2, name: 'AMAZER 4G LIFE', size: '145/80 R11', rating: 4.3, reviews: 520, price: 3562, warranty: '5 Year Warranty' },
    { id: 3, name: 'AMAZER 4G LIFE', size: '155/65 R13', rating: 4.3, reviews: 520, price: 3401, warranty: '5 Year Warranty' },
    { id: 4, name: 'AMAZER 4G LIFE', size: '155/70 R13', rating: 4.3, reviews: 520, price: 3774, warranty: '5 Year Warranty' },
    { id: 5, name: 'AMAZER 4G LIFE', size: '165/70 R14', rating: 4.3, reviews: 520, price: 4618, warranty: '5 Year Warranty' },
    { id: 6, name: 'AMAZER 4G LIFE', size: '165/70 R13', rating: 4.3, reviews: 520, price: 4013, warranty: '5 Year Warranty' },
    { id: 7, name: 'AMAZER 4G LIFE', size: '155/65 R14', rating: 4.3, reviews: 520, price: 3628, warranty: '5 Year Warranty' },
    { id: 8, name: 'AMAZER 4G LIFE', size: '165/65 R13', rating: 4.3, reviews: 520, price: 3713, warranty: '5 Year Warranty' },
  ];
  
  export default function TyresSold() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6 dark:bg-gray-800">
        <h2 className="text-xl font-semibold mb-4 dark:text-white">Tyres sold by this Dealer</h2>
        <div className="flex justify-between mb-4">
          <select className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white">
            <option>Filter By</option>
          </select>
          <select className="border rounded px-2 py-1 dark:bg-gray-700 dark:text-white">
            <option>Most Popular</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tyres.map((tyre) => (
            <div key={tyre.id} className="border rounded-lg p-4 dark:bg-gray-700">
              <div className="bg-yellow-100 text-yellow-800 text-sm font-medium px-2 py-1 rounded mb-2 inline-block dark:bg-yellow-600 dark:text-yellow-200">
                {tyre.warranty}
              </div>
              <h3 className="font-semibold dark:text-white">{tyre.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{tyre.size}</p>
              <div className="flex items-center mt-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm mr-2 dark:bg-green-600">{tyre.rating}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{tyre.reviews} Reviews</span>
              </div>
              <p className="mt-2 font-bold dark:text-white">₹{tyre.price}</p>
              <p className="text-sm text-green-600 dark:text-green-400">Offer available</p>
              <button className="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition w-full dark:bg-green-600 dark:hover:bg-green-700">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="border border-gray-300 rounded px-4 py-2 hover:bg-gray-100 transition dark:border-gray-600 dark:hover:bg-gray-700">
            View more
          </button>
        </div>
      </div>
    );
  }