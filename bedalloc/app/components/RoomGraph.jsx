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

// Data: Count of available beds in each special treatment room
const chartData = [
  { room: "Operating Room 1", beds: 1, fill: "#8884d8" },
  { room: "Operating Room 2", beds: 0, fill: "#82ca9d" },
  { room: "Operating Room 3", beds: 1, fill: "#ffc658" },
  { room: "Post-Anesthesia Care Unit (PACU) 1", beds: 6, fill: "#ff7300" },
  { room: "Post-Anesthesia Care Unit (PACU) 2", beds: 8, fill: "#a4de6c" },
  { room: "Intensive Care Unit (ICU) 1", beds: 20, fill: "#d0ed57" },
  { room: "Intensive Care Unit (ICU) 2", beds: 19, fill: "#d0ed57" },
  { room: "Isolation Room 1", beds: 1, fill: "#f6c7c7" },
  { room: "Isolation Room 2", beds: 1, fill: "#f6c7c7" },
  { room: "Burn Unit 1", beds: 8, fill: "#e0aaff" },
  { room: "Burn Unit 2", beds: 8, fill: "#e0aaff" },
  { room: "Neonatal Intensive Care Unit (NICU) 1", beds: 12, fill: "#c6e2ff" },
  { room: "Neonatal Intensive Care Unit (NICU) 2", beds: 12, fill: "#c6e2ff" },
  { room: "Dialysis Room 1", beds: 8, fill: "#ffb3e6" },
  { room: "Dialysis Room 2", beds: 8, fill: "#ffb3e6" },
  { room: "Chemotherapy Suite 1", beds: 10, fill: "#ffcc99" },
  { room: "Chemotherapy Suite 2", beds: 10, fill: "#ffcc99" },
  { room: "Rehabilitation Room 1", beds: 3, fill: "#d3d3d3" },
  { room: "Rehabilitation Room 2", beds: 3, fill: "#d3d3d3" },
  { room: "Cardiology Unit 1", beds: 10, fill: "#b3e5fc" },
  { room: "Cardiology Unit 2", beds: 10, fill: "#b3e5fc" },
  { room: "Emergency Room (ER) 1", beds: 7, fill: "#cfd8dc" },
  { room: "Emergency Room (ER) 2", beds: 8, fill: "#cfd8dc" },
  { room: "Labor and Delivery (L&D) 1", beds: 4, fill: "#e1bee7" },
  { room: "Labor and Delivery (L&D) 2", beds: 5, fill: "#e1bee7" },
  { room: "Radiology (RAD) 1", beds: 2, fill: "#b2dfdb" },
  { room: "Radiology (RAD) 2", beds: 2, fill: "#b2dfdb" },
  { room: "Psychiatric Hold (PH) 1", beds: 1, fill: "#ffeb3b" },
  { room: "Psychiatric Hold (PH) 2", beds: 2, fill: "#ffeb3b" },
  { room: "General Ward 1", beds: 10, fill: "#c5e1a5" },
  { room: "General Ward 2", beds: 10, fill: "#c5e1a5" },
  { room: "General Ward 3", beds: 10, fill: "#c5e1a5" },
  { room: "General Ward 4", beds: 10, fill: "#c5e1a5" },
  { room: "General Ward 5", beds: 10, fill: "#c5e1a5" }
]

// Configure chart settings
const chartConfig = {
  beds: {
    label: "Beds",
  },
  room: {
    label: "Room",
    color: "hsl(var(--chart-1))",
  },
}

export const RoomGraph = () => {
  const totalBeds = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.beds, 0)
  }, [])

  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Total Rooms</CardTitle>
        <CardDescription>Total Beds Across Rooms</CardDescription>
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
              nameKey="room"
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
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total beds in each special treatment room
        </div>
      </CardFooter>
    </Card>
  )
}
