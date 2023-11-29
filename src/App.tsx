import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page H",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page I",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page J",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page K",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page L",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page M",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page N",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page O",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page P",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page Q",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page R",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page S",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page T",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page U",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Page V",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page X",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page Y",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page Z",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page AB",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page BC",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page CD",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const renderCustomAxisTick = ({
  x,
  y,
  payload,
}: {
  x: number;
  y: number;
  payload: { value: string };
}) => {
  const MAX_LABEL_LENGTH = 10; // Adjust this value based on your preferences

  let displayedLabel = payload.value;
  if (payload.value.length > MAX_LABEL_LENGTH) {
    displayedLabel = payload.value.substring(0, MAX_LABEL_LENGTH - 3) + "...";
  }

  return (
    <g transform={`translate(${x},${y})`}>
      <text
        x={0}
        y={0}
        dy={16}
        textAnchor="end"
        fill="#666"
        transform="rotate(-45)"
      >
        {displayedLabel}
      </text>
    </g>
  );
};

export default function App() {
  return (
    <div className="w-full h-full">
      <LineChart width={1000} height={400} data={data} margin={{ bottom: 30 }}>
        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <XAxis dataKey="name" tick={renderCustomAxisTick} xlinkShow="tr" />
        <YAxis />
        <Legend
          width={100}
          wrapperStyle={{
            top: 40,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
          }}
        />
        <Tooltip wrapperStyle={{ width: 200, backgroundColor: "#000" }} />
      </LineChart>
    </div>
  );
}
