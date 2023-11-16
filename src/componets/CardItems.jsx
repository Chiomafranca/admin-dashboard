import React from 'react'
import { BadgeDelta, Flex, Card, Metric, Text } from "@tremor/react";

const CardItems = () => {
    return (
        <Card className="w-xs " decoration="top" decorationColor="sky">
            <Flex justifyContent='between' alignItems='center'>
                <BadgeDelta>+17.8%</BadgeDelta>
                <Text>Sales</Text>
            </Flex>
            <Metric>$ 24,843</Metric>
        </Card>
    )
}

export default CardItems
