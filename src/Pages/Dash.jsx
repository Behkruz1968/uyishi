import React from "react";
import { Bar, Line } from "react-chartjs-2";
import { Chart, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend } from "chart.js";
Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Tooltip, Legend);

export default function Dash() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white p-6 space-y-6">

      <div className="flex justify-between items-center">
        <input
          className="bg-[#1E293B] text-white p-3 rounded w-1/3 focus:outline-none"
          placeholder="Search here..."
        />
        <div className="flex items-center gap-4">
          
          <img src="https://i.pravatar.cc/40" alt="profile" className="rounded-full w-10 h-10"/>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {[
          {label:"$5k", sub:"Total Sales", change:"+10% from yesterday"},
          {label:"500", sub:"Total Order", change:"+8% from yesterday"},
          {label:"9", sub:"Product Sold", change:"+2% from yesterday"},
          {label:"12", sub:"New Customer", change:"+3% from yesterday"},
        ].map((item, i)=>(
          <div key={i} className="bg-[#1E293B] p-6 rounded space-y-1">
            <div className="text-2xl font-bold">{item.label}</div>
            <div className="text-gray-400">{item.sub}</div>
            <div className="text-green-400 text-sm">{item.change}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-[#1E293B] p-6 rounded md:col-span-2">
          <h2 className="mb-4 font-bold">Level</h2>
          <Bar
            data={{
              labels:["Jan","Feb","Mar","Apr","May","Jun","Jul"],
              datasets:[
                {label:"Volume", data:[30,50,40,60,35,70,45], backgroundColor:"#0EA5E9"},
                {label:"Service", data:[20,40,55,35,50,45,60], backgroundColor:"#8B5CF6"},
              ]
            }}
            options={{
              plugins:{legend:{labels:{color:"white"}}},
              scales:{ x:{ticks:{color:"white"}}, y:{ticks:{color:"white"}} }
            }}
          />
        </div>

        <div className="bg-[#1E293B] p-6 rounded">
          <h2 className="mb-4 font-bold">Customer Fulfilment</h2>
          <Line
            data={{
              labels:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"],
              datasets:[
                {label:"Last Month", data:[4,5,4,6,5,7,6], borderColor:"#0EA5E9", backgroundColor:"rgba(14,165,233,0.2)"},
                {label:"This Month", data:[5,6,5,7,6,8,7], borderColor:"#D946EF", backgroundColor:"rgba(217,70,239,0.2)"},
              ]
            }}
            options={{
              plugins:{legend:{labels:{color:"white"}}},
              scales:{ x:{ticks:{color:"white"}}, y:{ticks:{color:"white"}} }
            }}
          />
        </div>
      </div>

      <div className="bg-[#1E293B] p-6 rounded">
        <h2 className="mb-6 font-bold">Top Products</h2>
        {[
          {id:"01",name:"Home Decore Range",pop:46,color:"bg-yellow-400"},
          {id:"02",name:"Disney Princess Dress",pop:17,color:"bg-teal-400"},
          {id:"03",name:"Bathroom Essentials",pop:19,color:"bg-blue-400"},
          {id:"04",name:"Apple Smartwatch",pop:29,color:"bg-pink-400"},
        ].map((item,i)=>(
          <div key={i} className="flex items-center justify-between mb-4">
            <div className="flex gap-4 w-1/2">
              <span className="text-gray-400">{item.id}</span>
              <span>{item.name}</span>
            </div>
            <div className="w-1/3 bg-gray-600 h-2 rounded">
              <div className={`${item.color} h-2 rounded`} style={{width:`${item.pop}%`}}></div>
            </div>
            <div className="w-12 text-right">{item.pop}%</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-[#1E293B] p-6 rounded flex flex-col items-center">
          <h2 className="mb-2 font-bold">Earnings</h2>
          <div className="text-3xl font-bold text-green-400 mb-2">$6078.76</div>
          <div className="text-sm text-gray-400 mb-6">Profit is 48% more than last month</div>
          <div className="relative w-40 h-40">
            <svg className="w-full h-full">
              <circle cx="50%" cy="50%" r="70" stroke="#334155" strokeWidth="15" fill="none"/>
              <circle cx="50%" cy="50%" r="70" stroke="#0EA5E9" strokeWidth="15" fill="none" strokeDasharray="440" strokeDashoffset="88" strokeLinecap="round"/>
            </svg>
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-3xl font-bold">80%</div>
          </div>
        </div>

        <div className="bg-[#1E293B] p-6 rounded">
          <h2 className="mb-4 font-bold">Visitor Insights</h2>
          <Line
            data={{
              labels:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
              datasets:[
                {label:"New Visitors", data:[100,120,200,300,500,450,400,350,300,250,200,150], borderColor:"#0EA5E9", backgroundColor:"rgba(14,165,233,0.2)"},
              ]
            }}
            options={{
              plugins:{legend:{labels:{color:"white"}}},
              scales:{ x:{ticks:{color:"white"}}, y:{ticks:{color:"white"}} }
            }}
          />
        </div>
      </div>
    </div>
  )
}
