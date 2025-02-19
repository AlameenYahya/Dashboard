import Sidebar from "./Sidebar";
import Header from "./Header";
import RevenueCard from "./RevenueCard";
import AvailabilityTruck from "./AvailableTruck";
import ShippingPerformance from "./ShippingPerformance";


const Dashboard = () => {
    return (
        <div className="flex">
            <Sidebar />
            <div className="flex-1 p-4">
                <Header />
                <div className="grid grid-cols-3 gap-4 mt-4">
                    <RevenueCard />
                    <AvailabilityTruck />
                    <ShippingPerformance />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;