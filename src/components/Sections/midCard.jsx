import React from 'react'

const MidCard = ({ title, description }) => {
    return (
        <div className="border rounded-md shadow-md p-5 w-full h-full bg-orange-100 hover:shadow-lg">
            <p className="font-bold text-2xl text-slate-600">{title}</p>
            <p className="text-sm text-slate-400">{description}</p>
        </div>
    )
}

export default MidCard
