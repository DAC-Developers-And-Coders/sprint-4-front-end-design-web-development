"use client"

import {ChevronLeft, ChevronRight} from "lucide-react"
import { useState, useEffect } from "react";

const Carousel = ({children: stages, autoStage=false, autoStageInterval=3000}) => 
{
    const [current, setCurrent] = useState(0)

    const prev = () => setCurrent((
        current => current === 0 ? stages.length - 1 : current - 1
    ))

    const next = () => setCurrent((
        current => current === stages.length - 1 ? 0 : current + 1
    ))

    useEffect(() => {
        if (!autoStage) return
        const stageInterval = setInterval(next, autoStageInterval)
        return () => clearInterval(stageInterval)
    }, [])

    return(
        <>
        <div className="overflow-hidden relative">
            <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${current * 100}%)`}}>{stages}</div> 
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className="rounded-full p-1 shadow bg-snow transition-all duration-700 hover:bg-gray-200">
                    <ChevronLeft size={30}/>
                </button>
                <button onClick={next} className="rounded-full p-1 shadow bg-snow transition-all duration-700 hover:bg-gray-200">
                    <ChevronRight size={30}/>
                </button>
            </div>
            <div>
                <div className="flex items-center justify-center gap-2 h-12">
                    {stages.map((_, i) => (
                        <div key={i} className={`transition-all w-3 h-3 bg-black rounded-full ${current === i ? "p-4" : "bg-opacity-50"}`}/>
                    ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default Carousel;