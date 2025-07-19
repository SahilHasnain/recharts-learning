import ExampleChart from "./Components/lesson-1";
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react';
import MultipleLineChart from "./Components/MultipleLineChart";
import SimpleBarChart from "./Components/BarChart";
import { MultipleBarChart,StackedBarChart } from "./Components/MultipleBarChart";
import ResponsiveBarChart from "./Components/ResponsiveBarChart";
import { Area } from "recharts";
import SimpleAreaChart from "./Components/AreaChart";
import SimplePieChart from "./Components/PieChart";
import SimpleRadarChart from "./Components/RadarChart";
import SimpleComposedChart from "./Components/ComposedChart";
import SimpleScatterChart from "./Components/ScatterChart";
import SimpleFunnelChart from "./Components/FunnelChart";
import ChartWithCustomTooltip from "./Components/CustomTooltipChart";
import ChartWithReferences from "./Components/ReferenceChart";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Recharts Example',
  description: 'A simple example of using Recharts in a Next.js application',
}

export default function Home() {
  return (
    <main className={inter.className} style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',gap:60, padding:20}}>
      <h1 style={{marginBottom:50, marginTop:20,}}>Recharts Example</h1>
      <ExampleChart />
      <MultipleLineChart />
      <SimpleBarChart />
      <MultipleBarChart />
      <StackedBarChart />
      <ResponsiveBarChart />
      <SimpleAreaChart />
      <SimplePieChart />
      <SimpleRadarChart />
      <SimpleComposedChart />
      <SimpleScatterChart />
      <SimpleFunnelChart />
      <ChartWithCustomTooltip />
      <ChartWithReferences />
    </main>
  )
}