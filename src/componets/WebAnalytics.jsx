import React, { useState } from 'react';
import { Card, LineChart, Title } from "@tremor/react";

const chartdata2 = [
    {
        date: "Jan 23",
        "2022": 45,
        "2023": 78,
    },
    {
        date: "Feb 23",
        "2022": 52,
        "2023": 71,
    },
    {
        date: "Mar 23",
        "2022": 48,
        "2023": 80,
    },
    {
        date: "Apr 23",
        "2022": 61,
        "2023": 65,
    },
    // ... (rest of your data)
];

const WebAnalytics = () => {
    const [value, setValue] = useState(null);

    return (
        <div>
            <Card className='max-w-full mt-2'>
                <Title>Closed Pull Requests</Title>
                <LineChart
                    className="h-72 mt-4"
                    data={chartdata2}
                    index="date"
                    categories={["2022", "2023"]}
                    colors={["blue", "indigo"]}
                    yAxisWidth={30}
                    onValueChange={(v) => setValue(v)}
                    connectNulls={true}
                />
            </Card>
            {/* <pre>{JSON.stringify(value)}</pre> */}
        </div>
    )
}

export default WebAnalytics;
