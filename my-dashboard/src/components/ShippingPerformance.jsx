import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const data = [
    {month:'Jan', best:60, average:30, poor:10},
    {month:'Feb', best:60, average:30, poor:10},
    {month:'Mar', best:60, average:30, poor:10},
    {month:'Apr', best:60, average:30, poor:10},
    {month:'May', best:60, average:30, poor:10},
    {month:'Jun', best:60, average:30, poor:10},
    {month:'Jul', best:60, average:30, poor:10},
    {month:'Aug', best:60, average:30, poor:10},
    {month:'Sep', best:60, average:30, poor:10},
    {month:'Oct', best:60, average:30, poor:10},

];

const ShippingPerformance = () => {
    
    return (
        <div className="bg-white p-4 shadow-md rounded-md">
            <h3 className="text-lg font-semibold">Shipping Performance</h3>
            <p>Performance of your shipping matters each month.</p>
            <BarChart width={300} height={200} data={data}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="Best" stackId="a" fill="#4CAF50" />
                <Bar dataKey="Average" stackId="a" fill="#FFC107" />
                <Bar dataKey="Poor" stackId="a" fill="#F44336" />
            </BarChart>
        </div>

    );

};
export default ShippingPerformance;