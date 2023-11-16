import React, { useState } from 'react';
import {
    BadgeDelta,
    Button,
    Card,
    DonutChart,
    Flex,
    TabGroup,
    Tab,
    TabList,
    Bold,
    Divider,
    List,
    ListItem,
    Metric,
    Text,
    Title,
} from "@tremor/react";
import {
    ArrowRightIcon,
    ChartPieIcon,
    ViewListIcon,
} from "@heroicons/react/outline";

const stocks = [
    {
        name: "Off Running AG",
        value: 10456,
        performance: "6.1%",
        deltaType: "increase",
    },
    {
        name: "Not Normal Inc.",
        value: 5789,
        performance: "1.2%",
        deltaType: "moderateDecrease",
    },
    {
        name: "Logibling Inc.",
        value: 4367,
        performance: "2.3%",
        deltaType: "moderateIncrease",
    },
    {
        name: "Raindrop Inc.",
        value: 3421,
        performance: "0.5%",
        deltaType: "moderateDecrease",
    },
    {
        name: "Mwatch Group",
        value: 1432,
        performance: "3.4%",
        deltaType: "decrease",
    },
];

const dataFormatter = (number) => {
    return "$ " + Intl.NumberFormat("us").format(number).toString();
};

const SalesItems = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <Card className='max-w-full mx-auto'>
            <Flex className='space-x-8 flex-col lg:flex-row'>
                <Title>Overview</Title>
                <TabGroup index={selectedIndex} onIndexChange={setSelectedIndex}>
                    <TabList variant='solid'>
                        <Tab icon={ChartPieIcon}>Chart</Tab>
                        <Tab icon={ViewListIcon}>List</Tab>
                    </TabList>
                </TabGroup>
            </Flex>
            <Text className='mt-8'>Adjust Portfolio Value</Text>
            <Metric>$35,233</Metric>
            <Divider />
            <Text className='mt-8'>
                <Bold>Shift Investment Weights</Bold>
            </Text>
            <Text>
                Trade 4 Asset Classes for 10 Holdings
            </Text>
            {selectedIndex === 0 ? (
                <DonutChart
                    data={stocks}
                    valueFormatter={dataFormatter}
                    showAnimation={false}
                    category='value'
                    index='name'
                    className='mt-6'
                />
            ) : (
                <>
                    <Flex className='mt-6' justifyContent='between'>
                        <Text className='truncate'>
                            <Bold>Investments</Bold>
                            <Text>Post-transaction</Text>
                        </Text>
                    </Flex>
                    <List className='mt-4'>
                        {
                            stocks.map((item) => (
                                <ListItem key={item.name}>
                                    <Text>
                                        {item.name}
                                    </Text>
                                    <Flex className='space-x-2' justifyContent='end'>
                                        <Text>
                                            ${Intl.NumberFormat("us").format(item.value).toString()}
                                        </Text>
                                    </Flex>
                                </ListItem>
                            ))}
                    </List>
                </>
            )}
            <Flex className='mt-4 pt-4 border-t-2'>
                <Button size='xs' variant='light' icon={ArrowRightIcon}>Explore</Button>
            </Flex>
        </Card>
    );
}

export default SalesItems;
