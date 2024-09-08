"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    beds: {
      label: "Beds",
    },
    unit: {
      label: "Unit",
      color: "hsl(var(--chart-1))",
    },
  }
// Data for Psychiatric Hold Rooms
const chartData = [
  { unit: "PH Room 1 - Available", beds: 1, fill: "#81c784" },
  { unit: "PH Room 1 - Occupied", beds: 3, fill: "#ff8a80" },
  { unit: "PH Room 2 - Available", beds: 2, fill: "#81c784" },
  { unit: "PH Room 2 - Occupied", beds: 2, fill: "#ff8a80" }
]

export const PHGraph = () => {
  const totalBeds = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.beds, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Psychiatric Hold Rooms</CardTitle>
        <CardDescription>Total Beds (Available & Occupied) in PH Rooms</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="beds"
              nameKey="unit"
              innerRadius={60}
              strokeWidth={5}
            >
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-3xl font-bold"
                        >
                          {totalBeds.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className="fill-muted-foreground"
                        >
                          Beds
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 1.8% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing available and occupied beds in Psychiatric Hold Rooms
        </div>
      </CardFooter>
    </Card>
  )
}
