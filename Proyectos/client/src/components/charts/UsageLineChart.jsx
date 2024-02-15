'use client'
import { LineChart } from "@mui/x-charts";
import { Fragment } from "react"



const UsageLineChart = () => {

    return (
        <Fragment>
            <LineChart
                /* xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]} */
                series={[
                    {
                        curve: "step",
                        data: [1, 0, 1, 1, 0, 1],
                    },
                ]}
                width={500}
                height={300}
            />
        </Fragment>
    )
}

export default UsageLineChart;