const ParcelList = () => {
    const parcels = [
      { id: 1, trackingNumber: 'ABC123', status: 'Delivered', deliveryDate: '2024-02-10' },
      { id: 2, trackingNumber: 'DEF456', status: 'In Transit', deliveryDate: '2024-02-12' },
      { id: 3, trackingNumber: 'GHI789', status: 'Pending', deliveryDate: '2024-02-15' },
    ];
  
    return (
      <div className="bg-white p-4 shadow-md rounded-md">
        <h3 className="text-lg font-semibold mb-4">Parcel List</h3>
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-200">Tracking Number</th>
              <th className="p-2 border border-gray-200">Status</th>
              <th className="p-2 border border-gray-200">Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel.id} className="text-center">
                <td className="p-2 border border-gray-200">{parcel.trackingNumber}</td>
                <td className={`p-2 border border-gray-200 ${
                  parcel.status === 'Delivered' ? 'text-green-500' :
                  parcel.status === 'In Transit' ? 'text-yellow-500' :
                  'text-red-500'
                }`}>
                  {parcel.status}
                </td>
                <td className="p-2 border border-gray-200">{parcel.deliveryDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default ParcelList;
  