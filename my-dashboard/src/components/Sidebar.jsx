const Sidebar = () => {
    return (
      <aside className="w-64 bg-white h-screen shadow-md p-4">
        <h1 className="text-xl font-bold">LoadWise</h1>
        <nav className="mt-4">
          <ul>
            <li className="p-2 text-gray-700 hover:bg-gray-200">Dashboard</li>
            <li className="p-2 text-gray-700 hover:bg-gray-200">Shipment & Tracking</li>
            <li className="p-2 text-gray-700 hover:bg-gray-200">Finance</li>
          </ul>
        </nav>
      </aside>
    );
  };
  export default Sidebar;
  