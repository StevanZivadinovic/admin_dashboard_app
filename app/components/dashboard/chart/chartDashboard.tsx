"use client"

import { chartData } from '@/src/consts/chart';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const ChartDashboard = () => {
  console.error = () => {}; // Suppress the warning
  return (
    <div className='h-[450px] mt-8'>
      <h2 className='text-2xl font-bold'>Weekly Recap</h2>
      <ResponsiveContainer width="100%" height="90%">
      <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" />
          <YAxis dataKey="click" />
          <Tooltip contentStyle={{background:"#151c2c", border:"none"}}/>
          <Legend />
          <Line type="monotone" dataKey="visit" stroke="#8884d8" strokeDasharray="5 5" />
          <Line type="monotone" dataKey="click" stroke="#82ca9d" strokeDasharray="3 4 5 2" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartDashboard