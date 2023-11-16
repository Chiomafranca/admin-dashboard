import React from 'react'
import SalesItems from './SalesItems'
import WebAnalytics from './WebAnalytics'
import Score from './Score'

const RightColum = () => {
    return (
        <div className='w-full p-2'>
            <SalesItems />
            <WebAnalytics />
            <Score />
        </div>
    )
}

export default RightColum
