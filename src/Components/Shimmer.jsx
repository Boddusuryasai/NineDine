import React from 'react'

function Shimmer() {
  return (
     <>
        { Array(10).fill("").map((e, i)=>{
           return ( <div className="w-full max-w-xs bg-white drop-shadow-md rounded-lg" key={i}>
            <div className="animate-pulse w-full h-48 bg-slate-200"></div>
            <div className="p-3 space-y-4">
                <div className="animate-pulse w-2/3 h-6 bg-slate-200"></div>
                <div className="flex space-x-4">
                    <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                    <div className="animate-pulse w-1/3 h-3 bg-sky-200"></div>
                </div>
                <div className="space-y-2">
                    <div className="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                    <div className="animate-pulse w-2/3 h-3 bg-slate-200"></div>
                </div>
            </div>
        </div>)
        })
}
</>
  )
}

export default Shimmer