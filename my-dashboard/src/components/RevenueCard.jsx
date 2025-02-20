import { LineChart, Line, YAxis, Tooltip, CartesianGrid } from "recharts";

const data = [
    {month: 'Jan', revenue: 4000},
    {month: 'Feb', revenue: 4500},
    {month: 'Mar', revenue: 4700},
    {month: 'Apr', revenue: 4900},
    {month: 'May', revenue: 5100},
    {month: 'Jun', revenue: 5300},

];

const RevenueCard = () => {
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <p className="text-2x1 font-bold">$30,492,000.00</p>
            <LineChart width={300} height={150} data={data}>
                <YAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#ccc" />
                <Line type="monotone" dataKey="revenue" stroke="#007bff"/>
            </LineChart>
        </div>
    );

};

export default RevenueCard;