import { SparkLineChart } from "@mui/x-charts";
import { Button } from "./ui/button";

function Home() {
  const statsData = [
    {
      title: "Employs",
      value: "144k",
      data: [1, 4, 2, 5, 7, 2, 4, 6, 8, 5, 3, 6],
      color: "text-blue-600",
    },
    {
      title: "Conversions",
      value: "325k",
      data: [2, 3, 5, 4, 6, 5, 8, 7, 6, 8, 9, 7],
      color: "text-green-600",
    },
    {
      title: "Event count",
      value: "200k",
      data: [1, 2, 3, 2, 4, 3, 5, 6, 4, 5, 7, 6],
      color: "text-purple-600",
    },
  ];

  // Issues opened daily data
  const issuesData = {
    title: "Issues opened daily",
    days: ["M", "T", "W", "T", "F", "S", "S"],
    values: [12, 90, 14, 16, 8, 5, 9],
  };

  return (
    <div className="min-h-screen max-w-6xl p-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-6xl">
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="h-38 bg-gray-100 dark:bg-[#131619] rounded-2xl border border-gray-100 dark:border-gray-800 p-2"
          >
            <div className="flex flex-col">
              {/* Title */}
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2">
                {stat.title}
              </h4>

              {/* Value */}
              <h1
                className={`text-4xl font-bold text-gray-800 dark:text-white mb-1 pl-2`}
              >
                {stat.value}
              </h1>

              {/* Sparkline Chart */}
              <SparkLineChart
                data={stat.data}
                height={80}
                colors={["#1d1e20"]}
                curve="natural"
                area
                showHighlight
                showTooltip
                sx={{
                  "& .MuiAreaElement-root": {
                    fill: "url('#gradient')",
                  },
                  "& .MuiLineElement-root": {
                    stroke: "#3B82F6",
                    strokeWidth: 2,
                  },
                }}
              >
                <defs>
                  <linearGradient
                    id="gradient"
                    x1="0%"
                    y1="0%"
                    x2="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#3B82F6" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="#3B82F6" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </SparkLineChart>
            </div>
          </div>
        ))}

        {/* Issues opened daily card */}
        <div className="h-38 bg-gray-100 dark:bg-[#131619] rounded-2xl border border-gray-100 dark:border-gray-800 p-2 overflow-hidden">
          <div className="flex flex-col h-full">
            {/* Title */}
            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 pl-2 mb-2">
              {issuesData.title}
            </h4>

            {/* Bar Chart Container with object-fit behavior */}
            <div className="flex-1 flex flex-col justify-end min-h-0">
              <div className="flex items-end w-full h-20  gap-1 scale-90 origin-bottom ">
                {issuesData.values.map((value, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center flex-1"
                  >
                    <div
                      className="w-5 bg-[#3B82F6] rounded-t-sm"
                      style={{
                        height: `${Math.min(value * 2.5, 70)}px`,
                        maxHeight: "70px",
                      }}
                    ></div>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {issuesData.days[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4">
        <Button>Add Employes</Button>
      </div>
    </div>
  );
}

export default Home;
