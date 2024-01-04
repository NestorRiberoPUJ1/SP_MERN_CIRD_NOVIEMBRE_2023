'use client'
import { useParams } from "next/navigation";



const ColoredPage = () => {
    const { param, color1, color2 } = useParams();

    return (
        <div style={{ backgroundColor: color2 }}>
            <h1 style={{ color: color1 }}>{param}</h1>
        </div>
    )
}

export default ColoredPage;