import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  Tooltip,
  YAxis,
  Area,
} from "recharts";
import "./bigChartBox.scss";

const data = [
  {
    name: "Sun",
    books: 3000,
    clothes: 2400,
    electronic: 2400,
  },
  {
    name: "Mon",
    books: 2500,
    clothes: 1999,
    electronic: 999,
  },
  {
    name: "Tue",
    books: 1500,
    clothes: 1500,
    electronic: 800,
  },
  {
    name: "Wed",
    books: 1000,
    clothes: 1000,
    electronic: 2999,
  },
  {
    name: "Thu",
    books: 1500,
    clothes: 1500,
    electronic: 1000,
  },
  {
    name: "Fri",
    books: 1500,
    clothes: 1500,
    electronic: 1500,
  },
  {
    name: "Sat",
    books: 3000,
    clothes: 1000,
    electronic: 500,
  },
];
export default function BigChartBox() {
  return (
    <div className="bigChartBox">
      <h1>Revenue Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="electronic"
              stackId="1"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="clothes"
              stackId="1"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Area
              type="monotone"
              dataKey="books"
              stackId="1"
              stroke="#ffc658"
              fill="#ffc658"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
