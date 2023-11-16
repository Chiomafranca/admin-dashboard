import React from 'react'
// import CardItems from './CardItems'
import AreaChartComponets from './AreaChartComponets';
import TableComponet from './TableComponet';



const LeftColum = () => {

    return (
        <div className='w-full flex flex-col justify-between p-2'>
            <div className='flex flex-col lg:flex-row gap-2 w-full'>
                {/* <CardItems />
                <CardItems />
                <CardItems /> */}
            </div>
            <div className='flex-auto w-full'>
                <AreaChartComponets />
                <TableComponet />
            </div>
        </div>
    )
}

export default LeftColum;
