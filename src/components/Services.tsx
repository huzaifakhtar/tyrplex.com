const services = [
    { name: 'Wheel Balancing', image: '/wheel-balancing.jpg' },
    { name: 'Wheel Alignment', image: '/wheel-alignment.jpg' },
  ];
  
  export default function Services() {
    return (
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Services offered by this dealer</h2>
        <div className="grid grid-cols-2 gap-4">
          {services.map((service) => (
            <div key={service.name} className="bg-gray-100 rounded-lg p-4 flex flex-col items-center">
              <img src={service.image} alt={service.name} className="w-24 h-24 object-cover rounded-full mb-2" />
              <span className="font-medium">{service.name}</span>
              <button className="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }